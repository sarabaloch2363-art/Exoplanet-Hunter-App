const planets = [
  { name: "11 Com b", radius: "12 Earth Radii", temp: "803 K", method: "Radial Velocity" },
  { name: "Kepler-22b", radius: "2.4 Earth Radii", temp: "262 K", method: "Transit" },
  { name: "Proxima Centauri b", radius: "1.07 Earth Radii", temp: "234 K", method: "Radical Velocity" },
  { name: "TRAPPIST-1e", radius: "0.92 Earth Radii", temp: "251 K", method: "Transit" }
];

function displayPlanets(data) {
    const grid = document.getElementById('planetGrid');
    if (!grid) return;
    grid.innerHTML = '';
  
data.forEach(p => {
  const card = document.createElement('div');
  card.className = 'planet-card';
  card.innerHTML = `
    <h3> ${p.name}</h3>
    <p><strong>Radius:</strong> ${p.radius}</p>
    <p><strong>Temperature:</strong> ${p.temp}</p>
    <p><strong>Method:</strong> ${p.method}</p>
   `;
   grid.appendChild(card);
  });
}

// Search function to match index.html
function filterPlanets() {
  const input = document.getElementById('search-input');
  if (!input) return;
  
  const query = input.value.toLowerCase().trim();
  const filtered = planets.filter(p => p.name.toLowerCase().includes(query));
  displayPlanets(filtered);
}

// Event listener for typing in search
document.addEventListener('DOMContentLoaded', () => {
  displayPlanets(planets);

  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('keyup', filterPlanets);
    input.addEventListener('input', filterPlanets);
  }
});

// Run immediately
displayPlanets(planets);
  
  
