---
sidebar_label: Channels
---

# Channel Management

## Base URL
```
http://178.104.58.236:81/api/admin/channels
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
    <option value="listing">Channel Listing</option>
    <option value="management">Channel Management</option>
    <option value="operations">Channel Operations</option>
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

### 1. List Channels
<span class="method-badge method-get">GET</span> `/list`

**Category:** Channel Listing  
**Purpose:** Retrieve channels with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Channels retrieved successfully",
  "data": {
    "channels": [
      {
        "id": "64a1b2c3d4e5f6789012346",
        "name": "general",
        "description": "General discussion",
        "workspace_name": "ACME Corp",
        "is_private": false,
        "member_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 2. Create Channel
<span class="method-badge method-post">POST</span> `/create`

**Category:** Channel Management  
**Purpose:** Create a new channel.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "new-channel",
  "description": "Channel description",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "is_private": false,
  "team_ids": ["64a1b2c3d4e5f678901234a"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Channel created successfully",
  "data": {
    "channel": {
      "id": "64a1b2c3d4e5f6789012346",
      "name": "new-channel",
      "description": "Channel description",
      "workspace_id": "64a1b2c3d4e5f6789012347",
      "is_private": false,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 3. Update Channel
<span class="method-badge method-put">PUT</span> `/update/{channel_id}`

**Category:** Channel Management  
**Purpose:** Update channel information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "updated-channel",
  "description": "Updated description",
  "is_private": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Channel updated successfully",
  "data": {
    "channel": {
      "id": "64a1b2c3d4e5f6789012346",
      "name": "updated-channel",
      "description": "Updated description",
      "is_private": true,
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

</div>

<div class="endpoint-item">

### 4. Delete Channel
<span class="method-badge method-delete">DELETE</span> `/delete/{channel_id}`

**Category:** Channel Operations  
**Purpose:** Delete a channel.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Channel deleted successfully",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 5. Channel Statistics
<span class="method-badge method-get">GET</span> `/statistics/{channel_id}`

**Category:** Channel Operations  
**Purpose:** Get detailed statistics for a specific channel.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Channel statistics retrieved successfully",
  "data": {
    "channel_id": "64a1b2c3d4e5f6789012346",
    "total_messages": 1250,
    "active_members": 18,
    "messages_today": 45,
    "messages_this_week": 320,
    "top_contributors": [
      {
        "user_name": "Jane Smith",
        "message_count": 89
      }
    ]
  }
}
```

</div>