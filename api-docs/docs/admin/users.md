---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:83/api/admin/users
```

### 1. Read Users
**GET** `/read`

Retrieve users. Can filter by specific user.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `user_id` (optional): Specific user ID to retrieve

**Response:**
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "is_active": true,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```
