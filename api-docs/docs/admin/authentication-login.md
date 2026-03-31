---
sidebar_label: Admin Login
---

# Admin Login

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

## Admin Login

### POST `/login`

**Category:** Session Management  
**Purpose:** Authenticate admin and get access token.

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful!",
  "data": {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": true
    }
  }
}
```

## Error Responses

### Invalid Credentials (401)
```json
{
  "success": false,
  "message": "Invalid email or password",
  "data": null
}
```

### Account Not Verified (403)
```json
{
  "success": false,
  "message": "Account not verified. Please check your email.",
  "data": null
}
```

### Account Inactive (403)
```json
{
  "success": false,
  "message": "Account is inactive. Contact administrator.",
  "data": null
}
```