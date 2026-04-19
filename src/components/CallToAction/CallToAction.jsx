import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const CallToAction = (props) => {
  const CTA=`${props.state} ${props.ph} ${props.pv} ${props.text}`
  return (
    <button className={`font-primary font-light text-white  flex  justify-center items-center gap-x-1 rounded-lg bg-secondary tracking-wide leading-8 cursor-pointer transition-colors ease-in-out duration-300  hover:bg-blue-500 ${CTA} `}>
        <span>{props.title}</span>
        <FaArrowRight />
    </button>
  )
}

export default CallToAction