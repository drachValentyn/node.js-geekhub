function pow (x, y) {
    let z = x;
    let y2;
    if ( -100 < x && x < 100 ) {
        if (y < 0) {
            y *= -1;
            for (let i = 1; i < y; i++){
                z *= x;
            }
            y2 = 1 / z;
            return y2;
        } else {
            for (let i = 2; i <= y; i++){
                z *= x;
            }
            return z;
        }
    } else {
        return 'Your number (' + x + ') must be  more than -100  and less than < 100';
    }

}

console.log(pow( 2.00000, 10));
console.log(pow( 2.10000, 3));
console.log('pow - ' + pow( 2.00000, -2));
console.log('Math.pow - ' + Math.pow(2.00000, -2));
