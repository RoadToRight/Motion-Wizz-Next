import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Sphere from '../components/Sphere'
// const Sphere = dynamic(() => import('../components/Sphere'), {
//     ssr: false
// })
import css from "../CSS/HomePage/CanvasHero.module.css"
const CanvasHero = () => {



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
