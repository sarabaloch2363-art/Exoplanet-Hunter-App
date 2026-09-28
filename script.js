const planets = [
  { name: "11 Com b", radius: "12 Earth Radii", temp: "803 K", method: "Radial Velocity" },
  { name: "Kepler-22b", radius: "2.4 Earth Radii", temp: "262 K", method: "Transit" }'
  { name: "Proxima Centauri b", radius: "1.07 Earth Radii", temp: "234 K", method: "Radical Velocity" },
  { name: "TRAPPIST-1E", radius: "0.92 Earth Radii", temp: "251 K", method: "Transit" }
];

function displayPlanets(data) {
    const grid = document.getElementById('planetGrid');
    grid.innerHTML = '';
    data.forEach(p => {

 const card = document.createElement('div');
 card.className = 'planet-card';
  card.innerHTML = `
    <h3>${p.name}</h3>
    <p><strong>Radius:</strong> ${p.radius}</p>
    <p><strong>Temperature:</strong> ${p.temp}</p>
    <p><strong>Method:</strong> ${p.method}</p>
   `;
   grid.appendChild(card);
  });
}

// Function call on page load
displayPlanets(planets);

// Search Functionality (Opyional)
function searchPlanets() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = planets.filter(p => p.name.toLowerCase().includes(query));
  displayPlanets(filtered);
} 
