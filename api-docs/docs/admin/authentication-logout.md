---
sidebar_label: Admin Logout
---

# Admin Logout

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

## Admin Logout

### POST `/logout`

**Category:** Session Management  
**Purpose:** Logout admin and invalidate access token.

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

## Error Responses

### Invalid Token (401)
```json
{
  "success": false,
  "message": "Invalid or expired token",
  "data": null
}
```

### Already Logged Out (400)
```json
{
  "success": false,
  "message": "Already logged out",
  "data": null
}
```