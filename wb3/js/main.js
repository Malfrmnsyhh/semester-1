// const variabel yang tidak bisa diubah
// let variabel yang bisa diubah

const namaSaya = "Muhammad Akmal Firmansyah"
let usia = 23
let NPM = 240810101291

console.log(namaSaya, usia)
console.log('nama saya adalah ', namaSaya, 'usia saya:', usia, 'tahun') // menggunakan tanda ('')
console.log("nama saya adalah", namaSaya, "usia saya: ", usia, "tahun") // menggunakan tanda ("")
console.log(`nama saya adalah ${namaSaya} dan usia saya ${usia} tahun`) // menggunakan tanda (``) untuk memanggil variabel menggunakan ${}

// function 

function biodata () {
    console.log(`nama saya adalah ${namaSaya} dan usia saya ${usia} tahun dengan NPM ${NPM}`) 
}

console.log(namaSaya)
console.log(usia)
console.log(NPM)

biodata()

// if statement
// jika == sama dengannya 2 kali maka akan mengammbil dari nilai nya saja bukan type datanya 
// jika === sama dengannya 3 kali maka akan menggambul dari nilai dan type datanya 

if(usia >= 10 && usia <= 20) { 
    console.log("anda remaja")
} else if (usia >= 21 && usia <= 30 ) {
    console.log("anda dewasa harus bisa fullstack")
} else {
    console.log("anda mati")
}


// function javascript unutk menggembalikan return yang terpanggil
// ini adalah pemanggilan function menggunakan kondisi
function ukurUmur(usia){
    let umurmu;

    if(usia >= 10 && usia <= 20) { 
        umurmu = "anda masih kanak-kanak"
    } else if (usia >= 21 && usia <= 30 ) {
        umurmu = "anda sudah dewasa harusnya kerja"
    } else if(usia > 31 && usia < 50){
        umurmu ="kaya kaya kaya"
    } else {
        umurmu = "gtw"
    }


   return console.log('umur saya adalah',umurmu)
}

ukurUmur(45)

// menampilkan pada halaman html
let age = 32;

let personal = document.getElementById("biodata");
console.log(personal);

// memakai function untuk memanggil ke dalam halaman html
// dan menggunakan perkondisian atau if else

function seleksiUmur(){
    let generasi;

    if (age >= 12 && age <= 20) {
        generasi = "anda masih remaja";
    } else if (age >= 21 && age <= 28) {
        generasi = "anda harus bekerja keras";
    } else if (age >= 29 && age <= 34) {
        generasi = "anda harus mempunyai tabungan min 1m";
    } else if (age >= 35 && age <= 45) {
        generasi = "anda harus mempersiapkan masa pensiun";
    } else{
        generasi = "fokus akhirat";
    }

    return personal.innerHTML = generasi;
}

seleksiUmur()


