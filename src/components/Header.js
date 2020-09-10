import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context_api/StateProvider';
import { auth } from '../config/config';
import Categories from './Categories'
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';


function Header(){
    // const [state, dispatch] = useStateValue();
    const [{basket, user}] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return(
        <>
        <div className="header">
            <Categories user={user}/>
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={user ? '' : '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user ? user.email : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                    
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
        <div className="underHeader">
            <div className="underHeader__nav location">
                <LocationOnOutlined className="underHeader__location"/>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Deliver to
                    </span>
                    <span className="header__optionLineTwo">
                        Nigeria
                    </span>
                </div>
                
            </div>
            <div className="underHeader__nav 2">

                <div className="header__option">
                    <span className="header__optionLineThree">
                        Today's Deals
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">
                        Customer Service
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">
                        Gift cards
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">
                        Registry
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">
                        Sell
                    </span>
                </div>
            </div>

            <div className="underHeader__nav">
                <div className="header__option">
                    <span className="header__optionLineTwo">
                        Amazon's Response to COVID-19
                    </span>
                </div>
            </div>

        </div>
        </>
    )
}

export default Header
