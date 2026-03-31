---
sidebar_label: User Management
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
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

## User Management

### 1. List Users
**GET** `/list`

**Category:** User Listing  
**Purpose:** Retrieve users with pagination and filtering support.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
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
}
```

---

### 2. Create User
**POST** `/create`

**Category:** User Management  
**Purpose:** Create a new user account.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "user@example.com",
  "password": "password123",
  "workspace_id": "64a1b2c3d4e5f6789012347",
  "role": "member"
}
```

**Response:**
```json
{
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
}
```

---

### 3. Update User
**PUT** `/update/{user_id}`

**Category:** User Management  
**Purpose:** Update user information.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "is_active": false,
  "role": "admin"
}
```

**Response:**
```json
{
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
}
```