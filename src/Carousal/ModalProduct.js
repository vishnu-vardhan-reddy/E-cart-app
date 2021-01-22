import React ,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import StarIcon from '@material-ui/icons/Star';
import './Modal.css'

function getModalStyle() {
    const top = 50
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      borderRadius:20,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ModalProduct({modal , setModal,id,title,image,price,rating}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const addToBasket = () =>{
         setModal(!modal);
    }
    return (
        <div>
             <Modal
              open={modal}
              onClose={() => setModal(false)}
           >

           <div style={modalStyle} className={classes.paper}>
               <div className='modal'>
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
                 <button onClick={addToBasket}>Add to basket</button>
            </div>
            </div>
            </div>
           </Modal>
        </div>
    )
}

export default ModalProduct
