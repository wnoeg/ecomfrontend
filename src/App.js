import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import ProductCategory from './Pages/ProductCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/led' element={<ProductCategory banner={men_banner} category='men'/>}/>
          <Route path='/placeholder1' element={<ProductCategory banner={women_banner} category='women'/>}/>
          <Route path='/placeholder2' element={<ProductCategory banner={kid_banner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
