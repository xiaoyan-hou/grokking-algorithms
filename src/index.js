import { binary_search1, binary_search2 }  from './lib/binary-search';
import selectSort from './lib/sort/select-sort';
import factorial from './lib/recursive/factorial';
import fibonacci from './lib/recursive/fibonacci';
import { quickSort1, quickSort2, quickSort3} from './lib/sort/quick-sort';
import bfs from './lib/graph/bfs';
import dikstra from './lib/graph/dikstra'
import states from './lib/greedyAlgorithm/states'

function callFun() {
    // binary-search
    // const arr = [1, 2, 3, 4, 5, 7,9];
    // console.log('binary search goal : 5, the result should is 2');
    // console.log('while for binary', binary_search1(arr, 5));
    // console.log('recursive for binary', binary_search2(arr, 0, arr.length - 1, 5));
    // // sort
    // const arrForSort = [9, 6, 4, 5, 7, 2];
    // console.log('select sort result',selectSort(arrForSort));

    // console.log('factorial result is', factorial(5));
    // console.log('result should be fibonacci 24', fibonacci(5));

    // console.log('quick sort result:', quickSort1([9, 6, 8, 8, 10, 7, 2, 12, 14, 5]));
    // let arr = [9, 6, 8, 10, 2, 12, 14, 5];
    // arr = [3,2,1,3]
    // console.log('quick sort result:', quickSort3(arr, 0, arr.length -1));
    // bfs('you');

}
function component() {
	var element = document.createElement('div');
	element.innerHTML = 'hello, please press f12';
	return element;
}
document.body.appendChild(component());
callFun();
