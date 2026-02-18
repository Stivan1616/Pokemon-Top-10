const pokemonList = [
  {
    "id": 1,
    "name": "bulbasaur",
    "weight": 69,
    "height": 7,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 2,
    "name": "ivysaur",
    "weight": 130,
    "height": 10,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 60
    }
  },
  {
    "id": 3,
    "name": "venusaur",
    "weight": 1000,
    "height": 20,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    }
  },
  {
    "id": 4,
    "name": "charmander",
    "weight": 85,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 5,
    "name": "charmeleon",
    "weight": 190,
    "height": 11,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    }
  },
  {
    "id": 6,
    "name": "charizard",
    "weight": 905,
    "height": 17,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    }
  },
  {
    "id": 7,
    "name": "squirtle",
    "weight": 90,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 64,
      "speed": 43
    }
  },
  {
    "id": 8,
    "name": "wartortle",
    "weight": 225,
    "height": 10,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 58
    }
  },
  {
    "id": 9,
    "name": "blastoise",
    "weight": 855,
    "height": 16,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 78
    }
  },
  {
    "id": 10,
    "name": "caterpie",
    "weight": 29,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 45
    }
  },
  {
    "id": 11,
    "name": "metapod",
    "weight": 99,
    "height": 7,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 30
    }
  },
  {
    "id": 12,
    "name": "butterfree",
    "weight": 320,
    "height": 11,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 70
    }
  },
  {
    "id": 13,
    "name": "weedle",
    "weight": 32,
    "height": 3,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 50
    }
  },
  {
    "id": 14,
    "name": "kakuna",
    "weight": 100,
    "height": 6,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 35
    }
  },
  {
    "id": 15,
    "name": "beedrill",
    "weight": 295,
    "height": 10,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 80,
      "speed": 75
    }
  },
  {
    "id": 16,
    "name": "pidgey",
    "weight": 18,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 56
    }
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "weight": 300,
    "height": 11,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 71
    }
  },
  {
    "id": 18,
    "name": "pidgeot",
    "weight": 395,
    "height": 15,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 101
    }
  },
  {
    "id": 19,
    "name": "rattata",
    "weight": 35,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "special_attack": 25,
      "special_defense": 35,
      "speed": 72
    }
  },
  {
    "id": 20,
    "name": "raticate",
    "weight": 185,
    "height": 7,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 97
    }
  },
  {
    "id": 21,
    "name": "spearow",
    "weight": 20,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "special_attack": 31,
      "special_defense": 31,
      "speed": 70
    }
  },
  {
    "id": 22,
    "name": "fearow",
    "weight": 380,
    "height": 12,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "special_attack": 61,
      "special_defense": 61,
      "speed": 100
    }
  },
  {
    "id": 23,
    "name": "ekans",
    "weight": 69,
    "height": 20,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "special_attack": 40,
      "special_defense": 54,
      "speed": 55
    }
  },
  {
    "id": 24,
    "name": "arbok",
    "weight": 650,
    "height": 35,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special_attack": 65,
      "special_defense": 79,
      "speed": 80
    }
  },
  {
    "id": 25,
    "name": "pikachu",
    "weight": 60,
    "height": 4,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    }
  },
  {
    "id": 26,
    "name": "raichu",
    "weight": 300,
    "height": 8,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 110
    }
  },
  {
    "id": 27,
    "name": "sandshrew",
    "weight": 120,
    "height": 6,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 40
    }
  },
  {
    "id": 28,
    "name": "sandslash",
    "weight": 295,
    "height": 10,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 65
    }
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "weight": 70,
    "height": 4,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 41
    }
  },
  {
    "id": 30,
    "name": "nidorina",
    "weight": 200,
    "height": 8,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 56
    }
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "weight": 600,
    "height": 13,
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 76
    }
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "weight": 90,
    "height": 5,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 50
    }
  },
  {
    "id": 33,
    "name": "nidorino",
    "weight": 195,
    "height": 9,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 65
    }
  },
  {
    "id": 34,
    "name": "nidoking",
    "weight": 620,
    "height": 14,
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 85
    }
  },
  {
    "id": 35,
    "name": "clefairy",
    "weight": 75,
    "height": 6,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "special_attack": 60,
      "special_defense": 65,
      "speed": 35
    }
  },
  {
    "id": 36,
    "name": "clefable",
    "weight": 400,
    "height": 13,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 60
    }
  },
  {
    "id": 37,
    "name": "vulpix",
    "weight": 99,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 65,
      "speed": 65
    }
  },
  {
    "id": 38,
    "name": "ninetales",
    "weight": 199,
    "height": 11,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special_attack": 81,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "weight": 55,
    "height": 5,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 20
    }
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "weight": 120,
    "height": 10,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "special_attack": 85,
      "special_defense": 50,
      "speed": 45
    }
  },
  {
    "id": 41,
    "name": "zubat",
    "weight": 75,
    "height": 8,
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 55
    }
  },
  {
    "id": 42,
    "name": "golbat",
    "weight": 550,
    "height": 16,
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 90
    }
  },
  {
    "id": 43,
    "name": "oddish",
    "weight": 54,
    "height": 5,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "special_attack": 75,
      "special_defense": 65,
      "speed": 30
    }
  },
  {
    "id": 44,
    "name": "gloom",
    "weight": 86,
    "height": 8,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    }
  },
  {
    "id": 45,
    "name": "vileplume",
    "weight": 186,
    "height": 12,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special_attack": 110,
      "special_defense": 90,
      "speed": 50
    }
  },
  {
    "id": 46,
    "name": "paras",
    "weight": 54,
    "height": 3,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 25
    }
  },
  {
    "id": 47,
    "name": "parasect",
    "weight": 295,
    "height": 10,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 30
    }
  },
  {
    "id": 48,
    "name": "venonat",
    "weight": 300,
    "height": 10,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 45
    }
  },
  {
    "id": 49,
    "name": "venomoth",
    "weight": 125,
    "height": 15,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 75,
      "speed": 90
    }
  },
  {
    "id": 50,
    "name": "diglett",
    "weight": 8,
    "height": 2,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 95
    }
  },
  {
    "id": 51,
    "name": "dugtrio",
    "weight": 333,
    "height": 7,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 120
    }
  },
  {
    "id": 52,
    "name": "meowth",
    "weight": 42,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    }
  },
  {
    "id": 53,
    "name": "persian",
    "weight": 320,
    "height": 10,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 115
    }
  },
  {
    "id": 54,
    "name": "psyduck",
    "weight": 196,
    "height": 8,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 55
    }
  },
  {
    "id": 55,
    "name": "golduck",
    "weight": 766,
    "height": 17,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "special_attack": 95,
      "special_defense": 80,
      "speed": 85
    }
  },
  {
    "id": 56,
    "name": "mankey",
    "weight": 280,
    "height": 5,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 70
    }
  },
  {
    "id": 57,
    "name": "primeape",
    "weight": 320,
    "height": 10,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 95
    }
  },
  {
    "id": 58,
    "name": "growlithe",
    "weight": 190,
    "height": 7,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 60
    }
  },
  {
    "id": 59,
    "name": "arcanine",
    "weight": 1550,
    "height": 19,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 95
    }
  },
  {
    "id": 60,
    "name": "poliwag",
    "weight": 124,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    }
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "weight": 200,
    "height": 10,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    }
  },
  {
    "id": 62,
    "name": "poliwrath",
    "weight": 540,
    "height": 13,
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "special_attack": 70,
      "special_defense": 90,
      "speed": 70
    }
  },
  {
    "id": 63,
    "name": "abra",
    "weight": 195,
    "height": 9,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "special_attack": 105,
      "special_defense": 55,
      "speed": 90
    }
  },
  {
    "id": 64,
    "name": "kadabra",
    "weight": 565,
    "height": 13,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 105
    }
  },
  {
    "id": 65,
    "name": "alakazam",
    "weight": 480,
    "height": 15,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special_attack": 135,
      "special_defense": 95,
      "speed": 120
    }
  },
  {
    "id": 66,
    "name": "machop",
    "weight": 195,
    "height": 8,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 35
    }
  },
  {
    "id": 67,
    "name": "machoke",
    "weight": 705,
    "height": 15,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 45
    }
  },
  {
    "id": 68,
    "name": "machamp",
    "weight": 1300,
    "height": 16,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 55
    }
  },
  {
    "id": 69,
    "name": "bellsprout",
    "weight": 40,
    "height": 7,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 30,
      "speed": 40
    }
  },
  {
    "id": 70,
    "name": "weepinbell",
    "weight": 64,
    "height": 10,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 55
    }
  },
  {
    "id": 71,
    "name": "victreebel",
    "weight": 155,
    "height": 17,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 72,
    "name": "tentacool",
    "weight": 455,
    "height": 9,
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 73,
    "name": "tentacruel",
    "weight": 550,
    "height": 16,
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 100
    }
  },
  {
    "id": 74,
    "name": "geodude",
    "weight": 200,
    "height": 4,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 20
    }
  },
  {
    "id": 75,
    "name": "graveler",
    "weight": 1050,
    "height": 10,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 35
    }
  },
  {
    "id": 76,
    "name": "golem",
    "weight": 3000,
    "height": 14,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 77,
    "name": "ponyta",
    "weight": 300,
    "height": 10,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 90
    }
  },
  {
    "id": 78,
    "name": "rapidash",
    "weight": 950,
    "height": 17,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 105
    }
  },
  {
    "id": 79,
    "name": "slowpoke",
    "weight": 360,
    "height": 12,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 15
    }
  },
  {
    "id": 80,
    "name": "slowbro",
    "weight": 785,
    "height": 16,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 30
    }
  },
  {
    "id": 81,
    "name": "magnemite",
    "weight": 60,
    "height": 3,
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 55,
      "speed": 45
    }
  },
  {
    "id": 82,
    "name": "magneton",
    "weight": 600,
    "height": 10,
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 83,
    "name": "farfetchd",
    "weight": 150,
    "height": 8,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "special_attack": 58,
      "special_defense": 62,
      "speed": 60
    }
  },
  {
    "id": 84,
    "name": "doduo",
    "weight": 392,
    "height": 14,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 75
    }
  },
  {
    "id": 85,
    "name": "dodrio",
    "weight": 852,
    "height": 18,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 110
    }
  },
  {
    "id": 86,
    "name": "seel",
    "weight": 900,
    "height": 11,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 70,
      "speed": 45
    }
  },
  {
    "id": 87,
    "name": "dewgong",
    "weight": 1200,
    "height": 17,
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 95,
      "speed": 70
    }
  },
  {
    "id": 88,
    "name": "grimer",
    "weight": 300,
    "height": 9,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 25
    }
  },
  {
    "id": 89,
    "name": "muk",
    "weight": 300,
    "height": 12,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 100,
      "speed": 50
    }
  },
  {
    "id": 90,
    "name": "shellder",
    "weight": 40,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 40
    }
  },
  {
    "id": 91,
    "name": "cloyster",
    "weight": 1325,
    "height": 15,
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 70
    }
  },
  {
    "id": 92,
    "name": "gastly",
    "weight": 1,
    "height": 13,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "special_attack": 100,
      "special_defense": 35,
      "speed": 80
    }
  },
  {
    "id": 93,
    "name": "haunter",
    "weight": 1,
    "height": 16,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "special_attack": 115,
      "special_defense": 55,
      "speed": 95
    }
  },
  {
    "id": 94,
    "name": "gengar",
    "weight": 405,
    "height": 15,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 75,
      "speed": 110
    }
  },
  {
    "id": 95,
    "name": "onix",
    "weight": 2100,
    "height": 88,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 70
    }
  },
  {
    "id": 96,
    "name": "drowzee",
    "weight": 324,
    "height": 10,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "special_attack": 43,
      "special_defense": 90,
      "speed": 42
    }
  },
  {
    "id": 97,
    "name": "hypno",
    "weight": 756,
    "height": 16,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "special_attack": 73,
      "special_defense": 115,
      "speed": 67
    }
  },
  {
    "id": 98,
    "name": "krabby",
    "weight": 65,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 50
    }
  },
  {
    "id": 99,
    "name": "kingler",
    "weight": 600,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 75
    }
  },
  {
    "id": 100,
    "name": "voltorb",
    "weight": 104,
    "height": 5,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 100
    }
  },
  {
    "id": 101,
    "name": "electrode",
    "weight": 666,
    "height": 12,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 150
    }
  },
  {
    "id": 102,
    "name": "exeggcute",
    "weight": 25,
    "height": 4,
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 40
    }
  },
  {
    "id": 103,
    "name": "exeggutor",
    "weight": 1200,
    "height": 20,
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 75,
      "speed": 55
    }
  },
  {
    "id": 104,
    "name": "cubone",
    "weight": 65,
    "height": 4,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 35
    }
  },
  {
    "id": 105,
    "name": "marowak",
    "weight": 450,
    "height": 10,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 45
    }
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "weight": 498,
    "height": 15,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 87
    }
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "weight": 502,
    "height": 14,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 76
    }
  },
  {
    "id": 108,
    "name": "lickitung",
    "weight": 655,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 30
    }
  },
  {
    "id": 109,
    "name": "koffing",
    "weight": 10,
    "height": 6,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 35
    }
  },
  {
    "id": 110,
    "name": "weezing",
    "weight": 95,
    "height": 12,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "special_attack": 85,
      "special_defense": 70,
      "speed": 60
    }
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "weight": 1150,
    "height": 10,
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 25
    }
  },
  {
    "id": 112,
    "name": "rhydon",
    "weight": 1200,
    "height": 19,
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 40
    }
  },
  {
    "id": 113,
    "name": "chansey",
    "weight": 346,
    "height": 11,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "special_attack": 35,
      "special_defense": 105,
      "speed": 50
    }
  },
  {
    "id": 114,
    "name": "tangela",
    "weight": 350,
    "height": 10,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "special_attack": 100,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "weight": 800,
    "height": 22,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 90
    }
  },
  {
    "id": 116,
    "name": "horsea",
    "weight": 80,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 25,
      "speed": 60
    }
  },
  {
    "id": 117,
    "name": "seadra",
    "weight": 250,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 45,
      "speed": 85
    }
  },
  {
    "id": 118,
    "name": "goldeen",
    "weight": 150,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 63
    }
  },
  {
    "id": 119,
    "name": "seaking",
    "weight": 390,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 68
    }
  },
  {
    "id": 120,
    "name": "staryu",
    "weight": 345,
    "height": 8,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 85
    }
  },
  {
    "id": 121,
    "name": "starmie",
    "weight": 800,
    "height": 11,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 115
    }
  },
  {
    "id": 122,
    "name": "mr-mime",
    "weight": 545,
    "height": 13,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 120,
      "speed": 90
    }
  },
  {
    "id": 123,
    "name": "scyther",
    "weight": 560,
    "height": 15,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 105
    }
  },
  {
    "id": 124,
    "name": "jynx",
    "weight": 406,
    "height": 14,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "special_attack": 115,
      "special_defense": 95,
      "speed": 95
    }
  },
  {
    "id": 125,
    "name": "electabuzz",
    "weight": 300,
    "height": 11,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 105
    }
  },
  {
    "id": 126,
    "name": "magmar",
    "weight": 445,
    "height": 13,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 93
    }
  },
  {
    "id": 127,
    "name": "pinsir",
    "weight": 550,
    "height": 15,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 70,
      "speed": 85
    }
  },
  {
    "id": 128,
    "name": "tauros",
    "weight": 884,
    "height": 14,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 110
    }
  },
  {
    "id": 129,
    "name": "magikarp",
    "weight": 100,
    "height": 9,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "special_attack": 15,
      "special_defense": 20,
      "speed": 80
    }
  },
  {
    "id": 130,
    "name": "gyarados",
    "weight": 2350,
    "height": 65,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 81
    }
  },
  {
    "id": 131,
    "name": "lapras",
    "weight": 2200,
    "height": 25,
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 60
    }
  },
  {
    "id": 132,
    "name": "ditto",
    "weight": 40,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special_attack": 48,
      "special_defense": 48,
      "speed": 48
    }
  },
  {
    "id": 133,
    "name": "eevee",
    "weight": 65,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 55
    }
  },
  {
    "id": 134,
    "name": "vaporeon",
    "weight": 290,
    "height": 10,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 65
    }
  },
  {
    "id": 135,
    "name": "jolteon",
    "weight": 245,
    "height": 8,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 130
    }
  },
  {
    "id": 136,
    "name": "flareon",
    "weight": 250,
    "height": 9,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 110,
      "speed": 65
    }
  },
  {
    "id": 137,
    "name": "porygon",
    "weight": 365,
    "height": 8,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    }
  },
  {
    "id": 138,
    "name": "omanyte",
    "weight": 75,
    "height": 4,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "special_attack": 90,
      "special_defense": 55,
      "speed": 35
    }
  },
  {
    "id": 139,
    "name": "omastar",
    "weight": 350,
    "height": 10,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "special_attack": 115,
      "special_defense": 70,
      "speed": 55
    }
  },
  {
    "id": 140,
    "name": "kabuto",
    "weight": 115,
    "height": 5,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "special_attack": 55,
      "special_defense": 45,
      "speed": 55
    }
  },
  {
    "id": 141,
    "name": "kabutops",
    "weight": 405,
    "height": 13,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 80
    }
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "weight": 590,
    "height": 18,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 130
    }
  },
  {
    "id": 143,
    "name": "snorlax",
    "weight": 4600,
    "height": 21,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 110,
      "speed": 30
    }
  },
  {
    "id": 144,
    "name": "articuno",
    "weight": 554,
    "height": 17,
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 125,
      "speed": 85
    }
  },
  {
    "id": 145,
    "name": "zapdos",
    "weight": 526,
    "height": 16,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 100
    }
  },
  {
    "id": 146,
    "name": "moltres",
    "weight": 600,
    "height": 20,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 85,
      "speed": 90
    }
  },
  {
    "id": 147,
    "name": "dratini",
    "weight": 33,
    "height": 18,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 50
    }
  },
  {
    "id": 148,
    "name": "dragonair",
    "weight": 165,
    "height": 40,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 149,
    "name": "dragonite",
    "weight": 2100,
    "height": 22,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    }
  },
  {
    "id": 150,
    "name": "mewtwo",
    "weight": 1220,
    "height": 20,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "special_attack": 154,
      "special_defense": 90,
      "speed": 130
    }
  },
  {
    "id": 151,
    "name": "mew",
    "weight": 40,
    "height": 4,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 152,
    "name": "chikorita",
    "weight": 64,
    "height": 9,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "special_attack": 49,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 153,
    "name": "bayleef",
    "weight": 158,
    "height": 12,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "special_attack": 63,
      "special_defense": 80,
      "speed": 60
    }
  },
  {
    "id": 154,
    "name": "meganium",
    "weight": 1005,
    "height": 18,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special_attack": 83,
      "special_defense": 100,
      "speed": 80
    }
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "weight": 79,
    "height": 5,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 156,
    "name": "quilava",
    "weight": 190,
    "height": 9,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    }
  },
  {
    "id": 157,
    "name": "typhlosion",
    "weight": 795,
    "height": 17,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    }
  },
  {
    "id": 158,
    "name": "totodile",
    "weight": 95,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "special_attack": 44,
      "special_defense": 48,
      "speed": 43
    }
  },
  {
    "id": 159,
    "name": "croconaw",
    "weight": 250,
    "height": 11,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "special_attack": 59,
      "special_defense": 63,
      "speed": 58
    }
  },
  {
    "id": 160,
    "name": "feraligatr",
    "weight": 888,
    "height": 23,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special_attack": 79,
      "special_defense": 83,
      "speed": 78
    }
  },
  {
    "id": 161,
    "name": "sentret",
    "weight": 60,
    "height": 8,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 20
    }
  },
  {
    "id": 162,
    "name": "furret",
    "weight": 325,
    "height": 18,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 90
    }
  },
  {
    "id": 163,
    "name": "hoothoot",
    "weight": 212,
    "height": 7,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "special_attack": 36,
      "special_defense": 56,
      "speed": 50
    }
  },
  {
    "id": 164,
    "name": "noctowl",
    "weight": 408,
    "height": 16,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "special_attack": 86,
      "special_defense": 96,
      "speed": 70
    }
  },
  {
    "id": 165,
    "name": "ledyba",
    "weight": 108,
    "height": 10,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 55
    }
  },
  {
    "id": 166,
    "name": "ledian",
    "weight": 356,
    "height": 14,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 110,
      "speed": 85
    }
  },
  {
    "id": 167,
    "name": "spinarak",
    "weight": 85,
    "height": 5,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    }
  },
  {
    "id": 168,
    "name": "ariados",
    "weight": 335,
    "height": 11,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 40
    }
  },
  {
    "id": 169,
    "name": "crobat",
    "weight": 750,
    "height": 18,
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 130
    }
  },
  {
    "id": 170,
    "name": "chinchou",
    "weight": 120,
    "height": 5,
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "special_attack": 56,
      "special_defense": 56,
      "speed": 67
    }
  },
  {
    "id": 171,
    "name": "lanturn",
    "weight": 225,
    "height": 12,
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "special_attack": 76,
      "special_defense": 76,
      "speed": 67
    }
  },
  {
    "id": 172,
    "name": "pichu",
    "weight": 20,
    "height": 3,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 60
    }
  },
  {
    "id": 173,
    "name": "cleffa",
    "weight": 30,
    "height": 3,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 15
    }
  },
  {
    "id": 174,
    "name": "igglybuff",
    "weight": 10,
    "height": 3,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "special_attack": 40,
      "special_defense": 20,
      "speed": 15
    }
  },
  {
    "id": 175,
    "name": "togepi",
    "weight": 15,
    "height": 3,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 20
    }
  },
  {
    "id": 176,
    "name": "togetic",
    "weight": 32,
    "height": 6,
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "special_attack": 80,
      "special_defense": 105,
      "speed": 40
    }
  },
  {
    "id": 177,
    "name": "natu",
    "weight": 20,
    "height": 2,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 45,
      "speed": 70
    }
  },
  {
    "id": 178,
    "name": "xatu",
    "weight": 150,
    "height": 15,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 95
    }
  },
  {
    "id": 179,
    "name": "mareep",
    "weight": 78,
    "height": 6,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 35
    }
  },
  {
    "id": 180,
    "name": "flaaffy",
    "weight": 133,
    "height": 8,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special_attack": 80,
      "special_defense": 60,
      "speed": 45
    }
  },
  {
    "id": 181,
    "name": "ampharos",
    "weight": 615,
    "height": 14,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special_attack": 115,
      "special_defense": 90,
      "speed": 55
    }
  },
  {
    "id": 182,
    "name": "bellossom",
    "weight": 58,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 50
    }
  },
  {
    "id": 183,
    "name": "marill",
    "weight": 85,
    "height": 4,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "special_attack": 20,
      "special_defense": 50,
      "speed": 40
    }
  },
  {
    "id": 184,
    "name": "azumarill",
    "weight": 285,
    "height": 8,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 50
    }
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "weight": 380,
    "height": 12,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "special_attack": 30,
      "special_defense": 65,
      "speed": 30
    }
  },
  {
    "id": 186,
    "name": "politoed",
    "weight": 339,
    "height": 11,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 187,
    "name": "hoppip",
    "weight": 5,
    "height": 4,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 55,
      "speed": 50
    }
  },
  {
    "id": 188,
    "name": "skiploom",
    "weight": 10,
    "height": 6,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 80
    }
  },
  {
    "id": 189,
    "name": "jumpluff",
    "weight": 30,
    "height": 8,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "special_attack": 55,
      "special_defense": 95,
      "speed": 110
    }
  },
  {
    "id": 190,
    "name": "aipom",
    "weight": 115,
    "height": 8,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 85
    }
  },
  {
    "id": 191,
    "name": "sunkern",
    "weight": 18,
    "height": 3,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 30
    }
  },
  {
    "id": 192,
    "name": "sunflora",
    "weight": 85,
    "height": 8,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "special_attack": 105,
      "special_defense": 85,
      "speed": 30
    }
  },
  {
    "id": 193,
    "name": "yanma",
    "weight": 380,
    "height": 12,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "special_attack": 75,
      "special_defense": 45,
      "speed": 95
    }
  },
  {
    "id": 194,
    "name": "wooper",
    "weight": 85,
    "height": 4,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    }
  },
  {
    "id": 195,
    "name": "quagsire",
    "weight": 750,
    "height": 14,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 35
    }
  },
  {
    "id": 196,
    "name": "espeon",
    "weight": 265,
    "height": 9,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 95,
      "speed": 110
    }
  },
  {
    "id": 197,
    "name": "umbreon",
    "weight": 270,
    "height": 10,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special_attack": 60,
      "special_defense": 130,
      "speed": 65
    }
  },
  {
    "id": 198,
    "name": "murkrow",
    "weight": 21,
    "height": 5,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "special_attack": 85,
      "special_defense": 42,
      "speed": 91
    }
  },
  {
    "id": 199,
    "name": "slowking",
    "weight": 795,
    "height": 20,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 110,
      "speed": 30
    }
  },
  {
    "id": 200,
    "name": "misdreavus",
    "weight": 10,
    "height": 7,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 85,
      "special_defense": 85,
      "speed": 85
    }
  },
  {
    "id": 201,
    "name": "unown",
    "weight": 50,
    "height": 5,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "special_attack": 72,
      "special_defense": 48,
      "speed": 48
    }
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "weight": 285,
    "height": 13,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "special_attack": 33,
      "special_defense": 58,
      "speed": 33
    }
  },
  {
    "id": 203,
    "name": "girafarig",
    "weight": 415,
    "height": 15,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 204,
    "name": "pineco",
    "weight": 72,
    "height": 6,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 15
    }
  },
  {
    "id": 205,
    "name": "forretress",
    "weight": 1258,
    "height": 12,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 40
    }
  },
  {
    "id": 206,
    "name": "dunsparce",
    "weight": 140,
    "height": 15,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 207,
    "name": "gligar",
    "weight": 648,
    "height": 11,
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "special_attack": 35,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 208,
    "name": "steelix",
    "weight": 4000,
    "height": 92,
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 30
    }
  },
  {
    "id": 209,
    "name": "snubbull",
    "weight": 78,
    "height": 6,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    }
  },
  {
    "id": 210,
    "name": "granbull",
    "weight": 487,
    "height": 14,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 45
    }
  },
  {
    "id": 211,
    "name": "qwilfish",
    "weight": 39,
    "height": 5,
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 85
    }
  },
  {
    "id": 212,
    "name": "scizor",
    "weight": 1180,
    "height": 18,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 65
    }
  },
  {
    "id": 213,
    "name": "shuckle",
    "weight": 205,
    "height": 6,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "special_attack": 10,
      "special_defense": 230,
      "speed": 5
    }
  },
  {
    "id": 214,
    "name": "heracross",
    "weight": 540,
    "height": 15,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "special_attack": 40,
      "special_defense": 95,
      "speed": 85
    }
  },
  {
    "id": 215,
    "name": "sneasel",
    "weight": 280,
    "height": 9,
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "special_attack": 35,
      "special_defense": 75,
      "speed": 115
    }
  },
  {
    "id": 216,
    "name": "teddiursa",
    "weight": 88,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    }
  },
  {
    "id": 217,
    "name": "ursaring",
    "weight": 1258,
    "height": 18,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "special_attack": 75,
      "special_defense": 75,
      "speed": 55
    }
  },
  {
    "id": 218,
    "name": "slugma",
    "weight": 350,
    "height": 7,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 40,
      "speed": 20
    }
  },
  {
    "id": 219,
    "name": "magcargo",
    "weight": 550,
    "height": 8,
    "types": [
      "fire",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 30
    }
  },
  {
    "id": 220,
    "name": "swinub",
    "weight": 65,
    "height": 4,
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 50
    }
  },
  {
    "id": 221,
    "name": "piloswine",
    "weight": 558,
    "height": 11,
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    }
  },
  {
    "id": 222,
    "name": "corsola",
    "weight": 50,
    "height": 6,
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "special_attack": 65,
      "special_defense": 95,
      "speed": 35
    }
  },
  {
    "id": 223,
    "name": "remoraid",
    "weight": 120,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 35,
      "speed": 65
    }
  },
  {
    "id": 224,
    "name": "octillery",
    "weight": 285,
    "height": 9,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "special_attack": 105,
      "special_defense": 75,
      "speed": 45
    }
  },
  {
    "id": 225,
    "name": "delibird",
    "weight": 160,
    "height": 9,
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 75
    }
  },
  {
    "id": 226,
    "name": "mantine",
    "weight": 2200,
    "height": 21,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 140,
      "speed": 70
    }
  },
  {
    "id": 227,
    "name": "skarmory",
    "weight": 505,
    "height": 17,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 228,
    "name": "houndour",
    "weight": 108,
    "height": 6,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "special_attack": 80,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 229,
    "name": "houndoom",
    "weight": 350,
    "height": 14,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "special_attack": 110,
      "special_defense": 80,
      "speed": 95
    }
  },
  {
    "id": 230,
    "name": "kingdra",
    "weight": 1520,
    "height": 18,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 85
    }
  },
  {
    "id": 231,
    "name": "phanpy",
    "weight": 335,
    "height": 5,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 40
    }
  },
  {
    "id": 232,
    "name": "donphan",
    "weight": 1200,
    "height": 11,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    }
  },
  {
    "id": 233,
    "name": "porygon2",
    "weight": 325,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "special_attack": 105,
      "special_defense": 95,
      "speed": 60
    }
  },
  {
    "id": 234,
    "name": "stantler",
    "weight": 712,
    "height": 14,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 235,
    "name": "smeargle",
    "weight": 580,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 45,
      "speed": 75
    }
  },
  {
    "id": 236,
    "name": "tyrogue",
    "weight": 210,
    "height": 7,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 35
    }
  },
  {
    "id": 237,
    "name": "hitmontop",
    "weight": 480,
    "height": 14,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 70
    }
  },
  {
    "id": 238,
    "name": "smoochum",
    "weight": 60,
    "height": 4,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 65
    }
  },
  {
    "id": 239,
    "name": "elekid",
    "weight": 235,
    "height": 6,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 95
    }
  },
  {
    "id": 240,
    "name": "magby",
    "weight": 214,
    "height": 7,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 83
    }
  },
  {
    "id": 241,
    "name": "miltank",
    "weight": 755,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 100
    }
  },
  {
    "id": 242,
    "name": "blissey",
    "weight": 468,
    "height": 15,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "special_attack": 75,
      "special_defense": 135,
      "speed": 55
    }
  },
  {
    "id": 243,
    "name": "raikou",
    "weight": 1780,
    "height": 19,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "special_attack": 115,
      "special_defense": 100,
      "speed": 115
    }
  },
  {
    "id": 244,
    "name": "entei",
    "weight": 1980,
    "height": 21,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "special_attack": 90,
      "special_defense": 75,
      "speed": 100
    }
  },
  {
    "id": 245,
    "name": "suicune",
    "weight": 1870,
    "height": 20,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "special_attack": 90,
      "special_defense": 115,
      "speed": 85
    }
  },
  {
    "id": 246,
    "name": "larvitar",
    "weight": 720,
    "height": 6,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 41
    }
  },
  {
    "id": 247,
    "name": "pupitar",
    "weight": 1520,
    "height": 12,
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 51
    }
  },
  {
    "id": 248,
    "name": "tyranitar",
    "weight": 2020,
    "height": 20,
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special_attack": 95,
      "special_defense": 100,
      "speed": 61
    }
  },
  {
    "id": 249,
    "name": "lugia",
    "weight": 2160,
    "height": 52,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "special_attack": 90,
      "special_defense": 154,
      "speed": 110
    }
  },
  {
    "id": 250,
    "name": "ho-oh",
    "weight": 1990,
    "height": 38,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "special_attack": 110,
      "special_defense": 154,
      "speed": 90
    }
  },
  {
    "id": 251,
    "name": "celebi",
    "weight": 50,
    "height": 6,
    "types": [
      "psychic",
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 252,
    "name": "treecko",
    "weight": 50,
    "height": 5,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 70
    }
  },
  {
    "id": 253,
    "name": "grovyle",
    "weight": 216,
    "height": 9,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 95
    }
  },
  {
    "id": 254,
    "name": "sceptile",
    "weight": 522,
    "height": 17,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special_attack": 105,
      "special_defense": 85,
      "speed": 120
    }
  },
  {
    "id": 255,
    "name": "torchic",
    "weight": 25,
    "height": 4,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 45
    }
  },
  {
    "id": 256,
    "name": "combusken",
    "weight": 195,
    "height": 9,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special_attack": 85,
      "special_defense": 60,
      "speed": 55
    }
  },
  {
    "id": 257,
    "name": "blaziken",
    "weight": 520,
    "height": 19,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "special_attack": 110,
      "special_defense": 70,
      "speed": 80
    }
  },
  {
    "id": 258,
    "name": "mudkip",
    "weight": 76,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    }
  },
  {
    "id": 259,
    "name": "marshtomp",
    "weight": 280,
    "height": 7,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    }
  },
  {
    "id": 260,
    "name": "swampert",
    "weight": 819,
    "height": 15,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "special_attack": 85,
      "special_defense": 90,
      "speed": 60
    }
  },
  {
    "id": 261,
    "name": "poochyena",
    "weight": 136,
    "height": 5,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 35
    }
  },
  {
    "id": 262,
    "name": "mightyena",
    "weight": 370,
    "height": 10,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 70
    }
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "weight": 175,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "special_attack": 30,
      "special_defense": 41,
      "speed": 60
    }
  },
  {
    "id": 264,
    "name": "linoone",
    "weight": 325,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "special_attack": 50,
      "special_defense": 61,
      "speed": 100
    }
  },
  {
    "id": 265,
    "name": "wurmple",
    "weight": 36,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 20
    }
  },
  {
    "id": 266,
    "name": "silcoon",
    "weight": 100,
    "height": 6,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    }
  },
  {
    "id": 267,
    "name": "beautifly",
    "weight": 284,
    "height": 10,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 268,
    "name": "cascoon",
    "weight": 115,
    "height": 7,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    }
  },
  {
    "id": 269,
    "name": "dustox",
    "weight": 316,
    "height": 12,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 90,
      "speed": 65
    }
  },
  {
    "id": 270,
    "name": "lotad",
    "weight": 26,
    "height": 5,
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 30
    }
  },
  {
    "id": 271,
    "name": "lombre",
    "weight": 325,
    "height": 12,
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    }
  },
  {
    "id": 272,
    "name": "ludicolo",
    "weight": 550,
    "height": 15,
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 273,
    "name": "seedot",
    "weight": 40,
    "height": 5,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 30
    }
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "weight": 280,
    "height": 10,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 275,
    "name": "shiftry",
    "weight": 596,
    "height": 13,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 60,
      "speed": 80
    }
  },
  {
    "id": 276,
    "name": "taillow",
    "weight": 23,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 85
    }
  },
  {
    "id": 277,
    "name": "swellow",
    "weight": 198,
    "height": 7,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 50,
      "speed": 125
    }
  },
  {
    "id": 278,
    "name": "wingull",
    "weight": 95,
    "height": 6,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special_attack": 55,
      "special_defense": 30,
      "speed": 85
    }
  },
  {
    "id": 279,
    "name": "pelipper",
    "weight": 280,
    "height": 12,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 65
    }
  },
  {
    "id": 280,
    "name": "ralts",
    "weight": 66,
    "height": 4,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "special_attack": 45,
      "special_defense": 35,
      "speed": 40
    }
  },
  {
    "id": 281,
    "name": "kirlia",
    "weight": 202,
    "height": 8,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 50
    }
  },
  {
    "id": 282,
    "name": "gardevoir",
    "weight": 484,
    "height": 16,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 115,
      "speed": 80
    }
  },
  {
    "id": 283,
    "name": "surskit",
    "weight": 17,
    "height": 5,
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "special_attack": 50,
      "special_defense": 52,
      "speed": 65
    }
  },
  {
    "id": 284,
    "name": "masquerain",
    "weight": 36,
    "height": 8,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "special_attack": 100,
      "special_defense": 82,
      "speed": 80
    }
  },
  {
    "id": 285,
    "name": "shroomish",
    "weight": 45,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 35
    }
  },
  {
    "id": 286,
    "name": "breloom",
    "weight": 392,
    "height": 12,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 70
    }
  },
  {
    "id": 287,
    "name": "slakoth",
    "weight": 240,
    "height": 8,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 30
    }
  },
  {
    "id": 288,
    "name": "vigoroth",
    "weight": 465,
    "height": 14,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 90
    }
  },
  {
    "id": 289,
    "name": "slaking",
    "weight": 1305,
    "height": 20,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 65,
      "speed": 100
    }
  },
  {
    "id": 290,
    "name": "nincada",
    "weight": 55,
    "height": 5,
    "types": [
      "bug",
      "ground"
    ],
    "stats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 40
    }
  },
  {
    "id": 291,
    "name": "ninjask",
    "weight": 120,
    "height": 8,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 160
    }
  },
  {
    "id": 292,
    "name": "shedinja",
    "weight": 12,
    "height": 8,
    "types": [
      "bug",
      "ghost"
    ],
    "stats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 40
    }
  },
  {
    "id": 293,
    "name": "whismur",
    "weight": 163,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "special_attack": 51,
      "special_defense": 23,
      "speed": 28
    }
  },
  {
    "id": 294,
    "name": "loudred",
    "weight": 405,
    "height": 10,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "special_attack": 71,
      "special_defense": 43,
      "speed": 48
    }
  },
  {
    "id": 295,
    "name": "exploud",
    "weight": 840,
    "height": 15,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "special_attack": 91,
      "special_defense": 73,
      "speed": 68
    }
  },
  {
    "id": 296,
    "name": "makuhita",
    "weight": 864,
    "height": 10,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 25
    }
  },
  {
    "id": 297,
    "name": "hariyama",
    "weight": 2538,
    "height": 23,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 50
    }
  },
  {
    "id": 298,
    "name": "azurill",
    "weight": 20,
    "height": 2,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "special_attack": 20,
      "special_defense": 40,
      "speed": 20
    }
  },
  {
    "id": 299,
    "name": "nosepass",
    "weight": 970,
    "height": 10,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 30
    }
  },
  {
    "id": 300,
    "name": "skitty",
    "weight": 110,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 50
    }
  },
  {
    "id": 301,
    "name": "delcatty",
    "weight": 326,
    "height": 11,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 90
    }
  },
  {
    "id": 302,
    "name": "sableye",
    "weight": 110,
    "height": 5,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 50
    }
  },
  {
    "id": 303,
    "name": "mawile",
    "weight": 115,
    "height": 6,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 50
    }
  },
  {
    "id": 304,
    "name": "aron",
    "weight": 600,
    "height": 4,
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    }
  },
  {
    "id": 305,
    "name": "lairon",
    "weight": 1200,
    "height": 9,
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    }
  },
  {
    "id": 306,
    "name": "aggron",
    "weight": 3600,
    "height": 21,
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    }
  },
  {
    "id": 307,
    "name": "meditite",
    "weight": 112,
    "height": 6,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 60
    }
  },
  {
    "id": 308,
    "name": "medicham",
    "weight": 315,
    "height": 13,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 80
    }
  },
  {
    "id": 309,
    "name": "electrike",
    "weight": 152,
    "height": 6,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 40,
      "speed": 65
    }
  },
  {
    "id": 310,
    "name": "manectric",
    "weight": 402,
    "height": 15,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "special_attack": 105,
      "special_defense": 60,
      "speed": 105
    }
  },
  {
    "id": 311,
    "name": "plusle",
    "weight": 42,
    "height": 4,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 95
    }
  },
  {
    "id": 312,
    "name": "minun",
    "weight": 42,
    "height": 4,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 95
    }
  },
  {
    "id": 313,
    "name": "volbeat",
    "weight": 177,
    "height": 7,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "special_attack": 47,
      "special_defense": 85,
      "speed": 85
    }
  },
  {
    "id": 314,
    "name": "illumise",
    "weight": 177,
    "height": 6,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "special_attack": 73,
      "special_defense": 85,
      "speed": 85
    }
  },
  {
    "id": 315,
    "name": "roselia",
    "weight": 20,
    "height": 3,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 65
    }
  },
  {
    "id": 316,
    "name": "gulpin",
    "weight": 103,
    "height": 4,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "special_attack": 43,
      "special_defense": 53,
      "speed": 40
    }
  },
  {
    "id": 317,
    "name": "swalot",
    "weight": 800,
    "height": 17,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "special_attack": 73,
      "special_defense": 83,
      "speed": 55
    }
  },
  {
    "id": 318,
    "name": "carvanha",
    "weight": 208,
    "height": 8,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "special_attack": 65,
      "special_defense": 20,
      "speed": 65
    }
  },
  {
    "id": 319,
    "name": "sharpedo",
    "weight": 888,
    "height": 18,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "special_attack": 95,
      "special_defense": 40,
      "speed": 95
    }
  },
  {
    "id": 320,
    "name": "wailmer",
    "weight": 1300,
    "height": 20,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 35,
      "speed": 60
    }
  },
  {
    "id": 321,
    "name": "wailord",
    "weight": 3980,
    "height": 145,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "special_attack": 90,
      "special_defense": 45,
      "speed": 60
    }
  },
  {
    "id": 322,
    "name": "numel",
    "weight": 240,
    "height": 7,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 35
    }
  },
  {
    "id": 323,
    "name": "camerupt",
    "weight": 2200,
    "height": 19,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special_attack": 105,
      "special_defense": 75,
      "speed": 40
    }
  },
  {
    "id": 324,
    "name": "torkoal",
    "weight": 804,
    "height": 5,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "special_attack": 85,
      "special_defense": 70,
      "speed": 20
    }
  },
  {
    "id": 325,
    "name": "spoink",
    "weight": 306,
    "height": 7,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 60
    }
  },
  {
    "id": 326,
    "name": "grumpig",
    "weight": 715,
    "height": 9,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 110,
      "speed": 80
    }
  },
  {
    "id": 327,
    "name": "spinda",
    "weight": 50,
    "height": 11,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 60
    }
  },
  {
    "id": 328,
    "name": "trapinch",
    "weight": 150,
    "height": 7,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 10
    }
  },
  {
    "id": 329,
    "name": "vibrava",
    "weight": 153,
    "height": 11,
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 70
    }
  },
  {
    "id": 330,
    "name": "flygon",
    "weight": 820,
    "height": 20,
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 100
    }
  },
  {
    "id": 331,
    "name": "cacnea",
    "weight": 513,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "special_attack": 85,
      "special_defense": 40,
      "speed": 35
    }
  },
  {
    "id": 332,
    "name": "cacturne",
    "weight": 774,
    "height": 13,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "special_attack": 115,
      "special_defense": 60,
      "speed": 55
    }
  },
  {
    "id": 333,
    "name": "swablu",
    "weight": 12,
    "height": 4,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 75,
      "speed": 50
    }
  },
  {
    "id": 334,
    "name": "altaria",
    "weight": 206,
    "height": 11,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "special_attack": 70,
      "special_defense": 105,
      "speed": 80
    }
  },
  {
    "id": 335,
    "name": "zangoose",
    "weight": 403,
    "height": 13,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 90
    }
  },
  {
    "id": 336,
    "name": "seviper",
    "weight": 525,
    "height": 27,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "special_attack": 100,
      "special_defense": 60,
      "speed": 65
    }
  },
  {
    "id": 337,
    "name": "lunatone",
    "weight": 1680,
    "height": 10,
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 70
    }
  },
  {
    "id": 338,
    "name": "solrock",
    "weight": 1540,
    "height": 12,
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 70
    }
  },
  {
    "id": 339,
    "name": "barboach",
    "weight": 19,
    "height": 4,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "special_attack": 46,
      "special_defense": 41,
      "speed": 60
    }
  },
  {
    "id": 340,
    "name": "whiscash",
    "weight": 236,
    "height": 9,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "special_attack": 76,
      "special_defense": 71,
      "speed": 60
    }
  },
  {
    "id": 341,
    "name": "corphish",
    "weight": 115,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 35,
      "speed": 35
    }
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "weight": 328,
    "height": 11,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "special_attack": 90,
      "special_defense": 55,
      "speed": 55
    }
  },
  {
    "id": 343,
    "name": "baltoy",
    "weight": 215,
    "height": 5,
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 55
    }
  },
  {
    "id": 344,
    "name": "claydol",
    "weight": 1080,
    "height": 15,
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "special_attack": 70,
      "special_defense": 120,
      "speed": 75
    }
  },
  {
    "id": 345,
    "name": "lileep",
    "weight": 238,
    "height": 10,
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "special_attack": 61,
      "special_defense": 87,
      "speed": 23
    }
  },
  {
    "id": 346,
    "name": "cradily",
    "weight": 604,
    "height": 15,
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "special_attack": 81,
      "special_defense": 107,
      "speed": 43
    }
  },
  {
    "id": 347,
    "name": "anorith",
    "weight": 125,
    "height": 7,
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    }
  },
  {
    "id": 348,
    "name": "armaldo",
    "weight": 682,
    "height": 15,
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 45
    }
  },
  {
    "id": 349,
    "name": "feebas",
    "weight": 74,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "special_attack": 10,
      "special_defense": 55,
      "speed": 80
    }
  },
  {
    "id": 350,
    "name": "milotic",
    "weight": 1620,
    "height": 62,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "special_attack": 100,
      "special_defense": 125,
      "speed": 81
    }
  },
  {
    "id": 351,
    "name": "castform",
    "weight": 8,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 352,
    "name": "kecleon",
    "weight": 220,
    "height": 10,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 120,
      "speed": 40
    }
  },
  {
    "id": 353,
    "name": "shuppet",
    "weight": 23,
    "height": 6,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "special_attack": 63,
      "special_defense": 33,
      "speed": 45
    }
  },
  {
    "id": 354,
    "name": "banette",
    "weight": 125,
    "height": 11,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "special_attack": 83,
      "special_defense": 63,
      "speed": 65
    }
  },
  {
    "id": 355,
    "name": "duskull",
    "weight": 150,
    "height": 8,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 90,
      "speed": 25
    }
  },
  {
    "id": 356,
    "name": "dusclops",
    "weight": 306,
    "height": 16,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 130,
      "speed": 25
    }
  },
  {
    "id": 357,
    "name": "tropius",
    "weight": 1000,
    "height": 20,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "special_attack": 72,
      "special_defense": 87,
      "speed": 51
    }
  },
  {
    "id": 358,
    "name": "chimecho",
    "weight": 10,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 65
    }
  },
  {
    "id": 359,
    "name": "absol",
    "weight": 470,
    "height": 12,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 60,
      "speed": 75
    }
  },
  {
    "id": 360,
    "name": "wynaut",
    "weight": 140,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "special_attack": 23,
      "special_defense": 48,
      "speed": 23
    }
  },
  {
    "id": 361,
    "name": "snorunt",
    "weight": 168,
    "height": 7,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 50
    }
  },
  {
    "id": 362,
    "name": "glalie",
    "weight": 2565,
    "height": 15,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    }
  },
  {
    "id": 363,
    "name": "spheal",
    "weight": 395,
    "height": 8,
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 50,
      "speed": 25
    }
  },
  {
    "id": 364,
    "name": "sealeo",
    "weight": 876,
    "height": 11,
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 70,
      "speed": 45
    }
  },
  {
    "id": 365,
    "name": "walrein",
    "weight": 1506,
    "height": 14,
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 65
    }
  },
  {
    "id": 366,
    "name": "clamperl",
    "weight": 525,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "special_attack": 74,
      "special_defense": 55,
      "speed": 32
    }
  },
  {
    "id": 367,
    "name": "huntail",
    "weight": 270,
    "height": 17,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "special_attack": 94,
      "special_defense": 75,
      "speed": 52
    }
  },
  {
    "id": 368,
    "name": "gorebyss",
    "weight": 226,
    "height": 18,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "special_attack": 114,
      "special_defense": 75,
      "speed": 52
    }
  },
  {
    "id": 369,
    "name": "relicanth",
    "weight": 234,
    "height": 10,
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 55
    }
  },
  {
    "id": 370,
    "name": "luvdisc",
    "weight": 87,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 97
    }
  },
  {
    "id": 371,
    "name": "bagon",
    "weight": 421,
    "height": 6,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 50
    }
  },
  {
    "id": 372,
    "name": "shelgon",
    "weight": 1105,
    "height": 11,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 50
    }
  },
  {
    "id": 373,
    "name": "salamence",
    "weight": 1026,
    "height": 15,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "special_attack": 110,
      "special_defense": 80,
      "speed": 100
    }
  },
  {
    "id": 374,
    "name": "beldum",
    "weight": 952,
    "height": 6,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "special_attack": 35,
      "special_defense": 60,
      "speed": 30
    }
  },
  {
    "id": 375,
    "name": "metang",
    "weight": 2025,
    "height": 12,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 50
    }
  },
  {
    "id": 376,
    "name": "metagross",
    "weight": 5500,
    "height": 16,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 70
    }
  },
  {
    "id": 377,
    "name": "regirock",
    "weight": 2300,
    "height": 17,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 50
    }
  },
  {
    "id": 378,
    "name": "regice",
    "weight": 1750,
    "height": 18,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 200,
      "speed": 50
    }
  },
  {
    "id": 379,
    "name": "registeel",
    "weight": 2050,
    "height": 19,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "special_attack": 75,
      "special_defense": 150,
      "speed": 50
    }
  },
  {
    "id": 380,
    "name": "latias",
    "weight": 400,
    "height": 14,
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "special_attack": 110,
      "special_defense": 130,
      "speed": 110
    }
  },
  {
    "id": 381,
    "name": "latios",
    "weight": 600,
    "height": 20,
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "special_attack": 130,
      "special_defense": 110,
      "speed": 110
    }
  },
  {
    "id": 382,
    "name": "kyogre",
    "weight": 3520,
    "height": 45,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "special_attack": 150,
      "special_defense": 140,
      "speed": 90
    }
  },
  {
    "id": 383,
    "name": "groudon",
    "weight": 9500,
    "height": 35,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "special_attack": 100,
      "special_defense": 90,
      "speed": 90
    }
  },
  {
    "id": 384,
    "name": "rayquaza",
    "weight": 2065,
    "height": 70,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "special_attack": 150,
      "special_defense": 90,
      "speed": 95
    }
  },
  {
    "id": 385,
    "name": "jirachi",
    "weight": 11,
    "height": 3,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "weight": 608,
    "height": 17,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "special_attack": 150,
      "special_defense": 50,
      "speed": 150
    }
  },
  {
    "id": 387,
    "name": "turtwig",
    "weight": 102,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 31
    }
  },
  {
    "id": 388,
    "name": "grotle",
    "weight": 970,
    "height": 11,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 36
    }
  },
  {
    "id": 389,
    "name": "torterra",
    "weight": 3100,
    "height": 22,
    "types": [
      "grass",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 56
    }
  },
  {
    "id": 390,
    "name": "chimchar",
    "weight": 62,
    "height": 5,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "special_attack": 58,
      "special_defense": 44,
      "speed": 61
    }
  },
  {
    "id": 391,
    "name": "monferno",
    "weight": 220,
    "height": 9,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "special_attack": 78,
      "special_defense": 52,
      "speed": 81
    }
  },
  {
    "id": 392,
    "name": "infernape",
    "weight": 550,
    "height": 12,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "special_attack": 104,
      "special_defense": 71,
      "speed": 108
    }
  },
  {
    "id": 393,
    "name": "piplup",
    "weight": 52,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "special_attack": 61,
      "special_defense": 56,
      "speed": 40
    }
  },
  {
    "id": 394,
    "name": "prinplup",
    "weight": 230,
    "height": 8,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "special_attack": 81,
      "special_defense": 76,
      "speed": 50
    }
  },
  {
    "id": 395,
    "name": "empoleon",
    "weight": 845,
    "height": 17,
    "types": [
      "water",
      "steel"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "special_attack": 111,
      "special_defense": 101,
      "speed": 60
    }
  },
  {
    "id": 396,
    "name": "starly",
    "weight": 20,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 60
    }
  },
  {
    "id": 397,
    "name": "staravia",
    "weight": 155,
    "height": 6,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 80
    }
  },
  {
    "id": 398,
    "name": "staraptor",
    "weight": 249,
    "height": 12,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 100
    }
  },
  {
    "id": 399,
    "name": "bidoof",
    "weight": 200,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 40,
      "speed": 31
    }
  },
  {
    "id": 400,
    "name": "bibarel",
    "weight": 315,
    "height": 10,
    "types": [
      "normal",
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 71
    }
  },
  {
    "id": 401,
    "name": "kricketot",
    "weight": 22,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "special_attack": 25,
      "special_defense": 41,
      "speed": 25
    }
  },
  {
    "id": 402,
    "name": "kricketune",
    "weight": 255,
    "height": 10,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "special_attack": 55,
      "special_defense": 51,
      "speed": 65
    }
  },
  {
    "id": 403,
    "name": "shinx",
    "weight": 95,
    "height": 5,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "special_attack": 40,
      "special_defense": 34,
      "speed": 45
    }
  },
  {
    "id": 404,
    "name": "luxio",
    "weight": 305,
    "height": 9,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "special_attack": 60,
      "special_defense": 49,
      "speed": 60
    }
  },
  {
    "id": 405,
    "name": "luxray",
    "weight": 420,
    "height": 14,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "special_attack": 95,
      "special_defense": 79,
      "speed": 70
    }
  },
  {
    "id": 406,
    "name": "budew",
    "weight": 12,
    "height": 2,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 55
    }
  },
  {
    "id": 407,
    "name": "roserade",
    "weight": 145,
    "height": 9,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 105,
      "speed": 90
    }
  },
  {
    "id": 408,
    "name": "cranidos",
    "weight": 315,
    "height": 9,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 58
    }
  },
  {
    "id": 409,
    "name": "rampardos",
    "weight": 1025,
    "height": 16,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 58
    }
  },
  {
    "id": 410,
    "name": "shieldon",
    "weight": 570,
    "height": 5,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "special_attack": 42,
      "special_defense": 88,
      "speed": 30
    }
  },
  {
    "id": 411,
    "name": "bastiodon",
    "weight": 1495,
    "height": 13,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "special_attack": 47,
      "special_defense": 138,
      "speed": 30
    }
  },
  {
    "id": 412,
    "name": "burmy",
    "weight": 34,
    "height": 2,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "special_attack": 29,
      "special_defense": 45,
      "speed": 36
    }
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "weight": 65,
    "height": 5,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "special_attack": 79,
      "special_defense": 105,
      "speed": 36
    }
  },
  {
    "id": 414,
    "name": "mothim",
    "weight": 233,
    "height": 9,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "special_attack": 94,
      "special_defense": 50,
      "speed": 66
    }
  },
  {
    "id": 415,
    "name": "combee",
    "weight": 55,
    "height": 3,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "special_attack": 30,
      "special_defense": 42,
      "speed": 70
    }
  },
  {
    "id": 416,
    "name": "vespiquen",
    "weight": 385,
    "height": 12,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "special_attack": 80,
      "special_defense": 102,
      "speed": 40
    }
  },
  {
    "id": 417,
    "name": "pachirisu",
    "weight": 39,
    "height": 4,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 95
    }
  },
  {
    "id": 418,
    "name": "buizel",
    "weight": 295,
    "height": 7,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "special_attack": 60,
      "special_defense": 30,
      "speed": 85
    }
  },
  {
    "id": 419,
    "name": "floatzel",
    "weight": 335,
    "height": 11,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 50,
      "speed": 115
    }
  },
  {
    "id": 420,
    "name": "cherubi",
    "weight": 33,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "special_attack": 62,
      "special_defense": 53,
      "speed": 35
    }
  },
  {
    "id": 421,
    "name": "cherrim",
    "weight": 93,
    "height": 5,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "special_attack": 87,
      "special_defense": 78,
      "speed": 85
    }
  },
  {
    "id": 422,
    "name": "shellos",
    "weight": 63,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "special_attack": 57,
      "special_defense": 62,
      "speed": 34
    }
  },
  {
    "id": 423,
    "name": "gastrodon",
    "weight": 299,
    "height": 9,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "special_attack": 92,
      "special_defense": 82,
      "speed": 39
    }
  },
  {
    "id": 424,
    "name": "ambipom",
    "weight": 203,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "special_attack": 60,
      "special_defense": 66,
      "speed": 115
    }
  },
  {
    "id": 425,
    "name": "drifloon",
    "weight": 12,
    "height": 4,
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "special_attack": 60,
      "special_defense": 44,
      "speed": 70
    }
  },
  {
    "id": 426,
    "name": "drifblim",
    "weight": 150,
    "height": 12,
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "special_attack": 90,
      "special_defense": 54,
      "speed": 80
    }
  },
  {
    "id": 427,
    "name": "buneary",
    "weight": 55,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "special_attack": 44,
      "special_defense": 56,
      "speed": 85
    }
  },
  {
    "id": 428,
    "name": "lopunny",
    "weight": 333,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "special_attack": 54,
      "special_defense": 96,
      "speed": 105
    }
  },
  {
    "id": 429,
    "name": "mismagius",
    "weight": 44,
    "height": 9,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 105,
      "special_defense": 105,
      "speed": 105
    }
  },
  {
    "id": 430,
    "name": "honchkrow",
    "weight": 273,
    "height": 9,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "special_attack": 105,
      "special_defense": 52,
      "speed": 71
    }
  },
  {
    "id": 431,
    "name": "glameow",
    "weight": 39,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "special_attack": 42,
      "special_defense": 37,
      "speed": 85
    }
  },
  {
    "id": 432,
    "name": "purugly",
    "weight": 438,
    "height": 10,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "special_attack": 64,
      "special_defense": 59,
      "speed": 112
    }
  },
  {
    "id": 433,
    "name": "chingling",
    "weight": 6,
    "height": 2,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 45
    }
  },
  {
    "id": 434,
    "name": "stunky",
    "weight": 192,
    "height": 4,
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "special_attack": 41,
      "special_defense": 41,
      "speed": 74
    }
  },
  {
    "id": 435,
    "name": "skuntank",
    "weight": 380,
    "height": 10,
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "special_attack": 71,
      "special_defense": 61,
      "speed": 84
    }
  },
  {
    "id": 436,
    "name": "bronzor",
    "weight": 605,
    "height": 5,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "special_attack": 24,
      "special_defense": 86,
      "speed": 23
    }
  },
  {
    "id": 437,
    "name": "bronzong",
    "weight": 1870,
    "height": 13,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "special_attack": 79,
      "special_defense": 116,
      "speed": 33
    }
  },
  {
    "id": 438,
    "name": "bonsly",
    "weight": 150,
    "height": 5,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "special_attack": 10,
      "special_defense": 45,
      "speed": 10
    }
  },
  {
    "id": 439,
    "name": "mime-jr",
    "weight": 130,
    "height": 6,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 90,
      "speed": 60
    }
  },
  {
    "id": 440,
    "name": "happiny",
    "weight": 244,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "special_attack": 15,
      "special_defense": 65,
      "speed": 30
    }
  },
  {
    "id": 441,
    "name": "chatot",
    "weight": 19,
    "height": 5,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "special_attack": 92,
      "special_defense": 42,
      "speed": 91
    }
  },
  {
    "id": 442,
    "name": "spiritomb",
    "weight": 1080,
    "height": 10,
    "types": [
      "ghost",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "special_attack": 92,
      "special_defense": 108,
      "speed": 35
    }
  },
  {
    "id": 443,
    "name": "gible",
    "weight": 205,
    "height": 7,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 42
    }
  },
  {
    "id": 444,
    "name": "gabite",
    "weight": 560,
    "height": 14,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 55,
      "speed": 82
    }
  },
  {
    "id": 445,
    "name": "garchomp",
    "weight": 950,
    "height": 19,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "special_attack": 80,
      "special_defense": 85,
      "speed": 102
    }
  },
  {
    "id": 446,
    "name": "munchlax",
    "weight": 1050,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 85,
      "speed": 5
    }
  },
  {
    "id": 447,
    "name": "riolu",
    "weight": 202,
    "height": 7,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 448,
    "name": "lucario",
    "weight": 540,
    "height": 12,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "special_attack": 115,
      "special_defense": 70,
      "speed": 90
    }
  },
  {
    "id": 449,
    "name": "hippopotas",
    "weight": 495,
    "height": 8,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "special_attack": 38,
      "special_defense": 42,
      "speed": 32
    }
  },
  {
    "id": 450,
    "name": "hippowdon",
    "weight": 3000,
    "height": 20,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "special_attack": 68,
      "special_defense": 72,
      "speed": 47
    }
  },
  {
    "id": 451,
    "name": "skorupi",
    "weight": 120,
    "height": 8,
    "types": [
      "poison",
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 65
    }
  },
  {
    "id": 452,
    "name": "drapion",
    "weight": 615,
    "height": 13,
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 95
    }
  },
  {
    "id": 453,
    "name": "croagunk",
    "weight": 230,
    "height": 7,
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "special_attack": 61,
      "special_defense": 40,
      "speed": 50
    }
  },
  {
    "id": 454,
    "name": "toxicroak",
    "weight": 444,
    "height": 13,
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "special_attack": 86,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 455,
    "name": "carnivine",
    "weight": 270,
    "height": 14,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "special_attack": 90,
      "special_defense": 72,
      "speed": 46
    }
  },
  {
    "id": 456,
    "name": "finneon",
    "weight": 70,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "special_attack": 49,
      "special_defense": 61,
      "speed": 66
    }
  },
  {
    "id": 457,
    "name": "lumineon",
    "weight": 240,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "special_attack": 69,
      "special_defense": 86,
      "speed": 91
    }
  },
  {
    "id": 458,
    "name": "mantyke",
    "weight": 650,
    "height": 10,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 120,
      "speed": 50
    }
  },
  {
    "id": 459,
    "name": "snover",
    "weight": 505,
    "height": 10,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "special_attack": 62,
      "special_defense": 60,
      "speed": 40
    }
  },
  {
    "id": 460,
    "name": "abomasnow",
    "weight": 1355,
    "height": 22,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "special_attack": 92,
      "special_defense": 85,
      "speed": 60
    }
  },
  {
    "id": 461,
    "name": "weavile",
    "weight": 340,
    "height": 11,
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "special_attack": 45,
      "special_defense": 85,
      "speed": 125
    }
  },
  {
    "id": 462,
    "name": "magnezone",
    "weight": 1800,
    "height": 12,
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 60
    }
  },
  {
    "id": 463,
    "name": "lickilicky",
    "weight": 1400,
    "height": 17,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "special_attack": 80,
      "special_defense": 95,
      "speed": 50
    }
  },
  {
    "id": 464,
    "name": "rhyperior",
    "weight": 2828,
    "height": 24,
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 40
    }
  },
  {
    "id": 465,
    "name": "tangrowth",
    "weight": 1286,
    "height": 20,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "special_attack": 110,
      "special_defense": 50,
      "speed": 50
    }
  },
  {
    "id": 466,
    "name": "electivire",
    "weight": 1386,
    "height": 18,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 95
    }
  },
  {
    "id": 467,
    "name": "magmortar",
    "weight": 680,
    "height": 16,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "special_attack": 125,
      "special_defense": 95,
      "speed": 83
    }
  },
  {
    "id": 468,
    "name": "togekiss",
    "weight": 380,
    "height": 15,
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 115,
      "speed": 80
    }
  },
  {
    "id": 469,
    "name": "yanmega",
    "weight": 515,
    "height": 19,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "special_attack": 116,
      "special_defense": 56,
      "speed": 95
    }
  },
  {
    "id": 470,
    "name": "leafeon",
    "weight": 255,
    "height": 10,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 65,
      "speed": 95
    }
  },
  {
    "id": 471,
    "name": "glaceon",
    "weight": 259,
    "height": 8,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "special_attack": 130,
      "special_defense": 95,
      "speed": 65
    }
  },
  {
    "id": 472,
    "name": "gliscor",
    "weight": 425,
    "height": 20,
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "special_attack": 45,
      "special_defense": 75,
      "speed": 95
    }
  },
  {
    "id": 473,
    "name": "mamoswine",
    "weight": 2910,
    "height": 25,
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 60,
      "speed": 80
    }
  },
  {
    "id": 474,
    "name": "porygon-z",
    "weight": 340,
    "height": 9,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "special_attack": 135,
      "special_defense": 75,
      "speed": 90
    }
  },
  {
    "id": 475,
    "name": "gallade",
    "weight": 520,
    "height": 16,
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 115,
      "speed": 80
    }
  },
  {
    "id": 476,
    "name": "probopass",
    "weight": 3400,
    "height": 14,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "special_attack": 75,
      "special_defense": 150,
      "speed": 40
    }
  },
  {
    "id": 477,
    "name": "dusknoir",
    "weight": 1066,
    "height": 22,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "special_attack": 65,
      "special_defense": 135,
      "speed": 45
    }
  },
  {
    "id": 478,
    "name": "froslass",
    "weight": 266,
    "height": 13,
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 70,
      "speed": 110
    }
  },
  {
    "id": 479,
    "name": "rotom",
    "weight": 3,
    "height": 3,
    "types": [
      "electric",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "special_attack": 95,
      "special_defense": 77,
      "speed": 91
    }
  },
  {
    "id": 480,
    "name": "uxie",
    "weight": 3,
    "height": 3,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "special_attack": 75,
      "special_defense": 130,
      "speed": 95
    }
  },
  {
    "id": 481,
    "name": "mesprit",
    "weight": 3,
    "height": 3,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "special_attack": 105,
      "special_defense": 105,
      "speed": 80
    }
  },
  {
    "id": 482,
    "name": "azelf",
    "weight": 3,
    "height": 3,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 70,
      "speed": 115
    }
  },
  {
    "id": 483,
    "name": "dialga",
    "weight": 6830,
    "height": 54,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "special_attack": 150,
      "special_defense": 100,
      "speed": 90
    }
  },
  {
    "id": 484,
    "name": "palkia",
    "weight": 3360,
    "height": 42,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "special_attack": 150,
      "special_defense": 120,
      "speed": 100
    }
  },
  {
    "id": 485,
    "name": "heatran",
    "weight": 4300,
    "height": 17,
    "types": [
      "fire",
      "steel"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "special_attack": 130,
      "special_defense": 106,
      "speed": 77
    }
  },
  {
    "id": 486,
    "name": "regigigas",
    "weight": 4200,
    "height": 37,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "special_attack": 80,
      "special_defense": 110,
      "speed": 100
    }
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "weight": 7500,
    "height": 45,
    "types": [
      "ghost",
      "dragon"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "special_attack": 100,
      "special_defense": 120,
      "speed": 90
    }
  },
  {
    "id": 488,
    "name": "cresselia",
    "weight": 856,
    "height": 15,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "special_attack": 75,
      "special_defense": 120,
      "speed": 85
    }
  },
  {
    "id": 489,
    "name": "phione",
    "weight": 31,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    }
  },
  {
    "id": 490,
    "name": "manaphy",
    "weight": 14,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 491,
    "name": "darkrai",
    "weight": 505,
    "height": 15,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "special_attack": 135,
      "special_defense": 90,
      "speed": 125
    }
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "weight": 21,
    "height": 2,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 493,
    "name": "arceus",
    "weight": 3200,
    "height": 32,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "special_attack": 120,
      "special_defense": 120,
      "speed": 120
    }
  },
  {
    "id": 494,
    "name": "victini",
    "weight": 40,
    "height": 4,
    "types": [
      "psychic",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  {
    "id": 495,
    "name": "snivy",
    "weight": 81,
    "height": 6,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 63
    }
  },
  {
    "id": 496,
    "name": "servine",
    "weight": 160,
    "height": 8,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 83
    }
  },
  {
    "id": 497,
    "name": "serperior",
    "weight": 630,
    "height": 33,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "special_attack": 75,
      "special_defense": 95,
      "speed": 113
    }
  },
  {
    "id": 498,
    "name": "tepig",
    "weight": 99,
    "height": 5,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 45
    }
  },
  {
    "id": 499,
    "name": "pignite",
    "weight": 555,
    "height": 10,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 55
    }
  },
  {
    "id": 500,
    "name": "emboar",
    "weight": 1500,
    "height": 16,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 65,
      "speed": 65
    }
  },
  {
    "id": 501,
    "name": "oshawott",
    "weight": 59,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "special_attack": 63,
      "special_defense": 45,
      "speed": 45
    }
  },
  {
    "id": 502,
    "name": "dewott",
    "weight": 245,
    "height": 8,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "special_attack": 83,
      "special_defense": 60,
      "speed": 60
    }
  },
  {
    "id": 503,
    "name": "samurott",
    "weight": 946,
    "height": 15,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "special_attack": 108,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 504,
    "name": "patrat",
    "weight": 116,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "special_attack": 35,
      "special_defense": 39,
      "speed": 42
    }
  },
  {
    "id": 505,
    "name": "watchog",
    "weight": 270,
    "height": 11,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "special_attack": 60,
      "special_defense": 69,
      "speed": 77
    }
  },
  {
    "id": 506,
    "name": "lillipup",
    "weight": 41,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "special_attack": 25,
      "special_defense": 45,
      "speed": 55
    }
  },
  {
    "id": 507,
    "name": "herdier",
    "weight": 147,
    "height": 9,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "special_attack": 35,
      "special_defense": 65,
      "speed": 60
    }
  },
  {
    "id": 508,
    "name": "stoutland",
    "weight": 610,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 80
    }
  },
  {
    "id": 509,
    "name": "purrloin",
    "weight": 101,
    "height": 4,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "special_attack": 50,
      "special_defense": 37,
      "speed": 66
    }
  },
  {
    "id": 510,
    "name": "liepard",
    "weight": 375,
    "height": 11,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "special_attack": 88,
      "special_defense": 50,
      "speed": 106
    }
  },
  {
    "id": 511,
    "name": "pansage",
    "weight": 105,
    "height": 6,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    }
  },
  {
    "id": 512,
    "name": "simisage",
    "weight": 305,
    "height": 11,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    }
  },
  {
    "id": 513,
    "name": "pansear",
    "weight": 110,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    }
  },
  {
    "id": 514,
    "name": "simisear",
    "weight": 280,
    "height": 10,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    }
  },
  {
    "id": 515,
    "name": "panpour",
    "weight": 135,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    }
  },
  {
    "id": 516,
    "name": "simipour",
    "weight": 290,
    "height": 10,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    }
  },
  {
    "id": 517,
    "name": "munna",
    "weight": 233,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "special_attack": 67,
      "special_defense": 55,
      "speed": 24
    }
  },
  {
    "id": 518,
    "name": "musharna",
    "weight": 605,
    "height": 11,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "special_attack": 107,
      "special_defense": 95,
      "speed": 29
    }
  },
  {
    "id": 519,
    "name": "pidove",
    "weight": 21,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "special_attack": 36,
      "special_defense": 30,
      "speed": 43
    }
  },
  {
    "id": 520,
    "name": "tranquill",
    "weight": 150,
    "height": 6,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "special_attack": 50,
      "special_defense": 42,
      "speed": 65
    }
  },
  {
    "id": 521,
    "name": "unfezant",
    "weight": 290,
    "height": 12,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 93
    }
  },
  {
    "id": 522,
    "name": "blitzle",
    "weight": 298,
    "height": 8,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "special_attack": 50,
      "special_defense": 32,
      "speed": 76
    }
  },
  {
    "id": 523,
    "name": "zebstrika",
    "weight": 795,
    "height": 16,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 63,
      "speed": 116
    }
  },
  {
    "id": 524,
    "name": "roggenrola",
    "weight": 180,
    "height": 4,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    }
  },
  {
    "id": 525,
    "name": "boldore",
    "weight": 1020,
    "height": 9,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 20
    }
  },
  {
    "id": 526,
    "name": "gigalith",
    "weight": 2600,
    "height": 17,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 25
    }
  },
  {
    "id": 527,
    "name": "woobat",
    "weight": 21,
    "height": 4,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "special_attack": 55,
      "special_defense": 43,
      "speed": 72
    }
  },
  {
    "id": 528,
    "name": "swoobat",
    "weight": 105,
    "height": 9,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "special_attack": 77,
      "special_defense": 55,
      "speed": 114
    }
  },
  {
    "id": 529,
    "name": "drilbur",
    "weight": 85,
    "height": 3,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 68
    }
  },
  {
    "id": 530,
    "name": "excadrill",
    "weight": 404,
    "height": 7,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 65,
      "speed": 88
    }
  },
  {
    "id": 531,
    "name": "audino",
    "weight": 310,
    "height": 11,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "special_attack": 60,
      "special_defense": 86,
      "speed": 50
    }
  },
  {
    "id": 532,
    "name": "timburr",
    "weight": 125,
    "height": 6,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 35,
      "speed": 35
    }
  },
  {
    "id": 533,
    "name": "gurdurr",
    "weight": 400,
    "height": 12,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 40
    }
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "weight": 870,
    "height": 14,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 535,
    "name": "tympole",
    "weight": 45,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 64
    }
  },
  {
    "id": 536,
    "name": "palpitoad",
    "weight": 170,
    "height": 8,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 69
    }
  },
  {
    "id": 537,
    "name": "seismitoad",
    "weight": 620,
    "height": 15,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 74
    }
  },
  {
    "id": 538,
    "name": "throh",
    "weight": 555,
    "height": 13,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "special_attack": 30,
      "special_defense": 85,
      "speed": 45
    }
  },
  {
    "id": 539,
    "name": "sawk",
    "weight": 510,
    "height": 14,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "special_attack": 30,
      "special_defense": 75,
      "speed": 85
    }
  },
  {
    "id": 540,
    "name": "sewaddle",
    "weight": 25,
    "height": 3,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 42
    }
  },
  {
    "id": 541,
    "name": "swadloon",
    "weight": 73,
    "height": 5,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 42
    }
  },
  {
    "id": 542,
    "name": "leavanny",
    "weight": 205,
    "height": 12,
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 92
    }
  },
  {
    "id": 543,
    "name": "venipede",
    "weight": 53,
    "height": 4,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "special_attack": 30,
      "special_defense": 39,
      "speed": 57
    }
  },
  {
    "id": 544,
    "name": "whirlipede",
    "weight": 585,
    "height": 12,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "special_attack": 40,
      "special_defense": 79,
      "speed": 47
    }
  },
  {
    "id": 545,
    "name": "scolipede",
    "weight": 2005,
    "height": 25,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "special_attack": 55,
      "special_defense": 69,
      "speed": 112
    }
  },
  {
    "id": 546,
    "name": "cottonee",
    "weight": 6,
    "height": 3,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "special_attack": 37,
      "special_defense": 50,
      "speed": 66
    }
  },
  {
    "id": 547,
    "name": "whimsicott",
    "weight": 66,
    "height": 7,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "special_attack": 77,
      "special_defense": 75,
      "speed": 116
    }
  },
  {
    "id": 548,
    "name": "petilil",
    "weight": 66,
    "height": 5,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 30
    }
  },
  {
    "id": 549,
    "name": "lilligant",
    "weight": 163,
    "height": 11,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 75,
      "speed": 90
    }
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "weight": 180,
    "height": 10,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 55,
      "speed": 98
    }
  },
  {
    "id": 551,
    "name": "sandile",
    "weight": 152,
    "height": 7,
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 65
    }
  },
  {
    "id": 552,
    "name": "krokorok",
    "weight": 334,
    "height": 10,
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 74
    }
  },
  {
    "id": 553,
    "name": "krookodile",
    "weight": 963,
    "height": 15,
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 92
    }
  },
  {
    "id": 554,
    "name": "darumaka",
    "weight": 375,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "special_attack": 15,
      "special_defense": 45,
      "speed": 50
    }
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "weight": 929,
    "height": 13,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 95
    }
  },
  {
    "id": 556,
    "name": "maractus",
    "weight": 280,
    "height": 10,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "special_attack": 106,
      "special_defense": 67,
      "speed": 60
    }
  },
  {
    "id": 557,
    "name": "dwebble",
    "weight": 145,
    "height": 3,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 55
    }
  },
  {
    "id": 558,
    "name": "crustle",
    "weight": 2000,
    "height": 14,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 45
    }
  },
  {
    "id": 559,
    "name": "scraggy",
    "weight": 118,
    "height": 6,
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "special_attack": 35,
      "special_defense": 70,
      "speed": 48
    }
  },
  {
    "id": 560,
    "name": "scrafty",
    "weight": 300,
    "height": 11,
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "special_attack": 45,
      "special_defense": 115,
      "speed": 58
    }
  },
  {
    "id": 561,
    "name": "sigilyph",
    "weight": 140,
    "height": 14,
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "special_attack": 103,
      "special_defense": 80,
      "speed": 97
    }
  },
  {
    "id": 562,
    "name": "yamask",
    "weight": 15,
    "height": 5,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 30
    }
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "weight": 765,
    "height": 17,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "special_attack": 95,
      "special_defense": 105,
      "speed": 30
    }
  },
  {
    "id": 564,
    "name": "tirtouga",
    "weight": 165,
    "height": 7,
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "special_attack": 53,
      "special_defense": 45,
      "speed": 22
    }
  },
  {
    "id": 565,
    "name": "carracosta",
    "weight": 810,
    "height": 12,
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "special_attack": 83,
      "special_defense": 65,
      "speed": 32
    }
  },
  {
    "id": 566,
    "name": "archen",
    "weight": 95,
    "height": 5,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "special_attack": 74,
      "special_defense": 45,
      "speed": 70
    }
  },
  {
    "id": 567,
    "name": "archeops",
    "weight": 320,
    "height": 14,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "special_attack": 112,
      "special_defense": 65,
      "speed": 110
    }
  },
  {
    "id": 568,
    "name": "trubbish",
    "weight": 310,
    "height": 6,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "special_attack": 40,
      "special_defense": 62,
      "speed": 65
    }
  },
  {
    "id": 569,
    "name": "garbodor",
    "weight": 1073,
    "height": 19,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "special_attack": 60,
      "special_defense": 82,
      "speed": 75
    }
  },
  {
    "id": 570,
    "name": "zorua",
    "weight": 125,
    "height": 7,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "special_attack": 80,
      "special_defense": 40,
      "speed": 65
    }
  },
  {
    "id": 571,
    "name": "zoroark",
    "weight": 811,
    "height": 16,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "special_attack": 120,
      "special_defense": 60,
      "speed": 105
    }
  },
  {
    "id": 572,
    "name": "minccino",
    "weight": 58,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 75
    }
  },
  {
    "id": 573,
    "name": "cinccino",
    "weight": 75,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 60,
      "speed": 115
    }
  },
  {
    "id": 574,
    "name": "gothita",
    "weight": 58,
    "height": 4,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    }
  },
  {
    "id": 575,
    "name": "gothorita",
    "weight": 180,
    "height": 7,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 55
    }
  },
  {
    "id": 576,
    "name": "gothitelle",
    "weight": 440,
    "height": 15,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 110,
      "speed": 65
    }
  },
  {
    "id": 577,
    "name": "solosis",
    "weight": 10,
    "height": 3,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "special_attack": 105,
      "special_defense": 50,
      "speed": 20
    }
  },
  {
    "id": 578,
    "name": "duosion",
    "weight": 80,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "special_attack": 125,
      "special_defense": 60,
      "speed": 30
    }
  },
  {
    "id": 579,
    "name": "reuniclus",
    "weight": 201,
    "height": 10,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "special_attack": 125,
      "special_defense": 85,
      "speed": 30
    }
  },
  {
    "id": 580,
    "name": "ducklett",
    "weight": 55,
    "height": 5,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "special_attack": 44,
      "special_defense": 50,
      "speed": 55
    }
  },
  {
    "id": 581,
    "name": "swanna",
    "weight": 242,
    "height": 13,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "special_attack": 87,
      "special_defense": 63,
      "speed": 98
    }
  },
  {
    "id": 582,
    "name": "vanillite",
    "weight": 57,
    "height": 4,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 60,
      "speed": 44
    }
  },
  {
    "id": 583,
    "name": "vanillish",
    "weight": 410,
    "height": 11,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 75,
      "speed": 59
    }
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "weight": 575,
    "height": 13,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 79
    }
  },
  {
    "id": 585,
    "name": "deerling",
    "weight": 195,
    "height": 6,
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    }
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "weight": 925,
    "height": 19,
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 95
    }
  },
  {
    "id": 587,
    "name": "emolga",
    "weight": 50,
    "height": 4,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 60,
      "speed": 103
    }
  },
  {
    "id": 588,
    "name": "karrablast",
    "weight": 59,
    "height": 5,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 60
    }
  },
  {
    "id": 589,
    "name": "escavalier",
    "weight": 330,
    "height": 10,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "special_attack": 60,
      "special_defense": 105,
      "speed": 20
    }
  },
  {
    "id": 590,
    "name": "foongus",
    "weight": 10,
    "height": 2,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 15
    }
  },
  {
    "id": 591,
    "name": "amoonguss",
    "weight": 105,
    "height": 6,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 80,
      "speed": 30
    }
  },
  {
    "id": 592,
    "name": "frillish",
    "weight": 330,
    "height": 12,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 40
    }
  },
  {
    "id": 593,
    "name": "jellicent",
    "weight": 1350,
    "height": 22,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 60
    }
  },
  {
    "id": 594,
    "name": "alomomola",
    "weight": 316,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 65
    }
  },
  {
    "id": 595,
    "name": "joltik",
    "weight": 6,
    "height": 1,
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "special_attack": 57,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 596,
    "name": "galvantula",
    "weight": 143,
    "height": 8,
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "special_attack": 97,
      "special_defense": 60,
      "speed": 108
    }
  },
  {
    "id": 597,
    "name": "ferroseed",
    "weight": 188,
    "height": 6,
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "special_attack": 24,
      "special_defense": 86,
      "speed": 10
    }
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "weight": 1100,
    "height": 10,
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "special_attack": 54,
      "special_defense": 116,
      "speed": 20
    }
  },
  {
    "id": 599,
    "name": "klink",
    "weight": 210,
    "height": 3,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 60,
      "speed": 30
    }
  },
  {
    "id": 600,
    "name": "klang",
    "weight": 510,
    "height": 6,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "special_attack": 70,
      "special_defense": 85,
      "speed": 50
    }
  },
  {
    "id": 601,
    "name": "klinklang",
    "weight": 810,
    "height": 6,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "special_attack": 70,
      "special_defense": 85,
      "speed": 90
    }
  },
  {
    "id": 602,
    "name": "tynamo",
    "weight": 3,
    "height": 2,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 603,
    "name": "eelektrik",
    "weight": 220,
    "height": 12,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 70,
      "speed": 40
    }
  },
  {
    "id": 604,
    "name": "eelektross",
    "weight": 805,
    "height": 21,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "special_attack": 105,
      "special_defense": 80,
      "speed": 50
    }
  },
  {
    "id": 605,
    "name": "elgyem",
    "weight": 90,
    "height": 5,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 55,
      "speed": 30
    }
  },
  {
    "id": 606,
    "name": "beheeyem",
    "weight": 345,
    "height": 10,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "special_attack": 125,
      "special_defense": 95,
      "speed": 40
    }
  },
  {
    "id": 607,
    "name": "litwick",
    "weight": 31,
    "height": 3,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 20
    }
  },
  {
    "id": 608,
    "name": "lampent",
    "weight": 130,
    "height": 6,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 55
    }
  },
  {
    "id": 609,
    "name": "chandelure",
    "weight": 343,
    "height": 10,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "special_attack": 145,
      "special_defense": 90,
      "speed": 80
    }
  },
  {
    "id": 610,
    "name": "axew",
    "weight": 180,
    "height": 6,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 57
    }
  },
  {
    "id": 611,
    "name": "fraxure",
    "weight": 360,
    "height": 10,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 67
    }
  },
  {
    "id": 612,
    "name": "haxorus",
    "weight": 1055,
    "height": 18,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 97
    }
  },
  {
    "id": 613,
    "name": "cubchoo",
    "weight": 85,
    "height": 5,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 40
    }
  },
  {
    "id": 614,
    "name": "beartic",
    "weight": 2600,
    "height": 26,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 50
    }
  },
  {
    "id": 615,
    "name": "cryogonal",
    "weight": 1480,
    "height": 11,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "special_attack": 95,
      "special_defense": 135,
      "speed": 105
    }
  },
  {
    "id": 616,
    "name": "shelmet",
    "weight": 77,
    "height": 4,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 25
    }
  },
  {
    "id": 617,
    "name": "accelgor",
    "weight": 253,
    "height": 8,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "special_attack": 100,
      "special_defense": 60,
      "speed": 145
    }
  },
  {
    "id": 618,
    "name": "stunfisk",
    "weight": 110,
    "height": 7,
    "types": [
      "ground",
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "special_attack": 81,
      "special_defense": 99,
      "speed": 32
    }
  },
  {
    "id": 619,
    "name": "mienfoo",
    "weight": 200,
    "height": 9,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 50,
      "speed": 65
    }
  },
  {
    "id": 620,
    "name": "mienshao",
    "weight": 355,
    "height": 14,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 105
    }
  },
  {
    "id": 621,
    "name": "druddigon",
    "weight": 1390,
    "height": 16,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 48
    }
  },
  {
    "id": 622,
    "name": "golett",
    "weight": 920,
    "height": 10,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 35
    }
  },
  {
    "id": 623,
    "name": "golurk",
    "weight": 3300,
    "height": 28,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 55
    }
  },
  {
    "id": 624,
    "name": "pawniard",
    "weight": 102,
    "height": 5,
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 625,
    "name": "bisharp",
    "weight": 700,
    "height": 16,
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 70
    }
  },
  {
    "id": 626,
    "name": "bouffalant",
    "weight": 946,
    "height": 16,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 95,
      "speed": 55
    }
  },
  {
    "id": 627,
    "name": "rufflet",
    "weight": 105,
    "height": 5,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "special_attack": 37,
      "special_defense": 50,
      "speed": 60
    }
  },
  {
    "id": 628,
    "name": "braviary",
    "weight": 410,
    "height": 15,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "special_attack": 57,
      "special_defense": 75,
      "speed": 80
    }
  },
  {
    "id": 629,
    "name": "vullaby",
    "weight": 90,
    "height": 5,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 60
    }
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "weight": 395,
    "height": 12,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "special_attack": 55,
      "special_defense": 95,
      "speed": 80
    }
  },
  {
    "id": 631,
    "name": "heatmor",
    "weight": 580,
    "height": 14,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "special_attack": 105,
      "special_defense": 66,
      "speed": 65
    }
  },
  {
    "id": 632,
    "name": "durant",
    "weight": 330,
    "height": 3,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "special_attack": 48,
      "special_defense": 48,
      "speed": 109
    }
  },
  {
    "id": 633,
    "name": "deino",
    "weight": 173,
    "height": 8,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 38
    }
  },
  {
    "id": 634,
    "name": "zweilous",
    "weight": 500,
    "height": 14,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 58
    }
  },
  {
    "id": 635,
    "name": "hydreigon",
    "weight": 1600,
    "height": 18,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 98
    }
  },
  {
    "id": 636,
    "name": "larvesta",
    "weight": 288,
    "height": 11,
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 55,
      "speed": 60
    }
  },
  {
    "id": 637,
    "name": "volcarona",
    "weight": 460,
    "height": 16,
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "special_attack": 135,
      "special_defense": 105,
      "speed": 100
    }
  },
  {
    "id": 638,
    "name": "cobalion",
    "weight": 2500,
    "height": 21,
    "types": [
      "steel",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "special_attack": 90,
      "special_defense": 72,
      "speed": 108
    }
  },
  {
    "id": 639,
    "name": "terrakion",
    "weight": 2600,
    "height": 19,
    "types": [
      "rock",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "special_attack": 72,
      "special_defense": 90,
      "speed": 108
    }
  },
  {
    "id": 640,
    "name": "virizion",
    "weight": 2000,
    "height": 20,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "special_attack": 90,
      "special_defense": 129,
      "speed": 108
    }
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "weight": 630,
    "height": 15,
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 80,
      "speed": 111
    }
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "weight": 610,
    "height": 15,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 80,
      "speed": 111
    }
  },
  {
    "id": 643,
    "name": "reshiram",
    "weight": 3300,
    "height": 32,
    "types": [
      "dragon",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "special_attack": 150,
      "special_defense": 120,
      "speed": 90
    }
  },
  {
    "id": 644,
    "name": "zekrom",
    "weight": 3450,
    "height": 29,
    "types": [
      "dragon",
      "electric"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "special_attack": 120,
      "special_defense": 100,
      "speed": 90
    }
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "weight": 680,
    "height": 15,
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "special_attack": 115,
      "special_defense": 80,
      "speed": 101
    }
  },
  {
    "id": 646,
    "name": "kyurem",
    "weight": 3250,
    "height": 30,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 95
    }
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "weight": 485,
    "height": 14,
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "special_attack": 129,
      "special_defense": 90,
      "speed": 108
    }
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "weight": 65,
    "height": 6,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "special_attack": 128,
      "special_defense": 128,
      "speed": 90
    }
  },
  {
    "id": 649,
    "name": "genesect",
    "weight": 825,
    "height": 15,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 95,
      "speed": 99
    }
  },
  {
    "id": 650,
    "name": "chespin",
    "weight": 90,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "special_attack": 48,
      "special_defense": 45,
      "speed": 38
    }
  },
  {
    "id": 651,
    "name": "quilladin",
    "weight": 290,
    "height": 7,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "special_attack": 56,
      "special_defense": 58,
      "speed": 57
    }
  },
  {
    "id": 652,
    "name": "chesnaught",
    "weight": 900,
    "height": 16,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "special_attack": 74,
      "special_defense": 75,
      "speed": 64
    }
  },
  {
    "id": 653,
    "name": "fennekin",
    "weight": 94,
    "height": 4,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 62,
      "special_defense": 60,
      "speed": 60
    }
  },
  {
    "id": 654,
    "name": "braixen",
    "weight": 145,
    "height": 10,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "special_attack": 90,
      "special_defense": 70,
      "speed": 73
    }
  },
  {
    "id": 655,
    "name": "delphox",
    "weight": 390,
    "height": 15,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special_attack": 114,
      "special_defense": 100,
      "speed": 104
    }
  },
  {
    "id": 656,
    "name": "froakie",
    "weight": 70,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "special_attack": 62,
      "special_defense": 44,
      "speed": 71
    }
  },
  {
    "id": 657,
    "name": "frogadier",
    "weight": 109,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "special_attack": 83,
      "special_defense": 56,
      "speed": 97
    }
  },
  {
    "id": 658,
    "name": "greninja",
    "weight": 400,
    "height": 15,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special_attack": 103,
      "special_defense": 71,
      "speed": 122
    }
  },
  {
    "id": 659,
    "name": "bunnelby",
    "weight": 50,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "special_attack": 32,
      "special_defense": 36,
      "speed": 57
    }
  },
  {
    "id": 660,
    "name": "diggersby",
    "weight": 424,
    "height": 10,
    "types": [
      "normal",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "special_attack": 50,
      "special_defense": 77,
      "speed": 78
    }
  },
  {
    "id": 661,
    "name": "fletchling",
    "weight": 17,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "special_attack": 40,
      "special_defense": 38,
      "speed": 62
    }
  },
  {
    "id": 662,
    "name": "fletchinder",
    "weight": 160,
    "height": 7,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "special_attack": 56,
      "special_defense": 52,
      "speed": 84
    }
  },
  {
    "id": 663,
    "name": "talonflame",
    "weight": 245,
    "height": 12,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "special_attack": 74,
      "special_defense": 69,
      "speed": 126
    }
  },
  {
    "id": 664,
    "name": "scatterbug",
    "weight": 25,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "special_attack": 27,
      "special_defense": 25,
      "speed": 35
    }
  },
  {
    "id": 665,
    "name": "spewpa",
    "weight": 84,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "special_attack": 27,
      "special_defense": 30,
      "speed": 29
    }
  },
  {
    "id": 666,
    "name": "vivillon",
    "weight": 170,
    "height": 12,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "special_attack": 90,
      "special_defense": 50,
      "speed": 89
    }
  },
  {
    "id": 667,
    "name": "litleo",
    "weight": 135,
    "height": 6,
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "special_attack": 73,
      "special_defense": 54,
      "speed": 72
    }
  },
  {
    "id": 668,
    "name": "pyroar",
    "weight": 815,
    "height": 15,
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "special_attack": 109,
      "special_defense": 66,
      "speed": 106
    }
  },
  {
    "id": 669,
    "name": "flabebe",
    "weight": 1,
    "height": 1,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "special_attack": 61,
      "special_defense": 79,
      "speed": 42
    }
  },
  {
    "id": 670,
    "name": "floette",
    "weight": 9,
    "height": 2,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "special_attack": 75,
      "special_defense": 98,
      "speed": 52
    }
  },
  {
    "id": 671,
    "name": "florges",
    "weight": 100,
    "height": 11,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "special_attack": 112,
      "special_defense": 154,
      "speed": 75
    }
  },
  {
    "id": 672,
    "name": "skiddo",
    "weight": 310,
    "height": 9,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "special_attack": 62,
      "special_defense": 57,
      "speed": 52
    }
  },
  {
    "id": 673,
    "name": "gogoat",
    "weight": 910,
    "height": 17,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "special_attack": 97,
      "special_defense": 81,
      "speed": 68
    }
  },
  {
    "id": 674,
    "name": "pancham",
    "weight": 80,
    "height": 6,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "special_attack": 46,
      "special_defense": 48,
      "speed": 43
    }
  },
  {
    "id": 675,
    "name": "pangoro",
    "weight": 1360,
    "height": 21,
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "special_attack": 69,
      "special_defense": 71,
      "speed": 58
    }
  },
  {
    "id": 676,
    "name": "furfrou",
    "weight": 280,
    "height": 12,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 90,
      "speed": 102
    }
  },
  {
    "id": 677,
    "name": "espurr",
    "weight": 35,
    "height": 3,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "special_attack": 63,
      "special_defense": 60,
      "speed": 68
    }
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "weight": 85,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special_attack": 83,
      "special_defense": 81,
      "speed": 104
    }
  },
  {
    "id": 679,
    "name": "honedge",
    "weight": 20,
    "height": 8,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "special_attack": 35,
      "special_defense": 37,
      "speed": 28
    }
  },
  {
    "id": 680,
    "name": "doublade",
    "weight": 45,
    "height": 8,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "special_attack": 45,
      "special_defense": 49,
      "speed": 35
    }
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "weight": 530,
    "height": 17,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "special_attack": 50,
      "special_defense": 140,
      "speed": 60
    }
  },
  {
    "id": 682,
    "name": "spritzee",
    "weight": 5,
    "height": 2,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "special_attack": 63,
      "special_defense": 65,
      "speed": 23
    }
  },
  {
    "id": 683,
    "name": "aromatisse",
    "weight": 155,
    "height": 8,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "special_attack": 99,
      "special_defense": 89,
      "speed": 29
    }
  },
  {
    "id": 684,
    "name": "swirlix",
    "weight": 35,
    "height": 4,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "special_attack": 59,
      "special_defense": 57,
      "speed": 49
    }
  },
  {
    "id": 685,
    "name": "slurpuff",
    "weight": 50,
    "height": 8,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 72
    }
  },
  {
    "id": 686,
    "name": "inkay",
    "weight": 35,
    "height": 4,
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "special_attack": 37,
      "special_defense": 46,
      "speed": 45
    }
  },
  {
    "id": 687,
    "name": "malamar",
    "weight": 470,
    "height": 15,
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "special_attack": 68,
      "special_defense": 75,
      "speed": 73
    }
  },
  {
    "id": 688,
    "name": "binacle",
    "weight": 310,
    "height": 5,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "special_attack": 39,
      "special_defense": 56,
      "speed": 50
    }
  },
  {
    "id": 689,
    "name": "barbaracle",
    "weight": 960,
    "height": 13,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "special_attack": 54,
      "special_defense": 86,
      "speed": 68
    }
  },
  {
    "id": 690,
    "name": "skrelp",
    "weight": 73,
    "height": 5,
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 30
    }
  },
  {
    "id": 691,
    "name": "dragalge",
    "weight": 815,
    "height": 18,
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "special_attack": 97,
      "special_defense": 123,
      "speed": 44
    }
  },
  {
    "id": 692,
    "name": "clauncher",
    "weight": 83,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special_attack": 58,
      "special_defense": 63,
      "speed": 44
    }
  },
  {
    "id": 693,
    "name": "clawitzer",
    "weight": 353,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "special_attack": 120,
      "special_defense": 89,
      "speed": 59
    }
  },
  {
    "id": 694,
    "name": "helioptile",
    "weight": 60,
    "height": 5,
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "special_attack": 61,
      "special_defense": 43,
      "speed": 70
    }
  },
  {
    "id": 695,
    "name": "heliolisk",
    "weight": 210,
    "height": 10,
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "special_attack": 109,
      "special_defense": 94,
      "speed": 109
    }
  },
  {
    "id": 696,
    "name": "tyrunt",
    "weight": 260,
    "height": 8,
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 48
    }
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "weight": 2700,
    "height": 25,
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "special_attack": 69,
      "special_defense": 59,
      "speed": 71
    }
  },
  {
    "id": 698,
    "name": "amaura",
    "weight": 252,
    "height": 13,
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "special_attack": 67,
      "special_defense": 63,
      "speed": 46
    }
  },
  {
    "id": 699,
    "name": "aurorus",
    "weight": 2250,
    "height": 27,
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "special_attack": 99,
      "special_defense": 92,
      "speed": 58
    }
  },
  {
    "id": 700,
    "name": "sylveon",
    "weight": 235,
    "height": 10,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "special_attack": 110,
      "special_defense": 130,
      "speed": 60
    }
  },
  {
    "id": 701,
    "name": "hawlucha",
    "weight": 215,
    "height": 8,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "special_attack": 74,
      "special_defense": 63,
      "speed": 118
    }
  },
  {
    "id": 702,
    "name": "dedenne",
    "weight": 22,
    "height": 2,
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "special_attack": 81,
      "special_defense": 67,
      "speed": 101
    }
  },
  {
    "id": 703,
    "name": "carbink",
    "weight": 57,
    "height": 3,
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "special_attack": 50,
      "special_defense": 150,
      "speed": 50
    }
  },
  {
    "id": 704,
    "name": "goomy",
    "weight": 28,
    "height": 3,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 40
    }
  },
  {
    "id": 705,
    "name": "sliggoo",
    "weight": 175,
    "height": 8,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "special_attack": 83,
      "special_defense": 113,
      "speed": 60
    }
  },
  {
    "id": 706,
    "name": "goodra",
    "weight": 1505,
    "height": 20,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "special_attack": 110,
      "special_defense": 150,
      "speed": 80
    }
  },
  {
    "id": 707,
    "name": "klefki",
    "weight": 30,
    "height": 2,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "special_attack": 80,
      "special_defense": 87,
      "speed": 75
    }
  },
  {
    "id": 708,
    "name": "phantump",
    "weight": 70,
    "height": 4,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 38
    }
  },
  {
    "id": 709,
    "name": "trevenant",
    "weight": 710,
    "height": 15,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "special_attack": 65,
      "special_defense": 82,
      "speed": 56
    }
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "weight": 50,
    "height": 4,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "special_attack": 44,
      "special_defense": 55,
      "speed": 51
    }
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "weight": 125,
    "height": 9,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "special_attack": 58,
      "special_defense": 75,
      "speed": 84
    }
  },
  {
    "id": 712,
    "name": "bergmite",
    "weight": 995,
    "height": 10,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "special_attack": 32,
      "special_defense": 35,
      "speed": 28
    }
  },
  {
    "id": 713,
    "name": "avalugg",
    "weight": 5050,
    "height": 20,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "special_attack": 44,
      "special_defense": 46,
      "speed": 28
    }
  },
  {
    "id": 714,
    "name": "noibat",
    "weight": 80,
    "height": 5,
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special_attack": 45,
      "special_defense": 40,
      "speed": 55
    }
  },
  {
    "id": 715,
    "name": "noivern",
    "weight": 850,
    "height": 15,
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "special_attack": 97,
      "special_defense": 80,
      "speed": 123
    }
  },
  {
    "id": 716,
    "name": "xerneas",
    "weight": 2150,
    "height": 30,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special_attack": 131,
      "special_defense": 98,
      "speed": 99
    }
  },
  {
    "id": 717,
    "name": "yveltal",
    "weight": 2030,
    "height": 58,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special_attack": 131,
      "special_defense": 98,
      "speed": 99
    }
  },
  {
    "id": 718,
    "name": "zygarde-50",
    "weight": 3050,
    "height": 50,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "special_attack": 81,
      "special_defense": 95,
      "speed": 95
    }
  },
  {
    "id": 719,
    "name": "diancie",
    "weight": 88,
    "height": 7,
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "special_attack": 100,
      "special_defense": 150,
      "speed": 50
    }
  },
  {
    "id": 720,
    "name": "hoopa",
    "weight": 90,
    "height": 5,
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "special_attack": 150,
      "special_defense": 130,
      "speed": 70
    }
  },
  {
    "id": 721,
    "name": "volcanion",
    "weight": 1950,
    "height": 17,
    "types": [
      "fire",
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 70
    }
  },
  {
    "id": 722,
    "name": "rowlet",
    "weight": 15,
    "height": 3,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 42
    }
  },
  {
    "id": 723,
    "name": "dartrix",
    "weight": 160,
    "height": 7,
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 52
    }
  },
  {
    "id": 724,
    "name": "decidueye",
    "weight": 366,
    "height": 16,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 725,
    "name": "litten",
    "weight": 43,
    "height": 4,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 70
    }
  },
  {
    "id": 726,
    "name": "torracat",
    "weight": 250,
    "height": 7,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "special_attack": 80,
      "special_defense": 50,
      "speed": 90
    }
  },
  {
    "id": 727,
    "name": "incineroar",
    "weight": 830,
    "height": 18,
    "types": [
      "fire",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 60
    }
  },
  {
    "id": 728,
    "name": "popplio",
    "weight": 75,
    "height": 4,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "special_attack": 66,
      "special_defense": 56,
      "speed": 40
    }
  },
  {
    "id": 729,
    "name": "brionne",
    "weight": 175,
    "height": 6,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "special_attack": 91,
      "special_defense": 81,
      "speed": 50
    }
  },
  {
    "id": 730,
    "name": "primarina",
    "weight": 440,
    "height": 18,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "special_attack": 126,
      "special_defense": 116,
      "speed": 60
    }
  },
  {
    "id": 731,
    "name": "pikipek",
    "weight": 12,
    "height": 3,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 65
    }
  },
  {
    "id": 732,
    "name": "trumbeak",
    "weight": 148,
    "height": 6,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    }
  },
  {
    "id": 733,
    "name": "toucannon",
    "weight": 260,
    "height": 11,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "special_attack": 75,
      "special_defense": 75,
      "speed": 60
    }
  },
  {
    "id": 734,
    "name": "yungoos",
    "weight": 60,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 45
    }
  },
  {
    "id": 735,
    "name": "gumshoos",
    "weight": 142,
    "height": 7,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 45
    }
  },
  {
    "id": 736,
    "name": "grubbin",
    "weight": 44,
    "height": 4,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "special_attack": 55,
      "special_defense": 45,
      "speed": 46
    }
  },
  {
    "id": 737,
    "name": "charjabug",
    "weight": 105,
    "height": 5,
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 36
    }
  },
  {
    "id": 738,
    "name": "vikavolt",
    "weight": 450,
    "height": 15,
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "special_attack": 145,
      "special_defense": 75,
      "speed": 43
    }
  },
  {
    "id": 739,
    "name": "crabrawler",
    "weight": 70,
    "height": 6,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "special_attack": 42,
      "special_defense": 47,
      "speed": 63
    }
  },
  {
    "id": 740,
    "name": "crabominable",
    "weight": 1800,
    "height": 17,
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "special_attack": 62,
      "special_defense": 67,
      "speed": 43
    }
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "weight": 34,
    "height": 6,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "special_attack": 98,
      "special_defense": 70,
      "speed": 93
    }
  },
  {
    "id": 742,
    "name": "cutiefly",
    "weight": 2,
    "height": 1,
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 55,
      "special_defense": 40,
      "speed": 84
    }
  },
  {
    "id": 743,
    "name": "ribombee",
    "weight": 5,
    "height": 2,
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 124
    }
  },
  {
    "id": 744,
    "name": "rockruff",
    "weight": 92,
    "height": 5,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 60
    }
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "weight": 250,
    "height": 8,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 112
    }
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "weight": 3,
    "height": 2,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 40
    }
  },
  {
    "id": 747,
    "name": "mareanie",
    "weight": 80,
    "height": 4,
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special_attack": 43,
      "special_defense": 52,
      "speed": 45
    }
  },
  {
    "id": 748,
    "name": "toxapex",
    "weight": 145,
    "height": 7,
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "special_attack": 53,
      "special_defense": 142,
      "speed": 35
    }
  },
  {
    "id": 749,
    "name": "mudbray",
    "weight": 1100,
    "height": 10,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 45
    }
  },
  {
    "id": 750,
    "name": "mudsdale",
    "weight": 9200,
    "height": 25,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 85,
      "speed": 35
    }
  },
  {
    "id": 751,
    "name": "dewpider",
    "weight": 40,
    "height": 3,
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "special_attack": 40,
      "special_defense": 72,
      "speed": 27
    }
  },
  {
    "id": 752,
    "name": "araquanid",
    "weight": 820,
    "height": 18,
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special_attack": 50,
      "special_defense": 132,
      "speed": 42
    }
  },
  {
    "id": 753,
    "name": "fomantis",
    "weight": 15,
    "height": 3,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 35,
      "speed": 35
    }
  },
  {
    "id": 754,
    "name": "lurantis",
    "weight": 185,
    "height": 9,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 45
    }
  },
  {
    "id": 755,
    "name": "morelull",
    "weight": 15,
    "height": 2,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 15
    }
  },
  {
    "id": 756,
    "name": "shiinotic",
    "weight": 115,
    "height": 10,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 30
    }
  },
  {
    "id": 757,
    "name": "salandit",
    "weight": 48,
    "height": 6,
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "special_attack": 71,
      "special_defense": 40,
      "speed": 77
    }
  },
  {
    "id": 758,
    "name": "salazzle",
    "weight": 222,
    "height": 12,
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special_attack": 111,
      "special_defense": 60,
      "speed": 117
    }
  },
  {
    "id": 759,
    "name": "stufful",
    "weight": 68,
    "height": 5,
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 50
    }
  },
  {
    "id": 760,
    "name": "bewear",
    "weight": 1350,
    "height": 21,
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 60
    }
  },
  {
    "id": 761,
    "name": "bounsweet",
    "weight": 32,
    "height": 3,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "special_attack": 30,
      "special_defense": 38,
      "speed": 32
    }
  },
  {
    "id": 762,
    "name": "steenee",
    "weight": 82,
    "height": 7,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "special_attack": 40,
      "special_defense": 48,
      "speed": 62
    }
  },
  {
    "id": 763,
    "name": "tsareena",
    "weight": 214,
    "height": 12,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "special_attack": 50,
      "special_defense": 98,
      "speed": 72
    }
  },
  {
    "id": 764,
    "name": "comfey",
    "weight": 3,
    "height": 1,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "special_attack": 82,
      "special_defense": 110,
      "speed": 100
    }
  },
  {
    "id": 765,
    "name": "oranguru",
    "weight": 760,
    "height": 15,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 110,
      "speed": 60
    }
  },
  {
    "id": 766,
    "name": "passimian",
    "weight": 828,
    "height": 20,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 80
    }
  },
  {
    "id": 767,
    "name": "wimpod",
    "weight": 120,
    "height": 5,
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 80
    }
  },
  {
    "id": 768,
    "name": "golisopod",
    "weight": 1080,
    "height": 20,
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 40
    }
  },
  {
    "id": 769,
    "name": "sandygast",
    "weight": 700,
    "height": 5,
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 45,
      "speed": 15
    }
  },
  {
    "id": 770,
    "name": "palossand",
    "weight": 2500,
    "height": 13,
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "special_attack": 100,
      "special_defense": 75,
      "speed": 35
    }
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "weight": 12,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "special_attack": 30,
      "special_defense": 130,
      "speed": 5
    }
  },
  {
    "id": 772,
    "name": "type-null",
    "weight": 1205,
    "height": 19,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 59
    }
  },
  {
    "id": 773,
    "name": "silvally",
    "weight": 1005,
    "height": 23,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 95
    }
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "weight": 400,
    "height": 3,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 60
    }
  },
  {
    "id": 775,
    "name": "komala",
    "weight": 199,
    "height": 4,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "special_attack": 75,
      "special_defense": 95,
      "speed": 65
    }
  },
  {
    "id": 776,
    "name": "turtonator",
    "weight": 2120,
    "height": 20,
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "special_attack": 91,
      "special_defense": 85,
      "speed": 36
    }
  },
  {
    "id": 777,
    "name": "togedemaru",
    "weight": 33,
    "height": 3,
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "special_attack": 40,
      "special_defense": 73,
      "speed": 96
    }
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "weight": 7,
    "height": 2,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special_attack": 50,
      "special_defense": 105,
      "speed": 96
    }
  },
  {
    "id": 779,
    "name": "bruxish",
    "weight": 190,
    "height": 9,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 92
    }
  },
  {
    "id": 780,
    "name": "drampa",
    "weight": 1850,
    "height": 30,
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "special_attack": 135,
      "special_defense": 91,
      "speed": 36
    }
  },
  {
    "id": 781,
    "name": "dhelmise",
    "weight": 2100,
    "height": 39,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "special_attack": 86,
      "special_defense": 90,
      "speed": 40
    }
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "weight": 297,
    "height": 6,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 45
    }
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "weight": 470,
    "height": 12,
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 65
    }
  },
  {
    "id": 784,
    "name": "kommo-o",
    "weight": 782,
    "height": 16,
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special_attack": 100,
      "special_defense": 105,
      "speed": 85
    }
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "weight": 205,
    "height": 18,
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "special_attack": 95,
      "special_defense": 75,
      "speed": 130
    }
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "weight": 186,
    "height": 12,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "special_attack": 130,
      "special_defense": 115,
      "speed": 95
    }
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "weight": 455,
    "height": 19,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 75
    }
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "weight": 212,
    "height": 13,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "special_attack": 95,
      "special_defense": 130,
      "speed": 85
    }
  },
  {
    "id": 789,
    "name": "cosmog",
    "weight": 1,
    "height": 2,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "special_attack": 29,
      "special_defense": 31,
      "speed": 37
    }
  },
  {
    "id": 790,
    "name": "cosmoem",
    "weight": 9999,
    "height": 1,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "special_attack": 29,
      "special_defense": 131,
      "speed": 37
    }
  },
  {
    "id": 791,
    "name": "solgaleo",
    "weight": 2300,
    "height": 34,
    "types": [
      "psychic",
      "steel"
    ],
    "stats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "special_attack": 113,
      "special_defense": 89,
      "speed": 97
    }
  },
  {
    "id": 792,
    "name": "lunala",
    "weight": 1200,
    "height": 40,
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "special_attack": 137,
      "special_defense": 107,
      "speed": 97
    }
  },
  {
    "id": 793,
    "name": "nihilego",
    "weight": 555,
    "height": 12,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "special_attack": 127,
      "special_defense": 131,
      "speed": 103
    }
  },
  {
    "id": 794,
    "name": "buzzwole",
    "weight": 3336,
    "height": 24,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "special_attack": 53,
      "special_defense": 53,
      "speed": 79
    }
  },
  {
    "id": 795,
    "name": "pheromosa",
    "weight": 250,
    "height": 18,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "special_attack": 137,
      "special_defense": 37,
      "speed": 151
    }
  },
  {
    "id": 796,
    "name": "xurkitree",
    "weight": 1000,
    "height": 38,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "special_attack": 173,
      "special_defense": 71,
      "speed": 83
    }
  },
  {
    "id": 797,
    "name": "celesteela",
    "weight": 9999,
    "height": 92,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "special_attack": 107,
      "special_defense": 101,
      "speed": 61
    }
  },
  {
    "id": 798,
    "name": "kartana",
    "weight": 1,
    "height": 3,
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "special_attack": 59,
      "special_defense": 31,
      "speed": 109
    }
  },
  {
    "id": 799,
    "name": "guzzlord",
    "weight": 8880,
    "height": 55,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "special_attack": 97,
      "special_defense": 53,
      "speed": 43
    }
  },
  {
    "id": 800,
    "name": "necrozma",
    "weight": 2300,
    "height": 24,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "special_attack": 127,
      "special_defense": 89,
      "speed": 79
    }
  },
  {
    "id": 801,
    "name": "magearna",
    "weight": 805,
    "height": 10,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "special_attack": 130,
      "special_defense": 115,
      "speed": 65
    }
  },
  {
    "id": 802,
    "name": "marshadow",
    "weight": 222,
    "height": 7,
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 90,
      "speed": 125
    }
  },
  {
    "id": 803,
    "name": "poipole",
    "weight": 18,
    "height": 6,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "special_attack": 73,
      "special_defense": 67,
      "speed": 73
    }
  },
  {
    "id": 804,
    "name": "naganadel",
    "weight": 1500,
    "height": 36,
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "special_attack": 127,
      "special_defense": 73,
      "speed": 121
    }
  },
  {
    "id": 805,
    "name": "stakataka",
    "weight": 8200,
    "height": 55,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "special_attack": 53,
      "special_defense": 101,
      "speed": 13
    }
  },
  {
    "id": 806,
    "name": "blacephalon",
    "weight": 130,
    "height": 18,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "special_attack": 151,
      "special_defense": 79,
      "speed": 107
    }
  },
  {
    "id": 807,
    "name": "zeraora",
    "weight": 445,
    "height": 15,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "special_attack": 102,
      "special_defense": 80,
      "speed": 143
    }
  },
  {
    "id": 808,
    "name": "meltan",
    "weight": 80,
    "height": 2,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 35,
      "speed": 34
    }
  },
  {
    "id": 809,
    "name": "melmetal",
    "weight": 8000,
    "height": 25,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 34
    }
  },
  {
    "id": 810,
    "name": "grookey",
    "weight": 50,
    "height": 3,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 65
    }
  },
  {
    "id": 811,
    "name": "thwackey",
    "weight": 140,
    "height": 7,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 80
    }
  },
  {
    "id": 812,
    "name": "rillaboom",
    "weight": 900,
    "height": 21,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 85
    }
  },
  {
    "id": 813,
    "name": "scorbunny",
    "weight": 45,
    "height": 3,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 69
    }
  },
  {
    "id": 814,
    "name": "raboot",
    "weight": 90,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 94
    }
  },
  {
    "id": 815,
    "name": "cinderace",
    "weight": 330,
    "height": 14,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 119
    }
  },
  {
    "id": 816,
    "name": "sobble",
    "weight": 40,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 40,
      "speed": 70
    }
  },
  {
    "id": 817,
    "name": "drizzile",
    "weight": 115,
    "height": 7,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "special_attack": 95,
      "special_defense": 55,
      "speed": 90
    }
  },
  {
    "id": 818,
    "name": "inteleon",
    "weight": 452,
    "height": 19,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 65,
      "speed": 120
    }
  },
  {
    "id": 819,
    "name": "skwovet",
    "weight": 25,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 25
    }
  },
  {
    "id": 820,
    "name": "greedent",
    "weight": 60,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 20
    }
  },
  {
    "id": 821,
    "name": "rookidee",
    "weight": 18,
    "height": 2,
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "special_attack": 33,
      "special_defense": 35,
      "speed": 57
    }
  },
  {
    "id": 822,
    "name": "corvisquire",
    "weight": 160,
    "height": 8,
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "special_attack": 43,
      "special_defense": 55,
      "speed": 77
    }
  },
  {
    "id": 823,
    "name": "corviknight",
    "weight": 750,
    "height": 22,
    "types": [
      "flying",
      "steel"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "special_attack": 53,
      "special_defense": 85,
      "speed": 67
    }
  },
  {
    "id": 824,
    "name": "blipbug",
    "weight": 80,
    "height": 4,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "special_attack": 25,
      "special_defense": 45,
      "speed": 45
    }
  },
  {
    "id": 825,
    "name": "dottler",
    "weight": 195,
    "height": 4,
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "special_attack": 50,
      "special_defense": 90,
      "speed": 30
    }
  },
  {
    "id": 826,
    "name": "orbeetle",
    "weight": 408,
    "height": 4,
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 90
    }
  },
  {
    "id": 827,
    "name": "nickit",
    "weight": 89,
    "height": 6,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "special_attack": 47,
      "special_defense": 52,
      "speed": 50
    }
  },
  {
    "id": 828,
    "name": "thievul",
    "weight": 199,
    "height": 12,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "special_attack": 87,
      "special_defense": 92,
      "speed": 90
    }
  },
  {
    "id": 829,
    "name": "gossifleur",
    "weight": 22,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 10
    }
  },
  {
    "id": 830,
    "name": "eldegoss",
    "weight": 25,
    "height": 5,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 60
    }
  },
  {
    "id": 831,
    "name": "wooloo",
    "weight": 60,
    "height": 6,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 48
    }
  },
  {
    "id": 832,
    "name": "dubwool",
    "weight": 430,
    "height": 13,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 88
    }
  },
  {
    "id": 833,
    "name": "chewtle",
    "weight": 85,
    "height": 3,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special_attack": 38,
      "special_defense": 38,
      "speed": 44
    }
  },
  {
    "id": 834,
    "name": "drednaw",
    "weight": 1155,
    "height": 10,
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "special_attack": 48,
      "special_defense": 68,
      "speed": 74
    }
  },
  {
    "id": 835,
    "name": "yamper",
    "weight": 135,
    "height": 3,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 26
    }
  },
  {
    "id": 836,
    "name": "boltund",
    "weight": 340,
    "height": 10,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 60,
      "speed": 121
    }
  },
  {
    "id": 837,
    "name": "rolycoly",
    "weight": 120,
    "height": 3,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 30
    }
  },
  {
    "id": 838,
    "name": "carkol",
    "weight": 780,
    "height": 11,
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    }
  },
  {
    "id": 839,
    "name": "coalossal",
    "weight": 3105,
    "height": 28,
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 30
    }
  },
  {
    "id": 840,
    "name": "applin",
    "weight": 5,
    "height": 2,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 20
    }
  },
  {
    "id": 841,
    "name": "flapple",
    "weight": 10,
    "height": 3,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 70
    }
  },
  {
    "id": 842,
    "name": "appletun",
    "weight": 130,
    "height": 4,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 30
    }
  },
  {
    "id": 843,
    "name": "silicobra",
    "weight": 76,
    "height": 22,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 46
    }
  },
  {
    "id": 844,
    "name": "sandaconda",
    "weight": 655,
    "height": 38,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 71
    }
  },
  {
    "id": 845,
    "name": "cramorant",
    "weight": 180,
    "height": 8,
    "types": [
      "flying",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 85
    }
  },
  {
    "id": 846,
    "name": "arrokuda",
    "weight": 10,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 66
    }
  },
  {
    "id": 847,
    "name": "barraskewda",
    "weight": 300,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 136
    }
  },
  {
    "id": 848,
    "name": "toxel",
    "weight": 110,
    "height": 4,
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "special_attack": 54,
      "special_defense": 35,
      "speed": 40
    }
  },
  {
    "id": 849,
    "name": "toxtricity-amped",
    "weight": 400,
    "height": 16,
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "special_attack": 114,
      "special_defense": 70,
      "speed": 75
    }
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "weight": 10,
    "height": 7,
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 45
    }
  },
  {
    "id": 851,
    "name": "centiskorch",
    "weight": 1200,
    "height": 30,
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 90,
      "speed": 65
    }
  },
  {
    "id": 852,
    "name": "clobbopus",
    "weight": 40,
    "height": 6,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 32
    }
  },
  {
    "id": 853,
    "name": "grapploct",
    "weight": 390,
    "height": 16,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 42
    }
  },
  {
    "id": 854,
    "name": "sinistea",
    "weight": 2,
    "height": 1,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "special_attack": 74,
      "special_defense": 54,
      "speed": 50
    }
  },
  {
    "id": 855,
    "name": "polteageist",
    "weight": 4,
    "height": 2,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "special_attack": 134,
      "special_defense": 114,
      "speed": 70
    }
  },
  {
    "id": 856,
    "name": "hatenna",
    "weight": 34,
    "height": 4,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "special_attack": 56,
      "special_defense": 53,
      "speed": 39
    }
  },
  {
    "id": 857,
    "name": "hattrem",
    "weight": 48,
    "height": 6,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "special_attack": 86,
      "special_defense": 73,
      "speed": 49
    }
  },
  {
    "id": 858,
    "name": "hatterene",
    "weight": 51,
    "height": 21,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "special_attack": 136,
      "special_defense": 103,
      "speed": 29
    }
  },
  {
    "id": 859,
    "name": "impidimp",
    "weight": 55,
    "height": 4,
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "special_attack": 55,
      "special_defense": 40,
      "speed": 50
    }
  },
  {
    "id": 860,
    "name": "morgrem",
    "weight": 125,
    "height": 8,
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "special_attack": 75,
      "special_defense": 55,
      "speed": 70
    }
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "weight": 610,
    "height": 15,
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "special_attack": 95,
      "special_defense": 75,
      "speed": 60
    }
  },
  {
    "id": 862,
    "name": "obstagoon",
    "weight": 460,
    "height": 16,
    "types": [
      "dark",
      "normal"
    ],
    "stats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "special_attack": 60,
      "special_defense": 81,
      "speed": 95
    }
  },
  {
    "id": 863,
    "name": "perrserker",
    "weight": 280,
    "height": 8,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 50
    }
  },
  {
    "id": 864,
    "name": "cursola",
    "weight": 4,
    "height": 10,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "special_attack": 145,
      "special_defense": 130,
      "speed": 30
    }
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "weight": 1170,
    "height": 8,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "special_attack": 68,
      "special_defense": 82,
      "speed": 65
    }
  },
  {
    "id": 866,
    "name": "mr-rime",
    "weight": 582,
    "height": 15,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 867,
    "name": "runerigus",
    "weight": 666,
    "height": 16,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "special_attack": 50,
      "special_defense": 105,
      "speed": 30
    }
  },
  {
    "id": 868,
    "name": "milcery",
    "weight": 3,
    "height": 2,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 61,
      "speed": 34
    }
  },
  {
    "id": 869,
    "name": "alcremie",
    "weight": 5,
    "height": 3,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 121,
      "speed": 64
    }
  },
  {
    "id": 870,
    "name": "falinks",
    "weight": 620,
    "height": 30,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 60,
      "speed": 75
    }
  },
  {
    "id": 871,
    "name": "pincurchin",
    "weight": 10,
    "height": 3,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "special_attack": 91,
      "special_defense": 85,
      "speed": 15
    }
  },
  {
    "id": 872,
    "name": "snom",
    "weight": 38,
    "height": 3,
    "types": [
      "ice",
      "bug"
    ],
    "stats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "special_attack": 45,
      "special_defense": 30,
      "speed": 20
    }
  },
  {
    "id": 873,
    "name": "frosmoth",
    "weight": 420,
    "height": 13,
    "types": [
      "ice",
      "bug"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 65
    }
  },
  {
    "id": 874,
    "name": "stonjourner",
    "weight": 5200,
    "height": 25,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 70
    }
  },
  {
    "id": 875,
    "name": "eiscue-ice",
    "weight": 890,
    "height": 14,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "special_attack": 65,
      "special_defense": 90,
      "speed": 50
    }
  },
  {
    "id": 876,
    "name": "indeedee-male",
    "weight": 280,
    "height": 9,
    "types": [
      "psychic",
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "special_attack": 105,
      "special_defense": 95,
      "speed": 95
    }
  },
  {
    "id": 877,
    "name": "morpeko-full-belly",
    "weight": 30,
    "height": 3,
    "types": [
      "electric",
      "dark"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "special_attack": 70,
      "special_defense": 58,
      "speed": 97
    }
  },
  {
    "id": 878,
    "name": "cufant",
    "weight": 1000,
    "height": 12,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "special_attack": 40,
      "special_defense": 49,
      "speed": 40
    }
  },
  {
    "id": 879,
    "name": "copperajah",
    "weight": 6500,
    "height": 30,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "special_attack": 80,
      "special_defense": 69,
      "speed": 30
    }
  },
  {
    "id": 880,
    "name": "dracozolt",
    "weight": 1900,
    "height": 18,
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 70,
      "speed": 75
    }
  },
  {
    "id": 881,
    "name": "arctozolt",
    "weight": 1500,
    "height": 23,
    "types": [
      "electric",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 55
    }
  },
  {
    "id": 882,
    "name": "dracovish",
    "weight": 2150,
    "height": 23,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 75
    }
  },
  {
    "id": 883,
    "name": "arctovish",
    "weight": 1750,
    "height": 20,
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 55
    }
  },
  {
    "id": 884,
    "name": "duraludon",
    "weight": 400,
    "height": 18,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "special_attack": 120,
      "special_defense": 50,
      "speed": 85
    }
  },
  {
    "id": 885,
    "name": "dreepy",
    "weight": 20,
    "height": 5,
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 82
    }
  },
  {
    "id": 886,
    "name": "drakloak",
    "weight": 110,
    "height": 14,
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 102
    }
  },
  {
    "id": 887,
    "name": "dragapult",
    "weight": 500,
    "height": 30,
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "special_attack": 100,
      "special_defense": 75,
      "speed": 142
    }
  },
  {
    "id": 888,
    "name": "zacian",
    "weight": 1100,
    "height": 28,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "special_attack": 80,
      "special_defense": 115,
      "speed": 138
    }
  },
  {
    "id": 889,
    "name": "zamazenta",
    "weight": 2100,
    "height": 29,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "special_attack": 80,
      "special_defense": 115,
      "speed": 138
    }
  },
  {
    "id": 890,
    "name": "eternatus",
    "weight": 9500,
    "height": 200,
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "special_attack": 145,
      "special_defense": 95,
      "speed": 130
    }
  },
  {
    "id": 891,
    "name": "kubfu",
    "weight": 120,
    "height": 6,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "special_attack": 53,
      "special_defense": 50,
      "speed": 72
    }
  },
  {
    "id": 892,
    "name": "urshifu-single-strike",
    "weight": 1050,
    "height": 19,
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "special_attack": 63,
      "special_defense": 60,
      "speed": 97
    }
  },
  {
    "id": 893,
    "name": "zarude",
    "weight": 700,
    "height": 18,
    "types": [
      "dark",
      "grass"
    ],
    "stats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "special_attack": 70,
      "special_defense": 95,
      "speed": 105
    }
  },
  {
    "id": 894,
    "name": "regieleki",
    "weight": 1450,
    "height": 12,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 200
    }
  },
  {
    "id": 895,
    "name": "regidrago",
    "weight": 2000,
    "height": 21,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 80
    }
  },
  {
    "id": 896,
    "name": "glastrier",
    "weight": 8000,
    "height": 22,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "special_attack": 65,
      "special_defense": 110,
      "speed": 30
    }
  },
  {
    "id": 897,
    "name": "spectrier",
    "weight": 445,
    "height": 20,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "special_attack": 145,
      "special_defense": 80,
      "speed": 130
    }
  },
  {
    "id": 898,
    "name": "calyrex",
    "weight": 77,
    "height": 11,
    "types": [
      "psychic",
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    }
  },
  {
    "id": 899,
    "name": "wyrdeer",
    "weight": 951,
    "height": 18,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "special_attack": 105,
      "special_defense": 75,
      "speed": 65
    }
  },
  {
    "id": 900,
    "name": "kleavor",
    "weight": 890,
    "height": 18,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "special_attack": 45,
      "special_defense": 70,
      "speed": 85
    }
  },
  {
    "id": 901,
    "name": "ursaluna",
    "weight": 2900,
    "height": 24,
    "types": [
      "ground",
      "normal"
    ],
    "stats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "special_attack": 45,
      "special_defense": 80,
      "speed": 50
    }
  },
  {
    "id": 902,
    "name": "basculegion-male",
    "weight": 1100,
    "height": 30,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 75,
      "speed": 78
    }
  },
  {
    "id": 903,
    "name": "sneasler",
    "weight": 430,
    "height": 13,
    "types": [
      "fighting",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 120
    }
  },
  {
    "id": 904,
    "name": "overqwil",
    "weight": 605,
    "height": 25,
    "types": [
      "dark",
      "poison"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 905,
    "name": "enamorus-incarnate",
    "weight": 480,
    "height": 16,
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "special_attack": 135,
      "special_defense": 80,
      "speed": 106
    }
  },
  {
    "id": 906,
    "name": "sprigatito",
    "weight": 41,
    "height": 4,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 65
    }
  },
  {
    "id": 907,
    "name": "floragato",
    "weight": 122,
    "height": 9,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "special_attack": 60,
      "special_defense": 63,
      "speed": 83
    }
  },
  {
    "id": 908,
    "name": "meowscarada",
    "weight": 312,
    "height": 15,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "special_attack": 81,
      "special_defense": 70,
      "speed": 123
    }
  },
  {
    "id": 909,
    "name": "fuecoco",
    "weight": 98,
    "height": 4,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "special_attack": 63,
      "special_defense": 40,
      "speed": 36
    }
  },
  {
    "id": 910,
    "name": "crocalor",
    "weight": 307,
    "height": 10,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "special_attack": 90,
      "special_defense": 58,
      "speed": 49
    }
  },
  {
    "id": 911,
    "name": "skeledirge",
    "weight": 3265,
    "height": 16,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "special_attack": 110,
      "special_defense": 75,
      "speed": 66
    }
  },
  {
    "id": 912,
    "name": "quaxly",
    "weight": 61,
    "height": 5,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 45,
      "speed": 50
    }
  },
  {
    "id": 913,
    "name": "quaxwell",
    "weight": 215,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 60,
      "speed": 65
    }
  },
  {
    "id": 914,
    "name": "quaquaval",
    "weight": 619,
    "height": 18,
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 85
    }
  },
  {
    "id": 915,
    "name": "lechonk",
    "weight": 102,
    "height": 5,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 35
    }
  },
  {
    "id": 916,
    "name": "oinkologne-male",
    "weight": 1200,
    "height": 10,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "special_attack": 59,
      "special_defense": 80,
      "speed": 65
    }
  },
  {
    "id": 917,
    "name": "tarountula",
    "weight": 40,
    "height": 3,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "special_attack": 29,
      "special_defense": 40,
      "speed": 20
    }
  },
  {
    "id": 918,
    "name": "spidops",
    "weight": 165,
    "height": 10,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "special_attack": 52,
      "special_defense": 86,
      "speed": 35
    }
  },
  {
    "id": 919,
    "name": "nymble",
    "weight": 10,
    "height": 2,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "special_attack": 21,
      "special_defense": 25,
      "speed": 45
    }
  },
  {
    "id": 920,
    "name": "lokix",
    "weight": 175,
    "height": 10,
    "types": [
      "bug",
      "dark"
    ],
    "stats": {
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "special_attack": 52,
      "special_defense": 55,
      "speed": 92
    }
  },
  {
    "id": 921,
    "name": "pawmi",
    "weight": 25,
    "height": 3,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "special_attack": 40,
      "special_defense": 25,
      "speed": 60
    }
  },
  {
    "id": 922,
    "name": "pawmo",
    "weight": 65,
    "height": 4,
    "types": [
      "electric",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 85
    }
  },
  {
    "id": 923,
    "name": "pawmot",
    "weight": 410,
    "height": 9,
    "types": [
      "electric",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 60,
      "speed": 105
    }
  },
  {
    "id": 924,
    "name": "tandemaus",
    "weight": 18,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 75
    }
  },
  {
    "id": 925,
    "name": "maushold-family-of-four",
    "weight": 23,
    "height": 3,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 111
    }
  },
  {
    "id": 926,
    "name": "fidough",
    "weight": 109,
    "height": 3,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 65
    }
  },
  {
    "id": 927,
    "name": "dachsbun",
    "weight": 149,
    "height": 5,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 95
    }
  },
  {
    "id": 928,
    "name": "smoliv",
    "weight": 65,
    "height": 3,
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "special_attack": 58,
      "special_defense": 51,
      "speed": 30
    }
  },
  {
    "id": 929,
    "name": "dolliv",
    "weight": 119,
    "height": 6,
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "special_attack": 78,
      "special_defense": 78,
      "speed": 33
    }
  },
  {
    "id": 930,
    "name": "arboliva",
    "weight": 482,
    "height": 14,
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 109,
      "speed": 39
    }
  },
  {
    "id": 931,
    "name": "squawkabilly-green-plumage",
    "weight": 24,
    "height": 6,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "special_attack": 45,
      "special_defense": 51,
      "speed": 92
    }
  },
  {
    "id": 932,
    "name": "nacli",
    "weight": 160,
    "height": 4,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 25
    }
  },
  {
    "id": 933,
    "name": "naclstack",
    "weight": 1050,
    "height": 6,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "special_attack": 35,
      "special_defense": 65,
      "speed": 35
    }
  },
  {
    "id": 934,
    "name": "garganacl",
    "weight": 2400,
    "height": 23,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 35
    }
  },
  {
    "id": 935,
    "name": "charcadet",
    "weight": 105,
    "height": 6,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 35
    }
  },
  {
    "id": 936,
    "name": "armarouge",
    "weight": 850,
    "height": 15,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "special_attack": 125,
      "special_defense": 80,
      "speed": 75
    }
  },
  {
    "id": 937,
    "name": "ceruledge",
    "weight": 620,
    "height": 16,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 85
    }
  },
  {
    "id": 938,
    "name": "tadbulb",
    "weight": 4,
    "height": 3,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "special_attack": 59,
      "special_defense": 35,
      "speed": 45
    }
  },
  {
    "id": 939,
    "name": "bellibolt",
    "weight": 1130,
    "height": 12,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "special_attack": 103,
      "special_defense": 83,
      "speed": 45
    }
  },
  {
    "id": 940,
    "name": "wattrel",
    "weight": 36,
    "height": 4,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special_attack": 55,
      "special_defense": 40,
      "speed": 70
    }
  },
  {
    "id": 941,
    "name": "kilowattrel",
    "weight": 386,
    "height": 14,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "special_attack": 105,
      "special_defense": 60,
      "speed": 125
    }
  },
  {
    "id": 942,
    "name": "maschiff",
    "weight": 160,
    "height": 5,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 51,
      "speed": 51
    }
  },
  {
    "id": 943,
    "name": "mabosstiff",
    "weight": 610,
    "height": 11,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 85
    }
  },
  {
    "id": 944,
    "name": "shroodle",
    "weight": 7,
    "height": 2,
    "types": [
      "poison",
      "normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "special_attack": 40,
      "special_defense": 35,
      "speed": 75
    }
  },
  {
    "id": 945,
    "name": "grafaiai",
    "weight": 272,
    "height": 7,
    "types": [
      "poison",
      "normal"
    ],
    "stats": {
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 72,
      "speed": 110
    }
  },
  {
    "id": 946,
    "name": "bramblin",
    "weight": 6,
    "height": 6,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "special_attack": 45,
      "special_defense": 35,
      "speed": 60
    }
  },
  {
    "id": 947,
    "name": "brambleghast",
    "weight": 60,
    "height": 12,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 70,
      "speed": 90
    }
  },
  {
    "id": 948,
    "name": "toedscool",
    "weight": 330,
    "height": 9,
    "types": [
      "ground",
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 70
    }
  },
  {
    "id": 949,
    "name": "toedscruel",
    "weight": 580,
    "height": 19,
    "types": [
      "ground",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 100
    }
  },
  {
    "id": 950,
    "name": "klawf",
    "weight": 790,
    "height": 13,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "special_attack": 35,
      "special_defense": 55,
      "speed": 75
    }
  },
  {
    "id": 951,
    "name": "capsakid",
    "weight": 30,
    "height": 3,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "special_attack": 62,
      "special_defense": 40,
      "speed": 50
    }
  },
  {
    "id": 952,
    "name": "scovillain",
    "weight": 150,
    "height": 9,
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "special_attack": 108,
      "special_defense": 65,
      "speed": 75
    }
  },
  {
    "id": 953,
    "name": "rellor",
    "weight": 10,
    "height": 2,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "special_attack": 31,
      "special_defense": 58,
      "speed": 30
    }
  },
  {
    "id": 954,
    "name": "rabsca",
    "weight": 35,
    "height": 3,
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "special_attack": 115,
      "special_defense": 100,
      "speed": 45
    }
  },
  {
    "id": 955,
    "name": "flittle",
    "weight": 15,
    "height": 2,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "special_attack": 55,
      "special_defense": 30,
      "speed": 75
    }
  },
  {
    "id": 956,
    "name": "espathra",
    "weight": 900,
    "height": 19,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "special_attack": 101,
      "special_defense": 60,
      "speed": 105
    }
  },
  {
    "id": 957,
    "name": "tinkatink",
    "weight": 89,
    "height": 4,
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 64,
      "speed": 58
    }
  },
  {
    "id": 958,
    "name": "tinkatuff",
    "weight": 591,
    "height": 7,
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 82,
      "speed": 78
    }
  },
  {
    "id": 959,
    "name": "tinkaton",
    "weight": 1128,
    "height": 7,
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "special_attack": 70,
      "special_defense": 105,
      "speed": 94
    }
  },
  {
    "id": 960,
    "name": "wiglett",
    "weight": 18,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "special_attack": 35,
      "special_defense": 25,
      "speed": 95
    }
  },
  {
    "id": 961,
    "name": "wugtrio",
    "weight": 54,
    "height": 12,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 120
    }
  },
  {
    "id": 962,
    "name": "bombirdier",
    "weight": 429,
    "height": 15,
    "types": [
      "flying",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "special_attack": 60,
      "special_defense": 85,
      "speed": 82
    }
  },
  {
    "id": 963,
    "name": "finizen",
    "weight": 602,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 40,
      "speed": 75
    }
  },
  {
    "id": 964,
    "name": "palafin-zero",
    "weight": 602,
    "height": 13,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "special_attack": 53,
      "special_defense": 62,
      "speed": 100
    }
  },
  {
    "id": 965,
    "name": "varoom",
    "weight": 350,
    "height": 10,
    "types": [
      "steel",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 47
    }
  },
  {
    "id": 966,
    "name": "revavroom",
    "weight": 1200,
    "height": 18,
    "types": [
      "steel",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "special_attack": 54,
      "special_defense": 67,
      "speed": 90
    }
  },
  {
    "id": 967,
    "name": "cyclizar",
    "weight": 630,
    "height": 16,
    "types": [
      "dragon",
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 121
    }
  },
  {
    "id": 968,
    "name": "orthworm",
    "weight": 3100,
    "height": 25,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "special_attack": 60,
      "special_defense": 55,
      "speed": 65
    }
  },
  {
    "id": 969,
    "name": "glimmet",
    "weight": 80,
    "height": 7,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "special_attack": 105,
      "special_defense": 60,
      "speed": 60
    }
  },
  {
    "id": 970,
    "name": "glimmora",
    "weight": 450,
    "height": 15,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "special_attack": 130,
      "special_defense": 81,
      "speed": 86
    }
  },
  {
    "id": 971,
    "name": "greavard",
    "weight": 350,
    "height": 6,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 34
    }
  },
  {
    "id": 972,
    "name": "houndstone",
    "weight": 150,
    "height": 20,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "special_attack": 50,
      "special_defense": 97,
      "speed": 68
    }
  },
  {
    "id": 973,
    "name": "flamigo",
    "weight": 370,
    "height": 16,
    "types": [
      "flying",
      "fighting"
    ],
    "stats": {
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "special_attack": 75,
      "special_defense": 64,
      "speed": 90
    }
  },
  {
    "id": 974,
    "name": "cetoddle",
    "weight": 450,
    "height": 12,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 43
    }
  },
  {
    "id": 975,
    "name": "cetitan",
    "weight": 7000,
    "height": 45,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 73
    }
  },
  {
    "id": 976,
    "name": "veluza",
    "weight": 900,
    "height": 25,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "special_attack": 78,
      "special_defense": 65,
      "speed": 70
    }
  },
  {
    "id": 977,
    "name": "dondozo",
    "weight": 2200,
    "height": 120,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 35
    }
  },
  {
    "id": 978,
    "name": "tatsugiri-curly",
    "weight": 80,
    "height": 3,
    "types": [
      "dragon",
      "water"
    ],
    "stats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "special_attack": 120,
      "special_defense": 95,
      "speed": 82
    }
  },
  {
    "id": 979,
    "name": "annihilape",
    "weight": 560,
    "height": 12,
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "special_attack": 50,
      "special_defense": 90,
      "speed": 90
    }
  },
  {
    "id": 980,
    "name": "clodsire",
    "weight": 2230,
    "height": 18,
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "special_attack": 45,
      "special_defense": 100,
      "speed": 20
    }
  },
  {
    "id": 981,
    "name": "farigiraf",
    "weight": 1600,
    "height": 32,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "special_attack": 110,
      "special_defense": 70,
      "speed": 60
    }
  },
  {
    "id": 982,
    "name": "dudunsparce-two-segment",
    "weight": 392,
    "height": 36,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 55
    }
  },
  {
    "id": 983,
    "name": "kingambit",
    "weight": 1200,
    "height": 20,
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "special_attack": 60,
      "special_defense": 85,
      "speed": 50
    }
  },
  {
    "id": 984,
    "name": "great-tusk",
    "weight": 3200,
    "height": 22,
    "types": [
      "ground",
      "fighting"
    ],
    "stats": {
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "special_attack": 53,
      "special_defense": 53,
      "speed": 87
    }
  },
  {
    "id": 985,
    "name": "scream-tail",
    "weight": 80,
    "height": 12,
    "types": [
      "fairy",
      "psychic"
    ],
    "stats": {
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "special_attack": 65,
      "special_defense": 115,
      "speed": 111
    }
  },
  {
    "id": 986,
    "name": "brute-bonnet",
    "weight": 210,
    "height": 12,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "special_attack": 79,
      "special_defense": 99,
      "speed": 55
    }
  },
  {
    "id": 987,
    "name": "flutter-mane",
    "weight": 40,
    "height": 14,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "special_attack": 135,
      "special_defense": 135,
      "speed": 135
    }
  },
  {
    "id": 988,
    "name": "slither-wing",
    "weight": 920,
    "height": 32,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 81
    }
  },
  {
    "id": 989,
    "name": "sandy-shocks",
    "weight": 600,
    "height": 23,
    "types": [
      "electric",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "special_attack": 121,
      "special_defense": 85,
      "speed": 101
    }
  },
  {
    "id": 990,
    "name": "iron-treads",
    "weight": 2400,
    "height": 9,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "special_attack": 72,
      "special_defense": 70,
      "speed": 106
    }
  },
  {
    "id": 991,
    "name": "iron-bundle",
    "weight": 110,
    "height": 6,
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "special_attack": 124,
      "special_defense": 60,
      "speed": 136
    }
  },
  {
    "id": 992,
    "name": "iron-hands",
    "weight": 3807,
    "height": 18,
    "types": [
      "fighting",
      "electric"
    ],
    "stats": {
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "special_attack": 50,
      "special_defense": 68,
      "speed": 50
    }
  },
  {
    "id": 993,
    "name": "iron-jugulis",
    "weight": 1110,
    "height": 13,
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "special_attack": 122,
      "special_defense": 80,
      "speed": 108
    }
  },
  {
    "id": 994,
    "name": "iron-moth",
    "weight": 360,
    "height": 12,
    "types": [
      "fire",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "special_attack": 140,
      "special_defense": 110,
      "speed": 110
    }
  },
  {
    "id": 995,
    "name": "iron-thorns",
    "weight": 3030,
    "height": 16,
    "types": [
      "rock",
      "electric"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special_attack": 70,
      "special_defense": 84,
      "speed": 72
    }
  },
  {
    "id": 996,
    "name": "frigibax",
    "weight": 170,
    "height": 5,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 55
    }
  },
  {
    "id": 997,
    "name": "arctibax",
    "weight": 300,
    "height": 8,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 62
    }
  },
  {
    "id": 998,
    "name": "baxcalibur",
    "weight": 2100,
    "height": 21,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "special_attack": 75,
      "special_defense": 86,
      "speed": 87
    }
  },
  {
    "id": 999,
    "name": "gimmighoul",
    "weight": 50,
    "height": 3,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 70,
      "speed": 10
    }
  },
  {
    "id": 1000,
    "name": "gholdengo",
    "weight": 300,
    "height": 12,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "special_attack": 133,
      "special_defense": 91,
      "speed": 84
    }
  },
  {
    "id": 1001,
    "name": "wo-chien",
    "weight": 742,
    "height": 15,
    "types": [
      "dark",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 135,
      "speed": 70
    }
  },
  {
    "id": 1002,
    "name": "chien-pao",
    "weight": 1522,
    "height": 19,
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 65,
      "speed": 135
    }
  },
  {
    "id": 1003,
    "name": "ting-lu",
    "weight": 6997,
    "height": 27,
    "types": [
      "dark",
      "ground"
    ],
    "stats": {
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 45
    }
  },
  {
    "id": 1004,
    "name": "chi-yu",
    "weight": 49,
    "height": 4,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "special_attack": 135,
      "special_defense": 120,
      "speed": 100
    }
  },
  {
    "id": 1005,
    "name": "roaring-moon",
    "weight": 3800,
    "height": 20,
    "types": [
      "dragon",
      "dark"
    ],
    "stats": {
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "special_attack": 55,
      "special_defense": 101,
      "speed": 119
    }
  },
  {
    "id": 1006,
    "name": "iron-valiant",
    "weight": 350,
    "height": 14,
    "types": [
      "fairy",
      "fighting"
    ],
    "stats": {
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "special_attack": 120,
      "special_defense": 60,
      "speed": 116
    }
  },
  {
    "id": 1007,
    "name": "koraidon",
    "weight": 3030,
    "height": 25,
    "types": [
      "fighting",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "special_attack": 85,
      "special_defense": 100,
      "speed": 135
    }
  },
  {
    "id": 1008,
    "name": "miraidon",
    "weight": 2400,
    "height": 35,
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "special_attack": 135,
      "special_defense": 115,
      "speed": 135
    }
  },
  {
    "id": 1009,
    "name": "walking-wake",
    "weight": 2800,
    "height": 35,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "special_attack": 125,
      "special_defense": 83,
      "speed": 109
    }
  },
  {
    "id": 1010,
    "name": "iron-leaves",
    "weight": 1250,
    "height": 15,
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "special_attack": 70,
      "special_defense": 108,
      "speed": 104
    }
  },
  {
    "id": 1011,
    "name": "dipplin",
    "weight": 97,
    "height": 4,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "special_attack": 95,
      "special_defense": 80,
      "speed": 40
    }
  },
  {
    "id": 1012,
    "name": "poltchageist",
    "weight": 11,
    "height": 1,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "special_attack": 74,
      "special_defense": 54,
      "speed": 50
    }
  },
  {
    "id": 1013,
    "name": "sinistcha",
    "weight": 22,
    "height": 2,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "special_attack": 121,
      "special_defense": 80,
      "speed": 70
    }
  },
  {
    "id": 1014,
    "name": "okidogi",
    "weight": 922,
    "height": 18,
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "special_attack": 58,
      "special_defense": 86,
      "speed": 80
    }
  },
  {
    "id": 1015,
    "name": "munkidori",
    "weight": 122,
    "height": 10,
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 106
    }
  },
  {
    "id": 1016,
    "name": "fezandipiti",
    "weight": 301,
    "height": 14,
    "types": [
      "poison",
      "fairy"
    ],
    "stats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "special_attack": 70,
      "special_defense": 125,
      "speed": 99
    }
  },
  {
    "id": 1017,
    "name": "ogerpon",
    "weight": 398,
    "height": 12,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "special_attack": 60,
      "special_defense": 96,
      "speed": 110
    }
  },
  {
    "id": 1018,
    "name": "archaludon",
    "weight": 600,
    "height": 20,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "special_attack": 125,
      "special_defense": 65,
      "speed": 85
    }
  },
  {
    "id": 1019,
    "name": "hydrapple",
    "weight": 930,
    "height": 18,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "special_attack": 120,
      "special_defense": 80,
      "speed": 44
    }
  },
  {
    "id": 1020,
    "name": "gouging-fire",
    "weight": 5900,
    "height": 35,
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "special_attack": 65,
      "special_defense": 93,
      "speed": 91
    }
  },
  {
    "id": 1021,
    "name": "raging-bolt",
    "weight": 4800,
    "height": 52,
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "special_attack": 137,
      "special_defense": 89,
      "speed": 75
    }
  },
  {
    "id": 1022,
    "name": "iron-boulder",
    "weight": 1625,
    "height": 15,
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "special_attack": 68,
      "special_defense": 108,
      "speed": 124
    }
  },
  {
    "id": 1023,
    "name": "iron-crown",
    "weight": 1560,
    "height": 16,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "special_attack": 122,
      "special_defense": 108,
      "speed": 98
    }
  },
  {
    "id": 1024,
    "name": "terapagos",
    "weight": 65,
    "height": 2,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 60
    }
  },
  {
    "id": 1025,
    "name": "pecharunt",
    "weight": 3,
    "height": 3,
    "types": [
      "poison",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "special_attack": 88,
      "special_defense": 88,
      "speed": 88
    }
  },
  {
    "id": 10272,
    "name": "ursaluna-bloodmoon",
    "weight": 2900,
    "height": 24,
    "types": [
      "ground",
      "normal"
    ],
    "stats": {
      "hp": 113,
      "attack": 70,
      "defense": 120,
      "special_attack": 135,
      "special_defense": 65,
      "speed": 52
    }
  }
];

if (typeof module !== 'undefined') module.exports = pokemonList;