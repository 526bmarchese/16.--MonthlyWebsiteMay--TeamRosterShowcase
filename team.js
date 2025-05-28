// Function to display all players
function render() {
    const container = document.getElementById('teamContainer');
    container.innerHTML = '';
    
    players.forEach(player => {
        // Create player's full name from firstName and lastName
        const fullName = `${player.firstName} ${player.lastName}`;
        
        // Check if player is team captain (Aaron Judge)
        const isCaptain = player.firstName === 'Aaron' && player.lastName === 'Judge';
        
        // Create the player card HTML
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${player.photo}" class="card-img-top" alt="${fullName}">
                    <div class="card-body">
                        <h5 class="card-title ${isCaptain ? 'text-primary' : ''}">${fullName}</h5>
                        <p class="card-text">${player.position}</p>
                        <button class="btn btn-info" onclick="showPlayerInfo('${player.firstName}', '${player.lastName}')">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Function to show player info in modal
function showPlayerInfo(firstName, lastName) {
    const player = players.find(p => p.firstName === firstName && p.lastName === lastName);
    if (!player) return;

    const fullName = `${player.firstName} ${player.lastName}`;

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="text-center">
            <img src="${player.photo}" alt="${fullName}" class="rounded mb-3" style="max-width: 200px;">
            <h4>${fullName}</h4>
            <p class="text-muted">${player.position}</p>
            <div class="alert alert-info">
                Fun Fact: ${player.funFact}
            </div>
        </div>
    `;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('playerModal'));
    modal.show();
}

// Load players when the page loads
document.addEventListener('DOMContentLoaded', render);