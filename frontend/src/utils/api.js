// API helper functions (use fetch/axios to call backend)

export async function getBoards() {
  const res = await fetch('/api/boards');
  return res.json();
}

// Add more API helpers as needed (createBoard, getTeams, etc.)