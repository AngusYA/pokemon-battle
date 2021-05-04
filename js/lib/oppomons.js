export default [
    {
        'name': 'ARTICUNO',
        'level': 50,
        'health': 150,
        'moves': [
            {
                'name': 'PECK',
                'type': 'Flying',
                'damage': 35,
                'accuracy': 100
            },
            {
                'name': 'ICE BEAM',
                'type': 'Ice',
                'damage': 95,
                'accuracy': 100
            },
            {
                'name': 'BLIZZARD',
                'type': 'Ice',
                'damage': 120,
                'accuracy': 90
            },
        ],
        'image': 'articuno'
    },
    {
        'name': 'ZAPDOS',
        'level': 50,
        'health': 150,
        'moves': [
            {
                'name': 'THUNDER SHOCK',
                'type': 'Electric',
                'damage': 40,
                'accuracy': 100
            },
            {
                'name': 'DRILL PECK',
                'type': 'Flying',
                'damage': 80,
                'accuracy': 100
            },
            {
                'name': 'THUNDER',
                'type': 'Electric',
                'damage': 120,
                'accuracy': 70
            }
        ],
        'image': 'zapdos'
    },
    {
        'name': 'MOLTRES',
        'level': 50,
        'health': 150,
        'moves': [
            {
                'name': 'PECK',
                'type': 'Flying',
                'damage': 40,
                'accuracy': 100
            },
            {
                'name': 'FIRE SPIN',
                'type': 'Fire',
                'damage': (Math.floor(Math.random() * 4) + 2) * 15,
                'accuracy': 70
            },
            {
                'name': 'SKY ATTACK',
                'type': 'Flying',
                'damage': 70,
                'accuracy': 90
            }
        ],
        'image': 'moltres'
    },
    {
        'name': 'MEWTWO',
        'level': 50,
        'health': 166,
        'moves': [
            {
                'name': 'CONFUSION',
                'type': 'Psychic',
                'damage': 50,
                'accuracy': 100
            },
            {
                'name': 'SWIFT',
                'type': 'Normal',
                'damage': 60,
                'accuracy': 100
            },
            {
                'name': 'PSYCHIC',
                'type': 'Psychic',
                'damage': 90,
                'accuracy': 100
            }
        ],
        'image': 'mewtwo'
    }
]