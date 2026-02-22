"use client"
import React, { useEffect, useState } from 'react'

const useWindowSize = () => {

    const [Size, setSize] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);

    useEffect(() => {

        const handleResize = () => {
            setSize(window.innerWidth)
        }
        handleResize();
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return Size;
}

export default useWindowSize
