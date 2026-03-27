---
sidebar_label: Workspaces
---

# Workspace Management

## Base URL
```
http://178.104.58.236:81/api/admin/workspaces
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
    <option value="listing">Workspace Listing</option>
    <option value="management">Workspace Management</option>
    <option value="operations">Workspace Operations</option>
    <option value="analytics">Workspace Analytics</option>
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

### 1. List Workspaces
<span class="method-badge method-get">GET</span> `/list`

**Category:** Workspace Listing  
**Purpose:** Retrieve workspaces with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspaces retrieved successfully",
  "data": {
    "workspaces": [
      {
        "id": "64a1b2c3d4e5f6789012347",
        "name": "ACME Corp",
        "description": "Main corporate workspace",
        "is_active": true,
        "subscription_plan": "pro",
        "user_count": 150,
        "channel_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 2. Create Workspace
<span class="method-badge method-post">POST</span> `/create`

**Category:** Workspace Management  
**Purpose:** Create a new workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "New Workspace",
  "description": "Workspace description",
  "owner_id": "64a1b2c3d4e5f6789012348",
  "subscription_plan": "pro"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace created successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "New Workspace",
      "description": "Workspace description",
      "is_active": true,
      "subscription_plan": "pro",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 3. Update Workspace
<span class="method-badge method-put">PUT</span> `/update/{workspace_id}`

**Category:** Workspace Management  
**Purpose:** Update workspace information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "Updated Workspace",
  "description": "Updated description",
  "is_active": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace updated successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "Updated Workspace",
      "description": "Updated description",
      "is_active": false,
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 4. Delete Workspace
<span class="method-badge method-delete">DELETE</span> `/delete/{workspace_id}`

**Category:** Workspace Operations  
**Purpose:** Delete a workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace deleted successfully",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 5. Workspace Analytics
<span class="method-badge method-get">GET</span> `/analytics/{workspace_id}`

**Category:** Workspace Analytics  
**Purpose:** Get detailed analytics for a workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace analytics retrieved successfully",
  "data": {
    "workspace_id": "64a1b2c3d4e5f6789012347",
    "period": "30d",
    "active_users": 142,
    "total_messages": 8450,
    "channels_created": 5,
    "user_growth": "+12%",
    "engagement_score": 8.7,
    "storage_used": "2.4 GB",
    "storage_limit": "10 GB"
  }
}
```

</div>