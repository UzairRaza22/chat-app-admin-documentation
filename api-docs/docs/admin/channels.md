---
sidebar_label: Channels
---

# Channel Management

## Base URL
```
http://178.104.58.236:83/api/admin/channels
```

### 1. Read Channels
**GET** `/read`

Retrieve channels. Can filter by specific channel.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `channel_id` (optional): Specific channel ID to retrieve

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
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```
