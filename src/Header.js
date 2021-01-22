import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './Login/firebase';

function Header() {
  const[{basket , user}] = useStateValue();
  const username = user?.email.split('@');

  console.log(basket)
  const handleAuthentication = ()=>{
       if(user){
          auth.signOut();
       }
  }
  
    return (
        <nav className='header'>
          <div className='header__left'>
            <Link to='/'>
               <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                    alt=''
            />
            </Link>
            <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <SearchIcon className='header__searchIcon' />
            </div>
            </div>

            <div className='header__nav'>
                <Link to={!user &&'/login'} className='header__link'>
                  <div onClick={handleAuthentication} className='header__option'>
                          <span className='header__optionLineOne'>Hello {user? (username[0]):('Guest')} </span>
                          <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders'className='header__link'>
                  <div className='header__option'>
                     <span className='header__optionLineOne'>Returns</span>
                     <span  className='header__optionLineTwo'>& Orders</span>
                  </div>
                </Link>

                <Link to='/prime'className='header__link'>
                  <div className='header__option'>
                     <span className='header__optionLineOne'>Try</span>
                     <span className='header__optionLineTwo'>prime</span>
                     
                  </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon  style={{fontSize:'xx-large'}}/>
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
         
        </nav>
    )
}

export default Header
