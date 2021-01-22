import React from 'react'
import './CheckOut.css'
import { useStateValue } from '../StateProvider'
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function CheckOut() {
    const [{ basket, user }] = useStateValue();
    const username = user?.email.split('@')
    const history = useHistory();

    return (
        <div className='checkout'>
          <div className='checkout__left'>
            <img className='checkout__ad' 
                 src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                 alt='ad' 
            />
            {basket?.length === 0 ? (
                <div>
                    <h3>Hello ,{user? (username[0]):('No One')} </h3>
                    <h2>Your Basket is empty</h2>
                    <p>
                        {user ?
                            ('Looks like no Item is added. To buy Items, Go to home page and add some items.'):(
                                'Sign in to add items to Cart'
                            )
                        }
                    </p>
                        <div className='button__div'>
                        <Button className='continueShopping' onClick={()=>history.push('/')}>Continue Shopping</Button>        
                        </div>
                </div>
            ) : (
                <div>
                    <h3>Hello , {user?.email}</h3>
                    <h2 className="checkout__title"> Your shopping Basket </h2>

                    {basket?.map((item) => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            CheckoutButton={true}
                        />
                    ))}
                </div>
            )}
            </div>
             {basket?.length > 0 && (
                 <div className='checkout__right'>
                     <Subtotal />
                 </div>

             )}
        </div>
    )
}

export default CheckOut
