---
sidebar_label: Workspaces
---

# Workspace Management

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

## Overview

This section covers all workspace management endpoints for admin users. The workspace system includes:

- **Workspace Operations** - Create, list, update, and delete workspaces
- **Workspace Analytics** - Analytics and performance metrics

## Sub-sections

- **[Workspace Operations](./workspaces-operations)** - Create, list, update, and delete workspaces
- **[Workspace Analytics](./workspaces-analytics)** - Workspace analytics and performance data

## Quick Reference

All workspace endpoints use the base URL: `http://178.104.58.236:81/api/admin/workspaces`

### Available Endpoints
- `GET /list` - List workspaces
- `POST /create` - Create workspace
- `PUT /update/{workspace_id}` - Update workspace
- `DELETE /delete/{workspace_id}` - Delete workspace
- `GET /analytics/{workspace_id}` - Get workspace analytics