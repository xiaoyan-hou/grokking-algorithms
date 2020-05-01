function is_seller(name) {
    return /m$/.test(name);
}
function createGraph() {
    return  {
        you: ['alice', 'bob', 'claire'],
        bob: ['anuj', 'peggy'],
        alice: ['peggy'],
        claire: ['thom', 'jonny'],
        anuj: [],
        peggy: [],
        thom: [],
        jonny: []
    };
}
export default function breadth_first_search(name) {
    const graph = createGraph();
    // one queue
    const searchQueue = [];
    const searched = [];
    searchQueue.push(...graph[name]);
    let person;

    while(searchQueue.length) {
        person = searchQueue.shift();
        // not search this person
        if (!searched.includes(person)) {
            searched.push(person);
            if (is_seller(person)) {
                console.log('the person is', person);
                return true;
            } else {
                searchQueue.push(...graph[person]);
            }
        }
    }
    return false;
};
