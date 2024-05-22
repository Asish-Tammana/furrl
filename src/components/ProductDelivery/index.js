import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import './index.css'
import { useState } from "react";

const ProductDelivery = () => {

    const [extend, setExtend] = useState(false)

    return (
        <div>
            <div className="space-between-container">
                <div>
                    <div className='product-detail-heading delivery-heading'>

                        <TbTruckDelivery size={20} className='product-detail-symbol' />
                        <h3>Delivery</h3>
                    </div>
                    <p className="product-detail-caption" >Usually ships in 2-3 working days.</p>
                </div>
                <button className="transparent-button" onClick={() => setExtend(!extend)}>
                    {extend ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
            {
                extend && <div>
                    <p className="product-detail-caption">Enter pincode to check serviceability</p>
                    <div className="space-between-container pin-code-container">
                        <input type="text" className="transparent-button" placeholder="Enter Pincode" />
                        <button type="button" className="transparent-button">Check</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDelivery
