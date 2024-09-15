import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link  } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
                <p>WholeSaleLED</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("led")}}><Link to='/led'>LED</Link>{menu==="led"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("placeholder1")}}><Link to='/placeholder1'>Placeholder1</Link>{menu==="placeholder1"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("placeholder2")}}><Link to='/placeholder2'>Placeholder2</Link>{menu==="placeholder2"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar