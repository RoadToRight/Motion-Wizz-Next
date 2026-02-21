import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
// import Sphere from '../components/Sphere'
const Sphere = dynamic(() => import('../components/Sphere'), {
    ssr: false
})
import css from "../CSS/HomePage/CanvasHero.module.css"
const CanvasHero = () => {

    if (window.innerWidth <= 767) {
        return <div className={css.hero_img}><img
            loading="eager"          // eager to load ASAP, not lazy
            fetchPriority="high"     // tells browser to prioritize this request
            src="https://res.cloudinary.com/dp6b6emb9/image/upload/w_600,f_auto,q_auto/orangeball_n074xx.webp"
            alt="Orange Ball"
            width={600}
            height={600}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        /></div>;
    }

    const [DPS, setDPS] = useState(1);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDPS(Math.min(window.devicePixelRatio, 2));
        }
    }, [])

    return (
        <>
            <Canvas className={css.threeD_model} dpr={DPS} style={{ width: '100%', height: '100%' }}>
                <Sphere />
            </Canvas>
        </>
    )
}

export default CanvasHero
