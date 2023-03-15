console.log("Selamat datang saya sedang belajar node js");

const pesan = (nama) =>{
    console.log(`Hallo ${nama} saya akan belajar dengan anda`);

}

pesan("Node js");

const coba = Object.getOwnPropertyNames(global);
console.log(coba)

const kata1 = process.argv[0];

console.log(`berikut kata \n${kata1} `)