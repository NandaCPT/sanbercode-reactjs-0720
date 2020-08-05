import React, {Component} from 'react';
import ItemBuahList from './ItemBuahList';
import '../style.css';




class DaftarBuahList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    dataHargaBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
    input: {
      nama: "",
      harga: "",
      berat: ""
    },
    indexOfForm: -1
    
    }
  }

handleChange = (event) => {
  let input = {...this.state.input}
  input[event.target.name] = event.target.value
  this.setState({input});  
}

handleSubmit = (event) => {
  event.preventDefault ()

  let input = {...this.state.input}

  if (input['nama'].replace(/\s/g,'') !== "" && input['harga'].toString().replace(/\s/g,'') !== "" && input['berat'].toString().replace(/\s/g,'') !== "") {
    let newDaftarBuah = this.state.dataHargaBuah
    let index = this.state.indexOfForm

    if (index === -1) {
      newDaftarBuah = [...newDaftarBuah, input]
    } else {
      newDaftarBuah[index] = input
    }
    this.setState({
      dataHargaBuah: newDaftarBuah,
      input: {
        nama: "",
        harga: "",
        berat: ""
      }
    })
  }
}

handleEdit = (event) => {
  let index = event.target.value
  let dataBuah = this.state.dataHargaBuah[index]
  this.setState({
    input: {
      nama: dataBuah.nama,
      harga: dataBuah.harga,
      berat: dataBuah.berat
    }, indexOfForm: index})
}

handleDelete = (event) => {
  let index = event.target.value
  let dataBuah = this.state.dataHargaBuah
  let editedDataBuah = dataBuah[this.state.indexOfForm]
  dataBuah.splice(index, 1)

  if (editedDataBuah !== undefined){
    var newIndex = dataBuah.findIndex((el) => el === editedDataBuah)
    this.setState({dataHargaBuah: dataBuah, indexOfForm: newIndex})

  }else {
    this.setState({dataHargaBuah: dataBuah})
  }
}

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
                  <th></th>
                  <th></th>
                </tr>
        {this.state.dataHargaBuah.map((x, index)=> {
          return (
              <tr>
              <ItemBuahList item={x} key={index}/>
              <td><button onClick={this.handleEdit} value={index}>Edit</button> </td>
              <td><button onClick={this.handleDelete} value={index}>Delete</button> </td>
              </tr>
          )
        })}
             </tbody>
             </table>
        </div>
             {/* Form Submit */}
             
             <div className="tambahData">
             <h2>Form Tambah/Edit Buah</h2>
             <form onSubmit={this.handleSubmit}>
            <label>Nama Buah:</label>
            <input type="text" name="nama" value={this.state.input.nama} onChange={this.handleChange} /><br/>
            <label>Harga Buah:</label>
            <input type="text" name="harga"  value={this.state.input.harga} onChange={this.handleChange} /><br/>
            <label>Berat Buah:</label>
            <input type="text" name="berat"  value={this.state.input.berat} onChange={this.handleChange} /> <br/>
            <button>Kirim</button>
          
             </form>
            </div>
      </>
    )
  }
}

export default DaftarBuahList