import React from 'react'
import ReactDOM from 'react-dom/client';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Teams from './components/Teams';
import Players from './components/Players';
import Games from './components/Games';
import Stats from './components/Stats';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Ruta padre */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<Teams/>}></Route>
        <Route path='players' element={<Players/>}></Route>
        <Route path='games' element={<Games/>}></Route>
        <Route path='stats' element={<Stats/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)