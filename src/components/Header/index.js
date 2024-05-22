import { Link } from 'react-router-dom'
import { CiBookmark } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

import './index.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <Link to='/' className='link-tag'>
                <h1 className='heading'>Furrl</h1>
            </Link>

            <div className='nav-items-container'>
                <Link to="/wishlist" className='link-tag'>
                <CiBookmark size={25} />
                </Link>
                <Link to="/cart" className='link-tag'>
                <IoBagHandleOutline size={25} />
                </Link>
            </div>
        </nav>
    )
}

export default Header
