import './index.css'

import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../actions/cartActions'

const CartItem = (props) => {

    const { productDetails } = props
    const { title, brand, MRP, price, images, discountPercent } = productDetails;
    const brandName = brand[0].name;
    const productCardImage = images[0].src;

    return (
        <div className='cart-item-container'>
            <p>{title}</p>
        </div>
    )
}

export default CartItem
