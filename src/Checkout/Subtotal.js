import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import {getBasketTotal} from '../reducer'
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue()
    console.log(getBasketTotal(basket))
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <p>
                                    <small>₹</small>
                                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                                </p>
                                <small className='subtotal__gift' style={{marginBottom:10}}>
                                    <input type='checkbox' />This order contains gift items
                                </small>
                            </>
                        )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />

            <button onClick={()=> history.push('/payment')}>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
