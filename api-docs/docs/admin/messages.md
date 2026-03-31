---
sidebar_label: Messages
---

# Message Management

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

## Overview

The Message Management API provides comprehensive tools for managing chat messages across your platform. This includes message listing, statistics, operations, and moderation capabilities.

## Available Operations

- **Message Listing & Statistics**: Retrieve messages with filtering and get detailed analytics
- **Message Operations**: Delete individual or bulk messages
- **Message Moderation**: Flag, hide, or approve messages for content control

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