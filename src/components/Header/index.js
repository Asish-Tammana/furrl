import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { CiBookmark } from "react-icons/ci"; // Import bookmark icon
import { IoBagHandleOutline } from "react-icons/io5"; // Import shopping bag icon

import './index.css'; // Import CSS file for styling

// Functional component for the Header
const Header = () => {
    return (
        <nav className='header-container'> {/* Container for header */}
            <Link to='/' className='link-tag'> {/* Link to home page */}
                <h1 className='heading'>Furrl</h1> {/* Heading/logo */}
            </Link>

            <div className='nav-items-container'> {/* Container for navigation items */}
                <Link to="/wishlist" className='link-tag'> {/* Link to wishlist */}
                    <CiBookmark size={25} /> {/* Bookmark icon */}
                </Link>
                <Link to="/cart" className='link-tag'> {/* Link to cart */}
                    <IoBagHandleOutline size={25} /> {/* Shopping bag icon */}
                </Link>
            </div>
        </nav>
    );
}

export default Header; // Export the Header component
