import {Link} from 'react-router-dom'

function Videojuego({videojuego, full}){

    if(!full){
        return(
            <div>
                <Link to={"/" + videojuego.titulo.replaceAll(" ", "-")}><h1>{videojuego.titulo}</h1></Link>
            </div>
        )
    } else{
        return(
            <main className='card'>
                <img src={videojuego.imagen}></img>
                <div className='container'>
                <h2>{videojuego.titulo}</h2>
                <p>{videojuego.sinopsis}</p>
                <Link to="/">Home</Link>
                </div>
            </main>
        )
    }
}

export default Videojuego