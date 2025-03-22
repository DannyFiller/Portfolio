import './Navbar.css'
import { useRef } from 'react';

const Navbar = () => {
    return (
        
        <div className='container d-flex justify-content-center my-4 p-2' id='navbar-container'>
            {/* <div className='name'>Anh Khoi</div> */}
            <div className='name-nav'>Anh Khoi</div>
            <ul className='nav'>
                    <li className='nav-item mx-4 p-2'><a href='#'>Profile</a></li>
                    <li className='nav-item mx-4 p-2'><a href='#'>Skill</a></li>
                    <li className='nav-item mx-4 p-2'><a href='#'>Project</a></li>
                    <li className='nav-item mx-4 p-2'><a href='#'>Contact</a></li>
            </ul>
            <div className='github'><a href='https://github.com/DannyFiller'>My GitHub</a></div>
        </div>
    )
}

export default Navbar;