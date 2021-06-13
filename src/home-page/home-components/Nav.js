import './home-styles/nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';


function Nav() {

    return (
        <div className="nav">
            <div className="content">
                <a href="#"><img src="./assets/logo1.png" alt="logo" /></a>
                <a href="#" className="tex">HOME</a>
                <a href="#" className="tex">SHOP</a>
                <a href="#" className="tex">BLOG</a>
                <a href="#" className="tex">CONTACT US</a>
            </div>
            <div className="content2">
                <a href="#" className='cart'><FontAwesomeIcon icon={faShoppingCart} /></a>
                <a href="#" className='menu'><FontAwesomeIcon icon={faBars} /></a>
            </div>
        </div>
    )
}


export default Nav;