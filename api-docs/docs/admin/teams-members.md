---
sidebar_label: Member Operations
---

# Team Member Operations

## Base URL
```
http://178.104.58.236:81/api/admin/teams
```

---

## Team Member Management

**POST** `/members/{team_id}`

**Category:** Member Management  
**Purpose:** Add or remove team members.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "action": "add",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "role": "member"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team members updated successfully",
  "data": {
    "team_id": "64a1b2c3d4e5f678901234a",
    "action": "add",
    "processed": 2,
    "failed": 0,
    "current_member_count": 10
  }
}
```

## Member Actions

- **add**: Add new members to the team
- **remove**: Remove existing members from the team
- **update_role**: Change member roles within the team

## Member Roles

- **owner**: Full team management permissions
- **admin**: Team management with limited permissions
- **member**: Standard team member access
- **viewer**: Read-only access to team content

## Bulk Operations

You can perform bulk member operations by providing multiple user IDs in the `user_ids` array. The response will indicate how many operations were successful and how many failed.