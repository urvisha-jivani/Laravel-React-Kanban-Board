import React from 'react';

const Column = ({ title }) => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#f4f5f7',
        padding: '1rem',
        borderRadius: '8px',
        minHeight: '300px',
      }}
    >
      <h3>{title}</h3>
      {/* Cards will go here later */}
    </div>
  );
};

export default Column;
