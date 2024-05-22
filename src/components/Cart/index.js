import EmptyCart from '../EmptyCart';
import CartItem from '../CartItem';
import './index.css'; // Import CSS file for styling

import { useSelector } from 'react-redux';

// Functional component for the Cart page
const Cart = () => {

    const CartMainReducer = useSelector(state => state.CartMainReducer)
    const {cartList} = CartMainReducer
    console.log(cartList)

    return (
        <>
            {
                cartList.length === 0 ? <EmptyCart /> : <div>
                    {cartList.map(eachItem => <CartItem key={eachItem.id} productDetails={eachItem} />)}
                </div>
            }
        </>
    );
}

export default Cart; 
