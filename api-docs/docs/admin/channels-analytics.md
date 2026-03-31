---
sidebar_label: Channel Analytics
---

# Channel Analytics

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

## Channel Analytics

### 5. Channel Statistics
**GET** `/statistics/{channel_id}`

**Category:** Channel Analytics  
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