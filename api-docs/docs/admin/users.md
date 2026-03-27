---
sidebar_label: Users
---

# User Management

## Base URL
```
http://178.104.58.236:81/api/admin/users
```

---

## 📄 Page 1 of 2: User Listing & Management

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

---

## 📄 Page 2 of 2: User Operations

### 4. Delete User
**DELETE** `/delete/{user_id}`

**Category:** User Operations  
**Purpose:** Delete a user account.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

### 5. Bulk User Operations
**POST** `/bulk-action`

**Category:** User Operations  
**Purpose:** Perform bulk operations on multiple users.

**Headers:**
```
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "action": "deactivate",
  "user_ids": ["64a1b2c3d4e5f6789012348", "64a1b2c3d4e5f6789012349"],
  "reason": "Inactive users cleanup"
}
```

**Response:**
```json
{
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
}
```

---

**Navigation:** Page 1 | Page 2 (All content shown above)