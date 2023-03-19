function gameObject() {
    const teams = {
        home : {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away : {
            teamName: 'Charlotte Hornets',
            colors: ['Turqouise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }

    return teams;
}

function numPointsScored(playerName) {
    let object = gameObject();
    let keys = Object.keys(object);
    for (const i of keys) {
        let players = Object.keys(object[i].players);
        for (const j of players) {
            if (playerName === j) {
                return object[i].players[j].points;
            }
        }
    }
}

function shoeSize(playerName) {
    let object = gameObject();
    let team = Object.keys(object);
    for (const i of team) {
        let players = Object.keys(object[i].players);
        for (const j of players) {
            if (j === playerName) {
                return object[i].players[j].shoe;
            }
        }
    }
}

function teamColors(enteredTeamName) {
    let object = gameObject();
    let team = Object.keys(object);
    for (const i of team) {
        if (enteredTeamName === object[i].teamName) {
            return object[i].colors;
        }
    }
}

function teamNames() {
    let object = gameObject();
    let teams = [];
    for (const i in object) {
        teams.push(object[i].teamName)
    }
    return teams;
}

function playerNumbers(enteredTeamName) {
    let object = gameObject();
    let numbers = [];
    for (const i in object) {
        if (enteredTeamName === object[i].teamName) {
            let players = Object.keys(object[i].players)
            for (const j of players) {
                numbers.push(object[i].players[j].number);
            }
        }
    }
    return numbers;
}

function playerStats(athleteName) {
    let object = gameObject();
    for (const i in object) {
        let playerNames = Object.keys(object[i].players)
        for (const j of playerNames) {
            if (athleteName === j) {
                return object[i].players[j];
            }
        }
    }
}

function bigShoeRebounds() {
    let object = gameObject();
    let shoeSizes = [];
    for (const i in object) {
        let players = Object.keys(object[i].players);
        for (const j of players) {
            shoeSizes.push(object[i].players[j].shoe);
        }
    }
    const maxShoeSize = Math.max(...shoeSizes);
    
    for (const i in object) {
        let players = Object.keys(object[i].players);
        for (const j of players) {
            if (object[i].players[j].shoe === maxShoeSize) {
                return object[i].players[j].rebounds;
            }
        }
    }
}