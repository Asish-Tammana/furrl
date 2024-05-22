
import ProductCard from '../ProductCard'
import './index.css'

const ProductsSection = (props) => {

    const {productsList} = props


  return (
    <div className='products-container'>
      {
        // productsList.map(eachProduct => <ProductCard key={eachProduct.id} productDetails={eachProduct} />) 
        productsList.map((eachProduct, index) => {
            const additionalStyles = ((index + 1) % 5 === 3 && window.innerWidth <= 768) ? { width: '100%', height: 'fit-content' } : null;
            return <ProductCard key={eachProduct.id} productDetails={eachProduct} additionalStyles={additionalStyles} />;
          })
          
      }
    </div>
  )
}

export default ProductsSection
