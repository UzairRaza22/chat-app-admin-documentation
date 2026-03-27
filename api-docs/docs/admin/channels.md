---
sidebar_label: Channels
---

# Channel Management

## Base URL
```
http://178.104.58.236:81/api/admin/channels
```

### 1. Read Channels
**GET** `/read`

Retrieve channels with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `channel_id` (optional): Specific channel ID to retrieve
- `name` (optional): Filter by channel name (partial match)
- `description` (optional): Filter by description (partial match)
- `workspace_id` (optional): Filter by workspace ID
- `workspace_name` (optional): Filter by workspace name (partial match)
- `is_private` (optional): Filter by privacy status (true/false)
- `is_archived` (optional): Filter by archived status (true/false)
- `member_count_min` (optional): Filter channels with minimum member count
- `member_count_max` (optional): Filter channels with maximum member count
- `user_id` (optional): Filter channels that include specific user
- `user_name` (optional): Filter channels by member name (partial match)
- `user_email` (optional): Filter channels by member email (partial match)
- `team_id` (optional): Filter channels associated with specific team
- `team_name` (optional): Filter channels by associated team name (partial match)
- `created_by_user_id` (optional): Filter by channel creator user ID
- `created_by_user_name` (optional): Filter by channel creator name (partial match)
- `created_from` (optional): Filter channels created after date (YYYY-MM-DD)
- `created_to` (optional): Filter channels created before date (YYYY-MM-DD)

**Sorting:**
- `sort_by` (optional): Field to sort by (name, created_at, workspace_id)
- `sort_order` (optional): Sort direction (asc, desc) - default: desc

**Example Request:**
```
GET /read?page=1&limit=20&workspace_name=acme&is_private=false&team_name=development&sort_by=name
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
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "workspace_name": "ACME Corp",
        "is_private": false,
        "is_archived": false,
        "created_by": {
          "user_id": "64a1b2c3d4e5f6789012348",
          "user_name": "Jane Smith"
        },
        "teams": [
          {
            "team_id": "64a1b2c3d4e5f678901234a",
            "team_name": "Development Team"
          }
        ],
        "members": [
          {
            "user_id": "64a1b2c3d4e5f6789012348",
            "user_name": "Jane Smith",
            "user_email": "jane@example.com",
            "role": "admin"
          }
        ],
        "member_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z",
        "updated_at": "2023-07-01T12:00:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 20,
      "total": 35,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    },
    "filters_applied": {
      "workspace_name": "acme",
      "is_private": false,
      "team_name": "development"
    }
  }
}
```
