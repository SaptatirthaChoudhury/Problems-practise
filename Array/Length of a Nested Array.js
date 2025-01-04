

function nestedArr(arr) {
    return arr.flat(Infinity).length;
}

console.log(nestedArr([1, [2, 3]]))
console.log(nestedArr([1, [2, [3, 4]]]));
console.log(nestedArr([1, [2, [3, [4, [5, 6]]]]]));
console.log(nestedArr([1, [2], 1, [2], 1]));