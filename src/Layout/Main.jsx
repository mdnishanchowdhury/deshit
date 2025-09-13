import Navbar from '../Share/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <aside className=''>
                <Outlet></Outlet>
            </aside>

        </div>
    )
}

export default Main