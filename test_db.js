const pokemonList = require('./pokemon_db.js');

console.log(`Total Pokemon: ${pokemonList.length}`);

if (pokemonList.length < 1000) {
    console.error('Error: Less than 1000 Pokemon found.');
    process.exit(1);
}

const bulbasaur = pokemonList.find(p => p.id === 1);
if (!bulbasaur) {
    console.error('Error: Bulbasaur not found.');
    process.exit(1);
}

if (bulbasaur.name !== 'bulbasaur') {
    console.error(`Error: Bulbasaur name mismatch. Got ${bulbasaur.name}`);
    process.exit(1);
}

// Check stats structure
const requiredStats = ['hp', 'attack', 'defense', 'special_attack', 'special_defense', 'speed'];
const stats = bulbasaur.stats;
if (!stats) {
    console.error('Error: Bulbasaur stats missing.');
    process.exit(1);
}

requiredStats.forEach(stat => {
    if (typeof stats[stat] !== 'number') {
        console.error(`Error: Bulbasaur stat ${stat} is missing or not a number.`);
        process.exit(1);
    }
});

console.log('Verification successful!');
console.log('Bulbasaur sample:', JSON.stringify(bulbasaur, null, 2));
