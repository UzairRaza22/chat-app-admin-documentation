import React, { useState } from 'react';

export default function Pagination({ pages }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      {/* Search/Filter Bar */}
      <div style={{
        background: '#f5f5f5',
        padding: '15px',
        borderRadius: '8px',
        margin: '20px 0',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <input 
          type="text" 
          placeholder="Search endpoints, methods, categories..." 
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            flex: '1',
            minWidth: '200px'
          }}
        />
        <select style={{
          padding: '8px 12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          <option value="">All Methods</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <button style={{
          padding: '8px 16px',
          background: '#007cba',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Clear Filters
        </button>
      </div>

      {/* Page Content */}
      <div>
        {pages[currentPage]}
      </div>

      {/* Pagination Controls */}
      <div style={{
        textAlign: 'center',
        margin: '30px 0',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>
          Page {currentPage + 1} of {pages.length}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            style={{
              padding: '8px 16px',
              background: currentPage === 0 ? '#e9ecef' : '#007cba',
              color: currentPage === 0 ? '#6c757d' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous
          </button>
          
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              style={{
                padding: '8px 12px',
                background: currentPage === index ? '#007cba' : '#f0f0f0',
                color: currentPage === index ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '40px'
              }}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
            disabled={currentPage === pages.length - 1}
            style={{
              padding: '8px 16px',
              background: currentPage === pages.length - 1 ? '#e9ecef' : '#007cba',
              color: currentPage === pages.length - 1 ? '#6c757d' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === pages.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}