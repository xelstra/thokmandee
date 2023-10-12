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
        <div className='categories bg1 p-2'>
            <div className="d-flex justify-content-center gap-4">
                <div >Home</div>
                <div onClick={() => handleMenu(1)}>Featured <span>{check(1) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span>
                    <div className={check(1) ? '.' : 'd-none'}>
                        <div className='first-div'>
                            <div className=' '>
                                <div>Trending Collections</div>
                                <div>Community</div>
                                <div>Recommended</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >New</div>
                <div >Bestsellers</div>
                <div onClick={() => handleMenu(2)}>Brands <span>{check(2) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span>
                    <div className={check(2) ? '' : 'd-none'}>
                        <div className='first-div'>
                            <div className=' '>
                                <div>Brands from Asia</div>
                                <div>Brands from Europe</div>
                                <div>Brands from Africa</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleMenu(3)}>Home Decor <span>{check(3) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span>
                    <div className={check(3) ? '' : 'd-none'}>
                        <div className='first-div'>
                            <div className=' w-100'>
                                <div>Blankets & Duvets</div>
                                <div>Pillows & Pillowcases</div>
                                <div>Quitls & Coverlets</div>
                                <div >Sheets</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >Food & Drink</div>
                <div >Beauty & Wellness</div>
                <div>Promotions</div>
            </div>
        </div>
    )
}

export default Sidebar