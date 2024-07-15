resource "aws_amplify_app" "this" {
  name       = "simple-portofolio-site"
  repository = "https://github.com/ku1987/simple-portofolio-site"

  auto_branch_creation_patterns = []
  enable_auto_branch_creation   = false
  enable_basic_auth             = false
  enable_branch_auto_build      = false
  enable_branch_auto_deletion   = false
  iam_service_role_arn          = aws_iam_role.amplify_role.arn
  platform                      = "WEB_COMPUTE"
  lifecycle {
    ignore_changes = [access_token]
  }
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - export NOTION_DATABASE_ID=$(aws ssm get-parameter --name /amplify/d3fuiyibncwrym/main/NOTION_DATABASE_ID --query Parameter.Value --output text --with-decryption)
            - export NOTION_TOKEN=$(aws ssm get-parameter --name /amplify/d3fuiyibncwrym/main/NOTION_TOKEN --query Parameter.Value --output text --with-decryption)
            - echo $NOTION_DATABASE_ID >> .env.production
            - echo NOTION_TOKEN >> .env.production
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
  EOT

  custom_rule {
    source = "https://keiusami.com"
    status = "302"
    target = "https://www.keiusami.com"
  }

  environment_variables = {
    _LIVE_UPDATES = "[{\"name\":\"Node.js version\",\"pkg\":\"node\",\"type\":\"nvm\",\"version\":\"18\"}]"
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

resource "aws_ssm_parameter" "notion_database_id" {
  name  = "/amplify/${aws_amplify_app.this.id}/main/NOTION_DATABASE_ID"
  type  = "SecureString"
  value = "value"
  lifecycle {
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "notion_token" {
  name  = "/amplify/${aws_amplify_app.this.id}/main/NOTION_TOKEN"
  type  = "SecureString"
  value = "value"
  lifecycle {
    ignore_changes = [value]
  }
}
