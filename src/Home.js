import React, {Component} from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-elastic-carousel";
import SimpleSlider from "./SimpleSlider";

// class Home extends Component {
//     render(){
//     return(
//         <div className="home1">
//             <h3>Hello</h3>
//         </div>
//     );
// }
// }
const photos = [
    {
    name: 'Image-1',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg'
    },
    {
    name: 'Image-2',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZjRlNTlkODIt/ZjRlNTlkODIt-OGJlZTY1NzUt-w1500._CB431866803_.jpg'
    },
    {
    name: 'Image-3',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NWJlNzQ2N2Qt/NWJlNzQ2N2Qt-NTliYzBlYzAt-w1500._CB435011230_.jpg'
    },
]

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <div className="slides fade">
                <Carousel>
                    <SimpleSlider src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg" />
                    <SimpleSlider src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZjRlNTlkODIt/ZjRlNTlkODIt-OGJlZTY1NzUt-w1500._CB431866803_.jpg" />
                    <SimpleSlider src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NWJlNzQ2N2Qt/NWJlNzQ2N2Qt-NTliYzBlYzAt-w1500._CB435011230_.jpg" />
                </Carousel>
                {/* <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg"
                    alt=""
                />

                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZjRlNTlkODIt/ZjRlNTlkODIt-OGJlZTY1NzUt-w1500._CB431866803_.jpg"
                    alt=""
                />

                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NWJlNzQ2N2Qt/NWJlNzQ2N2Qt-NTliYzBlYzAt-w1500._CB435011230_.jpg"
                    alt=""
                />

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
            </div>
            
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Python Crash Course (2nd Edition): 
                    A Hands-On, Project-Based Introduction to 
                    Programming Paperback – Illustrated, 9 May 2019"
                    price={22.93}
                    image="https://image.ebooks.com/previews/138/138623/138623041/138623041-hq-168-80.jpg"
                    rating={5}
                />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking,
                    Stylish Kitchen Mixer with K-beater, 
                    Dough Hook and Whisk, 5 Litre Glass Bowl, 
                    Removable Splash Guard, 1000 W, Red"
                    price={295.91}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
                    rating={4}                
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="Apple Watch Series 3 (GPS, 38mm) - 
                    Space Grey Aluminum Case with Black Sport Band"
                    price={195.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71O2f4-BvjL._AC_SL1500_.jpg"
                    rating={5}
                />
                <Product
                    id="23445930"
                    title="All-new Echo (4th generation) | With 
                    premium sound, smart home hub and Alexa | Charcoal"
                    price={89.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61eVarljQcL._AC_SL1000_.jpg"
                    rating={4}
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) 
                    - Space Grey (2nd Generation)"
                    price={769.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49J890DKUXEN 49 Curved Ultra 
                    Wide LED Monitor - Super UltraWide 3840 x 1080, 
                    144Hz, HDMI, Displayport, USB-C, Speakers"
                    price={620.21}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
                    rating={4}
                />
            </div>
            
        </div>
    </div>
  );
}

export default Home;
