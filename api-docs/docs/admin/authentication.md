---
sidebar_label: Authentication
---

# Admin Authentication

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

## Overview

This section covers all authentication-related endpoints for admin users. The authentication system includes:

- **Account Management** - Admin signup and verification
- **Session Management** - Login and logout functionality  
- **Password Recovery** - Password reset and recovery

## Sub-sections

- **[Account Management](./authentication-account)** - Admin signup and verification endpoints
- **[Session Management](./authentication-sessions)** - Login and logout endpoints
- **[Password Recovery](./authentication-password)** - Password reset and recovery endpoints

## Quick Reference

All authentication endpoints use the base URL: `http://178.104.58.236:81/api/admin/auth`

### Available Endpoints
- `POST /signup` - Create admin account
- `POST /verify-signup` - Verify admin account
- `POST /login` - Admin login
- `POST /logout` - Admin logout
- `POST /forgot-password` - Request password reset
- `POST /reset-password` - Reset password