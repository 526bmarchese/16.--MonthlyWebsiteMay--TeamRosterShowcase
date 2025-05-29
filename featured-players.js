document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded for featured players');
    // Check if players exists
    if (typeof players === 'undefined') {
        console.error('Players array is not defined! Check if players.js is loaded correctly.');
        return;
    }
    
    console.log('Found players array:', players.length, 'players');
    
    // Select 4 featured players from the players array
    const featuredPlayers = players.slice(0, 4);
    const featuredPlayersContainer = document.getElementById('featured-players');
    // Create and append player cards to the container
    featuredPlayers.forEach(player => {
        const playerCard = createPlayerCard(player);
        
        featuredPlayersContainer.appendChild(playerCard);
    });
});

function createPlayerCard(player) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 col-sm-6';
    const card = document.createElement('div');
    card.className = 'featured-player-card';

    const cardInner = document.createElement('div');
    cardInner.className = 'featured-card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'featured-card-front';
    
    const cardContent = `
        <div class="card h-100">
            <img src="${player.photo}" class="card-img-top" alt="${player.firstName} ${player.lastName}" style="max-height: 200px; object-fit: cover;">
            <div class="card-body text-center">
                <h5 class="card-title fw-bold">${player.firstName} ${player.lastName}</h5>
                <p class="card-text">${player.position}</p>
            </div>
        </div>
    `;
    cardFront.innerHTML = cardContent;
    
    const cardBack = document.createElement('div');
    cardBack.className = 'featured-card-back';
    
    const backContent = `
        <h5 class="card-title fw-bold">${player.firstName} ${player.lastName}</h5>
        <div class="fun-fact-container">
            <h6>Fun Fact:</h6>
            <p class="fun-fact-text">${player.funFact}</p>
        </div>
    `;
    cardBack.innerHTML = backContent;
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    col.appendChild(card);
    
    return col;
}