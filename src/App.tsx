import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teste from './Pages/Teste';
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial';
import CardDrink from './Components/Card/Card';
import { dataMenu } from './Data/allDatas';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Menu value={dataMenu} />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
