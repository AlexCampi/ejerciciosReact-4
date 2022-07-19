import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import videoclub from './services/videoclub';
import Catalogo from './components/Catalogo';
import './App.css';

function App() {
  let [catalogo] = useState(videoclub)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Catalogo catalogo={catalogo}/>}/>
      {catalogo.map((pelicula, index)=>{
        return(
          <Route path={"/" + pelicula.titulo.replaceAll(" ", "-")} element={pelicula.sinopsis}/>
        )
      })}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
