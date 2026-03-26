---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:83/api/admin/impersonate
```

### 1. Read Impersonation Info
**GET** `/read`

Get impersonation information and available users to impersonate.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `user_id` (optional): Specific user ID to get info for

**Response:**
```json
{
  "success": true,
  "message": "Impersonation data retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "is_active": true
      }
    ]
  }
}
```

---

### 2. Stop Impersonation
**POST** `/stop`

Stop current impersonation session.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation stopped successfully",
  "data": null
}
```
