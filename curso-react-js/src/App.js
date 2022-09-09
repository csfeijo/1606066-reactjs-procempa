import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import DepartamentoDetalhes from './pages/DepartamentoDetalhes';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';

function App() {
 
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departamentos'>
          <Route index element={<Departamentos />} />
          <Route path=':idDepartamento' element={<DepartamentoDetalhes />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
