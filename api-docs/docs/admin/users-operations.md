---
sidebar_label: User Operations
---

# User Operations

## Base URL
```
http://178.104.58.236:81/api/admin/users
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

## User Operations

### 4. Delete User
**DELETE** `/delete/{user_id}`

**Category:** User Operations  
**Purpose:** Delete a user account.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

### 5. Bulk User Operations
**POST** `/bulk-action`

**Category:** User Operations  
**Purpose:** Perform bulk operations on multiple users.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "action": "deactivate",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "reason": "Inactive users cleanup"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Bulk operation completed successfully",
  "data": {
    "processed": 2,
    "failed": 0,
    "results": [
      {
        "user_id": "64a1b2c3d4e5f6789012348",
        "status": "success"
      }
    ]
  }
}
```