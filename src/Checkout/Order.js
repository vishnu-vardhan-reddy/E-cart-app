import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckOutProduct from './CheckOutProduct'
import CurrencyFormat  from 'react-currency-format';

function Order({ order }) {
    return (
        <div className='order'>
            <div className='order__info'>
            <h2>Order on</h2>
            <p>{moment.unix(order.data?.created).format('MMMM Do YYYY, h:mma')}</p>
            </div>
           

            <p className='order__id'><small>{order?.id}</small></p>
            {order?.data?.basket?.map(item => (
                <CheckOutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 hideButton= {true}
                />
            ))}
             <CurrencyFormat 
                   renderText={(value) => (
                      <h6>Order Total:{value}</h6>
                   )}
                  decimalScale={2}
                  value={order?.data?.amount / 100}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
            />

        </div>
    )
}

export default Order
