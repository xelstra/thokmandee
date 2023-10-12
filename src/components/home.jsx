import { React, useState } from 'react'
import banner from '../assets/banner.png'
import ProductCard from './productCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import { products } from './productsList';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [ind, setInd] = useState(0)
    const [animate, setAnimate] = useState(false);
    const productsPerPage = 4;
    const productGroups = [];
    for (let i = 0; i < products.length; i += 4) {
        productGroups.push(products.slice(i, i + 4));
    }

    var productsToMap = productGroups[ind]
    const increment = () => {
        if (ind + 1 == productGroups.length)
            setInd(0)
        else
            setInd(ind + 1)
    }
    const decrement = () => {
        if (ind - 1 == -1)
            setInd(productGroups.length - 1)
        else
            setInd(ind - 1)
    }


    const handleNext = () => {
        increment()
        productsToMap = productGroups[ind]
        if (startIndex + productsPerPage < products.length) {
            setStartIndex(startIndex + productsPerPage);
        }
        setAnimate(true); // Apply animation class
        setTimeout(() => setAnimate(false), 500);
    };

    const handlePrevious = () => {
        decrement()
        productsToMap = productGroups[ind]
        if (startIndex - productsPerPage >= 0) {
            setStartIndex(startIndex - productsPerPage);
        }
        setAnimate(true); // Apply animation class
        setTimeout(() => setAnimate(false), 500);
    };



    return (
        <div className='p-2'>
            <div className="w-100">
                <img className="w-100" src={banner} alt="" />
            </div>
            <div className='d-flex'>
                <div className='badge'>
                    <div>Icon</div>
                    <div>Flexible Payment</div>
                </div>

            </div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
            </Tabs>

            <div className="product-group d-flex justify-content-between gap-1">
                <button className="nav-button" onClick={handlePrevious}>
                    &lt;
                </button>
                <div className={`d-flex justify-content-center gap-1 w-100 ${animate ? 'slide-in-left' : ''}`}>
                    {productsToMap.map((product, productIndex) => (
                        <div className="d-none d-lg-block">
                            <ProductCard key={productIndex} product={product} />
                        </div>
                    ))}
                </div>
                <button className="nav-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
            <div className="d-block d-md-none">
                {/* Display only on phones */}
                {productsToMap.map((product, productIndex) => (
                    <div className="">
                        <ProductCard key={productIndex} product={product} />
                    </div>
                ))}
            </div>
            {/* <div className="products-container">
                <button className="nav-button" onClick={handlePrevious}>Previous</button>
                <div className="product-row d-flex">
                    {products.slice(startIndex, startIndex + productsPerPage).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <button className="nav-button" onClick={handleNext}>Next</button>
            </div> */}
            {/* <Carousel className='d-none'>
                <Carousel.Item className=''>
                    <img src={banner}></img>
                </Carousel.Item>
                <Carousel.Item>
                <img src={banner}></img>
                </Carousel.Item>
                <Carousel.Item>
                <img src={banner}></img>
                </Carousel.Item>
            </Carousel> */}
            {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div> */}
        </div>
    )
}

export default Home