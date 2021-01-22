import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <div className='footer__topRow'>
                    <p className='footer__topLine'>Get to know us</p>
                    <small>About us</small>
                    <small>Career</small>
                    <small>Press Releases</small>
                    <small>Amazon cares</small>
                    <small>Gift a smile</small>
                </div>

                <div className='footer__topRow'>
                    <p className='footer__topLine'>Connect with Us</p>
                    <small>Facebook</small>
                    <small>Twitter</small>
                    <small>Instagram</small>
                </div>

                <div className='footer__topRow'>
                    <p className='footer__topLine'> Make Money with Us</p>
                    <small>sell on Amazon</small>
                    <small>sell under Amazon Accelerator</small>
                    <small>Become an Affliate</small>
                    <small>Fulfilment by Amazon</small>
                    <small>Advertise Your Products</small>
                    <small>Amazon Pay on Merchants</small>
                </div>

                <div className='footer__topRow'>
                    <p className='footer__topLine'>Let Us Help You </p>
                    <small>COVID-19 and Amazon</small>
                    <small>Your Account</small>
                    <small>Returns Centre</small>
                    <small>100% Purchase Protection</small>
                    <small>Amazon App Download</small>
                    <small>Amazon Assistant Download</small>
                    <small>Help</small>
                </div>

            </div>
            <div className='footer__middle'>
                <div className='footer__middleFirstRow'>
                    <Link to='/'>
                        <img className='footer__middleLogo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
                    </Link>
                </div>
                <div className='footer__middleSecondRow'>
                    <small>Australia</small>
                    <small>Brazil</small>
                    <small>Canada</small>
                    <small>China</small>
                    <small>France</small>
                    <small>Germany</small>
                    <small>Italy</small>
                    <small>Japan</small>
                    <small>Mexico</small>
                    <small>NetherLands</small>
                    <small>Singapore</small>
                    <small>Spain</small>
                    <small>United Arab Emirates</small>
                    <small>United Kingdom</small>
                    <small>United States</small>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className='footer__bottomLinks'>
                    <div className='footer__bottomLink '>
                        <a href='https://www.audible.in/'>Audible</a>
                        <a href='https://www.primevideo.com/storefront/home/ref=atv_nb_logo'>Prime Now</a>
                        <a href='https://aws.amazon.com/'>Amazon Web Services</a>
                        <a href='https://music.amazon.in/home'>Prime Music</a>
                    </div>
                    <div className='footer__bottomText'>
                        <p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2020, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
