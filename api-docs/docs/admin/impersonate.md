---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

## Overview

The Impersonation Management API allows administrators to securely impersonate users for support and troubleshooting purposes. This includes user selection, session management, and tracking capabilities.

## Available Operations

- **User Selection**: List and select users available for impersonation
- **Session Management**: Start, monitor, and stop impersonation sessions
- **History & Tracking**: View impersonation history and audit trails

## Response Format

All endpoints return responses in the following format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}
```

## Authentication

All endpoints require admin authentication:

```
Authorization: Bearer {access_token}
```

## Security Notes

- All impersonation sessions are logged and tracked
- Sessions have automatic expiration times
- Only authorized administrators can impersonate users
- Impersonation activities are auditable