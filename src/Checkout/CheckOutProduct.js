import React from 'react'
import './CheckOutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';
import {Button}  from '@material-ui/core'

function CheckOutProduct({id , image , title , price, rating , hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id : id,
                title: title,
                price: price,
                rating: rating,
                image:image
            }
        })
}

    return (
        <div className='checkoutProduct'>
            <img className='checkoutproduct__image' src={image} alt='image' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                   {Array(rating)
                     .fill()
                     .map((_) =>(
                        <p><StarIcon className='product__star'/></p>
                     ))}
                </div>
                {hideButton ? (
                    <Button onClick={addToBasket}>Order Again</Button>
                ) : (
                    <Button onClick={removeFromBasket}>Remove from basket</Button>
                )}
            </div>
        </div>       
    )
}

export default CheckOutProduct
