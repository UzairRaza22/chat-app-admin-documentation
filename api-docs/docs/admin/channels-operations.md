---
sidebar_label: Channel Operations
---

# Channel Operations

## Base URL
```
http://178.104.58.236:81/api/admin/channels
```

## Authentication
Most endpoints require an admin access token. Include the token in the Authorization header:
```
Authorization: Bearer {access_token}
```

## Response Format
All responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": {
    // Response data
  }
}
```

---

## Channel Operations

### 1. List Channels
**GET** `/list`

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

---

### 2. Create Channel
**POST** `/create`

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

---

### 3. Update Channel
**PUT** `/update/{channel_id}`

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

---

### 4. Delete Channel
**DELETE** `/delete/{channel_id}`

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