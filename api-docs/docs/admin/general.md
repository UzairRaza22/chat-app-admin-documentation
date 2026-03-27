---
sidebar_label: Technical Appendices
---

# General Information

## Errors, Rate Limiting & Notes

### Error Responses

#### Validation Errors (422)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."],
    "password": ["The password must be at least 8 characters."]
  }
}
```

#### Authentication Errors (401)
```json
{
  "success": false,
  "message": "Invalid or expired token",
  "data": null
}
```

#### Not Found Errors (404)
```json
{
  "success": false,
  "message": "Resource not found",
  "data": null
}
```

#### Server Errors (500)
```json
{
  "success": false,
  "message": "Internal server error",
  "data": null
}
```

---

### Rate Limiting
- Authentication endpoints: 5 requests per minute
- Management endpoints: 100 requests per minute

---

### Notes
- All timestamps are in UTC format (ISO 8601)
- Passwords must be at least 8 characters long
- Admin accounts must be verified before login
- Access tokens expire after 24 hours
- All sensitive operations require valid authentication
