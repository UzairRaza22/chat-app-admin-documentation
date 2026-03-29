---
sidebar_label: Technical Appendices
---

# General Information

## Errors, Rate Limiting & Notes

---

import Pagination from '@site/src/components/Pagination';

<Pagination pages={[
  // Page 1: Error Responses & Technical Information
  <div key="page1">
    <h2>📄 Page 1: Error Responses & Technical Information</h2>
    
    <h3>Error Responses</h3>
    
    <h4>Validation Errors (422)</h4>
    <pre><code>{`{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."],
    "password": ["The password must be at least 8 characters."]
  }
}`}</code></pre>
    
    <h4>Authentication Errors (401)</h4>
    <pre><code>{`{
  "success": false,
  "message": "Invalid or expired token",
  "data": null
}`}</code></pre>
    
    <h4>Not Found Errors (404)</h4>
    <pre><code>{`{
  "success": false,
  "message": "Resource not found",
  "data": null
}`}</code></pre>
    
    <h4>Server Errors (500)</h4>
    <pre><code>{`{
  "success": false,
  "message": "Internal server error",
  "data": null
}`}</code></pre>
    
    <hr/>
    
    <h3>Rate Limiting</h3>
    <ul>
      <li>Authentication endpoints: 5 requests per minute</li>
      <li>Management endpoints: 100 requests per minute</li>
    </ul>
    
    <hr/>
    
    <h3>Notes</h3>
    <ul>
      <li>All timestamps are in UTC format (ISO 8601)</li>
      <li>Passwords must be at least 8 characters long</li>
      <li>Admin accounts must be verified before login</li>
      <li>Access tokens expire after 24 hours</li>
      <li>All sensitive operations require valid authentication</li>
    </ul>
  </div>
]} />
