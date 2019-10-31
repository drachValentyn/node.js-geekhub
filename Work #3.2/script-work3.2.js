
let arr = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];       // 17
let arr1 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];   // 10
let arr2 = [7, 0, 1, 3, 4, 1, 2, 1];            // 9
let arr3 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];   // 10
let arr4 = [2, 2, 1, 2, 2, 3, 0, 1, 2];         // 4
let arr5 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];   // 24
let arr6 = [2, 2, 2, 2, 2];                     //0


function getWat(arr) {
    let max = Math.max.apply(null, arr);
    let sumwat = 0;
    for (let x = 0; x < max; x++) {

        let check = false;
        let block = 0;

        for (let y = 0; y < arr.length; y++) {
            if (arr[y] > x) {
                if (check){
                    check = false;
                    sumwat += block;
                    y--;
                } else {
                    check = true;
                    block = 0;
                }
            } else {
                block++
            }

        }

    }
    return sumwat;
}

console.log(getWat(arr));
console.log(getWat(arr1));
console.log(getWat(arr2));
console.log(getWat(arr3));
console.log(getWat(arr4));
console.log(getWat(arr5));
console.log(getWat(arr6));
