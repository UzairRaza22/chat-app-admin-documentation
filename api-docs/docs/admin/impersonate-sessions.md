---
sidebar_label: Session Management
---

# Impersonation Session Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

## 1. Start Impersonation

**POST** `/start`

**Category:** Session Management  
**Purpose:** Start impersonating a specific user.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "user_id": "64a1b2c3d4e5f6789012348"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation started successfully",
  "data": {
    "impersonation_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "user@example.com"
    },
    "session_expires_at": "2023-07-01T16:00:00.000000Z"
  }
}
```

---

## 2. Get Current Impersonation Info

**GET** `/current`

**Category:** Session Management  
**Purpose:** Get information about the current impersonation session.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Current impersonation info retrieved successfully",
  "data": {
    "is_impersonating": true,
    "impersonated_user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "user@example.com"
    },
    "started_at": "2023-07-01T14:00:00.000000Z",
    "expires_at": "2023-07-01T16:00:00.000000Z",
    "admin_user": {
      "id": "64a1b2c3d4e5f6789012345",
      "email": "admin@example.com"
    }
  }
}
```

---

## 3. Stop Impersonation

**POST** `/stop`

**Category:** Session Management  
**Purpose:** Stop current impersonation session.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation stopped successfully",
  "data": {
    "session_duration": "2 hours 15 minutes",
    "actions_performed": 23,
    "ended_at": "2023-07-01T16:15:00.000000Z"
  }
}
```

## Session Security

- **Automatic Expiration**: Sessions expire after a set time limit
- **Activity Tracking**: All actions during impersonation are logged
- **Token Security**: Impersonation tokens are separate from admin tokens
- **Session Limits**: Only one active impersonation session per admin