export function quickSort1(arr) {
    if ( arr.length <= 1) {
        return arr;
    }
    const low = 0; 
    const high = arr.length - 1;
    const base = parseInt(low + (high - low)/2);
    const baseValue = arr[base];
    const left = [];
    const right = [];
    const mid = [];
    arr.forEach((item, index) => {
        if (item < baseValue) {
            left.push(item);
        } else if (item > baseValue) {
            right.push(item);
        } else if (item === baseValue) {
            mid.push(item);
        }
    });
    return quickSort1(left).concat(mid).concat(quickSort1(right));
}
function paritition(arr, low, high) {
    let pivot = low;
    let key = arr[pivot];
    while( low < high) {
        while(arr[high] >= key && high > low) {
            high --;
        }
        arr[low] = arr[high];

        while(low < high && arr[low] < key) {
            low ++;
        }
        arr[high] = arr[low];
    }
    arr[low] = key;
    return low;
}
export function quickSort2(arr, low, high) {
    
    if (!arr.length || low < 0 || high < 0 || low > high) {
        return arr;
    }

    if (low < high) {
        const piv = paritition(arr, low, high);
        quickSort2(arr, low, piv -1);
        quickSort2(arr, piv + 1, high);
    }
    return arr;
}

export function quickSort3(arr, low, high) {
    if (low < 0 || high < 0 || low >= high || !arr.length) {
        return arr;
    }
    let pivot = arr[low];
    let i = low, j = high;
    while(i < j) {
        while (j > i && arr[j] > pivot) {
            j--;
        }
        while( i < j && arr[i] < pivot) {
            i ++;
        }
        if (i < j && arr[i] === arr[j]) {
            i ++;
        } else if ( i < j) {
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    quickSort3(arr, low,  i - 1);
    quickSort3(arr, j + 1, high);
    return arr;
}