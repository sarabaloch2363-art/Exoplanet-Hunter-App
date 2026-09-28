const planets = [
  { name: "11 Com b", radius: "12 Earth Radii", temp: "803 K", method: "Radial Velocity" },
  { name: "Kepler-22b", radius: "2.4 Earth Radii", temp: "262 K", method: "Transit" }'
  { name: "Proxima Centauri b", radius: "1.07 Earth Radii", temp: "234 K", method: "Radical Velocity" },
  { name: "TRAPPIST-1E", radius: "0.92 Earth Radii", temp: "251 K", method: "Transit" }
];

function displayPlanets(data) {
    const grid = document.getElementById('planetGrid') || document.queryselector('.grid') || document.body;
  
// Clean screen except search bar
  const existingCards = document.querySelectorAll('.planet-card');
  existingCards.forEach(card => card.remove());
  
data.forEach(p => {
  const card = document.createElement('div');
  card.className = 'planet-card';
  card.style.border = '1px solid #4a90e2';
  card.style.margin = '10px auto';
  card.style.padding = '15px';
  card.style.borderRadius = '8px';
  card.style.maxWidth = '400px';
  card.style.backgroundColor = 'rgba(255, 255, 0.1)';
  card.style.color = '#fff';
  
  card.innerHTML = `
    <h3 style="color: #4fc3f7;"> ${p.name}</h3>
    <p><strong>Radius:</strong> ${p.radius}</p>
    <p><strong>Temperature:</strong> ${p.temp}</p>
    <p><strong>Method:</strong> ${p.method}</p>
   `;
   grid.appendChild(card);
  });
}

// Search feature setup
document.addEventListener('DOMContentLoaded', () => {
  displayPlanets(planets);
  
const searchInput = document.querySelector('input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
  const filtered = planets.filter(p => p.name.toLowerCase().includes(query));
  displayPlanets(filtered);
});
}
});
// Direct call if page is already loaded
displayPlanets(planets);
  
  
  
