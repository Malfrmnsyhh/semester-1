// const namaKu = 'Muhammad Akmal';

// function getName() {
//     for(let i = 0; i < 100; i++) {
//         console.log(i,'.',namaKu);
//     };
// };

// getName();

const http = require('http');
const rupiah = require('rupiah-format');
const host = "localhost";
const port = 2005;

// request = adalah data yang masuk dari luar
//  response = adalah data yang keluar dari sistem
const server = http.createServer(function(request, response){
    const nama = 'Muhammad Akmal Firmansyah';
    let uang = 500000;
    let jajan = 200000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <boby>
        <h1 style='background: black; color: white; padding: 20px; text-align: center'>Node js uang jajan</h1>
        <p>halo nama saya ${nama}, saya abis ngopi sebanyak ${jajan}, dari yang dikasih mama sebanyak ${uang}, dan sisanya sebanyak ${sisa}</p>
    </body>    
    `
    // response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function() {
    console.log(`${host}:${port}`);
});

// console.log(http)
