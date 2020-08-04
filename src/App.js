import React from 'react';
import './style.css';
import DaftarBuah from './Tugas 11/User';
import Clock from './Tugas 12/Timer';

function App() {
  return (

    // Tugas hari ke 11
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

      {/* Tugas hari ke 12 */}
       <Clock start = {111} />
      
    </div>
      
  
  );
}

export default App;
