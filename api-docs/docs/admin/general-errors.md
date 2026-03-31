---
sidebar_label: Error Responses
---

# Error Responses

## Standard Error Formats

All API endpoints return consistent error responses with appropriate HTTP status codes.

---

## Validation Errors (422)

**Status Code:** 422 Unprocessable Entity

**Response Format:**
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

**Common Validation Errors:**
- Missing required fields
- Invalid email format
- Password length requirements
- Invalid data types
- Field length limits exceeded

---

## Authentication Errors (401)

**Status Code:** 401 Unauthorized

**Response Format:**
```json
{
  "success": false,
  "message": "Invalid or expired token",
  "data": null
}
```

**Common Authentication Errors:**
- Missing authorization header
- Invalid access token
- Expired access token
- Insufficient permissions

---

## Not Found Errors (404)

**Status Code:** 404 Not Found

**Response Format:**
```json
{
  "success": false,
  "message": "Resource not found",
  "data": null
}
```

**Common Not Found Errors:**
- User not found
- Workspace not found
- Channel not found
- Message not found

---

## Server Errors (500)

**Status Code:** 500 Internal Server Error

**Response Format:**
```json
{
  "success": false,
  "message": "Internal server error",
  "data": null
}
```

**When Server Errors Occur:**
- Database connection issues
- Unexpected system errors
- Third-party service failures
- Configuration problems