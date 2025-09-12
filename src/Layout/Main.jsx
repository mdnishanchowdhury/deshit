import Navbar from '../Share/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Main