// Randomizes selected items onto boards

import React from 'react';

const Randomizer = ({ items, onRandomize }) => (
  <div>
    <button onClick={onRandomize}>Randomize Items onto Boards</button>
    {/* Optionally, show which items are selected for randomization */}
  </div>
);

export default Randomizer;