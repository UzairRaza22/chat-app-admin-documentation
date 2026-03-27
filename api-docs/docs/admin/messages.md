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
  <input type="text" id="searchFilter" placeholder="Search endpoints, fields, operations..." onkeyup="filterContent()" />
  
  <select id="methodFilter" onchange="filterContent()">
    <option value="">All Methods</option>
    <option value="GET">GET</option>
    <option value="POST">POST</option>
    <option value="DELETE">DELETE</option>
  </select>
  
  <select id="categoryFilter" onchange="filterContent()">
    <option value="">All Categories</option>
    <option value="listing">Message Listing</option>
    <option value="operations">Message Operations</option>
    <option value="moderation">Message Moderation</option>
    <option value="analytics">Message Analytics</option>
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

<div class="searchable-content">
Keywords: list messages, get messages, message listing, content, user_name, channel_name, workspace_name, message_type, text, image, file, has_attachments, created_at, message data
</div>

</div>

<div class="endpoint-item" data-method="GET" data-category="analytics">

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

<div class="searchable-content">
Keywords: message statistics, stats, analytics, total_messages, messages_today, messages_this_week, top_channels, top_users, channel_name, user_name, message_count, metrics
</div>

</div>

<div class="endpoint-item" data-method="DELETE" data-category="operations">

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

<div class="searchable-content">
Keywords: delete message, remove message, message deletion, message_id, delete, remove, message removal
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="operations">

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

<div class="searchable-content">
Keywords: bulk delete, bulk operations, multiple messages, message_ids, delete_reason, spam, deleted_count, failed_count, mass delete, batch delete
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="moderation">

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

<div class="searchable-content">
Keywords: message moderation, moderate, flag, hide, approve, action, reason, moderator_notes, inappropriate, offensive, flagged, status, moderated_at, content moderation
</div>

</div>