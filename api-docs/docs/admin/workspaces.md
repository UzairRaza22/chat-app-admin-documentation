---
sidebar_label: Workspaces
---

# Workspace Management

## Base URL
```
http://178.104.58.236:81/api/admin/workspaces
```

---

## Endpoints

### 1. List Workspaces
**GET** `/list`

**Category:** Workspace Listing  
**Purpose:** Retrieve workspaces with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
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
        "name": "ACME Corp",
        "description": "Main corporate workspace",
        "is_active": true,
        "subscription_plan": "pro",
        "user_count": 150,
        "channel_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}
```

---

### 2. Create Workspace
**POST** `/create`

**Category:** Workspace Management  
**Purpose:** Create a new workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "New Workspace",
  "description": "Workspace description",
  "owner_id": "64a1b2c3d4e5f6789012348",
  "subscription_plan": "pro"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace created successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "New Workspace",
      "description": "Workspace description",
      "is_active": true,
      "subscription_plan": "pro",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

---

### 3. Update Workspace
**PUT** `/update/{workspace_id}`

**Category:** Workspace Management  
**Purpose:** Update workspace information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "name": "Updated Workspace",
  "description": "Updated description",
  "is_active": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace updated successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "Updated Workspace",
      "description": "Updated description",
      "is_active": false,
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}
```

---

### 4. Delete Workspace
**DELETE** `/delete/{workspace_id}`

**Category:** Workspace Operations  
**Purpose:** Delete a workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace deleted successfully",
  "data": null
}
```

---

### 5. Workspace Analytics
**GET** `/analytics/{workspace_id}`

**Category:** Workspace Analytics  
**Purpose:** Get detailed analytics for a workspace.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Workspace analytics retrieved successfully",
  "data": {
    "workspace_id": "64a1b2c3d4e5f6789012347",
    "period": "30d",
    "active_users": 142,
    "total_messages": 8450,
    "channels_created": 5,
    "user_growth": "+12%",
    "engagement_score": 8.7,
    "storage_used": "2.4 GB",
    "storage_limit": "10 GB"
  }
}
```