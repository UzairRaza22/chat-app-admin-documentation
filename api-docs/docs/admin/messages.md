---
sidebar_label: Messages
---

# Message Management

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

### 1. Read Messages
**GET** `/read`

Retrieve messages with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `message_id` (optional): Specific message ID to retrieve
- `channel_id` (optional): Filter by channel ID
- `channel_name` (optional): Filter by channel name (partial match)
- `user_id` (optional): Filter by user ID
- `user_name` (optional): Filter by user name (first_name + last_name, partial match)
- `user_email` (optional): Filter by user email (partial match)
- `workspace_id` (optional): Filter by workspace ID
- `workspace_name` (optional): Filter by workspace name (partial match)
- `team_id` (optional): Filter by team ID (messages from team members)
- `team_name` (optional): Filter by team name (partial match)
- `content` (optional): Filter by message content (partial match)
- `message_type` (optional): Filter by message type (text, image, file, system)
- `has_attachments` (optional): Filter messages with attachments (true/false)
- `is_edited` (optional): Filter edited messages (true/false)
- `is_deleted` (optional): Filter deleted messages (true/false)
- `created_from` (optional): Filter messages created after date (YYYY-MM-DD HH:MM:SS)
- `created_to` (optional): Filter messages created before date (YYYY-MM-DD HH:MM:SS)

**Sorting:**
- `sort_by` (optional): Field to sort by (created_at, content, user_id, channel_id)
- `sort_order` (optional): Sort direction (asc, desc) - default: desc

**Example Request:**
```
GET /read?page=1&limit=50&channel_name=general&user_name=jane&workspace_name=acme&sort_by=created_at&sort_order=asc
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
        "content": "Hello world!",
        "user_id": "64a1b2c3d4e5f6789012348",
        "user_name": "Jane Smith",
        "user_email": "jane@example.com",
        "channel_id": "64a1b2c3d4e5f6789012346",
        "channel_name": "general",
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "workspace_name": "ACME Corp",
        "message_type": "text",
        "has_attachments": false,
        "is_edited": false,
        "is_deleted": false,
        "created_at": "2023-07-01T12:00:00.000000Z",
        "updated_at": "2023-07-01T12:00:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 50,
      "total": 1250,
      "total_pages": 25,
      "has_next": true,
      "has_prev": false
    },
    "filters_applied": {
      "channel_name": "general",
      "user_name": "jane",
      "workspace_name": "acme"
    }
  }
}
```
