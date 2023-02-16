import './App.css';
import Page from './components/Page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ListaPedidos from './components/pages/ListaPedidos';
import ListaPlatos from './components/pages/ListaPlatos';
import RegistroPlato from './components/pages/RegistroPlato';
import RegistroCategoria from './components/pages/RegistroCategoria';
import RegistroEntrega from './components/pages/RegistroEntrega';
import Login from './components/pages/Login';
import Home from './components/content/Home';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='page' element={<Page />}>
            <Route path='' element={<ListaPlatos />} />
            <Route path='listapedidos' element={<ListaPedidos />} />
            <Route path='listaplatos' element={<ListaPlatos />} />
            <Route path='registroplato' element={<RegistroPlato />} />
            <Route path='registrocategoria' element={<RegistroCategoria />} />
            <Route path='registroentrega' element={<RegistroEntrega />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
