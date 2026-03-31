---
sidebar_label: Technical Notes
---

# Technical Notes

## Important Implementation Details

These notes apply to all API endpoints and should be considered when integrating with the Chat App Admin API.

---

## Data Formats

### Timestamps
- All timestamps are in UTC format (ISO 8601)
- Format: `YYYY-MM-DDTHH:MM:SS.000000Z`
- Example: `2023-07-01T12:00:00.000000Z`

### IDs
- All entity IDs are MongoDB ObjectIds
- Format: 24-character hexadecimal string
- Example: `64a1b2c3d4e5f6789012348`

### Pagination
- Default page size: 20 items
- Maximum page size: 100 items
- Page numbering starts from 1

---

## Security Requirements

### Password Requirements
- Minimum length: 8 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number
- Special characters are recommended but not required

### Account Verification
- Admin accounts must be verified before login
- Verification emails expire after 24 hours
- Unverified accounts cannot access API endpoints

### Token Management
- Access tokens expire after 24 hours
- Refresh tokens expire after 30 days
- Tokens should be stored securely and never exposed in client-side code

---

## API Behavior

### Soft Deletes
- Most entities use soft deletes (marked as deleted but not removed)
- Deleted entities are excluded from list operations by default
- Permanent deletion may be available for certain entities

### Concurrent Operations
- The API handles concurrent requests safely
- Optimistic locking is used for critical operations
- Retry failed requests with exponential backoff

### Data Validation
- All input data is validated before processing
- Validation errors return detailed field-level error messages
- Client-side validation should mirror server-side rules

---

## Performance Considerations

### Caching
- Responses include appropriate cache headers
- Static data can be cached for up to 1 hour
- Dynamic data should not be cached

### Bulk Operations
- Use bulk endpoints when operating on multiple entities
- Bulk operations are more efficient than individual requests
- Monitor bulk operation limits to avoid rate limiting