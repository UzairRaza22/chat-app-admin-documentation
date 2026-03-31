---
sidebar_label: Teams
---

# Team Management

## Base URL
```
http://178.104.58.236:81/api/admin/teams
```

## Overview

The Team Management API provides comprehensive tools for managing teams within your platform. This includes team creation, updates, member management, and team operations.

## Available Operations

- **Team Management**: Create, update, and delete teams
- **Member Operations**: Add, remove, and manage team members

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