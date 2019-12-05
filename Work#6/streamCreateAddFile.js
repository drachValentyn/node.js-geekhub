// 1) Создать файл на 10 000 записей
// 2) Прочитать его по крупицам в потоке
// 3) Создать поток, который будет дописывать файл
// 4) Трансформ потока, один на апперкейз вводимых данных, второй на удаление цифр, третий на апдейт текста, то есть ловеркейз, но первая буква должна быть как у нормального предложения.
// 5) Создайте поток внутри второго трансформа в котором вы будете записывать удаленные цифры в отдельный файл также потоком и дополнительно новые данные, дату внесения, имя, фамилию и звание. (edited) 

// Через консоль ты будешь дописывать.
// Смотри, когда создается поток, то ты начинаешь считывать данные по кусочкам. Как только ты делаешь pipe, то ты дополняешь, а точнее опрокидываешь этот поток другой. Соответственно, когда ты делаешь pipe с transform функционалом, то ты просто добавляешь к этому поток свой, который будет дополнительно апдейтить функционал…
// Вот мы и прлучаем поток на считывание, 3 опрокидывания потока на дополнение и один поток на вывод данных. (edited)


const fs = require('fs');
const server = require('http').createServer();

const { Writable } = require('stream');

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


//-----Create stream to add data to file
const outStream = new Writable({
  write(chunk, encoding, callback) {

        writeFile.write(chunk, 'utf8')
    
    callback( console.log(' - end write - ') );
  }
});

process.stdin.pipe(outStream);
