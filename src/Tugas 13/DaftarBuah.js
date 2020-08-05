import React, {Component} from 'react';
import ItemBuah from './ItemBuah';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]


class DaftarBuah extends Component {
  render() {
    return (
      <>
       <div className='container'>
            <h1>Tabel Harga Buah</h1>
            <table className="tabel">
              <tbody>
                <tr>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Berat</th>
                </tr>
        {dataHargaBuah.map((x, index)=> {
          return (
              <>
              <ItemBuah item={x} key={index}/>
              </>
          )
        })}
             </tbody>
             </table>
            </div>
      </>
    )
  }
}

export default DaftarBuah