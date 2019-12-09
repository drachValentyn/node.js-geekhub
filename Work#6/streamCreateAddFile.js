
const fs = require('fs');
const os = require("os");
const { Writable } = require('stream');
const { Transform } = require('stream');

const writeFile = fs.createWriteStream('./big.txt', { flags:'a' } );
const reader = fs.createReadStream('./big.txt');

//----Create big file on 10,000 strings
for(let i = 0; i <= 1e4; i++){
    writeFile.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
}


//----Read big file
reader.on('data', function (chunk) {
    console.log(chunk.toString());
});


const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        let upp = chunk.toString().toUpperCase();
        console.log('upperCase - ' + upp);
        this.push(upp);
        callback();
    }
});


let dateName = Date.now();

let date_ob = new Date(dateName);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();

let time = year + "-" + month + "-" + date + "-" + hours + ":" + minutes;
let userName = os.userInfo().username;



//-----Delete all numbers from string and create new file with new info
const deleteNum = new Transform({
    transform(chunk, encoding, callback) {
        let str = chunk.toString();
        let matches = str.replace(/\d+/g, '');
        let matchesNum = str.match(/\d+/g);
        if (matchesNum) {

            const writeNumFile = fs.createWriteStream('./'+ time +'.txt');

            let file = 'Deletеd numbers : ' + matchesNum + '\n' +
                        'Date of write : ' + time + '\n' +
                        'Written by : ' + userName + ' - Senior Pomidor Developer)';

                writeNumFile.write( file );


            console.log('deleteNum - ' + matchesNum);
            this.push(matches);
        } else {
            this.push(str);
        }
        callback();
    }
});


const uppFirstLetter = new Transform({
    transform(chunk, encoding, callback) {
        let uppF = chunk.toString().charAt(0).toUpperCase() + chunk.toString().slice(1).toLowerCase();
        console.log('uppFirstLetter - ' + uppF);
        this.push(uppF);
        callback();
    }
});


//-----Create stream to add data to file
const outStream = new Writable({
  write(chunk, encoding, callback) {

        writeFile.write(chunk, 'utf8');

    callback( console.log(' - end write - ') );
  }
});

process.stdin
    .pipe(upperCaseTr)
    .pipe(deleteNum)
    .pipe(uppFirstLetter)
    .pipe(outStream);
