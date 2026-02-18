// Game Logic

// Ensure data is loaded
if (typeof pokemonTops === 'undefined') {
    console.error("Pokemon data not loaded!");
    document.body.innerHTML = "<h1>Error: Data files not loaded correctly.</h1>";
}

const categorySelect = document.getElementById('categorySelect');
const guessInput = document.getElementById('guessInput');
const suggestionsBox = document.getElementById('suggestions');
const feedback = document.getElementById('feedback');
const topList = document.getElementById('topList');
const correctCounter = document.getElementById('correctCount');
const incorrectCounter = document.getElementById('incorrectCount');
const hintsButton = document.getElementById('hintsButton');

// Map internal keys to display names
const categoryNames = {
    maxHp: "Mayor HP",
    minHp: "Menor HP",
    maxAttack: "Mayor Ataque",
    minAttack: "Menor Ataque",
    maxDefense: "Mayor Defensa",
    minDefense: "Menor Defensa",
    maxSpAttack: "Mayor Ataque Especial",
    minSpAttack: "Menor Ataque Especial",
    maxSpDefense: "Mayor Defensa Especial",
    minSpDefense: "Menor Defensa Especial",
    maxSpeed: "Mayor Velocidad",
    minSpeed: "Menor Velocidad",
    tallest: "Más Alto",
    shortest: "Más Bajo",
    heaviest: "Más Pesado",
    lightest: "Más Liviano"
};

// State
let currentCategory = null;
let currentTop10 = [];
let guessedIndices = new Set();
let correctCount = 0;
let incorrectCount = 0;
let hintsUsed = false;

// Initialize Categories
function init() {
    for (const [key, label] of Object.entries(categoryNames)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = label;
        categorySelect.appendChild(option);
    }

    categorySelect.addEventListener('change', handleCategoryChange);
    guessInput.addEventListener('keydown', handleInput);
    guessInput.addEventListener('input', handleAutocomplete);
    hintsButton.addEventListener('click', showHints);

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== guessInput && e.target !== suggestionsBox) {
            suggestionsBox.classList.remove('active');
        }
    });

    // Select first category by default
    categorySelect.value = 'maxHp';
    handleCategoryChange({ target: { value: 'maxHp' } });
}

function handleCategoryChange(e) {
    const categoryKey = e.target.value;
    currentCategory = categoryKey;

    // Get top 10
    currentTop10 = pokemonTops[categoryKey].slice(0, 10);
    guessedIndices.clear();
    correctCount = 0;
    incorrectCount = 0;
    hintsUsed = false;

    // Reset UI
    guessInput.value = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    updateCounters();
    hintsButton.disabled = true;
    hintsButton.classList.remove('active');
    renderList();
    guessInput.focus();
}

function updateCounters() {
    correctCounter.textContent = correctCount;
    incorrectCounter.textContent = incorrectCount;

    if (incorrectCount >= 5) {
        hintsButton.disabled = false;
        hintsButton.classList.add('active');
    }
}

function renderList() {
    topList.innerHTML = '';

    currentTop10.forEach((pokemon, index) => {
        const item = document.createElement('div');
        item.className = 'pokemon-card';
        if (guessedIndices.has(index)) {
            item.classList.add('revealed');
        }

        // Rank Badge
        const rank = document.createElement('div');
        rank.className = 'rank-badge';
        rank.textContent = index + 1;
        item.appendChild(rank);

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'card-image-container';

        if (guessedIndices.has(index)) {
            const img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
            img.className = 'pokemon-img';
            img.alt = pokemon.name;
            imgContainer.appendChild(img);
        } else {
            const unknown = document.createElement('div');
            unknown.className = 'unknown-mark';
            unknown.textContent = '?';
            imgContainer.appendChild(unknown);
        }
        item.appendChild(imgContainer);

        // Name
        const name = document.createElement('div');
        name.className = 'pokemon-name';
        name.textContent = guessedIndices.has(index) ? pokemon.name : '???';
        item.appendChild(name);

        // Hints (Type Icons)
        if (hintsUsed && !guessedIndices.has(index)) {
            const typeContainer = document.createElement('div');
            typeContainer.className = 'card-hints';
            pokemon.types.forEach(type => {
                const img = document.createElement('img');
                img.src = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`;
                img.alt = type;
                img.className = `type-icon ${type}`;
                typeContainer.appendChild(img);
            });
            item.appendChild(typeContainer);
        }

        // Stat
        const stat = document.createElement('div');
        stat.className = 'stat-value';
        stat.textContent = getStatValue(pokemon, currentCategory);
        item.appendChild(stat);

        topList.appendChild(item);
    });
}

function getStatValue(pokemon, category) {
    if (category.includes('Hp')) return `${pokemon.stats.hp} HP`;
    if (category.includes('Attack')) return category.includes('Sp') ? `${pokemon.stats.special_attack} SpA` : `${pokemon.stats.attack} Atk`;
    if (category.includes('Defense')) return category.includes('Sp') ? `${pokemon.stats.special_defense} SpD` : `${pokemon.stats.defense} Def`;
    if (category.includes('Speed')) return `${pokemon.stats.speed} Spe`;
    if (category.includes('tall') || category.includes('short')) return `${pokemon.height / 10} m`; // API is in decimeters
    if (category.includes('heav') || category.includes('light')) return `${pokemon.weight / 10} kg`; // API is in hectograms
    return '';
}

function handleInput(e) {
    if (e.key === 'Enter') {
        const guess = guessInput.value.trim().toLowerCase();
        if (!guess) return;

        let found = false;
        let alreadyGuessed = false;

        // Check if guess matches any in top 10
        currentTop10.forEach((pokemon, index) => {
            if (pokemon.name === guess) {
                if (guessedIndices.has(index)) {
                    alreadyGuessed = true;
                } else {
                    guessedIndices.add(index);
                    found = true;
                    correctCount++;
                }
            }
        });

        if (found) {
            showFeedback("¡Correcto!", "success");
            updateCounters();
            renderList();
            guessInput.value = '';
            suggestionsBox.classList.remove('active');

            // Check victory
            if (guessedIndices.size === 10) {
                showFeedback("¡Ganaste! Has completado el Top 10.", "success");
            }
        } else if (alreadyGuessed) {
            showFeedback("Ya adivinaste ese Pokemon.", "error");
            shakeInput();
        } else {
            showFeedback("No válido / No está en el Top 10", "error");
            incorrectCount++;
            updateCounters();
            shakeInput();
        }
    }
}

function showHints() {
    if (incorrectCount >= 5) {
        hintsUsed = true;
        renderList();
        hintsButton.disabled = true; // Disable after using
        hintsButton.textContent = "Pistas activadas";
        hintsButton.classList.remove('active');
    }
}

function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `feedback ${type}`;

    // Clear feedback after 2 seconds
    setTimeout(() => {
        feedback.className = 'feedback';
    }, 2000);
}

function shakeInput() {
    guessInput.classList.add('shake');
    setTimeout(() => {
        guessInput.classList.remove('shake');
    }, 300);
}

function handleAutocomplete(e) {
    const query = e.target.value.toLowerCase().trim();
    suggestionsBox.innerHTML = '';

    if (query.length < 2) {
        suggestionsBox.classList.remove('active');
        return;
    }

    // PokemonList is global from pokemon_db.js
    const matches = pokemonList.filter(p => p.name.includes(query)).slice(0, 10);

    if (matches.length > 0) {
        matches.forEach(p => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = p.name;
            div.addEventListener('click', () => {
                guessInput.value = p.name;
                suggestionsBox.classList.remove('active');
                guessInput.focus();
                // trigger check manually if needed, or let user press enter
            });
            suggestionsBox.appendChild(div);
        });
        suggestionsBox.classList.add('active');
    } else {
        suggestionsBox.classList.remove('active');
    }
}

// Start
init();
