---
sidebar_label: Messages
---

# Message Management

## Base URL
```
http://178.104.58.236:81/api/admin/messages
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: Message Listing & Statistics
  <div key="page1">
    <h2>📄 Page 1: Message Listing & Statistics</h2>
    
    <h3>1. List Messages</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> Message Listing<br/>
    <strong>Purpose:</strong> Retrieve messages with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Messages retrieved successfully",
  "data": {
    "messages": [
      {
        "id": "64a1b2c3d4e5f6789012349",
        "content": "Hello everyone! Welcome to the team.",
        "user_name": "Jane Smith",
        "channel_name": "general",
        "workspace_name": "ACME Corp",
        "message_type": "text",
        "has_attachments": false,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Message Statistics</h3>
    <p><strong>GET</strong> <code>/statistics</code></p>
    <p><strong>Category:</strong> Message Analytics<br/>
    <strong>Purpose:</strong> Get message statistics with filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Statistics retrieved successfully",
  "data": {
    "total_messages": 15420,
    "messages_today": 245,
    "messages_this_week": 1680,
    "top_channels": [
      {
        "channel_name": "general",
        "message_count": 3450
      }
    ],
    "top_users": [
      {
        "user_name": "Jane Smith",
        "message_count": 890
      }
    ]
  }
}`}</code></pre>
  </div>,

  // Page 2: Message Operations & Moderation
  <div key="page2">
    <h2>📄 Page 2: Message Operations & Moderation</h2>
    
    <h3>3. Delete Message</h3>
    <p><strong>DELETE</strong> <code>/delete/{`{message_id}`}</code></p>
    <p><strong>Category:</strong> Message Operations<br/>
    <strong>Purpose:</strong> Delete a specific message.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Message deleted successfully",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>4. Bulk Delete Messages</h3>
    <p><strong>POST</strong> <code>/bulk-delete</code></p>
    <p><strong>Category:</strong> Message Operations<br/>
    <strong>Purpose:</strong> Delete multiple messages at once.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "message_ids": ["64a1b2c3d4e5f6789012349", "64a1b2c3d4e5f678901234b"],
  "delete_reason": "Spam content"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Messages deleted successfully",
  "data": {
    "deleted_count": 2,
    "failed_count": 0
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Message Moderation</h3>
    <p><strong>POST</strong> <code>/moderate/{`{message_id}`}</code></p>
    <p><strong>Category:</strong> Message Moderation<br/>
    <strong>Purpose:</strong> Moderate a message (flag, hide, or approve).</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "action": "flag",
  "reason": "Inappropriate content",
  "moderator_notes": "Contains offensive language"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Message moderated successfully",
  "data": {
    "message_id": "64a1b2c3d4e5f6789012349",
    "action": "flag",
    "status": "flagged",
    "moderated_at": "2023-07-01T15:30:00.000000Z"
  }
}`}</code></pre>
  </div>
]} />