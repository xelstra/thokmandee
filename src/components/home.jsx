import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const categories = [
        {
            name: 'Home',
            subcategories: [],
        },
        {
            name: 'Featured',
            subcategories: ['Trending Collections', 'Community', 'Recommended'],
        },
        {
            name: 'New',
            subcategories: [],
        },
        {
            name: 'Best Sellers',
            subcategories: [],
        },
        {
            name: 'Brands',
            subcategories: ['Brands from Asia', 'Brands from Africa', 'Brands from Europe'],
        },
        {
            name: 'Home Decor',
            subcategories: ['Blankets & Duvets', 'Pillows & Pillowcases', 'Quitls & Coverlets', 'Sheets'],
        },
        {
            name: 'Food & Drink',
            subcategories: [],
        },
        {
            name: 'Beauty & Wellness',
            subcategories: [],
        },
        {
            name: 'Promotions',
            subcategories: [],
        },
    ];

    return (
        <header className='d-flex justify-content-center align-items-center bg1 pt-2'>
            <nav>
                <ul className="menu">
                    {categories.map((category, index) => (
                        <li key={index} className="menu-item">
                            <div className="category">
                                {category.name} {category.subcategories.length > 0 && <FontAwesomeIcon icon={faAngleDown}/>}
                                {category.subcategories.length > 0 &&
                                    <div className="subcategories">
                                        {category.subcategories.map((subcategory, subIndex) => (
                                            <div key={subIndex} className="subcategory">
                                                {subcategory}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
