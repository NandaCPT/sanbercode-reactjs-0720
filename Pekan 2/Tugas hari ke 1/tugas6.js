// Soal 1
console.log("SOAL 1" + "\n");

var arrayDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : "1992"
}
console.log(arrayDaftarPeserta)

// Soal 2
console.log("SOAL 2" + "\n");

var buah = [
    {nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga : 9000 },
    {nama : "jeruk", warna : "orange", "ada bijinya" : "ada", harga : 8000 },
    {nama : "semangka", warna : "hijau & merah", "ada bijinya" : "ada", harga : 10000 },
    {nama : "pisang", warna : "kuning", "ada bijinya" : "tidak", harga : 5000 }
]
var data1 = buah.filter(function(item){
    return item.nama == "strawberry";
})
console.log(data1)

// Soal 3
console.log("SOAL 3" + "\n");

var dataFilm = []
function tambahData(nama, durasi, genre, tahun){
    var film = {}
    film.nama = nama;
    film.durasi = durasi;
    film.genre = genre;
    film.tahun = tahun;
    dataFilm.push(film)
    return film;
}
var film1 = tambahData('Swing Kids', '134 menit', 'Musikal/Drama', '2018')
// var film2 = tambahData('Secretly Greatly', '127 menit', 'Laga/Drama', '2013')

console.log(dataFilm)

// Soal 4
console.log("SOAL 4" + "\n");

class Animal {
    constructor(name){
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

class Frog extends Animal {
    constructor(name){
        super(name);
    }
    jump(){
        return "hop hop"
    }
    
}

class Ape extends Animal {
    constructor(name, legs){
        super(name)
        this.legs = 2
    }
    yell(){
        return "auooo"
    }
}
var kodok = new Frog("Buduk")
kodok.jump()

var sungokong = new Ape("Kera Sakti")
sungokong.yell()


console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump())
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell())

// Soal 5
console.log("SOAL 5" + "\n");
class Clock {
    constructor({template}){
        var timer;

        function render() {
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        this.stop = function() {
          clearInterval(timer);
        };
      
        this.start = function() {
          render();
          timer = setInterval(render, 1000);
        };
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 