let states_need = new Set([
    'mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'
]);
const stations = {
    'kone':  new Set(['id', 'nv', 'ut']),
    'ktwo': new Set(['wa', 'id', 'mt']),
    'kthree': new Set(['or', 'nv', 'ca']),
    'kfour': new Set(['nv', 'ut']),
    'kfive': new Set(['ca', 'az'])
};

function getIntersection(arrayA, arrayB) {
    return arrayA.filter(item => arrayB.includes(item));
}
function getDifference(arrayA, arrayB) {
    return arrayA.filter(item => !arrayB.includes(item));
}

export default function getBestStations(stations, states_need) {
    const final_station = new Set();
    while(states_need.size) {
        let covered;
        let states_covered = new Set();
        let best_station = '';
        Object.keys(stations).forEach(item => {
            covered = new Set(getIntersection(Array.from(stations[item]), Array.from(states_need)));
            if (covered.size > states_covered.size) {
                states_covered = covered;
                best_station = item;
            }
        })
        states_need =  new Set(getDifference(Array.from(states_need), Array.from(states_covered)));
        final_station.add(best_station);
    }
    console.log('greedy algorithm', final_station);
}
getBestStations(stations, states_need);

