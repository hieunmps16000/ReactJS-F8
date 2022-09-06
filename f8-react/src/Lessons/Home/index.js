import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/two-way-binding">Two way binding</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/timer">Timer</Link>
                </li>
                </ul>
            </div>
        </nav>
     );
}

export default Home