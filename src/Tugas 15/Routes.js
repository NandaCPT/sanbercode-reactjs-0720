import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import DaftarBuah from '../Tugas 11/DaftarBuah'
import Timer from '../Tugas 12/Timer'
import DaftarBuahList from '../Tugas 13/DaftarBuahList'
import DaftarBuahHooks from '../Tugas 14/DaftarBuahHooks'
import Buah from '../Tugas 15/Buah'
import './Routes.css';

const Routes = () => {

    return (
        <div>
                <ul>
                    <li> <Link to="/">Tugas11</Link></li>
                    <li> <Link to="/timer">Tugas12</Link></li>
                    <li> <Link to="/daftar-buah-list">Tugas13</Link></li>
                    <li> <Link to="/daftar-buah-hooks">Tugas14</Link></li>
                    <li> <Link to="/buah">Tugas15</Link></li>
                </ul>
          
            
            <Switch>
                <Route path="/timer" component={Timer}>
                <Timer start = {111} />
                </Route>
                
                <Route path="/daftar-buah-list" component={DaftarBuahList}/>
                <Route path="/daftar-buah-hooks" component={DaftarBuahHooks}/>
                <Route path="/buah" component={Buah}/>
                <Route path="/" component={DaftarBuah}/>
            </Switch>
        </div>

    ) 

}

export default Routes