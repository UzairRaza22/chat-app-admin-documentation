---
sidebar_label: Pagination & Filters
---

# Pagination and Filtering Guide

This guide explains the standardized pagination and filtering system used across all Admin API endpoints.

## Pagination Parameters

All list endpoints support the following pagination parameters:

| Parameter | Type | Default | Max | Description |
|-----------|------|---------|-----|-------------|
| `page` | integer | 1 | - | Page number to retrieve |
| `limit` | integer | 10 | 100 | Number of items per page |

### Pagination Response Format

All paginated responses include a `pagination` object:

```json
{
  "pagination": {
    "current_page": 2,
    "per_page": 20,
    "total": 150,
    "total_pages": 8,
    "has_next": true,
    "has_prev": true
  }
}
```

## Sorting Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sort_by` | string | Field name to sort by |
| `sort_order` | string | Sort direction: `asc` or `desc` (default: `desc`) |

### Available Sort Fields by Endpoint

- **Users**: `first_name`, `last_name`, `email`, `created_at`, `is_active`
- **Messages**: `created_at`, `content`, `user_id`, `channel_id`
- **Teams**: `name`, `created_at`, `workspace_id`
- **Channels**: `name`, `created_at`, `workspace_id`
- **Workspaces**: `name`, `created_at`, `is_active`

## Common Filter Parameters

### Date Range Filters
- `created_from`: Filter items created after this date (YYYY-MM-DD or YYYY-MM-DD HH:MM:SS)
- `created_to`: Filter items created before this date (YYYY-MM-DD or YYYY-MM-DD HH:MM:SS)
- `last_login_from`: Filter by last login after date (YYYY-MM-DD)
- `last_login_to`: Filter by last login before date (YYYY-MM-DD)

### Text Search Filters
Text filters support partial matching (case-insensitive):
- `name`: Search by name field
- `description`: Search by description field
- `content`: Search by content field (messages)
- `email`: Search by email field (users)
- `first_name`: Search by first name (users)
- `last_name`: Search by last name (users)

### Relationship Filters
Filter by related entity names and properties:
- `workspace_name`: Filter by workspace name (partial match)
- `team_name`: Filter by team name (partial match)
- `channel_name`: Filter by channel name (partial match)
- `user_name`: Filter by user name (first_name + last_name, partial match)
- `user_email`: Filter by user email (partial match)
- `owner_name`: Filter by owner name (workspaces)
- `owner_email`: Filter by owner email (workspaces)
- `created_by_user_name`: Filter by creator name (channels)

### Membership Filters
Filter by membership and associations:
- `user_id`: Filter by specific user membership
- `team_id`: Filter by specific team association
- `channel_id`: Filter by specific channel association
- `workspace_id`: Filter by specific workspace

### Count-based Filters
Filter by numeric ranges:
- `member_count_min`: Minimum member count
- `member_count_max`: Maximum member count
- `user_count_min`: Minimum user count (workspaces)
- `user_count_max`: Maximum user count (workspaces)
- `channel_count_min`: Minimum channel count (workspaces)
- `channel_count_max`: Maximum channel count (workspaces)
- `team_count_min`: Minimum team count (workspaces)
- `team_count_max`: Maximum team count (workspaces)

### Boolean Filters
- `is_active`: Filter by active status (`true` or `false`)
- `is_private`: Filter by privacy status (`true` or `false`)
- `is_archived`: Filter by archived status (`true` or `false`)
- `can_impersonate`: Filter by impersonation capability (`true` or `false`)
- `has_attachments`: Filter messages with attachments (`true` or `false`)
- `is_edited`: Filter edited messages (`true` or `false`)
- `is_deleted`: Filter deleted messages (`true` or `false`)

### Categorical Filters
- `role`: Filter by user role (`admin`, `member`, `guest`)
- `message_type`: Filter by message type (`text`, `image`, `file`, `system`)
- `subscription_plan`: Filter by subscription plan (`free`, `pro`, `enterprise`)

### ID Filters
- `workspace_id`: Filter by workspace ID
- `user_id`: Filter by user ID
- `channel_id`: Filter by channel ID
- `team_id`: Filter by team ID

## Example Requests

### Basic Pagination
```
GET /api/admin/users/read?page=2&limit=25
```

### Filtering with Pagination
```
GET /api/admin/users/read?page=1&limit=50&is_active=true&workspace_id=64a1b2c3d4e5f6789012347
```

### Text Search with Sorting
```
GET /api/admin/messages/read?content=hello&sort_by=created_at&sort_order=asc
```

### Complex Multi-Filter Example
```
GET /api/admin/users/read?page=1&limit=20&is_active=true&team_name=development&workspace_name=acme&role=member&created_from=2023-06-01&sort_by=created_at&sort_order=desc
```

### Filter by Team Name and User Email
```
GET /api/admin/users/read?team_name=development&user_email=@company.com&is_active=true
```

### Filter Messages by Channel and User Names
```
GET /api/admin/messages/read?channel_name=general&user_name=jane&workspace_name=acme
```

### Filter Teams by Member Count and Workspace
```
GET /api/admin/teams/read?workspace_name=acme&member_count_min=5&member_count_max=20
```

### Filter Channels by Team Association
```
GET /api/admin/channels/read?team_name=development&is_private=false&workspace_name=acme
```

### Filter Workspaces by Owner and Subscription
```
GET /api/admin/workspaces/read?owner_name=john&subscription_plan=pro&user_count_min=50
```

## Response Format

All filtered responses include a `filters_applied` object showing which filters were used:

```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": {
    "items": [...],
    "pagination": {...},
    "filters_applied": {
      "is_active": true,
      "team_name": "development",
      "workspace_name": "acme",
      "role": "member",
      "created_from": "2023-06-01"
    }
  }
}
```

## Error Handling

### Invalid Parameters
```json
{
  "success": false,
  "message": "Invalid pagination parameters",
  "errors": {
    "limit": "Limit cannot exceed 100",
    "page": "Page must be a positive integer"
  }
}
```

### Invalid Sort Field
```json
{
  "success": false,
  "message": "Invalid sort field",
  "errors": {
    "sort_by": "Field 'invalid_field' is not sortable for this endpoint"
  }
}
```

## Performance Notes

- Use appropriate `limit` values to balance performance and usability
- Consider using specific ID filters when possible for better performance
- Date range filters are indexed and perform well
- Text search filters may be slower on large datasets
- Combine filters to reduce result sets and improve response times