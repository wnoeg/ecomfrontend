import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ProductCategory from './Pages/ProductCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/led' element={<ProductCategory category='led'/>}/>
          <Route path='/placeholder1' element={<ProductCategory category='placeholder1'/>}/>
          <Route path='/placeholder2' element={<ProductCategory category='placeholder1'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
