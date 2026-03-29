---
sidebar_label: Impersonate
---

# Impersonation Management

## Base URL
```
http://178.104.58.236:81/api/admin/impersonate
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: User Selection & Session Start
  <div key="page1">
    <h2>📄 Page 1: User Selection & Session Start</h2>
    
    <h3>1. List Users for Impersonation</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> User Selection<br/>
    <strong>Purpose:</strong> Get list of users available for impersonation with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Impersonation data retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "workspace_name": "ACME Corp",
        "is_active": true,
        "can_impersonate": true,
        "last_login": "2023-07-01T10:30:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Start Impersonation</h3>
    <p><strong>POST</strong> <code>/start</code></p>
    <p><strong>Category:</strong> Session Management<br/>
    <strong>Purpose:</strong> Start impersonating a specific user.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "user_id": "64a1b2c3d4e5f6789012348"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Impersonation started successfully",
  "data": {
    "impersonation_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "user@example.com"
    },
    "session_expires_at": "2023-07-01T16:00:00.000000Z"
  }
}`}</code></pre>
  </div>,

  // Page 2: Session Management & History
  <div key="page2">
    <h2>📄 Page 2: Session Management & History</h2>
    
    <h3>3. Get Current Impersonation Info</h3>
    <p><strong>GET</strong> <code>/current</code></p>
    <p><strong>Category:</strong> Session Management<br/>
    <strong>Purpose:</strong> Get information about the current impersonation session.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Current impersonation info retrieved successfully",
  "data": {
    "is_impersonating": true,
    "impersonated_user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "user@example.com"
    },
    "started_at": "2023-07-01T14:00:00.000000Z",
    "expires_at": "2023-07-01T16:00:00.000000Z",
    "admin_user": {
      "id": "64a1b2c3d4e5f6789012345",
      "email": "admin@example.com"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>4. Stop Impersonation</h3>
    <p><strong>POST</strong> <code>/stop</code></p>
    <p><strong>Category:</strong> Session Management<br/>
    <strong>Purpose:</strong> Stop current impersonation session.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Impersonation stopped successfully",
  "data": {
    "session_duration": "2 hours 15 minutes",
    "actions_performed": 23,
    "ended_at": "2023-07-01T16:15:00.000000Z"
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Impersonation History</h3>
    <p><strong>GET</strong> <code>/history</code></p>
    <p><strong>Category:</strong> History & Tracking<br/>
    <strong>Purpose:</strong> Get history of impersonation sessions.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
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
}`}</code></pre>
  </div>
]} />