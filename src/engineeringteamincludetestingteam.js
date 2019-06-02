const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead,
    yield team.manager;
    yield team.engineer;
    const testingTeamIterator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamIterator;

}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

export default names;