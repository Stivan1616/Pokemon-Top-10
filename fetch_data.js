const fs = require('fs');
const https = require('https');

const query = `
query {
  pokemon_v2_pokemon(where: {is_default: {_eq: true}}, order_by: {id: asc}) {
    id
    name
    height
    weight
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
`;

const options = {
  hostname: 'beta.pokeapi.co',
  path: '/graphql/v1beta',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.errors) {
        console.error('GraphQL Errors:', json.errors);
        return;
      }

      const pokemons = json.data.pokemon_v2_pokemon.map(p => {
        const stats = {};
        p.pokemon_v2_pokemonstats.forEach(s => {
          stats[s.pokemon_v2_stat.name.replace('-', '_')] = s.base_stat;
        });

        // Ensure all required stats are present
        const requiredStats = ['hp', 'attack', 'defense', 'special_attack', 'special_defense', 'speed'];
        requiredStats.forEach(stat => {
            if (stats[stat] === undefined) stats[stat] = 0;
        });

        const types = p.pokemon_v2_pokemontypes.map(t => t.pokemon_v2_type.name);

        return {
          id: p.id,
          name: p.name,
          weight: p.weight,
          height: p.height,
          types: types,
          stats: {
            hp: stats.hp,
            attack: stats.attack,
            defense: stats.defense,
            special_attack: stats.special_attack,
            special_defense: stats.special_defense,
            speed: stats.speed
          }
        };
      });

      const fileContent = `const pokemonList = ${JSON.stringify(pokemons, null, 2)};\n\nif (typeof module !== 'undefined') module.exports = pokemonList;`;
      
      fs.writeFileSync('pokemon_db.js', fileContent);
      console.log(`Successfully saved ${pokemons.length} pokemon to pokemon_db.js`);

    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(JSON.stringify({ query }));
req.end();
