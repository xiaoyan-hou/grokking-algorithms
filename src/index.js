import { binary_search1, binary_search2 }  from './lib/binary-search';

function callFun() {
    const arr = [1, 2, 3, 4, 5, 7,9];
    console.log('binary search goal : 5, the result should is 2');
    console.log('while for binary', binary_search1(arr, 5));
    console.log('recursive for binary', binary_search2(arr, 0, arr.length - 1, 5));
}
function component() {
	var element = document.createElement('div');
	element.innerHTML = 'hello, please press f12';
	return element;
}
document.body.appendChild(component());
callFun();
