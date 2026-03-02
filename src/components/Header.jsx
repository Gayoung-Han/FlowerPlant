import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header > 
             <nav > 
                <p > 
                    <Link to="/" >Home</Link> 
                </p>
                <p >
                    <Link to="/MyPlants" >New Plants</Link>
                </p>
                 <p >
                    <Link to="/About" >About</Link>
                </p>
            </nav>
        </header>
    )
}