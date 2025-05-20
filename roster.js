document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary DOM elements
    const grid = document.getElementById('rosterGrid');
    const featuredPlayersGrid = document.getElementById('featuredPlayers');
    const positionFilter = document.getElementById('positionFilter');
    const sortOrder = document.getElementById('sortOrder');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    // Current filtered and sorted player list
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
                <div class="card h-100 shadow-sm player-card">
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
    
    const filterByPosition = (list, position) => {
        if (position === 'All') return list;
        
        // Handle pitcher categories (P, SP, RP)
        if (position === 'P') {
            return list.filter(p => ['P', 'SP', 'RP'].includes(p.position));
        }
        
        return list.filter(p => p.position === position);
    };const sortPlayers = (list, criterion) => {
        const sortedList = [...list];
        
        switch (criterion) {
            case 'name':
                return sortedList.sort((a, b) => {
                    const nameA = `${a.lastName}, ${a.firstName}`.toLowerCase();
                    const nameB = `${b.lastName}, ${b.firstName}`.toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            case 'age':
                return sortedList.sort((a, b) => a.age - b.age);
            case 'position':
                return sortedList.sort((a, b) => a.position.localeCompare(b.position));
            default:
                return sortedList;
        }
    };
    const searchPlayers = (list, query) => {
        if (!query) return list;
        
        const searchTerm = query.toLowerCase();
        return list.filter(p => {
            const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
            return fullName.includes(searchTerm);
        });
    };
    
    // Apply all filters and sorting
    const applyFilters = () => {
        const position = positionFilter ? positionFilter.value : 'All';
        const sort = sortOrder ? sortOrder.value : 'name';
        const search = searchInput ? searchInput.value : '';
        
        // Apply filters in sequence
        let filteredList = filterByPosition(players, position);
        filteredList = searchPlayers(filteredList, search);
        filteredList = sortPlayers(filteredList, sort);
        
        currentPlayerList = filteredList;
        render(filteredList);
    };
    
    // Event listeners for filters
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
    
    // Featured players for the home page
    const renderFeaturedPlayers = () => {
        if (!featuredPlayersGrid) return;
        
        // Select a few star players to feature
        const featuredPlayersList = players
            .filter(p => ['RF', 'SP', 'SS', 'CF'].includes(p.position))
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
            
        render(featuredPlayersList, featuredPlayersGrid, 'col-md-6 col-lg-3');
    };
    if (grid) {
        render(players);
    }
    renderFeaturedPlayers();
});