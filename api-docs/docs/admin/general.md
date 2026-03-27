---
sidebar_label: Technical Appendices
---

# General Information

## Errors, Rate Limiting & Notes

### Error Responses

#### Validation Errors (422)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."],
    "password": ["The password must be at least 8 characters."]
  }
}
```

#### Pagination Errors (400)
```json
{
  "success": false,
  "message": "Invalid pagination parameters",
  "errors": {
    "limit": ["Limit cannot exceed 100"],
    "page": ["Page must be a positive integer"]
  }
}
```

#### Filter Errors (400)
```json
{
  "success": false,
  "message": "Invalid filter parameters",
  "errors": {
    "sort_by": ["Field 'invalid_field' is not sortable for this endpoint"],
    "created_from": ["Invalid date format. Use YYYY-MM-DD"]
  }
}
```

#### Authentication Errors (401)
```json
{
  "success": false,
  "message": "Invalid or expired token",
  "data": null
}
```

#### Not Found Errors (404)
```json
{
  "success": false,
  "message": "Resource not found",
  "data": null
}
```

#### Server Errors (500)
```json
{
  "success": false,
  "message": "Internal server error",
  "data": null
}
```

---

### Rate Limiting
- Authentication endpoints: 5 requests per minute
- Management endpoints: 100 requests per minute
- Pagination requests: 200 requests per minute (higher limit for data browsing)

---

### Pagination & Filtering Standards

#### Default Limits
- Default page size: 10 items
- Maximum page size: 100 items
- Default sort order: `desc` (newest first)

#### Date Format Standards
- Date filters: `YYYY-MM-DD` (e.g., `2023-07-01`)
- DateTime filters: `YYYY-MM-DD HH:MM:SS` (e.g., `2023-07-01 14:30:00`)
- All dates are in UTC timezone

#### Text Search Behavior
- Case-insensitive partial matching
- Searches within the specified field only
- Special characters are escaped automatically
- Minimum 2 characters for text search

---

### Notes
- All timestamps are in UTC format (ISO 8601)
- Passwords must be at least 8 characters long
- Admin accounts must be verified before login
- Access tokens expire after 24 hours
- All sensitive operations require valid authentication
- Pagination is available on all list endpoints
- Filters can be combined for precise data retrieval
- Use the `filters_applied` response field to verify active filters
