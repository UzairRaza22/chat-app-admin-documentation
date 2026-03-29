---
sidebar_label: Workspaces
---

# Workspace Management

## Base URL
```
http://178.104.58.236:81/api/admin/workspaces
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: Workspace Listing & Management
  <div key="page1">
    <h2>📄 Page 1: Workspace Listing & Management</h2>
    
    <h3>1. List Workspaces</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> Workspace Listing<br/>
    <strong>Purpose:</strong> Retrieve workspaces with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Workspaces retrieved successfully",
  "data": {
    "workspaces": [
      {
        "id": "64a1b2c3d4e5f6789012347",
        "name": "ACME Corp",
        "description": "Main corporate workspace",
        "is_active": true,
        "subscription_plan": "pro",
        "user_count": 150,
        "channel_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Create Workspace</h3>
    <p><strong>POST</strong> <code>/create</code></p>
    <p><strong>Category:</strong> Workspace Management<br/>
    <strong>Purpose:</strong> Create a new workspace.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "New Workspace",
  "description": "Workspace description",
  "owner_id": "64a1b2c3d4e5f6789012348",
  "subscription_plan": "pro"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Workspace created successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "New Workspace",
      "description": "Workspace description",
      "is_active": true,
      "subscription_plan": "pro",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>3. Update Workspace</h3>
    <p><strong>PUT</strong> <code>/update/{`{workspace_id}`}</code></p>
    <p><strong>Category:</strong> Workspace Management<br/>
    <strong>Purpose:</strong> Update workspace information.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "Updated Workspace",
  "description": "Updated description",
  "is_active": false
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Workspace updated successfully",
  "data": {
    "workspace": {
      "id": "64a1b2c3d4e5f6789012347",
      "name": "Updated Workspace",
      "description": "Updated description",
      "is_active": false,
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
  </div>,

  // Page 2: Workspace Operations & Analytics
  <div key="page2">
    <h2>📄 Page 2: Workspace Operations & Analytics</h2>
    
    <h3>4. Delete Workspace</h3>
    <p><strong>DELETE</strong> <code>/delete/{`{workspace_id}`}</code></p>
    <p><strong>Category:</strong> Workspace Operations<br/>
    <strong>Purpose:</strong> Delete a workspace.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Workspace deleted successfully",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Workspace Analytics</h3>
    <p><strong>GET</strong> <code>/analytics/{`{workspace_id}`}</code></p>
    <p><strong>Category:</strong> Workspace Analytics<br/>
    <strong>Purpose:</strong> Get detailed analytics for a workspace.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
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
}`}</code></pre>
  </div>
]} />