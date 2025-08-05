import React from 'react';
import Column from './Column';

const Board = () => {
  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      {columns.map((title, index) => (
        <Column key={index} title={title} />
      ))}
    </div>
  );
};

export default Board;
