import { Link } from 'react-router-dom'
import { RiShare2Fill } from "react-icons/ri";
import './index.css'

const ProductCard = (props) => {

  const { productDetails, additionalStyles } = props
  const shareSpecificContainer = additionalStyles !== null ? {paddingBottom: '40%'} : null
  const { id, title, brand, MRP, price, images, discountPercent } = productDetails
  const brandName = brand[0].name
  const productCardImage = images[0].src

  const s = {
    height: '65%',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundImage: `url(${productCardImage})`,
    backgroundSize: 'cover',

  }

  const shareTheProduct = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
          title,
          images,
          price,
          url: `https://furrlasish.vercel.app/product/${id}`,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Share not supported on this browser, do it the old way.');
    }
  }

  return (
    <Link to={`/product/${id}`} state={productDetails} style={additionalStyles} className='product-card'>

      <div className='share-container' style={shareSpecificContainer} >
        <button className='share-button' onClick={shareTheProduct}>
          <RiShare2Fill size={15} color='white' />
        </button>
      </div>

      <img className='product-card-image' src={productCardImage} alt={title} />

      <div className='product-card-text-container'>
        <p className='product-brand'>{brandName}</p>
        <p className='product-title'>{title}</p>
        <p className='space-around-container'>
          <span className='price'>Rs. {price.value}</span>  <span className='mrp'>Rs. {MRP.value}</span> <span className='discount'>{discountPercent}%</span>
        </p>
      </div>
    </Link>
  )
}

export default ProductCard


