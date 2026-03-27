---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
```

### 1. Read Users
**GET** `/read`

Retrieve users with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `user_id` (optional): Specific user ID to retrieve
- `first_name` (optional): Filter by first name (partial match)
- `last_name` (optional): Filter by last name (partial match)
- `email` (optional): Filter by email (partial match)
- `is_active` (optional): Filter by active status (true/false)
- `workspace_id` (optional): Filter by workspace ID
- `workspace_name` (optional): Filter by workspace name (partial match)
- `team_id` (optional): Filter by team membership
- `team_name` (optional): Filter by team name (partial match)
- `channel_id` (optional): Filter by channel membership
- `channel_name` (optional): Filter by channel name (partial match)
- `role` (optional): Filter by user role (admin, member, guest)
- `created_from` (optional): Filter users created after date (YYYY-MM-DD)
- `created_to` (optional): Filter users created before date (YYYY-MM-DD)
- `last_login_from` (optional): Filter by last login after date (YYYY-MM-DD)
- `last_login_to` (optional): Filter by last login before date (YYYY-MM-DD)

**Sorting:**
- `sort_by` (optional): Field to sort by (first_name, last_name, email, created_at)
- `sort_order` (optional): Sort direction (asc, desc) - default: desc

**Example Request:**
```
GET /read?page=2&limit=20&is_active=true&team_name=development&workspace_name=acme&sort_by=created_at&sort_order=desc
```

**Response:**
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "is_active": true,
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "workspace_name": "ACME Corp",
        "teams": [
          {
            "id": "64a1b2c3d4e5f678901234a",
            "name": "Development Team"
          }
        ],
        "channels": [
          {
            "id": "64a1b2c3d4e5f6789012346", 
            "name": "general"
          }
        ],
        "role": "member",
        "last_login": "2023-07-01T10:30:00.000000Z",
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 2,
      "per_page": 20,
      "total": 150,
      "total_pages": 8,
      "has_next": true,
      "has_prev": true
    },
    "filters_applied": {
      "is_active": true,
      "team_name": "development",
      "workspace_name": "acme"
    }
  }
}
```
