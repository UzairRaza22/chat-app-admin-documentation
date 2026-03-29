---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
```

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: User Listing & Management
  <div key="page1">
    <h2>📄 Page 1: User Listing & Management</h2>
    
    <h3>1. List Users</h3>
    <p><strong>GET</strong> <code>/list</code></p>
    <p><strong>Category:</strong> User Listing<br/>
    <strong>Purpose:</strong> Retrieve users with pagination and filtering support.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "64a1b2c3d4e5f6789012348",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "user@example.com",
        "is_active": true,
        "workspace_name": "ACME Corp",
        "role": "member",
        "created_at": "2023-07-01T12:00:00.000000Z"
      }
    ]
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>2. Create User</h3>
    <p><strong>POST</strong> <code>/create</code></p>
    <p><strong>Category:</strong> User Management<br/>
    <strong>Purpose:</strong> Create a new user account.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "first_name": "John",
  "last_name": "Doe",
  "email": "user@example.com",
  "password": "password123",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "role": "member"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "John",
      "last_name": "Doe",
      "email": "user@example.com",
      "is_active": true,
      "role": "member",
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3>3. Update User</h3>
    <p><strong>PUT</strong> <code>/update/{`{user_id}`}</code></p>
    <p><strong>Category:</strong> User Management<br/>
    <strong>Purpose:</strong> Update user information.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "first_name": "Jane",
  "last_name": "Smith",
  "is_active": false,
  "role": "admin"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "user": {
      "id": "64a1b2c3d4e5f6789012348",
      "first_name": "Jane",
      "last_name": "Smith",
      "is_active": false,
      "role": "admin",
      "updated_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
  </div>,

  // Page 2: User Operations
  <div key="page2">
    <h2>📄 Page 2: User Operations</h2>
    
    <h3>4. Delete User</h3>
    <p><strong>DELETE</strong> <code>/delete/{`{user_id}`}</code></p>
    <p><strong>Category:</strong> User Operations<br/>
    <strong>Purpose:</strong> Delete a user account.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>5. Bulk User Operations</h3>
    <p><strong>POST</strong> <code>/bulk-action</code></p>
    <p><strong>Category:</strong> User Operations<br/>
    <strong>Purpose:</strong> Perform bulk operations on multiple users.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "action": "deactivate",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "reason": "Inactive users cleanup"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Bulk operation completed successfully",
  "data": {
    "processed": 2,
    "failed": 0,
    "results": [
      {
        "user_id": "64a1b2c3d4e5f6789012348",
        "status": "success"
      }
    ]
  }
}`}</code></pre>
  </div>
]} />