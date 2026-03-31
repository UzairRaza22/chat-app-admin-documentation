---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
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

This section covers all user management endpoints for admin users. The user system includes:

- **User Management** - Create, list, and update users
- **User Operations** - Delete and bulk operations

## Sub-sections

- **[User Management](./users-management)** - List, create, and update user accounts
- **[User Operations](./users-operations)** - Delete users and perform bulk operations

## Quick Reference

All user endpoints use the base URL: `http://178.104.58.236:81/api/admin/users`

### Available Endpoints
- `GET /list` - List users
- `POST /create` - Create user
- `PUT /update/{user_id}` - Update user
- `DELETE /delete/{user_id}` - Delete user
- `POST /bulk-action` - Bulk user operations