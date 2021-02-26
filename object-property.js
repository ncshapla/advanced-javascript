const student = [
    {id:32, name: 'shounak'},
    {id:12, name: 'lisa'},
    {id:41, name: 'mou'}
];

const names = student.map(s => s.name);
const ids  = student.map(s => s.id);
const bigger = student.filter( s=> s.id>40);
console.log(bigger);