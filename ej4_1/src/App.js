import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

//Import components
import Cabecera from './components/Cabecera';
import ListaMeses from './components/ListaMeses';
import ListaDias from './components/ListaDias';

function App() {
  return (
    <BrowserRouter>
    <Cabecera/>
    <Routes>
      <Route path='/meses' element={<ListaMeses/>}/>
      <Route path='/dias' element={<ListaDias/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
