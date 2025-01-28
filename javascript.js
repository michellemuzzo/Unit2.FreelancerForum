const names = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Photographer'];

let freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 }
];

const freelancerList = document.querySelector('#freelancer-list');
const avgPriceElement = document.querySelector('#avg-price');

function renderFreelancers() {
  freelancerList.innerHTML = ''; 
  freelancers.forEach(freelancer => {
    const listItem = document.createElement('tr');
    listItem.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    freelancerList.appendChild(listItem);
  });
}

function calculateAveragePrice() {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return (total / freelancers.length).toFixed(2);
}

function updateAveragePrice() {
  const avgPrice = calculateAveragePrice();
  avgPriceElement.textContent = avgPrice;
}

function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20; 

  const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };
  freelancers.push(newFreelancer);

  renderFreelancers();
  updateAveragePrice();
}

renderFreelancers();
updateAveragePrice();
setInterval(addRandomFreelancer, 3000); 


