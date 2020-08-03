import React from 'react';


class Nama extends React.Component {
  render() {
    return this.props.nama
  }
}

class Harga extends React.Component {
  render() {
    return this.props.harga
  }
}

class Berat extends React.Component {
  render() {
    return this.props.berat
  }
}

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]


class DaftarBuah extends React.Component {
  render() {
    return (
      <>
        {dataHargaBuah.map(x=> {
          return (
            
              <tr>
              <td><Nama nama={x.nama}/> </td>
              <td><Harga harga={x.harga}/></td>
              <td><Berat berat={x.berat / 1000}/> Kg</td>               
              </tr>

            
          )
        })}
      </>
    )
  }
}

export default DaftarBuah