import React from 'react';
import './style.css';
// import DaftarBuah from './Tugas 11/DaftarBuah';
// import Clock from './Tugas 12/Timer';
// import DaftarBuahList from './Tugas 13/DaftarBuahList';
// import DaftarBuahHooks from './Tugas 14/DaftarBuahHooks';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Tugas 15/Routes';
import Buah from './Tugas 15/Buah';

function App() {
  return (
    <div>

      {/* Tugas hari ke 11 */}
       {/* <DaftarBuah></DaftarBuah> */}

      {/* Tugas hari ke 12 */}
       {/* <Clock start = {111} /> */}

       {/* Tugas hari ke 13 */}
       {/* <DaftarBuahList></DaftarBuahList> */}

      {/* Tugas Hari ke 14 */}
       {/* <DaftarBuahHooks></DaftarBuahHooks> */}

      {/* Tugas Hari ke 15/ Routes */}
       <Router>
         <Routes></Routes>
       </Router>

      {/* Tugas hari ke 15/ Context */}
       {/* <Buah></Buah> */}

    </div>
      
  );
}

export default App;
