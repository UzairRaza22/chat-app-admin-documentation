---
sidebar_label: Verify Signup
---

# Verify Signup

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

## Verify Signup

### POST `/verify-signup`

**Category:** Account Management  
**Purpose:** Verify admin account using the token sent to email.

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account activated successfully! You can now login.",
  "data": {
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": true,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

## Error Responses

### Invalid Token (400)
```json
{
  "success": false,
  "message": "Invalid or expired verification token",
  "data": null
}
```

### Already Verified (409)
```json
{
  "success": false,
  "message": "Account is already verified",
  "data": null
}
```