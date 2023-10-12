import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faShieldHalved, faGift, faSackDollar, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import banner from '../assets/banner.png'
import tapal from '../assets/tapal.png'
import thokmandee from '../assets/thokmandee.png'
import ProductCard from './productCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { products, reversed, brandNames } from './productsList';
import Carousel from './carousel';

const items = [
    <img src={banner}></img>,
    <img src={tapal}></img>,
    <img src={banner}></img>,
]

const ProductsList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [animate, setAnimate] = useState(false);
    const productsPerPage = 4;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePrevious = () => {
        console.log(products)
        console.log(reversed)
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);

    };

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
        setAnimate(true); // Apply animation className
        setTimeout(() => setAnimate(false), 500);
    };

    function getProductsPerPage() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            console.log(productsPerPage)
            return 1; // Mobile
        } else if (screenWidth <= 1024) {
            return 2; // Tablet
        } else {
            return 4; // PC
        }
    }

    return (
        <div className='p-3'>
            <div className="w-100 mb-4">
                <div id="" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner} class="d-block w-100"  style={{borderRadius:'15px'}} />
                        </div>
                        <div class="carousel-item">
                            <img src={tapal} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" href="#" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>

                {/* <Carousel items={items}></Carousel> */}
                {/* <img className="w-100" src={banner} alt="" /> */}
            </div>
            <div className='d-flex justify-content-center gap-1'>
                <div className='badge'>
                    <div><FontAwesomeIcon icon={faMoneyBillWave} /></div>
                    <div>Flexible Payment</div>
                </div>
                <div className='badge'>
                    <div><FontAwesomeIcon icon={faShieldHalved} /></div>
                    <div>Order Protection</div>
                </div>
                <div className='badge'>
                    <div><FontAwesomeIcon icon={faGift} /></div>
                    <div>Promotion Gift</div>
                </div>
                <div className='badge'>
                    <div><FontAwesomeIcon icon={faSackDollar} /></div>
                    <div>Money Back</div>
                </div>
            </div>

            <div className='dflex flex-column align-items-center bg1 round p-2 pb-4 tabs'>
                <Tabs
                    defaultActiveKey="home"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title="Latest Products" className=''>
                        <div className="product-group d-flex justify-content-between align-items-center gap-1">
                            <button className="nav-button" onClick={handlePrevious}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <div className={`d-flex justify-content-center gap-1 w-100 ${animate ? 'slide-in-left' : ''}`}>
                                {products
                                    .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
                                    .map((product, productIndex) => (
                                        <div key={productIndex} className="">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                            </div>
                            <button className="nav-button" onClick={handleNext}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Promoted Products">
                        <div className="product-group d-flex justify-content-between align-items-center gap-1">
                            <button className="nav-button" onClick={handlePrevious}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <div className={`d-flex justify-content-center gap-1 w-100 ${animate ? 'slide-in-left' : ''}`}>
                                {reversed
                                    .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
                                    .map((product, productIndex) => (
                                        <div key={productIndex} className="">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                            </div>
                            <button className="nav-button" onClick={handleNext}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <div className='d-flex flex-column text-center p-5'>
                <div>
                    <h3>We offer local EU Guarantee</h3>
                    <p>We at Thokmandee; offer a complete product satisfaction to our esteemed clients, If you are not satisfied with product delivered to you by suppliers, YOU SIMPLY INFORM US,  we will take care of the rest.</p>
                </div>
                <div className="d-flex gap-2">
                    <div className='m-2 d-flex flex-column justify-content-between align-items-center'>
                        <div>
                            <h4>Buy today and pay up to 60 days</h4>
                            <p>We want to help you grow, Our established customers gets 60 days payment terms right away.</p>
                        </div>
                        <button className='sell'>Find out more</button>
                    </div>
                    <div className='m-2 d-flex flex-column justify-content-between  align-items-center'>
                        <div>
                            <h4>Distinctive brands Tabulated for your shop</h4>
                            <p>The more you shop with us the more we will be bring unique products for your shop.</p>

                        </div>
                        <button className='sell'>Find out more</button>
                    </div>

                </div>

            </div>


            <div className='mt-2 text-center bg1 round p-2 pb-4 pt-4'>
                <h2>MORE TO EXPLORE</h2>
                <div className="product-group d-flex justify-content-between align-items-center gap-1">
                    <button className="nav-button" onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className={`d-flex justify-content-center gap-1 w-100 ${animate ? 'slide-in-left' : ''}`}>
                        {reversed
                            .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
                            .map((product, productIndex) => (
                                <div key={productIndex} className="">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                    </div>
                    <button className="nav-button" onClick={handleNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>

            </div>

            <div className='d-flex flex-column text-center p-5'>
                <div>
                    <h3>We aim to include every brand Bon Appetite</h3>
                    <p>We created Thokmandee an online wholesale marketplace: to help ethnic businesses and brands to come together to compete on a more level playing field in European market. Thokmandee; where retailers discover their next bestsellers from independent ethnic brands across the globe. <br />
                        If you want the best products at the best value and customer service with a smile, you’ve found it — welcome to Thokmandee.com</p>
                    <button className='sell'>More about us</button>

                </div>

            </div>

            <div className='mt-2 text-center bg1 round p-2 pb-4 pt-4'>
                <h2>BRANDS</h2>
                <div className="product-group d-flex justify-content-between align-items-center gap-1">
                    <button className="nav-button" onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className={`d-flex justify-content-center gap-1 w-100 ${animate ? 'slide-in-left' : ''}`}>
                        {brandNames
                            .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
                            .map((product, productIndex) => (
                                <div key={productIndex} className="brands">
                                    <div><img src={tapal} alt="" /></div>
                                    <div>{product}</div>
                                </div>
                            ))}
                    </div>
                    <button className="nav-button" onClick={handleNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>

            </div>




        </div>
    );
};

export default ProductsList;
