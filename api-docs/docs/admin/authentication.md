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

## 🔍 Documentation Filters

<div class="filter-container">
  <input type="text" id="searchFilter" placeholder="Search endpoints, methods, fields..." />
  
  <select id="methodFilter">
    <option value="">All Methods</option>
    <option value="POST">POST</option>
    <option value="GET">GET</option>
  </select>
  
  <select id="categoryFilter">
    <option value="">All Categories</option>
    <option value="account">Account Management</option>
    <option value="session">Session Management</option>
    <option value="password">Password Recovery</option>
  </select>
  
  <button>Clear Filters</button>
</div>

<style>
.filter-container {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-container input, .filter-container select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.filter-container button {
  padding: 8px 16px;
  background: #007cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.endpoint-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 15px 0;
  padding: 20px;
  background: #fff;
}

.method-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
}

.method-post { background: #28a745; color: white; }
.method-get { background: #007bff; color: white; }
</style>

---

## Endpoints

<div class="endpoint-item">

### 1. Admin Signup
<span class="method-badge method-post">POST</span> `/signup`

**Category:** Account Management  
**Purpose:** Create a new admin account. A verification email will be sent.

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe", 
  "email": "admin@example.com",
  "password": "password123",
  "workspace": "My Workspace"
}
```

**Response:**
```json
{
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
}
```

</div>

<div class="endpoint-item">

### 2. Verify Signup
<span class="method-badge method-post">POST</span> `/verify-signup`

**Category:** Account Management  
**Purpose:** Verify admin account using the token sent to email.

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

**Response:**
```json
{
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
}
```

</div>

<div class="endpoint-item">

### 3. Admin Login
<span class="method-badge method-post">POST</span> `/login`

**Category:** Session Management  
**Purpose:** Authenticate admin and get access token.

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
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
}
```

</div>

<div class="endpoint-item">

### 4. Admin Logout
<span class="method-badge method-post">POST</span> `/logout`

**Category:** Session Management  
**Purpose:** Logout admin and invalidate access token.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful!",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 5. Forgot Password
<span class="method-badge method-post">POST</span> `/forgot-password`

**Category:** Password Recovery  
**Purpose:** Request password reset code.

**Request Body:**
```json
{
  "email": "admin@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset code sent to your email.",
  "data": null
}
```

</div>

<div class="endpoint-item">

### 6. Reset Password
<span class="method-badge method-post">POST</span> `/reset-password`

**Category:** Password Recovery  
**Purpose:** Reset password using the token sent to email.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "password": "new_password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset successfully!",
  "data": null
}
```

</div>