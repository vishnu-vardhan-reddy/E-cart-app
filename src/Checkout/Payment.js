import React,{useState , useEffect} from 'react'
import './Payment.css'
import { useStateValue } from '../StateProvider'
import CheckOutProduct from './CheckOutProduct';
import { Link , useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {getBasketTotal} from '../reducer'
import CurrencyFormat from 'react-currency-format'
import axios from './axios'
import {db} from '../Login/firebase'
import { Button } from '@material-ui/core';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const [pincode , setPincode] = useState()
    const [address , setAddress] = useState();
    const [mobileNumber , setMobileNumber] = useState();
    const [error ,setError] =useState(null)
    const [ disabled , setDisabled] = useState(true)
    const [succeeded , setSucceeded] = useState(false)
    const [processing , setprocessing] = useState('')
    const [clientSecret, setClientSecret] = useState(true)
    const history = useHistory();
    const stripe = useStripe();
    const elements =useElements();


    useEffect(() =>{
        const getClientSecret = async () => {
            const response = await axios({
                method : 'POST',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            }).then(response => setClientSecret(response.data.clientSecret))
        }
            getClientSecret();

    },[basket])
    console.log('the secret is >>>>>' , clientSecret)

    const username = user?.email.split('@')

    const handleSubmit = async e =>{
        e.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent?.id).set({
                basket:basket,
                amount: paymentIntent.amount,
                created:paymentIntent.created
            })


            setSucceeded(true);
            setError(null)
            setprocessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = (e) =>{

            setError(e.error? e.error.message : '')
            setDisabled(e.empty)
    }

   
    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout(<Link  to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h6>hey {user? (username[0]):('Guest')} <strong>,Enter your delivery Address</strong></h6>
                    </div>
                    <div className='payment__address'>
                        <h6>pincode</h6>
                       <input type='text' required value={pincode} onChange={e => setPincode(e.target.value)} />

                       <h6>mobile-number</h6>
                       <input type='text' required value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />

                       <h6>address</h6>
                       <input type='text' required value={address} onChange={e => setAddress(e.target.value)} />

                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h6>Review items and delivery</h6>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item =>(
                            <CheckOutProduct 
                            id={item.id}
                            title={item.title}
                            image= {item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h6>payment method</h6>
                    </div>
                    <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement  onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                     renderText={(value) => (
                                        <h6>Order Total:{value}</h6>
                                     )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                               />
                               <button className='payment__button' disabled={processing || disabled || succeeded}>
                                     <span>{processing ? <p>Processing</p> : 'Buy now'}</span> 
                               </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
