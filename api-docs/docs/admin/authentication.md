---
sidebar_label: Authentication
---

# Admin Authentication

## Base URL
```
http://178.104.58.236:81/api/admin/auth
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

import Pagination from '@site/src/components/Pagination';

<Pagination 
  pageNames={['Account Management', 'Session Management', 'Password Recovery']}
  pages={[
  // Page 1: Account Management
  <div key="page1">
    <h2 id="account-management">Account Management</h2>
    
    <h3 id="admin-signup">1. Admin Signup</h3>
    <p><strong>POST</strong> <code>/signup</code></p>
    <p><strong>Category:</strong> Account Management<br/>
    <strong>Purpose:</strong> Create a new admin account. A verification email will be sent.</p>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "first_name": "John",
  "last_name": "Doe", 
  "email": "admin@example.com",
  "password": "password123",
  "workspace": "My Workspace"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Signup successful!. Please check your email for verification link.",
  "data": {
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": false,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3 id="verify-signup">2. Verify Signup</h3>
    <p><strong>POST</strong> <code>/verify-signup</code></p>
    <p><strong>Category:</strong> Account Management<br/>
    <strong>Purpose:</strong> Verify admin account using the token sent to email.</p>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "token": "verification_token_here"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Account activated successfully! You can now login.",
  "data": {
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": true,
      "created_at": "2023-07-01T12:00:00.000000Z"
    }
  }
}`}</code></pre>
  </div>,

  // Page 2: Session Management
  <div key="page2">
    <h2 id="session-management">Session Management</h2>
    
    <h3 id="admin-login">3. Admin Login</h3>
    <p><strong>POST</strong> <code>/login</code></p>
    <p><strong>Category:</strong> Session Management<br/>
    <strong>Purpose:</strong> Authenticate admin and get access token.</p>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "email": "admin@example.com",
  "password": "password123"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Login successful!",
  "data": {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "admin": {
      "id": "64a1b2c3d4e5f6789012345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "admin@example.com",
      "is_active": true
    }
  }
}`}</code></pre>
    
    <hr/>
    
    <h3 id="admin-logout">4. Admin Logout</h3>
    <p><strong>POST</strong> <code>/logout</code></p>
    <p><strong>Category:</strong> Session Management<br/>
    <strong>Purpose:</strong> Logout admin and invalidate access token.</p>
    
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer {`{access_token}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Logout successful!",
  "data": null
}`}</code></pre>
  </div>,

  // Page 3: Password Recovery
  <div key="page3">
    <h2 id="password-recovery">Password Recovery</h2>
    
    <h3 id="reset-password">5. Forgot Password</h3>
    <p><strong>POST</strong> <code>/forgot-password</code></p>
    <p><strong>Category:</strong> Password Recovery<br/>
    <strong>Purpose:</strong> Request password reset code.</p>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "email": "admin@example.com"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Password reset code sent to your email.",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3 id="reset-password">6. Reset Password</h3>
    <p><strong>POST</strong> <code>/reset-password</code></p>
    <p><strong>Category:</strong> Password Recovery<br/>
    <strong>Purpose:</strong> Reset password using the token sent to email.</p>
    
    <p><strong>Request Body:</strong></p>
    <pre><code>{`{
  "token": "reset_token_here",
  "password": "new_password123"
}`}</code></pre>
    
    <p><strong>Response:</strong></p>
    <pre><code>{`{
  "success": true,
  "message": "Password reset successfully!",
  "data": null
}`}</code></pre>
  </div>
]} />