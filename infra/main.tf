terraform {
  backend "s3" {
    bucket         = "fastify-url-shortener-tf-state"
    key            = "dev/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "fastify-url-shortener-tf-locks"
    encrypt        = true
  }
}