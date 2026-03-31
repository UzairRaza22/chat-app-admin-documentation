---
sidebar_label: Admin Signup
---

# Admin Signup

## Base URL
```
http://178.104.58.236:81/api/admin/auth
```

## Authentication
Most endpoints require an admin access token. Include the token in the Authorization header:
```
Authorization: Bearer {access_token}
```

## Response Format
All responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": {
    // Response data
  }
}
```

---

## Admin Signup

### POST `/signup`

**Category:** Account Management  
**Purpose:** Create a new admin account. A verification email will be sent.

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe", 
  "email": "admin@example.com",
  "password": "password123",
  "workspace": "My Workspace"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Signup successful!. Please check your email for verification link.",
  "data": {
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": false,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

## Error Responses

### Validation Errors (422)
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

### Email Already Exists (409)
```json
{
  "success": false,
  "message": "Email already exists",
  "data": null
}
```