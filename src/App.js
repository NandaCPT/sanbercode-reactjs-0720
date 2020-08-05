import React from 'react';
import './style.css';
import DaftarBuah from './Tugas 11/DaftarBuah';
import Clock from './Tugas 12/Timer';

function App() {
  return (
    <div>

      {/* Tugas hari ke 11 */}
       <DaftarBuah></DaftarBuah>

      {/* Tugas hari ke 12 */}
       <Clock start = {111} />
      
    </div>
      
  );
}

export default App;
