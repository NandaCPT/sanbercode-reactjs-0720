var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
function penguranganWaktu(waktu, buku) {
    readBooks(waktu, books[buku], function(time) {
        if (time > 0) {
            if (buku + 1 < books.length) {
                penguranganWaktu(time, buku + 1)
            }
        }
    })
}
penguranganWaktu(10000, 0);