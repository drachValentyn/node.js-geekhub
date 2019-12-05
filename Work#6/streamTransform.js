

// const { Transform } = require('stream');


// const upperCaseTr = new Transform({
//     transform(chunk, encoding, callback) {
//         let upp = chunk.toString().toUpperCase();
//         console.log('upperCase - ' + upp)
//         this.push(upp);

//         callback();

//     }
// });

// const deleteNum = new Transform({
//     transform(chunk, encoding, callback) {
//         let str = chunk.toString();
//         let matches = str.replace(/\d+/g, '');
//         if (matches) {
//             console.log('deleteNum - ' + matches)

//             this.push(matches);
//         }
//         callback();
//     }
// });

// const uppFirstLetter = new Transform({
//     transform(chunk, encoding, callback) {
//         let uppF = chunk.toString().charAt(0).toUpperCase() + chunk.toString().slice(1).toLowerCase();
//         console.log('uppFirstLetter - ' + uppF)
//         this.push(uppF);
//         callback();
//     }
// });


// process.stdin
//     .pipe(upperCaseTr)
//     .pipe(uppFirstLetter)
//     .pipe(deleteNum)
//     .pipe(process.stdout);

