import { useState, useEffect, } from "react"
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Loader from "../Loader";
import ProductImages from "../Carousel";
import ProductDescription from "../ProductDescription";
import ProductDelivery from "../ProductDelivery";
import ProductDefect from "../ProductDefect";
import AppsSection from "../AppsSection";
import Footer from "../Footer";
import './index.css'

const ProductDetailedPage = () => {

    const location = useLocation()
    const [ProductDetails, setProductDetails] = useState(location.state);

    const { id, title, brand, MRP, price, images, discountPercent } = ProductDetails
    const brandName = brand[0].name



    return (
        <>
            {
                ProductDetails ?
                    <div className="big-screen-product-detail-page">
                        <ProductImages ImagesList={ProductDetails.images} />
                        <div className="details-container">
                            <div className="space-between-container brand-container">
                                <h3>{brandName}</h3>
                                <div className="brand-reviews">
                                    <FaStar />
                                    <span>Brand reviews</span>
                                </div>
                            </div>
                            <h2 className="product-name">{title}</h2>
                            <div className="space-between-container">
                                <p>
                                    <span className='price'>Rs. {price.value}</span>  <span className='mrp'>Rs. {MRP.value}</span> <span className='discount'>{discountPercent}% off</span>
                                </p>
                                <p style={{ color: '#7c5be7' }}>Size Chart</p>
                            </div>
                            <button className="big-screen-button add-to-bag-button">Add to Bag</button>
                            <hr className="line-break" />
                            <img className="coupon-image" src="https://web.furrl.in/_next/static/media/first-coupon.ba35be4f.png" alt="coupon" />
                            <hr className="line-break" />
                            <ProductDescription />
                            <hr className="line-break" />
                            <ProductDelivery />
                            <hr className="line-break" />
                            <ProductDefect />
                            <hr className="line-break" />
                            <AppsSection />
                            <hr className="line-break" />
                            <Footer />
                        </div>
                        <div className="add-to-bag">
                            <img src="https://cdn.furrl.in/vibes/AboveATCbanner-2.png" alt="vibes" style={{ width: '100%' }} />
                            <button className="add-to-bag-button">Add to Bag</button>
                        </div>

                    </div>
                    : <Loader />
            }
        </>
    )
}

export default ProductDetailedPage
