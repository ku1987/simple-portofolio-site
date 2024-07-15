terraform {
  backend "s3" {
    bucket  = "default-tfstate"
    key     = "main/terraform.tfstate"
    region  = "ap-northeast-1"
    profile = "default"
  }
  required_version = "1.8.3"
}

provider "aws" {
  profile = "default"
  region  = "ap-northeast-1"
}
