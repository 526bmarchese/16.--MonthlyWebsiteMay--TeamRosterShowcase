document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid');
    const positionFilter = document.getElementById('positionFilter');
    const sortOrder = document.getElementById('sortOrder');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');

    let currentPlayerList = [...players];
    const render = (list, targetElement = grid, columns = 'col-md-4 col-lg-3') => {
        if (!targetElement) return;

        targetElement.innerHTML = '';

        if (list.length === 0) {
            targetElement.innerHTML = '<div class="col-12 text-center py-5"><p class="lead">No players found matching your criteria.</p></div>';
            return;
        }

        list.forEach(p => {
            const col = document.createElement('div');
            col.className = columns;

            col.innerHTML = `
                <div class="card h-100 player-card">
                    <div class="player-card-inner">
                        <div class="player-card-front">
                            <div class="position-relative">
                                <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top player-photo">
                                <div class="position-indicator badge-pos-${p.position}">${p.position}</div>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                                <p class="mb-2 text-primary fw-bold">${getPositionName(p.position)}</p>
                                <p class="small text-muted mb-0">Age: ${p.age}</p>
                            </div>
                        </div>
                        <div class="player-card-back">
                            <h5 class="card-title text-white">${p.firstName} ${p.lastName}</h5>
                            <div class="fun-fact-container">
                                <p class="fun-fact-text">"${p.funFact || 'Fun fact coming soon!'}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            targetElement.appendChild(col);
        });
    };
    const getPositionName = (posCode) => {
        const positions = {
            'P': 'Pitcher',
            'C': 'Catcher',
            '1B': 'First Base',
            '2B': 'Second Base',
            '3B': 'Third Base',
            'SS': 'Shortstop',
            'LF': 'Left Field',
            'CF': 'Center Field',
            'RF': 'Right Field',
            'DH': 'Designated Hitter',
            'SP': 'Starting Pitcher',
            'RP': 'Relief Pitcher'
        };

        return positions[posCode] || posCode;
    };

    // Filter players by their position
    const filterByPosition = (list, position) => {
        if (position === 'All') {
            return list;
        }
        
        if (position === 'P') {
            const pitchers = [];
            
            // Loop through each player
            for (let i = 0; i < list.length; i++) {
                // Check if the player is any type of pitcher
                if (list[i].position === 'P' || 
                    list[i].position === 'SP' || 
                    list[i].position === 'RP') {
                    pitchers.push(list[i]);
                }
            }
            return pitchers;
        }
        
        const filteredPlayers = [];
        
        for (let i = 0; i < list.length; i++) {
            // Check if the players position matches
            if (list[i].position === position) {
                filteredPlayers.push(list[i]);
            }
        }
        
        return filteredPlayers;
    };
    
    // Sort players based on different criteria
    const sortPlayers = (list, criterion) => {
        // Create a copy of the list so we dont change the original
        const sortedList = [];
        for (let i = 0; i < list.length; i++) {
            sortedList.push(list[i]);
        }
        
        // Sort by name (last, first)
        if (criterion === 'name') {
            sortedList.sort(function(a, b) {
                // Create full names in "lastName, firstName" format
                const nameA = a.lastName + ", " + a.firstName;
                const nameB = b.lastName + ", " + b.firstName;
                
                // Convert to lowercase 
                const lowerA = nameA.toLowerCase();
                const lowerB = nameB.toLowerCase();
                
                // Compare the names
                if (lowerA < lowerB) return -1;
                if (lowerA > lowerB) return 1;
                return 0;
            });
        }
        // Sort by age (youngest to oldest)
        else if (criterion === 'age') {
            sortedList.sort(function(a, b) {
                return a.age - b.age;
            });
        }
        // Sort by position code
        else if (criterion === 'position') {
            sortedList.sort(function(a, b) {
                if (a.position < b.position) return -1;
                if (a.position > b.position) return 1;
                return 0;
            });
        }
        
        return sortedList;
    };
    // Search players by name
    const searchPlayers = (list, query) => {
        // If search is empty, return the full list
        if (!query) {
            return list;
        }
        
        const searchTerm = query.toLowerCase();
        
        const matchingPlayers = [];
        
        for (let i = 0; i < list.length; i++) {
            // Get the player's full name
            const fullName = list[i].firstName + " " + list[i].lastName;
            const fullNameLower = fullName.toLowerCase();
            if (fullNameLower.includes(searchTerm)) {
                matchingPlayers.push(list[i]);
            }
        }
        
        return matchingPlayers;
    };

    const applyFilters = () => {
        const position = positionFilter ? positionFilter.value : 'All';
        const sort = sortOrder ? sortOrder.value : 'name';
        const search = searchInput ? searchInput.value : '';
        let filteredList = filterByPosition(players, position);
        filteredList = searchPlayers(filteredList, search);
        filteredList = sortPlayers(filteredList, sort);

        currentPlayerList = filteredList;
        render(filteredList);
    };

    if (positionFilter) {
        positionFilter.addEventListener('change', applyFilters);
    }

    if (sortOrder) {
        sortOrder.addEventListener('change', applyFilters);
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            applyFilters();
        });
    }

    if (grid) {
        render(players);
    }
});