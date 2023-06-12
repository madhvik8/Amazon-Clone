import React from "react";
import "./Home.css";
import homeimg from '../../Assets/img2.jpg'
import Product from "./Product";
import polaroid from '../../Assets/img3.jpg'
import mixture from '../../Assets/img4.jpg'
import tshirt from '../../Assets/img5.jpg'
import cat from '../../Assets/img6.jpg'
import bag from '../../Assets/img7.jpg'
import paint from '../../Assets/img8.jpg'
import plant from '../../Assets/img9.jpg'
import ipad from '../../Assets/img10.jpg'
import tv from '../../Assets/img11.jpg'


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <a href="https://www.primevideo.com/"> 
        <img  className="home__image" src={homeimg} alt=""/> </a>

        <div className="home__row">
        <Product 
        id='12345'
        title='Polaroid Now I-Type Instant Camera - Everything Box Black (6026)' 
        price={18309} 
        image= {polaroid}
            rating={5}/>

        <Product
        id='23456' 
        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
        price={5999}
        image={mixture}
        rating={4}/>

           <Product 
           id='34567'
        title='LEOTUDE Women Cottonblend Half Sleeve Oversized Combo T-Shirts (Pack of 3)' 
        price={1199}
        image={tshirt}
        rating={4}/>
         
         <Product 
         id='45678'
          title='Qpets® 3L Automatic Cat Feeder with Voice Recorder, Auto Pet Feeder for Small Medium Cats Dogs with Programmable Time, Quantition Timed Cat Food Dispenser Dual Power Supply, White' 
          price={4964}
          image={cat}
          rating={4}
        />
        </div>


            <div className="home__row">
            <Product 
            id='56789'
          title='The Top Knott Pearl Beaded Handbag for Women/Tote Bags for Women/Vintage Formal Pearl Handmade Bags for Girls/Latest' 
          price={1599}
          image={bag}
          rating={4}
        />

          <Product 
          id='67890'
          title='HASTHIP® DIY Oil Painting - Paint by Numbers for Kids and Adults Beginners Kits with Brushes' 
          price={534}
          image={paint}
          rating={4}
        />

          <Product 
          id='98765'
          title='UGAOO Combo of 4 Indoor Live Plants for Home Decor with Pot - Jade, Spider, Fittonia & Crassula Ovata Plant' 
          price={899}
          image={plant}
          rating={4}
        />
            </div>


            <div className="home__row">
            <Product 
            id='87654'
          title='Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)' 
          price={78690}
          image={ipad}
          rating={4}
        />
        
          <Product 
          id='76543'
          title='Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)' 
          price={57990}
          image={tv}
          rating={4}
        />
            </div>
      </div>

    </div>
    );
};

export default Home;