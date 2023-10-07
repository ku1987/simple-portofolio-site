resource "aws_iam_policy" "amplify_ssm_policy" {
  name        = "amplify_ssm_policy"
  description = "IAM policy for Amplify to access SSM Parameter Store"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "ssm:GetParameters",
          "kms:Decrypt",
        ],
        Effect   = "Allow",
        Resource = "*",
      },
    ],
  })
}

resource "aws_iam_role" "amplify_role" {
  name = "amplify_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "amplify.amazonaws.com",
        },
      },
    ],
  })
}

resource "aws_iam_policy_attachment" "amplify_ssm_policy_attachment" {
  name       = "amplify_ssm_policy_attachment"
  policy_arn = aws_iam_policy.amplify_ssm_policy.arn
  roles      = [aws_iam_role.amplify_role.name]
}
