---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
```

---

## 🔍 Documentation Filters

<div class="filter-container">
  <input type="text" id="searchFilter" placeholder="Search endpoints, fields, operations..." />
  
  <select id="methodFilter">
    <option value="">All Methods</option>
    <option value="GET">GET</option>
    <option value="POST">POST</option>
    <option value="PUT">PUT</option>
    <option value="DELETE">DELETE</option>
  </select>
  
  <select id="categoryFilter">
    <option value="">All Categories</option>
    <option value="listing">User Listing</option>
    <option value="management">User Management</option>
    <option value="operations">User Operations</option>
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
.method-put { background: #ffc107; color: black; }
.method-delete { background: #dc3545; color: white; }
</style>

---

## Endpoints

<div class="endpoint-item">

### 1. List Users
<span class="method-badge method-get">GET</span> `/list`

**Category:** User Listing  
**Purpose:** Retrieve users with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

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
        "workspace_name": "ACME Corp",
        "role": "member",
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 2. Create User
<span class="method-badge method-post">POST</span> `/create`

**Category:** User Management  
**Purpose:** Create a new user account.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "user@example.com",
  "password": "password123",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "role": "member"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "John",
      "last_name": "Doe",
      "email": "user@example.com",
      "is_active": true,
      "role": "member",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 3. Update User
<span class="method-badge method-put">PUT</span> `/update/{user_id}`

**Category:** User Management  
**Purpose:** Update user information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "is_active": false,
  "role": "admin"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "is_active": false,
      "role": "admin",
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 4. Delete User
<span class="method-badge method-delete">DELETE</span> `/delete/{user_id}`

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

</div>

<div class="endpoint-item">

### 5. Bulk User Operations
<span class="method-badge method-post">POST</span> `/bulk-action`

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

</div>