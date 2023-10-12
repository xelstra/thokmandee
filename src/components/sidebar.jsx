import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    const [menu, setMenu] = useState([])
    const handleMenu = (num) => {
        const updatedMenu = [...menu];
        if (!updatedMenu.includes(num)) {
            updatedMenu.push(num);
        } else {
            // console.log("removing", num)
            updatedMenu.splice(updatedMenu.indexOf(num), 1);
        }
        setMenu(updatedMenu);
        // console.log(menu)
        // if (check(num)) console.log(num, "exists")
    }

    const check = (num) => {
        return menu.includes(num);
    }

    return (
        <div className='categories p-2 mt-3'>
            <ul className="list-group">
                <li className='border-bottom'>Home</li>
                <li className='border-bottom' onClick={() => handleMenu(1)}>Featured <span>{check(1) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span></li>
                <li className={check(1) ? '' : 'd-none'}>
                    <div className='first-div'>
                        <ul className='list-group border-bottom'>
                            <li>Trending Collections</li>
                            <li>Community</li>
                            <li>Recommended</li>
                        </ul>
                    </div>
                </li>
                <li className='border-bottom'>New</li>
                <li className='border-bottom'>Bestsellers</li>
                <li className='border-bottom' onClick={() => handleMenu(2)}>Brands <span>{check(2) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span></li>
                <li className={check(2) ? '' : 'd-none'}>
                    <div className='first-div'>
                        <ul className='list-group border-bottom'>
                            <li>Brands from Asia</li>
                            <li>Brands from Europe</li>
                            <li>Brands from Africa</li>
                        </ul>
                    </div>
                </li>
                <li className='border-bottom' onClick={() => handleMenu(3)}>Home Decor <span>{check(3) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span></li>
                <li className={check(3) ? '' : 'd-none'}>
                    <div className='first-div'>
                        <ul className='list-group w-100'>
                            <li>Blankets & Duvets</li>
                            <li>Pillows & Pillowcases</li>
                            <li>Quitls & Coverlets</li>
                            <li className='border-bottom'>Sheets</li>
                        </ul>
                    </div>
                </li>
                <li className='border-bottom'>Food & Drink</li>
                <li className='border-bottom'>Beauty & Wellness</li>
                <li>Promotions</li>
            </ul>
        </div>
    )
}

export default Sidebar