import React from 'react';
import './style.css';
import DaftarBuah from './Tugas 11/User';

function App() {
  return (
    <div className='container'>
      <h1>Tabel Harga Buah</h1>
      <table className="tabel">
        <tbody>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
       <DaftarBuah></DaftarBuah>
       </tbody>
       </table>
      
    </div>
      
  
  );
}

export default App;
