let planets = [];

function displayPlanets(data) {
    const grid = document.getElementById('planetGrid');
    if (!grid) return;
    grid.innerHTML = '';
  
data.forEach(p => {
  const card = document.createElement('div');
  card.className = 'planet-card';
  card.innerHTML = `
    <h3> ${p.name}</h3>
    <p><strong>HostStar:</strong> ${p.star}</p>
    <p><strong>Radius:</strong> ${p.radius}</p>
    <p><strong>Orbital Period:</strong> ${p.period} </p>
    <p><strong>Temperature:</strong> ${p.temp}</p>
    <p><strong>Method:</strong> ${p.method}</p>
   `;
   grid.appendChild(card);
  });
}

function
createDiscoveryChart(data) {
    const canvas = document.getElementById('planetChart');
    if (!canvas) return;
    const counts = {};
    data.forEach(p => { counts[p.method] = (counts[p.method] || 0) + 1;
 });

 new Chart(canvas, {
     type: 'bar',
     data: {
     labels: Object.keys(counts),
     datasets: [{
     label: 'Number of Exoplanets',
     data: Object.values(counts),
 }]
},       
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Exoplanets by Discovery Method'
             }
            }     
           }
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

async function loadPlanets() { try {
    const response = await fetch('planets.json');
    if (!response.ok) { throw new
 Error('Could not load planets.json');
                      }
    const nasaData = await response.json();
    planets = nasaData.map(p => ({
      name: p.pl_name || 'Unknown',
      star: p.hostname || 'Unknown',
      radius: p.pl_rade != null ? `${p.pl_rade} Earth Radii` : 'N/A',
      period: p.pl_orbper != null ? `${p.pl_orbper} days` : 'N/A',
      temp: p.pl_eqt != null ? `${p.pl_eqt} K` : 'N/A',
      method: p.discoverymethod || 'Unknown'
    }));       

  displayPlanets(planets);
  createDiscoveryChart(planets);  
} catch (error) {
  console.error('Error loading NASA data:', error);
  const grid = document.getElementById('planetGrid');
  if (grid) { grid.innerHTML = `
      <p>Unable to load NASA exoplanet data.</p>
      `;
      }
    }
  }                           

// Event listener for typing in search
document.addEventListener('DOMContentLoaded', () => {
  loadPlanets();

  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', filterPlanets);
    input.addEventListener('keyup', filterPlanets);
  }
});
  
  
