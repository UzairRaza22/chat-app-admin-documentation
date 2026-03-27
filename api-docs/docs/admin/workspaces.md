---
sidebar_label: Workspaces
---

# Workspace Management

## Base URL
```
http://178.104.58.236:81/api/admin/workspaces
```

### 1. Read Workspaces
**GET** `/read`

Retrieve workspaces with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**

**Pagination:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Filters:**
- `workspace_id` (optional): Specific workspace ID to retrieve
- `name` (optional): Filter by workspace name (partial match)
- `description` (optional): Filter by description (partial match)
- `is_active` (optional): Filter by active status (true/false)
- `owner_id` (optional): Filter by workspace owner user ID
- `owner_name` (optional): Filter by workspace owner name (partial match)
- `owner_email` (optional): Filter by workspace owner email (partial match)
- `user_count_min` (optional): Filter workspaces with minimum user count
- `user_count_max` (optional): Filter workspaces with maximum user count
- `channel_count_min` (optional): Filter workspaces with minimum channel count
- `channel_count_max` (optional): Filter workspaces with maximum channel count
- `team_count_min` (optional): Filter workspaces with minimum team count
- `team_count_max` (optional): Filter workspaces with maximum team count
- `subscription_plan` (optional): Filter by subscription plan (free, pro, enterprise)
- `created_from` (optional): Filter workspaces created after date (YYYY-MM-DD)
- `created_to` (optional): Filter workspaces created before date (YYYY-MM-DD)

**Sorting:**
- `sort_by` (optional): Field to sort by (name, created_at, is_active)
- `sort_order` (optional): Sort direction (asc, desc) - default: desc

**Example Request:**
```
GET /read?page=1&limit=15&is_active=true&owner_name=john&subscription_plan=pro&sort_by=name&sort_order=asc
```

**Response:**
```json
{
  "success": true,
  "message": "Workspaces retrieved successfully",
  "data": {
    "workspaces": [
      {
        "id": "64a1b2c3d4e5f6789012347",
        "name": "My Workspace",
        "description": "Default workspace",
        "is_active": true,
        "owner": {
          "user_id": "64a1b2c3d4e5f6789012348",
          "user_name": "John Doe",
          "user_email": "john@example.com"
        },
        "subscription_plan": "pro",
        "billing_status": "active",
        "user_count": 150,
        "channel_count": 25,
        "team_count": 8,
        "created_at": "2023-07-01T12:00:00.000000Z",
        "updated_at": "2023-07-01T12:00:00.000000Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 15,
      "total": 12,
      "total_pages": 1,
      "has_next": false,
      "has_prev": false
    },
    "filters_applied": {
      "is_active": true,
      "owner_name": "john",
      "subscription_plan": "pro"
    }
  }
}
```
