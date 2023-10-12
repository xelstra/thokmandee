import React from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import thokmandee from '../assets/thokmandee.png'
const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center p-2 ps-3 pe-3 header1 bg3'>
                <div className='col-4'><button className='sell'>Sell Your Brand</button></div>
                <div className='col-4 text-center'>
                    Buy great brands wholesale online. 
                    <a href='#' className='a'> Sign Up!</a>
                </div>
                <div className='d-flex justify-content-end gap-1 col-4'>
                    <div>
                        <select name="language" id="language">
                            <option value="English">English</option>
                            <option value="Italiano">Italiano</option>
                            <option value="Dansk">Dansk</option>
                            <option value="Netherlands">Netherlands</option>
                        </select>
                    </div>
                    <div>
                        <select name="currency" id="currency">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between ps-3 pe-3 bg1" style={{backgroundColor:'', position:'sticky', top:'100px', zIndex:'10'}}>
                <div className='col-4 '>
                    <form className="form-inline d-flex">
                        <input type="text" className="w-75" id="" placeholder="Search item..." />
                        <button type="submit" className="search"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </form>
                </div>
                <div className='col-4 text-center'>
                    <img className='header-image' src={thokmandee} alt="" />
                </div>
                <div className='col-4 d-flex justify-content-end align-items-center menu'>
                    <a href="#">About Us</a>
                    &emsp;
                    <a href="#">Login</a>
                    &emsp;
                    <a href="#">Register</a>
                    &emsp;
                    <a href="#" className='fs-3'><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
            </div>

        </>
    )
}

export default Header