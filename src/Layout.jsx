import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import {useState} from 'react'

function Layout() {
//lifting up states
    const [plants, setPlants] = useState(()=>{
        const savedPlants = localStorage.getItem("Plants");
        return savedPlants? JSON.parse(savedPlants) : [];
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet context={{plants, setPlants}}/>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;