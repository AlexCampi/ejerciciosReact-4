import { useState } from 'react';
import videojuegos from './services/videojuegos'
import Videojuego from './components/Videojuego';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  let [catalogo] = useState(videojuegos)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={catalogo.map((videojuego, index)=>{
          return <Videojuego full={false} key={index} videojuego={videojuego} />
        })}/>
        {catalogo.map((videojuego, index)=>{
          return <Route path={"/" + videojuego.titulo.replaceAll(" ", "-")} element={<Videojuego full={true} videojuego={videojuego} key={index}/>}/>
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
