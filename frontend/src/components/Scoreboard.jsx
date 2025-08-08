// Displays team scores

import React from 'react';

const Scoreboard = ({ teams }) => (
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {teams.map(team => (
        <tr key={team.name}>
          <td>{team.name}</td>
          <td>{team.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Scoreboard;