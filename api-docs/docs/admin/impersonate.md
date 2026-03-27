---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

## 🔍 Documentation Filters

<div class="filter-container">
  <input type="text" id="searchFilter" placeholder="Search endpoints, fields, operations..." />
  
  <select id="methodFilter">
    <option value="">All Methods</option>
    <option value="GET">GET</option>
    <option value="POST">POST</option>
  </select>
  
  <select id="categoryFilter">
    <option value="">All Categories</option>
    <option value="listing">User Selection</option>
    <option value="session">Session Management</option>
    <option value="history">History & Tracking</option>
  </select>
  
  <button>Clear Filters</button>
</div>

<style>
.filter-container {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-container input, .filter-container select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.filter-container button {
  padding: 8px 16px;
  background: #007cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.endpoint-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 15px 0;
  padding: 20px;
  background: #fff;
}

.method-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
}

.method-get { background: #007bff; color: white; }
.method-post { background: #28a745; color: white; }
</style>

---

## Endpoints

<div class="endpoint-item">

### 1. List Users for Impersonation
<span class="method-badge method-get">GET</span> `/list`

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

</div>

<div class="endpoint-item">

### 2. Start Impersonation
<span class="method-badge method-post">POST</span> `/start`

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

</div>

<div class="endpoint-item">

### 3. Get Current Impersonation Info
<span class="method-badge method-get">GET</span> `/current`

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

</div>

<div class="endpoint-item">

### 4. Stop Impersonation
<span class="method-badge method-post">POST</span> `/stop`

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

</div>

<div class="endpoint-item">

### 5. Impersonation History
<span class="method-badge method-get">GET</span> `/history`

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

</div>