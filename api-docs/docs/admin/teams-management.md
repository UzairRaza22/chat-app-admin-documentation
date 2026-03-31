---
sidebar_label: Team Management
---

# Team Management

## Base URL
```
http://178.104.58.236:81/api/admin/teams
```

---

## 1. List Teams

**GET** `/list`

**Category:** Team Listing  
**Purpose:** Retrieve teams with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
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
        "workspace_name": "ACME Corp",
        "member_count": 8,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

---

## 2. Create Team

**POST** `/create`

**Category:** Team Management  
**Purpose:** Create a new team.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "New Team",
  "description": "Team description",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "member_ids": ["64a1b2c3d4e5f6789012348"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team created successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "New Team",
      "description": "Team description",
      "workspace_id": "64a1b2c3d4e5f6789012347",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

---

## 3. Update Team

**PUT** `/update/{team_id}`

**Category:** Team Management  
**Purpose:** Update team information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "Updated Team",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Team updated successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "Updated Team",
      "description": "Updated description",
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

---

## 4. Delete Team

**DELETE** `/delete/{team_id}`

**Category:** Team Operations  
**Purpose:** Delete a team.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Team deleted successfully",
  "data": null
}
```