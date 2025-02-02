resource "aws_s3_bucket" "spa_static" {
  bucket = "portfolio-spa-static"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "spa_static_sse" {
  bucket = aws_s3_bucket.spa_static.bucket

  rule {
    bucket_key_enabled = false
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_policy" "spa_static_policy" {
  bucket = aws_s3_bucket.spa_static.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront.json
}

data "aws_iam_policy_document" "allow_access_from_cloudfront" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]
    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = ["${aws_cloudfront_distribution.spa_distribution.arn}"]
    }

    resources = [
      aws_s3_bucket.spa_static.arn,
      "${aws_s3_bucket.spa_static.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_public_access_block" "spa_static_block" {
  bucket = aws_s3_bucket.spa_static.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket" "spa_log" {
  bucket = "portfolio-spa-logs"
}

resource "aws_s3_bucket_ownership_controls" "spa_log_ownership" {
  bucket = aws_s3_bucket.spa_log.bucket
  rule {
    object_ownership = "ObjectWriter"
  }
}

data "aws_canonical_user_id" "current" {}

resource "aws_s3_bucket_acl" "spa_log_acl" {
  bucket = aws_s3_bucket.spa_log.id

  access_control_policy {
    grant {
      grantee {
        id   = data.aws_canonical_user_id.current.id
        type = "CanonicalUser"
      }
      permission = "FULL_CONTROL"
    }
    grant {
      grantee {
        # awslogsdelivery 
        id   = "c4c1ede66af53448b93c283ce9448c4ba468c9432aa01d700d3878632f77d2d0"
        type = "CanonicalUser"
      }
      permission = "FULL_CONTROL"
    }
    owner {
      id = data.aws_canonical_user_id.current.id
    }
  }
}
