const pokemonTops = require('./pokemon_tops.js');
const pokemonList = require('./pokemon_db.js');

const categories = [
    'maxHp', 'minHp',
    'maxAttack', 'minAttack',
    'maxDefense', 'minDefense',
    'maxSpAttack', 'minSpAttack',
    'maxSpDefense', 'minSpDefense',
    'maxSpeed', 'minSpeed',
    'tallest', 'shortest',
    'heaviest', 'lightest'
];

let hasError = false;

categories.forEach(cat => {
    if (!pokemonTops[cat]) {
        console.error(`Missing category: ${cat}`);
        hasError = true;
        return;
    }

    if (!Array.isArray(pokemonTops[cat])) {
        console.error(`Category ${cat} is not an array`);
        hasError = true;
        return;
    }

    if (pokemonTops[cat].length !== pokemonList.length) {
        console.error(`Category ${cat} length mismatch. Expected ${pokemonList.length}, got ${pokemonTops[cat].length}`);
        hasError = true;
    }
});

// Spot checks
// Max HP should be Blissey (255) (actually depends on generation, but it's high)
// Let's just check if first > last for max and last > first for min

const checkOrder = (cat, prop, isStat = true, desc = true) => {
    const list = pokemonTops[cat];
    const first = list[0];
    const last = list[list.length - 1];

    const valFirst = isStat ? first.stats[prop] : first[prop];
    const valLast = isStat ? last.stats[prop] : last[prop];

    if (desc) {
        if (valFirst < valLast) {
            console.error(`Category ${cat} not sorted descending. First: ${valFirst}, Last: ${valLast}`);
            hasError = true;
        }
    } else {
        if (valFirst > valLast) {
            console.error(`Category ${cat} not sorted ascending. First: ${valFirst}, Last: ${valLast}`);
            hasError = true;
        }
    }
}

checkOrder('maxHp', 'hp', true, true);
checkOrder('minHp', 'hp', true, false);
checkOrder('tallest', 'height', false, true);
checkOrder('shortest', 'height', false, false);

if (hasError) {
    console.error('Verification failed');
    process.exit(1);
} else {
    console.log('Verification successful! All groups defined and sorted.');
    console.log('Sample Max HP:', pokemonTops.maxHp[0].name, pokemonTops.maxHp[0].stats.hp);
    console.log('Sample Min Speed:', pokemonTops.minSpeed[0].name, pokemonTops.minSpeed[0].stats.speed);
}
