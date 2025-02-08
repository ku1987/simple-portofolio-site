resource "aws_cloudfront_distribution" "spa_distribution" {
  origin {
    domain_name              = aws_s3_bucket.spa_static.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.spa_static_oac.id
    origin_id                = aws_s3_bucket.spa_static.bucket_regional_domain_name
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_200"

  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.spa_log.bucket_regional_domain_name
  }

  aliases = [
    var.site_domain,
    var.alternate_domain,
  ]

  default_cache_behavior {
    cache_policy_id        = var.caching_optimized_policy_id
    cached_methods         = ["GET", "HEAD"]
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_s3_bucket.spa_static.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_to_index.arn
    }
  }
  ordered_cache_behavior {
    path_pattern           = "/_next/*"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    cache_policy_id        = var.caching_optimized_policy_id
    target_origin_id       = aws_s3_bucket.spa_static.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }
  ordered_cache_behavior {
    path_pattern           = "/icons/*"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    cache_policy_id        = var.caching_optimized_policy_id
    target_origin_id       = aws_s3_bucket.spa_static.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  viewer_certificate {
    acm_certificate_arn            = data.aws_acm_certificate.cert.arn
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 300
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 300
  }

  web_acl_id = aws_wafv2_web_acl.cloudfront_webacl.arn
}

data "aws_acm_certificate" "cert" {
  provider = aws.us
  domain   = var.site_domain
  statuses = ["ISSUED"]
}

resource "aws_cloudfront_origin_access_control" "spa_static_oac" {
  name                              = aws_s3_bucket.spa_static.bucket_regional_domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "rewrite_to_index" {
  name    = "rewrite-to-index"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = file("${path.module}/source/rewrite-function.js")
}

resource "aws_wafv2_web_acl" "cloudfront_webacl" {
  provider = aws.us
  name     = "cloudfront-webacl-portfolio"
  scope    = "CLOUDFRONT"

  default_action {
    allow {}
  }

  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 0

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "cloudfrontVisibilityConfig"
    sampled_requests_enabled   = true
  }

}
