variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name prefix"
  type        = string
  default     = "fastify-url-shortener"
}

variable "public_subnet_ids" {
  description = "Public subnet IDs"
  type        = list(string)
}