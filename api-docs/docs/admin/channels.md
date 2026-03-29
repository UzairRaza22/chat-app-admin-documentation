---
sidebar_label: Channels
---

# Channel Management

## Base URL
```
http://178.104.58.236:81/api/admin/channels
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: Channel Listing & Management
  <div key="page1">
    <h2>📄 Page 1: Channel Listing & Management</h2>
    
    <h3>1. List Channels</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> Channel Listing<br/>
    <strong>Purpose:</strong> Retrieve channels with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Channels retrieved successfully",
  "data": {
    "channels": [
      {
        "id": "64a1b2c3d4e5f6789012346",
        "name": "general",
        "description": "General discussion",
        "workspace_name": "ACME Corp",
        "is_private": false,
        "member_count": 25,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Create Channel</h3>
    <p><strong>POST</strong> <code>/create</code></p>
    <p><strong>Category:</strong> Channel Management<br/>
    <strong>Purpose:</strong> Create a new channel.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "new-channel",
  "description": "Channel description",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "is_private": false,
  "team_ids": ["64a1b2c3d4e5f678901234a"]
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Channel created successfully",
  "data": {
    "channel": {
      "id": "64a1b2c3d4e5f6789012346",
      "name": "new-channel",
      "description": "Channel description",
      "workspace_id": "64a1b2c3d4e5f6789012347",
      "is_private": false,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>3. Update Channel</h3>
    <p><strong>PUT</strong> <code>/update/{`{channel_id}`}</code></p>
    <p><strong>Category:</strong> Channel Management<br/>
    <strong>Purpose:</strong> Update channel information.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "updated-channel",
  "description": "Updated description",
  "is_private": true
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Channel updated successfully",
  "data": {
    "channel": {
      "id": "64a1b2c3d4e5f6789012346",
      "name": "updated-channel",
      "description": "Updated description",
      "is_private": true,
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
  </div>,

  // Page 2: Channel Operations & Statistics
  <div key="page2">
    <h2>📄 Page 2: Channel Operations & Statistics</h2>
    
    <h3>4. Delete Channel</h3>
    <p><strong>DELETE</strong> <code>/delete/{`{channel_id}`}</code></p>
    <p><strong>Category:</strong> Channel Operations<br/>
    <strong>Purpose:</strong> Delete a channel.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Channel deleted successfully",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Channel Statistics</h3>
    <p><strong>GET</strong> <code>/statistics/{`{channel_id}`}</code></p>
    <p><strong>Category:</strong> Channel Operations<br/>
    <strong>Purpose:</strong> Get detailed statistics for a specific channel.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Channel statistics retrieved successfully",
  "data": {
    "channel_id": "64a1b2c3d4e5f6789012346",
    "total_messages": 1250,
    "active_members": 18,
    "messages_today": 45,
    "messages_this_week": 320,
    "top_contributors": [
      {
        "user_name": "Jane Smith",
        "message_count": 89
      }
    ]
  }
}`}</code></pre>
  </div>
]} />