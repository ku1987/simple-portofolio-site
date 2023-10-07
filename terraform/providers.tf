terraform {
  backend "s3" {
    bucket  = "default-tfstate"
    key     = "main/terraform.tfstate"
    region  = "ap-northeast-1"
    profile = "main"
  }
  required_version = "1.5.4"
}

provider "aws" {
  profile = "main"
  region  = "ap-northeast-1"
}
