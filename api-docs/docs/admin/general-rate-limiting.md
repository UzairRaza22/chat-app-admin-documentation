---
sidebar_label: Rate Limiting
---

# Rate Limiting

## API Rate Limits

To ensure fair usage and system stability, the API implements rate limiting on various endpoints.

---

## Rate Limit Categories

### Authentication Endpoints
- **Limit:** 5 requests per minute
- **Applies to:** Login, logout, password reset, verification
- **Purpose:** Prevent brute force attacks

### Management Endpoints
- **Limit:** 100 requests per minute
- **Applies to:** User management, workspace operations, channel management
- **Purpose:** Prevent system overload

### Bulk Operations
- **Limit:** 10 requests per minute
- **Applies to:** Bulk user operations, bulk message operations
- **Purpose:** Prevent resource exhaustion

---

## Rate Limit Headers

When rate limits are enforced, the following headers are included in responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1625097600
```

- **X-RateLimit-Limit:** Maximum requests allowed in the time window
- **X-RateLimit-Remaining:** Number of requests remaining in current window
- **X-RateLimit-Reset:** Unix timestamp when the rate limit resets

---

## Rate Limit Exceeded Response

**Status Code:** 429 Too Many Requests

**Response Format:**
```json
{
  "success": false,
  "message": "Rate limit exceeded. Please try again later.",
  "data": {
    "retry_after": 60
  }
}
```

## Best Practices

- Implement exponential backoff for retries
- Monitor rate limit headers in responses
- Cache responses when possible to reduce API calls
- Use bulk operations for multiple related requests