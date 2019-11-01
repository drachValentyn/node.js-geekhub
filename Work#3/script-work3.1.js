
function bigArr() {
    let bigArr = [];
    for ( let i = 1; i <= 1000; i++){
        bigArr.push(i)
    }
    return bigArr;
}
const testArr = bigArr();


//--------My forEach-------//

function myForEach(arr) {
    console.time('myForEach');
    //--var1
    // arr.every(function(element, index, array) {
    //     console.log('element1 - ' + element);
    //     console.log('index1 - ' + index);
    //     console.log('array1 - ' + array);
    //     return true;
    // });

    //--var2
    for ( let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        //console.log(i);
        //console.log(arr);
    }
    console.timeEnd('myForEach')
}

console.log( myForEach(testArr) );


//--------My map-------//


function myMap(arr) {
    console.time('myMap');

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] + 1;
    }

    console.timeEnd('myMap');
    return newArr;
}

console.log(myMap(testArr));


//--------My sort-------//

const array = [ 9, 4, 4, 5, 8, 7, 1, 23, 55, 664, 1, 23];

console.time('mySort');
function mySort (arr) {

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    if (arr.length === 1) {
        return arr
    }

    return mergeSort(
        mySort(left),
        mySort(right)
    )
}
console.timeEnd('mySort');
function mergeSort (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++
        } else {
            result.push(right[indexRight]);
            indexRight++
        }
    }

    return result
        .concat(left.slice(indexLeft))
        .concat(right.slice(indexRight))
}

console.log( mySort(array) );


//--------My push-------//

const pushArr = [ 1 ,2, 3, 5];

function myPush(arr, sumArr) {
    console.time('myPush');

    let concat = arr.concat(sumArr);

    console.timeEnd('myPush');
    return concat;
}

console.log(myPush(testArr, pushArr));


//--------My Filter-------//

function myFilter(arr) {
    console.time('myFilter');
    let filterArr = [];
    for (let i=0; i < arr.length; i++){
        let a = arr[i];
        if( a % 3 === 0 ){
            filterArr.push(a);
        }
    }
    console.timeEnd('myFilter');
    return filterArr;
}

console.log(myFilter(testArr))
