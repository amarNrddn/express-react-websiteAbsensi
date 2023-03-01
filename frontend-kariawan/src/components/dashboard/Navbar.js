import { AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { FaRegListAlt } from 'react-icons/fa'
import { FaUserEdit } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const toggleSlidebar = () => {
        document.body.classList.toggle('open')
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button

                        className="sidebar-burger"
                        onClick={() => toggleSlidebar()}
                    ><GiHamburgerMenu /></button>
                    <h3 className="slidebar-logo">Absensi</h3>
                </header>

                <nav className="slidebar-nav">
                    <Link to='/home' className='button' >
                        <AiOutlineHome />
                        <span style={{ animationDelay: "0.1s" }}>Home</span>
                    </Link>
                    <Link to='/profile' className='button'>
                        <CgProfile />
                        <span style={{ animationDelay: "0.1s" }}>Profil</span>
                    </Link>
                    <Link to='/absensi' className='button'>
                        <FaRegListAlt />
                        <span style={{ animationDelay: "0.1s" }}>Absensi</span>
                    </Link>
                    <Link to='/edit' className='button'>
                        <FaUserEdit />
                        <span style={{ animationDelay: "0.1s" }}>Edit</span>
                    </Link>

                    <Link to='' className='button btn-logout'>
                        <FiLogOut />
                        <span style={{ animationDelay: "0.1s" }}>Logout</span>
                    </Link>
                </nav>
                <footer className='slidebar-footer'>
                </footer>
            </div>
        </aside>
    )
}

export default Navbar