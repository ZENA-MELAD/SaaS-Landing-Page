import React from 'react'

const Login = (props) => {
    const classLogin=`${props.state} ${props.px} ${props.py} ${props.text}`
  return (
    <button className={`capitalize font-primary tracking-tight font-medium text-primary bg-[#FFE492]  rounded-lg leading-6  cursor-pointer transition-colors ease-in-out duration-300 hover:bg-amber-300  ${classLogin}`}>
        login
    </button>
  )
}

export default Login