import React, { useState } from 'react';

export default function Pagination({ pages, pageNames }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      {/* Page Content */}
      <div className="markdown">
        {pages[currentPage]}
      </div>

      {/* Pagination Controls - Only Previous/Next with page names */}
      <div style={{
        textAlign: 'center',
        margin: '30px 0',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e1e4e8'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                style={{
                  padding: '12px 20px',
                  background: '#007cba',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>← Previous</span>
                <span style={{ fontSize: '12px', opacity: 0.9 }}>
                  {pageNames && pageNames[currentPage - 1] ? pageNames[currentPage - 1] : `Page ${currentPage}`}
                </span>
              </button>
            )}
          </div>
          
          <div style={{ 
            fontSize: '16px', 
            color: '#333',
            fontWeight: '600',
            flex: 1,
            textAlign: 'center'
          }}>
            {pageNames && pageNames[currentPage] ? pageNames[currentPage] : `Page ${currentPage + 1}`}
          </div>
          
          <div style={{ flex: 1, textAlign: 'right' }}>
            {currentPage < pages.length - 1 && (
              <button
                onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                style={{
                  padding: '12px 20px',
                  background: '#007cba',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Next →</span>
                <span style={{ fontSize: '12px', opacity: 0.9 }}>
                  {pageNames && pageNames[currentPage + 1] ? pageNames[currentPage + 1] : `Page ${currentPage + 2}`}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}