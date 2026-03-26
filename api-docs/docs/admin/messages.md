---
sidebar_label: Messages
---

# Message Management

## Base URL
```
http://178.104.58.236:83/api/admin/messages
```

### 1. Read Messages
**GET** `/read`

Retrieve messages. Can filter by specific message.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `message_id` (optional): Specific message ID to retrieve
- `channel_id` (optional): Filter by channel
- `user_id` (optional): Filter by user

**Response:**
```json
{
  "success": true,
  "message": "Messages retrieved successfully",
  "data": {
    "messages": [
      {
        "id": "64a1b2c3d4e5f6789012349",
        "content": "Hello world!",
        "user_id": "64a1b2c3d4e5f6789012348",
        "channel_id": "64a1b2c3d4e5f6789012346",
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```
