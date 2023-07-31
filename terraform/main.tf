resource "aws_amplify_app" "this" {
  name       = "simple-portofolio-site"
  repository = "https://github.com/ku1987/simple-portofolio-site"

  auto_branch_creation_patterns = []
  enable_auto_branch_creation   = false
  enable_basic_auth             = false
  enable_branch_auto_build      = false
  enable_branch_auto_deletion   = false
  iam_service_role_arn          = "arn:aws:iam::404903421151:role/service-role/AmplifySSRLoggingRole-dsdurzmxxnl64"
  platform                      = "WEB_COMPUTE"

  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # The default rewrites and redirects added by the Amplify Console.
  custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }

  environment_variables = {
  }
}

resource "aws_sns_topic" "too_many_requests" {
  name = "Amplify-Hosting-Metric-Notification-dsdurzmxxnl64-Requests-1f28e5a7"
}

resource "aws_sns_topic_subscription" "email_subscription" {
  topic_arn = aws_sns_topic.too_many_requests.arn
  protocol  = "email"
  lifecycle {
    ignore_changes = [endpoint]
  }
  endpoint = ""
}