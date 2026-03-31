---
sidebar_label: User Selection
---

# User Selection for Impersonation

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

## List Users for Impersonation

**GET** `/list`

**Category:** User Selection  
**Purpose:** Get list of users available for impersonation with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
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
        "workspace_name": "ACME Corp",
        "is_active": true,
        "can_impersonate": true,
        "last_login": "2023-07-01T10:30:00.000000Z"
      }
    ]
  }
}
```

## User Selection Criteria

- **Active Users**: Only active users can be impersonated
- **Permission Check**: Users must have impersonation permissions enabled
- **Workspace Access**: Administrators can only impersonate users in accessible workspaces
- **Role Restrictions**: Some high-privilege users may be restricted from impersonation

## Filtering Options

- Filter by workspace
- Filter by user status (active/inactive)
- Search by name or email
- Filter by last login date