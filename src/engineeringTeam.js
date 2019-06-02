const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const teamNames = [];

// We only want to iterate then fetch the team-names
for (let name of TeamIterator(engineeringTeam)) {
    teamNames.push(name);
}


export default teamNames;