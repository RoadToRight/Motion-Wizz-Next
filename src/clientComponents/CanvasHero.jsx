import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
// import Sphere from '../components/Sphere'
const Sphere = dynamic(() => import('../components/Sphere'), {
    ssr: false
})
const CanvasHero = () => {

    if (window.innerWidth <= 767) {
        return <div className='hero_img'><img src="/orangeball.webp" width={"100%"} height={"100%"} /></div>;
    }

    const [DPS, setDPS] = useState(1);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDPS(Math.min(window.devicePixelRatio, 2));
        }
    }, [])

    return (
        <>
            <Canvas className='threeD_model' dpr={DPS} style={{ width: '100%', height: '100%' }}>
                <Sphere />
            </Canvas>
        </>
    )
}

export default CanvasHero
