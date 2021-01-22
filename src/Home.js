import React from 'react'
import './Home.css'
import HeroSlider from './Slider/HeroSlider'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import Product from './Product'
import Carousal from './Carousal/Carousal'
import productData from './Images/productData';

function Home() {
    return (
        <div className='home'>
            <div className='home__banners'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 nopadding'>
                            <HeroSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__row'>
            <Product className='card'
               id={productData[0][0]} 
               title={productData[0][1]}
               price={productData[0][2]} 
               rating={productData[0][3]} 
               image={productData[0][4]}
            />
            <Product className='card'
               id={productData[1][0]} 
               title={productData[1][1]}
               price={productData[1][2]} 
               rating={productData[1][3]} 
               image={productData[1][4]}
            />
           </div>
           <div className='home__row'>
           <Product className='card'
               id={9} 
               title='Instagram-clone ReactJs'
               price={2000.00}
               rating={4}
               image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6RIMvib5QHbknU3XyoueM7hg2LzCzVEiTrw&usqp=CAU'
               portfolio ={true}
               link='https://ss-media-a7c96.web.app/'
            />
            <Product className='card'
               id={10} 
               title='Airbnb Clone ReactJs'
               price={3000.00}
               rating={4}
               image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5IcjgJrov7_NzzZsxJTWH5bcqBwz2TiD4UA&usqp=CAU'
               portfolio ={true}
               website_link='https://airbnb-182e2.web.app/'
            />
            <Product className='card'
               id={8} 
               title="Whatsapp complete Mobile Responsive Clone"
               price={5000.00}
               rating={5} 
               image='https://play-lh.googleusercontent.com/aZrXAunkovhf0630Ykz1A7h2rzFX_dErd6fRiB7fNKU_DkNtetTquEra1bjc3sR2kLs'
               portfolio ={true}
               website_link='https://whats-app-clone-c2d38.web.app/'
            />
           </div>

           <div className='home__carousels'>
           <div className= 'home__todaysDeals'>
               <h2>Today's hot deals `>>>>>> underContruction</h2>
                     <Carousal todaysDeals={true}/>
           </div> 

           <div className= 'home__games'>
               <h2>Gifts in Video Games under $30  >>>>> underContruction</h2>
                     <Carousal games={true}/>
           </div> 
           </div>

           <div className='home__row'>
            <Product className='card'
               id={productData[2][0]} 
               title={productData[2][1]}
               price={productData[2][2]} 
               rating={productData[2][3]} 
               image={productData[2][4]}
            />
            <Product className='card'
               id={productData[3][0]} 
               title={productData[3][1]}
               price={productData[3][2]} 
               rating={productData[3][3]} 
               image={productData[3][4]}
            />
            <Product className='card'
               id={productData[4][0]} 
               title={productData[4][1]}
               price={productData[4][2]} 
               rating={productData[4][3]} 
               image={productData[4][4]}
            />
           </div>

           <div className='home__row'>
            <Product className='card'
               id={productData[5][0]} 
               title={productData[5][1]}
               price={productData[5][2]} 
               rating={productData[5][3]} 
               image={productData[5][4]}
            />
            <Product className='card'
               id={productData[6][0]} 
               title={productData[6][1]}
               price={productData[6][2]} 
               rating={productData[6][3]} 
               image={productData[6][4]}
            />
            <Product className='card'
               id={productData[7][0]} 
               title={productData[7][1]}
               price={productData[7][2]} 
               rating={productData[7][3]} 
               image={productData[7][4]}
            />
           </div>

           <div className='home__row'>
            {/* <Product className='card'
               id={11} 
               title='Complete Mobile Responsive Portfolio'
               price={6000.00} 
               rating={5} 
               image='https://media.glassdoor.com/sqll/871287/portfolio-creative-squarelogo-1481657231978.png'
               portfolio ={true}
               website_link='https://vishnu-portfolio.netlify.app/'
            /> */}
            <Product className='card'
               id={12} 
               title='Hulu Clone ReactJs'
               price={2000.00}
               rating={4} 
               image='https://techcrunch.com/wp-content/uploads/2019/01/Home-UI_Higher-Density.png?w=657'
               portfolio ={true}
               website_link='https://hulu-clone-d2206.web.app/'
            />
            <Product className='card'
               id={productData[4][0]} 
               title={productData[4][1]}
               price={productData[4][2]} 
               rating={productData[4][3]} 
               image={productData[4][4]}
            />
           </div>


        </div>
    )
}

export default Home
