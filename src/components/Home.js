import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        id={1}
                        title="The Lean Startup"
                        price="29.33"
                        image="https://images-na.ssl-images-amazon.com/images/I/61mJu3spvUL._SX522_.jpg"
                        rating={5} />
                    <Product
                        id={2}
                        title="Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)"
                        price="437.99"
                        image="https://m.media-amazon.com/images/I/51MphNv1eUL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={5} />
                    <Product
                        id={3}
                        title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red" 
                        image="https://m.media-amazon.com/images/I/81L9+4dTIgL._AC_UY436_FMwebp_QL65_.jpg"
                        price="64" rating={4}/>
                    {/* <Product
                        id={4}
                        title="SanDisk 128GB microSDXC UHS-I-Memory-Card for Nintendo-Switch - SDSQXAO-128G-GNCZN" 
                        image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UY436_FMwebp_QL65_.jpg"
                        price="27.45" rating={5}/> */}
                </div>
                <div className="home__row">
                    <Product
                        id={5}
                        title="Redragon M602 RGB Wired Gaming Mouse RGB Spectrum Backlit Ergonomic Mouse Griffin Programmable with 7 Backlight Modes up to 7200 DPI for Windows PC Gamers (Black)"
                        price="19.99"
                        image="https://m.media-amazon.com/images/I/61MI2KPnKgL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4} />

                    <Product
                        id={6}
                        title="Switch Controller for Nintendo Switch/Switch Lite,JYSW Wireless Pro Controller Remote Gamepad Joystick for Nintendo Switch Console Supports Motion Control,Gyro Axis, Turbo and Dual Vibration [Upgrade]"
                        price="23.99"
                        image="https://m.media-amazon.com/images/I/61fJ5N2yjFL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={5} />
                </div>
                <div className="home__row">
                    <Product
                        id={7}
                        title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic." 
                        image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UY218_.jpg"
                        price="29.99" rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
