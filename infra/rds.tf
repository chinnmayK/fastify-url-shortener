# DB Subnet Group (PRIVATE subnets only)
resource "aws_db_subnet_group" "main" {
  name       = "fastify-url-shortener-db-subnet-group"
  subnet_ids = aws_subnet.private[*].id

  tags = {
    Name = "fastify-url-shortener-db-subnet-group"
  }
}

# RDS PostgreSQL
resource "aws_db_instance" "postgres" {
  identifier = "fastify-url-shortener-db"

  engine         = "postgres"
  engine_version = "16.11"

  instance_class = "db.t3.micro"
  allocated_storage = 20

  db_name  = "url_shortener"
  username = "postgres"
  password = "postgres123" # TEMP — will secure later

  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.db.id]

  publicly_accessible = false
  skip_final_snapshot = true
  backup_retention_period = 0
}