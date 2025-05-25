
// Get positional text for display
function getPositionName(pos) {
    const positions = {
        'P': 'Pitcher',
        'SP': 'Starting Pitcher',
        'RP': 'Relief Pitcher',
        'C': 'Catcher',
        '1B': 'First Baseman',
        '2B': 'Second Baseman',
        '3B': 'Third Baseman',
        'SS': 'Shortstop',
        'LF': 'Left Fielder',
        'CF': 'Center Fielder',
        'RF': 'Right Fielder',
        'DH': 'Designated Hitter'
    };
    return positions[pos] || pos;
}

// Function to display players
function displayPlayers() {
    const container = document.getElementById('teamContainer');
    container.innerHTML = '';
    
    players.forEach(player => {
        // Check if player has a special position
        const isSpecial = player.position === 'RF' && player.lastName === 'Judge';  // Judge is team captain
        const fullName = `${player.firstName} ${player.lastName}`;
        const position = getPositionName(player.position);
        const role = isSpecial ? `${position} - Team Captain` : position;
        
        // Create the player card HTML
        container.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <div class="card player-card">
                    <img src="${player.photo}" class="player-image" alt="${fullName}">
                    <div class="card-body">
                        <h5 class="card-title">${fullName}</h5>
                        <p class="card-text ${isSpecial ? 'special-role' : ''}">${role}</p>
                        <button class="btn btn-primary" onclick="showPlayerDetails('${player.lastName}')">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Function to show player details in modal
function showPlayerDetails(lastName) {
    const player = players.find(p => p.lastName === lastName);
    if (!player) return;

    const fullName = `${player.firstName} ${player.lastName}`;
    const position = getPositionName(player.position);

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <img src="${player.photo}" alt="${fullName}" class="rounded">
        <h4>${fullName}</h4>
        <p class="mb-2">${position}</p>
        <p class="text-muted">Age: ${player.age}</p>
        <div class="alert alert-info">
            ${player.funFact}
        </div>
    `;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('playerModal'));
    modal.show();
}

// Load players when the page loads
document.addEventListener('DOMContentLoaded', displayPlayers);
