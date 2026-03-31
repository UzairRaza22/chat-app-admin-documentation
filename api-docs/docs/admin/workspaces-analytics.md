---
sidebar_label: Workspace Analytics
---

# Workspace Analytics

## Base URL
```
http://178.104.58.236:81/api/admin/workspaces
```

## Authentication
Most endpoints require an admin access token. Include the token in the Authorization header:
```
Authorization: Bearer {access_token}
```

## Response Format
All responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": {
    // Response data
  }
}
```

---

## Workspace Analytics

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