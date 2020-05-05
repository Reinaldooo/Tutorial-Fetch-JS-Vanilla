const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
  return await fetch(apiUrl)
    .then(async (r) => await r.json())
}

function renderCards(cards) {
  cardsContainer.innerHTML = "";
  // cards.map(renderCard);
  let i = 0;
  setInterval(() => {
    renderCard(cards[i])
    i++
  }, 1000)
}

function renderCard(card) {
  const div = document.createElement("div");
  div.style.width = "20rem";
  div.style.margin = "2rem";
  div.className = "card";
  div.innerHTML = `
  <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">
      Tipo: ${card.property_type}
    </p>
    <p class="card-text">
    Preço: R$${card.price},00
  </p>
  </div>
`;
  cardsContainer.appendChild(div);
}

async function main() {
  data = await fetchCards();
  if(data) {
    renderCards(data);
  }
}

main();
