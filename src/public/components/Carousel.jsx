import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const [selectedImage, setselectedImage] = useState(0)
    const images = [
        "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1613972798457-45fc5237ae32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1510114101846-e177c16abf9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    ]
    useEffect(() => {
        let t = setInterval(() => {
            // setselectedImage(selectedImage === images.length ? 0 : selectedImage + 1)
            // setselectedImage(pre => (pre + 1) % images.length)
            setselectedImage(pre => pre === images.length - 1 ? 0 : pre + 1)
        },
            1500)
        return () => {
            clearInterval(t)
        }

    }, [])

    return <>
        <button onClick={e => setselectedImage(pre => pre === 0 ? images.length - 1 : pre - 1)}>Prev</button>
        <button onClick={e => setselectedImage(pre => pre === images.length - 1 ? 0 : pre + 1)}>Next</button>
        <img src={images[selectedImage]} alt="" />
    </>
}

export default Carousel


//clear interval stops the function, unmount and mount hotana page run hoto(either way!!)
//pre? previous value (previous index value), 