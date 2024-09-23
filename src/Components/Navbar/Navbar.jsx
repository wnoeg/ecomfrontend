import React, {useContext, useState, useRef} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link  } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
                <p>WholeSaleLED</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("led")}}><Link style={{textDecoration: 'none'}} to='/led'>LED</Link>{menu==="led"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("placeholder1")}}><Link style={{textDecoration: 'none'}} to='/placeholder1'>Placeholder1</Link>{menu==="placeholder1"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("placeholder2")}}><Link style={{textDecoration: 'none'}} to='/placeholder2'>Placeholder2</Link>{menu==="placeholder2"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
                <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar