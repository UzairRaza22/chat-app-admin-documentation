---
sidebar_label: Teams
---

# Team Management

## Base URL
```
http://178.104.58.236:81/api/admin/teams
```

### 1. Read Teams
**GET** `/read`

Retrieve teams with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `team_id` (optional): Specific team ID to retrieve
- `name` (optional): Filter by team name (partial match)
- `description` (optional): Filter by description (partial match)
- `workspace_id` (optional): Filter by workspace ID
- `workspace_name` (optional): Filter by workspace name (partial match)
- `member_count_min` (optional): Filter teams with minimum member count
- `member_count_max` (optional): Filter teams with maximum member count
- `user_id` (optional): Filter teams that include specific user
- `user_name` (optional): Filter teams by member name (partial match)
- `user_email` (optional): Filter teams by member email (partial match)
- `channel_id` (optional): Filter teams associated with specific channel
- `channel_name` (optional): Filter teams by associated channel name (partial match)
- `is_active` (optional): Filter by active status (true/false)
- `created_from` (optional): Filter teams created after date (YYYY-MM-DD)
- `created_to` (optional): Filter teams created before date (YYYY-MM-DD)

**Sorting:**
- `sort_by` (optional): Field to sort by (name, created_at, workspace_id)
- `sort_order` (optional): Sort direction (asc, desc) - default: desc

**Example Request:**
```
GET /read?page=1&limit=25&workspace_name=acme&user_name=jane&member_count_min=5&sort_by=name&sort_order=asc
```

**Response:**
```json
{
  "success": true,
  "message": "Teams retrieved successfully",
  "data": {
    "teams": [
      {
        "id": "64a1b2c3d4e5f678901234a",
        "name": "Development Team",
        "description": "Backend development team",
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "workspace_name": "ACME Corp",
        "is_active": true,
        "members": [
          {
            "user_id": "64a1b2c3d4e5f6789012348",
            "user_name": "Jane Smith",
            "user_email": "jane@example.com",
            "role": "leader"
          }
        ],
        "channels": [
          {
            "channel_id": "64a1b2c3d4e5f6789012346",
            "channel_name": "team-dev"
          }
        ],
        "member_count": 8,
        "created_at": "2023-07-01T12:00:00.000000Z",
        "updated_at": "2023-07-01T12:00:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 25,
      "total": 45,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    },
    "filters_applied": {
      "workspace_name": "acme",
      "user_name": "jane",
      "member_count_min": 5
    }
  }
}
```
