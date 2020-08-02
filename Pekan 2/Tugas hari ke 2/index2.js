var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
function penguranganWaktu(waktu, buku) {
    readBooksPromise(waktu, books[buku]).then(function (time){
        if (time > 0)
        if (buku + 1 < books.length) {
            penguranganWaktu(time, buku + 1)
        }
     })
}
penguranganWaktu(10000, 0);