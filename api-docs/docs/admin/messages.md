---
sidebar_label: Messages
---

# Message Management

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

---

## 🔍 Documentation Filters

<div class="filter-container">
  <input type="text" id="searchFilter" placeholder="Search endpoints, fields, operations..." />
  
  <select id="methodFilter">
    <option value="">All Methods</option>
    <option value="GET">GET</option>
    <option value="POST">POST</option>
    <option value="DELETE">DELETE</option>
  </select>
  
  <select id="categoryFilter">
    <option value="">All Categories</option>
    <option value="listing">Message Listing</option>
    <option value="operations">Message Operations</option>
    <option value="moderation">Message Moderation</option>
    <option value="analytics">Message Analytics</option>
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
.method-delete { background: #dc3545; color: white; }
</style>

---

## Endpoints

<div class="endpoint-item">

### 1. List Messages
<span class="method-badge method-get">GET</span> `/list`

**Category:** Message Listing  
**Purpose:** Retrieve messages with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Messages retrieved successfully",
  "data": {
    "messages": [
      {
        "id": "64a1b2c3d4e5f6789012349",
        "content": "Hello everyone! Welcome to the team.",
        "user_name": "Jane Smith",
        "channel_name": "general",
        "workspace_name": "ACME Corp",
        "message_type": "text",
        "has_attachments": false,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 2. Message Statistics
<span class="method-badge method-get">GET</span> `/statistics`

**Category:** Message Analytics  
**Purpose:** Get message statistics with filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Statistics retrieved successfully",
  "data": {
    "total_messages": 15420,
    "messages_today": 245,
    "messages_this_week": 1680,
    "top_channels": [
      {
        "channel_name": "general",
        "message_count": 3450
      }
    ],
    "top_users": [
      {
        "user_name": "Jane Smith",
        "message_count": 890
      }
    ]
  }
}
```

</div>

<div class="endpoint-item">

### 3. Delete Message
<span class="method-badge method-delete">DELETE</span> `/delete/{message_id}`

**Category:** Message Operations  
**Purpose:** Delete a specific message.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Message deleted successfully",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 4. Bulk Delete Messages
<span class="method-badge method-post">POST</span> `/bulk-delete`

**Category:** Message Operations  
**Purpose:** Delete multiple messages at once.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "message_ids": ["64a1b2c3d4e5f6789012349", "64a1b2c3d4e5f678901234b"],
  "delete_reason": "Spam content"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Messages deleted successfully",
  "data": {
    "deleted_count": 2,
    "failed_count": 0
  }
}
```

</div>

<div class="endpoint-item">

### 5. Message Moderation
<span class="method-badge method-post">POST</span> `/moderate/{message_id}`

**Category:** Message Moderation  
**Purpose:** Moderate a message (flag, hide, or approve).

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "action": "flag",
  "reason": "Inappropriate content",
  "moderator_notes": "Contains offensive language"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message moderated successfully",
  "data": {
    "message_id": "64a1b2c3d4e5f6789012349",
    "action": "flag",
    "status": "flagged",
    "moderated_at": "2023-07-01T15:30:00.000000Z"
  }
}
```

</div>