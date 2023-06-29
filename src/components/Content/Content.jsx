import React from 'react';
import {FaUser} from "react-icons/fa";
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from "../../assets/mobile/checkpoint.svg"
const Content = () => {
  return (
    <section className=''>
      <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]'>
        <div className='mt-16 gap-8 flex items-start'>
            <FaUser size={"22px"} className='mt-[12px]'/>
            <p className='text-36'>
                10245
                <p className='text-13 font-semibold mb-[36px]'>Customers</p>
            </p>
        </div>
        <div className='gap-8 flex items-start mb-16'>
            <BsFillCreditCardFill size={"22px"} className='mt-[12px]'/>
            <p className='text-36'>
                12045
                <p className='text-13 font-semibold'> Cards Issued</p>
            </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold">
        <p className='check-content'>
            <img src={checkIconMobile} alt="" />
            <p>Card reports sent to your phone every weeks</p>
        </p>
        <p className='check-content'>
            <img src={checkIconMobile} alt="" />
            <p>No external fees</p>
        </p>
        <p className='check-content'>
            <img src={checkIconMobile} alt="" />
            <p>Set spending limits and restrictions</p>
        </p>
      </div>
    </section>
  )
}

export default Content
