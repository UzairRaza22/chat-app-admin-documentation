---
sidebar_label: Authentication
---

# Admin Authentication

## Base URL
```
http://178.104.58.236:83/api/admin/auth
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

### 1. Admin Signup
**POST** `/signup`

Create a new admin account. A verification email will be sent.

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

---

### 2. Verify Signup
**POST** `/verify-signup`

Verify admin account using the token sent to email.

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

---

### 3. Admin Login
**POST** `/login`

Authenticate admin and get access token.

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

---

### 4. Admin Logout
**POST** `/logout`

Logout admin and invalidate access token.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful!",
  "data": null
}
```

---

### 5. Forgot Password
**POST** `/forgot-password`

Request password reset code.

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

Reset password using the token sent to email.

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
