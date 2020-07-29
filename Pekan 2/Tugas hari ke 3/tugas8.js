// Soal 1
const a = 4
let luasLingkaran = a => 3.14*a*a;
let kelilingLingkaran = a => 2*3.14*a;
console.log("Luas Lingkaran = " + luasLingkaran(a) + "\n" + "Keliling Lingkaran = " + kelilingLingkaran(a));

// Soal 2
let kalimat = ""
let tambahKalimat = (satu, dua, tiga, empat, lima) =>{

     kalimat =  `${satu} ${dua} ${tiga} ${empat} ${lima}`
     return kalimat
}
console.log(tambahKalimat("saya", "adalah", "seorang", "frontend", "developer"))

// Soal 3
class Book {
    constructor(name, totalPage, price){
    this.name = name
    this.totalPage = totalPage
    this.price = price
    }
}

class Komik extends Book {
    constructor(name, totalPage, price, isColorful){
    super(name, totalPage, price)
    this.isColorful = false
    }
    show() {
        return "Judul: " + this.name + ", halaman: " + this.totalPage + ", harga: " + this.price + ", berwarna:" + this.isColorful
    }
}
mybook = new Komik("Naruto", 50, 30000)
console.log(mybook.show())
