import React,{useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import todaysProductImages from '../Images/todaysDeals'
import {giftsAndVedioGames} from '../Images/todaysDeals'
import './styles.css'

function Carousal({todaysDeals , games}) {
  const [modal , setModal] = useState(false);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


  return (
    <>
    {todaysDeals && 
    <div className='carousel'>
        <Carousel 
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} 
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          containerClass="carousel-container"
          
          itemClass="carousel-item-padding-40-px"
        >
             {todaysDeals &&  todaysProductImages.map((image) =>(
                  <div className='carousal__images'>
                     <img onClick={()=>setModal(!modal)} src={image[1]} alt='carousal'></img>
                     <p>{image[0]}</p>
                  </div>
              ))}
        </Carousel><span style={{display:'none'}}>;</span>
    </div>
}
    {games &&
     <div className='carousel__games'>
          <Carousel 
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} 
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={false}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
    >
              {games &&  giftsAndVedioGames.map((image) =>(
                <div className='carousal__images'>
                   <img src={image} alt='carousal'></img>
                </div>
               ))}
         </Carousel><span style={{display:'none'}}>;</span>
     </div>
}

{/* {modal && (
            <Modal title={title} image={image} price={price} rating={rating} />      
 )} */}
</>
  )
}

export default Carousal
