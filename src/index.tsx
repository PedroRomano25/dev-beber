import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiCocktailProvider } from './Context/ApiCocktailDbContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial';
import Teste from './Pages/Teste';
import { dataMenu } from './Data/allDatas';


ReactDOM.render( 
    <React.StrictMode>
      <ApiCocktailProvider>  
      <BrowserRouter>
        <Menu value={dataMenu} />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
      </ApiCocktailProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
