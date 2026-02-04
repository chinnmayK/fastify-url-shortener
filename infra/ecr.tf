resource "aws_ecr_repository" "app" {
  name = "fastify-url-shortener"

  image_scanning_configuration {
    scan_on_push = true
  }

  image_tag_mutability = "MUTABLE"

  tags = {
    Name = "fastify-url-shortener"
  }
}