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
  <input type="text" id="searchFilter" placeholder="Search endpoints, methods, fields..." onkeyup="filterContent()" />
  
  <select id="methodFilter" onchange="filterContent()">
    <option value="">All Methods</option>
    <option value="POST">POST</option>
    <option value="GET">GET</option>
  </select>
  
  <select id="categoryFilter" onchange="filterContent()">
    <option value="">All Categories</option>
    <option value="account">Account Management</option>
    <option value="session">Session Management</option>
    <option value="password">Password Recovery</option>
  </select>
  
  <button onclick="clearFilters()">Clear Filters</button>
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

.endpoint-item.hidden {
  display: none;
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

.searchable-content {
  display: none;
}
</style>

<script>
function filterContent() {
  const searchTerm = document.getElementById('searchFilter').value.toLowerCase();
  const methodFilter = document.getElementById('methodFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  const endpoints = document.querySelectorAll('.endpoint-item');
  
  endpoints.forEach(endpoint => {
    const text = endpoint.textContent.toLowerCase();
    const method = endpoint.dataset.method || '';
    const category = endpoint.dataset.category || '';
    
    const matchesSearch = searchTerm === '' || text.includes(searchTerm);
    const matchesMethod = methodFilter === '' || method === methodFilter;
    const matchesCategory = categoryFilter === '' || category === categoryFilter;
    
    if (matchesSearch && matchesMethod && matchesCategory) {
      endpoint.classList.remove('hidden');
    } else {
      endpoint.classList.add('hidden');
    }
  });
}

function clearFilters() {
  document.getElementById('searchFilter').value = '';
  document.getElementById('methodFilter').value = '';
  document.getElementById('categoryFilter').value = '';
  filterContent();
}
</script>

---

## Endpoints

<div class="endpoint-item" data-method="POST" data-category="account">

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

<div class="searchable-content">
Keywords: signup, register, create account, admin registration, email verification, first_name, last_name, email, password, workspace, is_active, created_at
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="account">

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

<div class="searchable-content">
Keywords: verify, verification, activate, token, email verification, account activation, is_active, admin verification
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="session">

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

<div class="searchable-content">
Keywords: login, authenticate, access_token, JWT, session, signin, credentials, email, password, authentication
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="session">

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

<div class="searchable-content">
Keywords: logout, signout, invalidate, session end, access_token, authorization, bearer token
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="password">

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

<div class="searchable-content">
Keywords: forgot password, password reset, reset code, email recovery, password recovery, forgot
</div>

</div>

<div class="endpoint-item" data-method="POST" data-category="password">

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

<div class="searchable-content">
Keywords: reset password, password change, reset token, new password, password update, token verification
</div>

</div>