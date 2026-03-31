---
sidebar_label: Message Moderation
---

# Message Moderation

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

---

## Message Moderation

**POST** `/moderate/{message_id}`

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

## Moderation Actions

- **flag**: Mark message as potentially inappropriate
- **hide**: Hide message from public view
- **approve**: Approve previously flagged message
- **delete**: Remove message permanently

## Moderation Reasons

- Inappropriate content
- Spam or promotional content
- Harassment or bullying
- Misinformation
- Copyright violation
- Other (with custom reason)