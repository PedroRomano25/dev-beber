import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial';
import { dataMenu } from './Data/allDatas';
import RandomDrink from './Pages/Random/Random';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Menu value={dataMenu} />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/RandomDrink" element={<RandomDrink />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
