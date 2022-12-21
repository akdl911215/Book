const dogs = [
    {
        이름: '맥스',
        무게: 10,
        견종: '보스턴테리어',
        지역: '위스콘신',
        색상: '검정색',
    },
    {
        이름: '도니',
        무게: 90,
        견종: '레브라도레트리버',
        지역: '캔자스',
        색상: '검정색',
    },
    {
        이름: '새도',
        무게: 40,
        견종: '래브라도레트리버',
        지역: '위스콘신',
        색상: '갈색',
    }
];

const identity = filed => value => dog => dog[filed] === value;
const colorCheck = identity('색상');
const stateCheck = identity('지역');
const weightCheck = identity('무게')

const allFilters = (dogs, ...checks) => dogs.filter(dog => checks.every(check => check(dog))).map(dog => dog['이름']);
console.log(allFilters(dogs, colorCheck('검정색'), stateCheck('캔자스')));

const anyFilters = (dogs, ...checks) => dogs.filter(dog => checks.some(check => check(dog))).map(dog => dog['이름']);
console.log(anyFilters(dogs, weightCheck(20), colorCheck('갈색')));
