import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './Theme';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import DepartamentoDetalhes from './pages/DepartamentoDetalhes';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import FormDepartamentos from './pages/FormDepartamentos';
import './assets/scss/main.scss';

function App() {
 
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/departamentos'>
            <Route index element={<Departamentos />} />
            <Route path=':idDepartamento' element={<DepartamentoDetalhes />} />
            <Route path='new' element={<FormDepartamentos />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
