import Pelicula from "./Pelicula";

function Catalogo(props){
    return(
        <div className="catalogo">
            {props.catalogo.map((pelicula, index)=>{
                return <Pelicula key={index} cartel={pelicula.cartel} titulo={pelicula.titulo}/>
            })}
        </div>
    )
}

export default Catalogo