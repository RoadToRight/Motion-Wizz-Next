"use client"
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Sphere from '../components/Sphere'

const CanvasHero = () => {

    const [DPS, setDPS] = useState(1);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDPS(Math.min(window.devicePixelRatio, 2));
        }
    }, [])

    return (
        <>
            <Canvas dpr={DPS} style={{ width: '100%', height: '100%' }}>
                <Sphere />
            </Canvas>
        </>
    )
}

export default CanvasHero
