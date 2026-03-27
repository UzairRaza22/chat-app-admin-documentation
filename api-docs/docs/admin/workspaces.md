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
  <input type="text" id="searchFilter" placeholder="Search endpoints, fields, operations..." onkeyup="filterContent()" />
  
  <select id="methodFilter" onchange="filterContent()">
    <option value="">All Methods</option>
    <option value="GET">GET</option>
    <option value="POST">POST</option>
    <option value="PUT">PUT</option>
    <option value="DELETE">DELETE</option>
  </select>
  
  <select id="categoryFilter" onchange="filterContent()">
    <option value="">All Categories</option>
    <option value="listing">Workspace Listing</option>
    <option value="management">Workspace Management</option>
    <option value="operations">Workspace Operations</option>
    <option value="analytics">Workspace Analytics</option>
  </select>
  
  <button onclick="clearFilters()">Clear Filters</button>
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

.endpoint-item.hidden {
  display: none;
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

.searchable-content {
  display: none;
}
</style>

<script>
function filterContent() {
  const searchTerm = document.getElementById('searchFilter').value.toLowerCase();
  const methodFilter = document.getElementById('methodFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  const endpoints = document.querySelectorAll('.endpoint-item');
  
  endpoints.forEach(endpoint => {
    const text = endpoint.textContent.toLowerCase();
    const method = endpoint.dataset.method || '';
    const category = endpoint.dataset.category || '';
    
    const matchesSearch = searchTerm === '' || text.includes(searchTerm);
    const matchesMethod = methodFilter === '' || method === methodFilter;
    const matchesCategory = categoryFilter === '' || category === categoryFilter;
    
    if (matchesSearch && matchesMethod && matchesCategory) {
      endpoint.classList.remove('hidden');
    } else {
      endpoint.classList.add('hidden');
    }
  });
}

function clearFilters() {
  document.getElementById('searchFilter').value = '';
  document.getElementById('methodFilter').value = '';
  document.getElementById('categoryFilter').value = '';
  filterContent();
}
</script>

---

## Endpoints

<div class="endpoint-item" data-method="GET" data-category="listing">

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

<div class="searchable-content">
Keywords: list workspaces, get workspaces, workspace listing, name, description, is_active, subscription_plan, pro, free, enterprise, user_count, channel_count, created_at, workspace data
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="management">

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

<div class="searchable-content">
Keywords: create workspace, add workspace, new workspace, workspace creation, name, description, owner_id, subscription_plan, pro, free, enterprise, workspace setup
</div>

</div>

<div class="endpoint-item" data-method="PUT" data-category="management">

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

<div class="searchable-content">
Keywords: update workspace, edit workspace, modify workspace, workspace_id, name, description, is_active, updated_at, workspace modification, activate, deactivate
</div>

</div>

<div class="endpoint-item" data-method="DELETE" data-category="operations">

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

<div class="searchable-content">
Keywords: delete workspace, remove workspace, workspace deletion, workspace_id, delete, remove, workspace removal
</div>

</div>

<div class="endpoint-item" data-method="GET" data-category="analytics">

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

<div class="searchable-content">
Keywords: workspace analytics, analytics, stats, metrics, active_users, total_messages, channels_created, user_growth, engagement_score, storage_used, storage_limit, period, 30d, 7d, 90d
</div>

</div>