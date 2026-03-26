---
sidebar_label: Workspaces
---

# Workspace Management

## Base URL
```
http://178.104.58.236:83/api/admin/workspaces
```

### 1. Read Workspaces
**GET** `/read`

Retrieve workspaces. Can filter by specific workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `workspace_id` (optional): Specific workspace ID to retrieve

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
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```
