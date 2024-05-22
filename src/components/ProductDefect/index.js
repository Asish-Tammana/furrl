import {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import './index.css'

const ProductDefect = () => {

    const [extend, setExtend] = useState(false)

    return (
        <div>
            <div className="space-between-container">
                    <div className='product-detail-heading product-defect-heading'>
                        <IoBulbOutline size={20} className='product-detail-symbol' />
                        <h3>Defective product returns enabled</h3>
                    </div>
                    
                <button className="transparent-button" onClick={() => setExtend(!extend)}>
                    {extend ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
            {
                extend && <div style={{color: 'gray'}}>
                    <p>Furrl takes pride in bringing you new-age homegrown brands that create pieces for you with utmost care and pleasure! </p>
                    <ul>
                        <li>This brand has enabled returns for any defects on this product.</li>
                        <li>A replacement or return request for a product defect needs to be raised within 3 days of delivery.</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ProductDefect
