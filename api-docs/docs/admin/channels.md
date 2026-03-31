---
sidebar_label: Channels
---

# Channel Management

## Base URL
```
http://178.104.58.236:81/api/admin/channels
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

This section covers all channel management endpoints for admin users. The channel system includes:

- **Channel Operations** - Create, list, and update channels
- **Channel Analytics** - Statistics and performance data

## Sub-sections

- **[Channel Operations](./channels-operations)** - Create, list, update, and delete channels
- **[Channel Analytics](./channels-analytics)** - Channel statistics and performance metrics

## Quick Reference

All channel endpoints use the base URL: `http://178.104.58.236:81/api/admin/channels`

### Available Endpoints
- `GET /list` - List channels
- `POST /create` - Create channel
- `PUT /update/{channel_id}` - Update channel
- `DELETE /delete/{channel_id}` - Delete channel
- `GET /statistics/{channel_id}` - Get channel statistics