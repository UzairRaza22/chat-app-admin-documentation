---
sidebar_label: Password Recovery
---

# Authentication - Password Recovery

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

## Password Recovery

### 5. Forgot Password
**POST** `/forgot-password`

**Category:** Password Recovery  
**Purpose:** Request password reset code.

**Request Body:**
```json
{
  "email": "admin@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset code sent to your email.",
  "data": null
}
```

---

### 6. Reset Password
**POST** `/reset-password`

**Category:** Password Recovery  
**Purpose:** Reset password using the token sent to email.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "password": "new_password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset successfully!",
  "data": null
}
```