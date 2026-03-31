---
sidebar_label: History & Tracking
---

# Impersonation History & Tracking

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

## Impersonation History

**GET** `/history`

**Category:** History & Tracking  
**Purpose:** Get history of impersonation sessions.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Impersonation history retrieved successfully",
  "data": {
    "sessions": [
      {
        "id": "session_123",
        "admin_user": "admin@example.com",
        "impersonated_user": "jane@example.com",
        "started_at": "2023-07-01T14:00:00.000000Z",
        "ended_at": "2023-07-01T16:15:00.000000Z",
        "duration": "2 hours 15 minutes",
        "actions_count": 23
      }
    ]
  }
}
```

## Audit Trail Features

- **Complete Session Logs**: Full record of all impersonation sessions
- **Action Tracking**: Detailed log of actions performed during impersonation
- **Time Tracking**: Precise start and end times for all sessions
- **Admin Identification**: Clear record of which admin performed impersonation
- **User Identification**: Record of which users were impersonated

## Compliance & Security

- **Audit Requirements**: Meets compliance requirements for user impersonation
- **Data Retention**: History is retained according to security policies
- **Access Control**: Only authorized administrators can view history
- **Export Capabilities**: History can be exported for compliance reporting