---
sidebar_label: Teams
---

# Team Management

## Base URL
```
http://178.104.58.236:81/api/admin/teams
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: Team Listing & Management
  <div key="page1">
    <h2>📄 Page 1: Team Listing & Management</h2>
    
    <h3>1. List Teams</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> Team Listing<br/>
    <strong>Purpose:</strong> Retrieve teams with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Teams retrieved successfully",
  "data": {
    "teams": [
      {
        "id": "64a1b2c3d4e5f678901234a",
        "name": "Development Team",
        "description": "Backend development team",
        "workspace_name": "ACME Corp",
        "member_count": 8,
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Create Team</h3>
    <p><strong>POST</strong> <code>/create</code></p>
    <p><strong>Category:</strong> Team Management<br/>
    <strong>Purpose:</strong> Create a new team.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "New Team",
  "description": "Team description",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "member_ids": ["64a1b2c3d4e5f6789012348"]
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Team created successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "New Team",
      "description": "Team description",
      "workspace_id": "64a1b2c3d4e5f6789012347",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>3. Update Team</h3>
    <p><strong>PUT</strong> <code>/update/{`{team_id}`}</code></p>
    <p><strong>Category:</strong> Team Management<br/>
    <strong>Purpose:</strong> Update team information.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "name": "Updated Team",
  "description": "Updated description"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Team updated successfully",
  "data": {
    "team": {
      "id": "64a1b2c3d4e5f678901234a",
      "name": "Updated Team",
      "description": "Updated description",
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
  </div>,

  // Page 2: Team Operations & Member Management
  <div key="page2">
    <h2>📄 Page 2: Team Operations & Member Management</h2>
    
    <h3>4. Delete Team</h3>
    <p><strong>DELETE</strong> <code>/delete/{`{team_id}`}</code></p>
    <p><strong>Category:</strong> Team Operations<br/>
    <strong>Purpose:</strong> Delete a team.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Team deleted successfully",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Team Member Management</h3>
    <p><strong>POST</strong> <code>/members/{`{team_id}`}</code></p>
    <p><strong>Category:</strong> Member Management<br/>
    <strong>Purpose:</strong> Add or remove team members.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "action": "add",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "role": "member"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Team members updated successfully",
  "data": {
    "team_id": "64a1b2c3d4e5f678901234a",
    "action": "add",
    "processed": 2,
    "failed": 0,
    "current_member_count": 10
  }
}`}</code></pre>
  </div>
]} />