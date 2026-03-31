---
sidebar_label: Message Analytics
---

# Message Analytics

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

---

## Message Statistics

**GET** `/statistics`

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

## Analytics Features

- **Total Message Count**: Overall message statistics
- **Time-based Metrics**: Daily, weekly, and monthly message counts
- **Top Channels**: Most active channels by message volume
- **Top Users**: Most active users by message count
- **Message Type Distribution**: Breakdown by text, media, files, etc.
- **Engagement Metrics**: Response rates and interaction patterns