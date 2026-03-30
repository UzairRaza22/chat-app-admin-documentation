# Chat App Admin API Documentation

Welcome to the Chat App Admin API documentation. This comprehensive guide covers all administrative endpoints for managing your chat application.

## Available Sections

- **[Authentication](./admin/authentication)** - Admin login, signup, and session management
- **[Users](./admin/users)** - User management and operations  
- **[Channels](./admin/channels)** - Channel creation and management
- **[Workspaces](./admin/workspaces)** - Workspace administration
- **[Messages](./admin/messages)** - Message management and moderation
- **[Teams](./admin/teams)** - Team management and member operations
- **[Impersonation](./admin/impersonate)** - User impersonation features
- **[General](./admin/general)** - Error codes and technical information

## Getting Started

All API endpoints require authentication unless otherwise specified. Make sure to include your admin access token in the Authorization header:

```
Authorization: Bearer {access_token}
```

## Base URL

All endpoints use the following base URL:
```
http://178.104.58.236:81/api/admin/
```