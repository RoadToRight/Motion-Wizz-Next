import React from 'react'
import styled from 'styled-components'

const Button = ({ text, icon, padding = "10px 20px", className, fsize }) => {
  return (
    <div>
      <Btn className={`btn_1 ${className}`} style={{ padding: padding }}>
        <span>{text}</span>
        <span className='icon'>{icon}</span>
      </Btn>
    </div>
  )
}

export default Button


const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
    transition: all 300ms ease;

  background-color: #FD5B26;
  color: white;
    gap: 8px;
   
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 100px;
    transition: all 300ms ease;

  }
   &:hover .icon{
    transform: rotate(-35deg);
    background-color: white;
  
   }
`