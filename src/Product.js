import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Product({id , title , image , price , rating, portfolio,website_link}) {

    const history = useHistory();
    const [{basket , user}, dispatch] = useStateValue()

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
        <div className='product'>
          <div className='product__info'>
          <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                    .fill()
                    .map((_) =>(
                        <p><StarIcon className='product__star'/></p>
                    ))}
            </div>
          </div> 
          <div className='product__bottom'>
            <img  src={image} alt='' />
            {user? (
                    <Button onClick={addToBasket}>Add to Basket</Button> 
                    ) : (
                        <Button onClick={()=> history.push('/login')}>Add to Basket</Button> 
                    )}

            {portfolio &&(
                <a href={website_link}>Visit</a>
            )}        
            </div>
        </div>
    )
}

export default Product
