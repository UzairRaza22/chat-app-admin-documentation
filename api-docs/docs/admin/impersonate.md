---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

### 1. Read Impersonation Info
**GET** `/read`

Get impersonation information and available users to impersonate with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `user_id` (optional): Specific user ID to get info for
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
- `can_impersonate` (optional): Filter by impersonation capability (true/false)
- `last_login_from` (optional): Filter by last login after date (YYYY-MM-DD)
- `last_login_to` (optional): Filter by last login before date (YYYY-MM-DD)

**Sorting:**
- `sort_by` (optional): Field to sort by (first_name, last_name, email, created_at)
- `sort_order` (optional): Sort direction (asc, desc) - default: asc

**Example Request:**
```
GET /read?page=1&limit=20&is_active=true&workspace_name=acme&team_name=development&can_impersonate=true&sort_by=first_name
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation data retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "workspace_id": "64a1b2c3d4e5f6789012347",
        "workspace_name": "ACME Corp",
        "teams": [
          {
            "team_id": "64a1b2c3d4e5f678901234a",
            "team_name": "Development Team"
          }
        ],
        "channels": [
          {
            "channel_id": "64a1b2c3d4e5f6789012346",
            "channel_name": "general"
          }
        ],
        "role": "member",
        "is_active": true,
        "last_login": "2023-07-01T10:30:00.000000Z",
        "can_impersonate": true
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 20,
      "total": 85,
      "total_pages": 5,
      "has_next": true,
      "has_prev": false
    },
    "filters_applied": {
      "is_active": true,
      "workspace_name": "acme",
      "team_name": "development",
      "can_impersonate": true
    }
  }
}
```

---

### 2. Stop Impersonation
**POST** `/stop`

Stop current impersonation session.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation stopped successfully",
  "data": null
}
```
