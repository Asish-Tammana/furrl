import { Link } from 'react-router-dom'
import './index.css'


const Cart = () => {
    return (
        <div className='cart-container'>
            <img src="https://web.furrl.in/_next/static/media/emptyBag.317aed26.svg" alt="empty cart" />
            <h2>Looks like your shopping bag is empty.</h2>
            <Link to="/" style={{width:'100%'}}>
                <button className="cart-buttons continue-shopping">CONTINUE SHOPPING</button>
            </Link>
            <button className="cart-buttons login">LOGIN</button>
        </div>
    )
}

export default Cart
