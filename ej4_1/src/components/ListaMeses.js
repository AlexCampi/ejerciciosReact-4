import meses from '../services/meses'

function ListaMeses(){
    return(
        <ul>
            {meses.map((mes)=><li>{mes}</li>)}
        </ul>
    )
}

export default ListaMeses