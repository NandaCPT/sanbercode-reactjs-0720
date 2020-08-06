import React, {useState, useEffect} from "react"
import axios from "axios"
import ItemBuahHooks from './ItemBuahHooks';
import '../style.css';

const DaftarBuahHooks = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState("")
    const [ID_FRUIT, setID_FRUIT]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataHargaBuah(res.data.map(el=>{ return {id: el.id, nama: el.name, harga: el.price, berat: el.weight }}))
            })
        }
    }, [dataHargaBuah]) 



const handleChangeNama = (event) => {
  setInputNama(event.target.value)  
}

const handleChangeHarga = (event) => {
    setInputHarga(event.target.value)  
  }

const handleChangeBerat = (event) => {
    setInputBerat(event.target.value)  
  }

const handleSubmit = (event) => {
  event.preventDefault ()

  let name = inputNama
  let price = inputHarga
  let weight = inputBerat

  if (name.replace(/\s/g,'') !== "") {
    if (statusForm === 'create') {
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
        .then(res => {
            setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
        })
    }else if(statusForm === 'edit'){
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`, {name, price, weight})
    .then(res => {
        console.log(res)
        let dataBuah = dataHargaBuah.find(el => el.id === ID_FRUIT)
        dataBuah.nama = name
        dataBuah.harga = price
        dataBuah.berat = weight
        setDataHargaBuah([...dataHargaBuah])
    })
    }
    setStatusForm("create")
      setID_FRUIT(0)
      setInputNama("")
      setInputHarga("")
      setInputBerat("")
}
}

const handleEdit = (event) => {
  let idBuah = parseInt(event.target.value)
  let buah = dataHargaBuah.find(x => x.id === idBuah)
  console.log(buah)
  setInputNama(buah.nama)
  setInputHarga(buah.harga)
  setInputBerat(buah.berat)
  setID_FRUIT(idBuah)
  setStatusForm('edit')
}

const handleDelete = (event) => {
  let ID_FRUIT = parseInt(event.target.value)
  let newDataHargaBuah = dataHargaBuah.filter(el => el.id != ID_FRUIT)
  axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`)
  .then(res => {
      console.log(res)
  })
  setDataHargaBuah([...newDataHargaBuah])
}

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
        {
        dataHargaBuah != null && dataHargaBuah.map((x, index)=> {
          return (
              <tr>
              <ItemBuahHooks item={x} key={index}/>
              <td><button onClick={handleEdit} value={x.id}>Edit</button> </td>
              <td><button onClick={handleDelete} value={x.id}>Delete</button> </td>
              </tr>
          )
        })}
             </tbody>
             </table>
        </div>
             {/* Form Submit */}
             
             <div className="tambahData">
             <h2>Form Tambah/Edit Buah</h2>
             <form onSubmit={handleSubmit}>
            <label>Nama Buah:</label>
            <input type="text" name="nama" value={inputNama} onChange={handleChangeNama} /><br/>
            <label>Harga Buah:</label>
            <input type="text" name="harga"  value={inputHarga} onChange={handleChangeHarga} /><br/>
            <label>Berat Buah:</label>
            <input type="text" name="berat"  value={inputBerat} onChange={handleChangeBerat} /> <br/>
            <button>Kirim</button>
          
             </form>
            </div>
      </>
    )
}

export default DaftarBuahHooks