// Stub for exporting board as image

import React from 'react';

const ExportBoard = ({ board }) => {
  const handleExport = () => {
    // TODO: Implement board-to-image export (e.g., using html2canvas)
    alert('Export as image coming soon!');
  };

  return <button onClick={handleExport}>Export Board as Image</button>;
};

export default ExportBoard;