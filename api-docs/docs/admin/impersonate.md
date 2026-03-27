---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

## Endpoints

### 1. List Users for Impersonation
**GET** `/list`

**Category:** User Selection  
**Purpose:** Get list of users available for impersonation with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

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
        "workspace_name": "ACME Corp",
        "is_active": true,
        "can_impersonate": true,
        "last_login": "2023-07-01T10:30:00.000000Z"
      }
    ]
  }
}
```

---

### 2. Start Impersonation
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

### 3. Get Current Impersonation Info
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

### 4. Stop Impersonation
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

---

### 5. Impersonation History
**GET** `/history`

**Category:** History & Tracking  
**Purpose:** Get history of impersonation sessions.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation history retrieved successfully",
  "data": {
    "sessions": [
      {
        "id": "session_123",
        "admin_user": "admin@example.com",
        "impersonated_user": "jane@example.com",
        "started_at": "2023-07-01T14:00:00.000000Z",
        "ended_at": "2023-07-01T16:15:00.000000Z",
        "duration": "2 hours 15 minutes",
        "actions_count": 23
      }
    ]
  }
}
```