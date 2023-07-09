import React, { useState } from 'react';
import {BsSunFill} from "react-icons/bs";
import { FaMoon } from 'react-icons/fa';
import {HiOutlineMenu} from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md";
import useDarkMode from '../../useDarkMode';

const NavBar = (props) => {
    const {isMobile} = props;
    const [openMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    console.log(openMenu);
    const handleMenu = () => {
        setOpenMenu(!openMenu);  //!openMenu >>>> toggle 
    }
    return (
    <nav className='flex items-center'> 
        <div className='flex items-center'>
            <div className='text-[20px] font-bold mr-2'>Nerd Card</div>
            {isDarkMode ? (
                <BsSunFill size={"24px"} color="#e9c46a"className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
            ):(
                <FaMoon size={"24px"} color="#e9c46a"className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
            )}
        </div>
        <ul className='md:flex md:gap-10 ml-auto text-16 font-semibold'>
            {openMenu && isMobile ? (
                <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
            ) : !openMenu && isMobile ?( 
                <HiOutlineMenu size={"24px"} className='cursor-pointer' onClick={handleMenu}/>  
            ):(
                <>
                    <li className='btn-hover'>Features</li>
                    <li className='btn-hover'>Menu</li>
                    <li className='btn-hover'>OurStory</li>
                    <li className='btn-hover ml-28'>Contact</li>
                </>
            )}
            {openMenu && (
                <div className='text-black absolute right-8 bg-white p-8 text-center text-13 z-10'>
                    <li className='cursor-pointer'>Features</li>
                    <li className='cursor-pointer'>Menu</li>
                    <li className='cursor-pointer'>OurStory</li>
                    <li className='cursor-pointer'>Contact</li>
                </div>
            )}
        </ul>
    </nav>
    )
}

export default NavBar