---
sidebar_label: Teams
---

# Team Management

## Base URL
```
http://178.104.58.236:81/api/admin/teams
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
    <option value="listing">Team Listing</option>
    <option value="management">Team Management</option>
    <option value="operations">Team Operations</option>
    <option value="members">Member Management</option>
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

### 1. List Teams
<span class="method-badge method-get">GET</span> `/list`

**Category:** Team Listing  
**Purpose:** Retrieve teams with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Teams retrieved successfully",
  "data": {
    "teams": [
      {
        "id": "64a1b2c3d4e5f678901234a",
        "name": "Development Team",
        "description": "Backend development team",
        "workspace_name": "ACME Corp",
        "member_count": 8,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 2. Create Team
<span class="method-badge method-post">POST</span> `/create`

**Category:** Team Management  
**Purpose:** Create a new team.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "New Team",
  "description": "Team description",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "member_ids": ["64a1b2c3d4e5f6789012348"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team created successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "New Team",
      "description": "Team description",
      "workspace_id": "64a1b2c3d4e5f6789012347",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 3. Update Team
<span class="method-badge method-put">PUT</span> `/update/{team_id}`

**Category:** Team Management  
**Purpose:** Update team information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "Updated Team",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team updated successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "Updated Team",
      "description": "Updated description",
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 4. Delete Team
<span class="method-badge method-delete">DELETE</span> `/delete/{team_id}`

**Category:** Team Operations  
**Purpose:** Delete a team.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Team deleted successfully",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 5. Team Member Management
<span class="method-badge method-post">POST</span> `/members/{team_id}`

**Category:** Member Management  
**Purpose:** Add or remove team members.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "action": "add",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "role": "member"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team members updated successfully",
  "data": {
    "team_id": "64a1b2c3d4e5f678901234a",
    "action": "add",
    "processed": 2,
    "failed": 0,
    "current_member_count": 10
  }
}
```

</div>