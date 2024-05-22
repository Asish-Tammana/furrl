import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetailedPage from './components/ProductDetailedPage';
import Wishlist from './components/Wishlist';


const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/cart" exact Component={Cart} />
        <Route path="/wishlist" exact Component={Wishlist} />
        <Route path="/product/:id" exact Component={ProductDetailedPage} />
      </Routes>

    </BrowserRouter>
  )

}

export default App;
