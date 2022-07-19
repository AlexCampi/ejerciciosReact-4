import {Link} from 'react-router-dom'

function Cabecera(){
    return(
        <>
        <header className="cabecera">
            <h1>Calendario</h1>
            <div className="cabecera__menu">
                <nav>
                    <ul>
                        <li><Link to="/meses">Meses</Link></li>
                        <li><Link to="/dias">Días</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Cabecera