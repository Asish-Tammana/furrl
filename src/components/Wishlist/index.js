import { Link } from 'react-router-dom';
import './index.css';

const Wishlist = () => {
  return (
    <div className='cart-container'>
            <img src="https://web.furrl.in/_next/static/media/emptyWishlist.c12c0656.svg" alt="empty wishlist" />
            <h2>Looks like your wishlist is empty.</h2>
            <Link to="/" style={{width:'100%'}}>
                <button className="cart-buttons login">CONTINUE SHOPPING</button>
            </Link>
        </div>
  );
};

export default Wishlist;
