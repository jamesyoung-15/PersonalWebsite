terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = ">= 4.29"
    }
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.4"
    }
  }
  
  backend "s3" {
    bucket = "terraform-state-backend-jyylab" # Change to bucket name
    key    = "prod/portfolio-website-v1"
    region = "us-east-1"    
    encrypt = true
  }

}

provider "aws" {
  region = "us-east-1"
  profile = var.aws_profile
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
