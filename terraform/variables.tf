variable "site_domain" {
    description = "Domain name for the site."
    type        = string
    default     = "jyylab.com"
}

variable "subdomain_website" {
    description = "Subdomain for the website."
    type        = string
    default     = "portfolio"
}

variable "cloudflare_api_token" {
  description = "API token for Cloudflare."
    type        = string
}

variable "aws_profile" {
    description = "AWS profile to use."
    type        = string
    default     = "default"
}