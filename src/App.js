import React from 'react';
// import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className = 'container'>
      <form>
      <table>
      <h1 style={{textAlign: "center"}}> Form Pembelian Buah</h1>
      <tr>
      <td><b>Nama Pelanggan</b></td>
      <td> <input type="text" name="pelanggan" /> </td> <br></br>
      </tr>
      <tr>
      <td><b>Daftar Item</b></td>
      <td><input type="checkbox" name="daftar1" value="semangka" /> Semangka  <br></br>
      <input type="checkbox" name="daftar2" value="jeruk" /> Jeruk  <br></br>
      <input type="checkbox" name="daftar3" value="nanas" /> Nanas  <br></br>
      <input type="checkbox" name="daftar4" value="salak" /> Salak  <br></br>
      <input type="checkbox" name="daftar5" value="anggur" /> Anggur  <br></br>
      </td>
      </tr>
      </table>
      </form>
      
      <button type="submit">Kirim</button>
    </div>
      
  
  );
}

export default App;
