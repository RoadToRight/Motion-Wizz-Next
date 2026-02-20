"use client"
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'
import dynamic from 'next/dynamic'
// import CanvasHero from '@/clientComponents/CanvasHero'
const CanvasHero = dynamic(() => import('../clientComponents/CanvasHero'), {
  ssr: false
})
const ThreeHero = () => {

  return (
    <MainHeroContainer>
      <div className="text_container ">
        <span className="highlight">Motions Wizz</span>
        <h1>Grow your users. Smarter.</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="input">
          <input type="text" placeholder='Enter email' />
          <Button text={"Join Us"} />
        </div>
        <span>We care about your data in our privacy policy.</span>

      </div>
      <CanvasContianer>
        <CanvasHero />
      </CanvasContianer>
    </MainHeroContainer>
  )
}

export default ThreeHero

const MainHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(85vh - 90px);
  cursor: pointer;
  padding:80px 0px 0px 0px;
  
.text_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
      height: 50%;
          gap: 15px;
          position: relative;
          /* top: 80px; */
}
.input{
        display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    input{
    padding: 10px 16px;
        border-radius: 12px;
    }
}
.highlight{
    
}
 h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
font-size: 55px;
max-width: 700px;
}
p{
    max-width: 600px;
}
    @media (max-width:1024px) {
  h1 {
    font-size: 30px;
  }

}

  @media (max-width:767px){
     padding:50px 0px 0px 0px;
      height: max-content;
      gap: 20px;
      h1 {
    font-size: 30px;
  }
    .threeD_model{
        display: none;
    }
    .hero_img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero_img img{
            max-width: 330px;
    margin: 0 auto;
    }
  }
`
const shadowPulse = keyframes`
  0% {
    filter: drop-shadow(5px 5px 10px rgba(255,87,5,0.8));
  }
  50% {
    filter: drop-shadow(10px 10px 20px rgba(255,87,5,1));
  }
  100% {
    filter: drop-shadow(5px 5px 10px rgba(255,87,5,0.8));
  }
`;

const CanvasContianer = styled.div`
  width: 100%;
  height: 50%;

  img {
    filter: drop-shadow(5px 5px 10px rgba(255,87,5,1));
    animation: ${shadowPulse} 2s ease-in-out infinite;
  }
`;

