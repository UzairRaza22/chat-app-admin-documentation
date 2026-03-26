---
sidebar_label: Teams
---

# Team Management

## Base URL
```
http://178.104.58.236:83/api/admin/teams
```

### 1. Read Teams
**GET** `/read`

Retrieve teams. Can filter by specific team.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Query Parameters:**
- `team_id` (optional): Specific team ID to retrieve

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
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```
