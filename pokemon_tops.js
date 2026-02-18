// This script assumes pokemonList is available globally (if in browser) or can be required (if in Node)
let data;

if (typeof pokemonList !== 'undefined') {
    data = pokemonList;
} else if (typeof require !== 'undefined') {
    data = require('./pokemon_db.js');
} else {
    data = []; // Should not happen if dependencies are correct
}

const sortByStat = (statName, order = 'desc') => {
    return [...data].sort((a, b) => { // Create a copy to avoid mutating original
        const valA = a.stats[statName];
        const valB = b.stats[statName];
        return order === 'desc' ? valB - valA : valA - valB;
    });
};

const sortByProp = (propName, order = 'desc') => {
    return [...data].sort((a, b) => {
        const valA = a[propName];
        const valB = b[propName];
        return order === 'desc' ? valB - valA : valA - valB;
    });
}

const pokemonTops = {
    // 1. Más HP
    maxHp: sortByStat('hp', 'desc'),
    // 2. Menos HP
    minHp: sortByStat('hp', 'asc'),

    // 3. Más Ataque
    maxAttack: sortByStat('attack', 'desc'),
    // 4. Menos Ataque
    minAttack: sortByStat('attack', 'asc'),

    // 5. Más Defensa
    maxDefense: sortByStat('defense', 'desc'),
    // 6. Menos Defensa
    minDefense: sortByStat('defense', 'asc'),

    // 7. Más Ataque Especial
    maxSpAttack: sortByStat('special_attack', 'desc'),
    // 8. Menos Ataque Especial
    minSpAttack: sortByStat('special_attack', 'asc'),

    // 9. Más Defensa Especial
    maxSpDefense: sortByStat('special_defense', 'desc'),
    // 10. Menos Defensa Especial
    minSpDefense: sortByStat('special_defense', 'asc'),

    // 11. Más Velocidad
    maxSpeed: sortByStat('speed', 'desc'),
    // 12. Menos Velocidad
    minSpeed: sortByStat('speed', 'asc'),

    // 13. Más alto (por height)
    tallest: sortByProp('height', 'desc'),
    // 14. Más bajo (por height)
    shortest: sortByProp('height', 'asc'),

    // 15. Más pesado (por weight)
    heaviest: sortByProp('weight', 'desc'),
    // 16. Más liviano (por weight)
    lightest: sortByProp('weight', 'asc')
};

// If in Node.js environment, export the object
if (typeof module !== 'undefined') {
    module.exports = pokemonTops;
}
