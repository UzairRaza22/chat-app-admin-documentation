---
sidebar_label: Message Operations
---

# Message Operations

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

---

## 1. List Messages

**GET** `/list`

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

---

## 2. Delete Message

**DELETE** `/delete/{message_id}`

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

---

## 3. Bulk Delete Messages

**POST** `/bulk-delete`

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