export default function selectSort(arr) {
    const res = [];
    while (arr.length) {
        res.push(...arr.splice(getSmallest(arr), 1))
    }
    return res;
}
function getSmallest(arr) {
    let smallestValue = Infinity;
    let smallestIndex = -1;
    arr.forEach((item, index) => {
        if (item <= smallestValue) {
            smallestValue = item;
            smallestIndex = index;
        }
    });
    return smallestIndex;
}