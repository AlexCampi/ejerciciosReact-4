import dias from "../services/dias";

function ListaDias(){

    let arrayDias = []

    for(const dia in dias){
        arrayDias.push(dias[dia])
    }

    return(
        <ul> 
            {arrayDias.map((dia)=><li>{dia}</li>)}
        </ul>
    )
}

export default ListaDias