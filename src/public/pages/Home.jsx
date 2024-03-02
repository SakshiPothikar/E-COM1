import React from 'react'
import Navbar from '../../share/Navbar'
import Footer from './Footer'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'
const Home = () => {
  return <>
    {/* <Navbar /> */}
    <Carousel />
    <ProductCard />
    <Footer />
    {/* <Navbar /> */}
  </>
}

export default Home