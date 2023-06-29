import React, { useState } from 'react'
import {BsSunFill} from "react-icons/bs";
import {HiOutlineMenu} from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu);
    const handleMenu = () => {
        setOpenMenu(!openMenu);  // !openMenu >>>> toggle 
    }
    return (
    <nav className='flex items-center'> 
        <div className='flex items-center'>
            <div className='text-[20px] font-bold mr-2'>Nerd Card</div>
            <BsSunFill size={"24px"} color="#e9c46a"className='cursor-pointer' />
        </div>
        <ul className='ml-auto text-16 font-semibold'>
            {openMenu ? (
                <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
            ) : (
                <HiOutlineMenu size={"24px"} className='cursor-pointer' onClick={handleMenu}/>  
            )}
            {openMenu && (
                <div className='text-black absolute right-8 bg-white p-8 text-center text-13'>
                    <li className='cursor-pointer'>Features</li>
                    <li className='cursor-pointer'>Menu</li>
                    <li className='cursor-pointer'>OurStory</li>
                    <li className='cursor-pointer'>Context</li>
                </div>
            )}
        </ul>
    </nav>
    )
}

export default NavBar