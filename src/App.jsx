import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './public/publicRoute'
import Navbar from './share/Navbar'
import PageNotfound from './public/pages/PageNotfound'
import Layout from './admin/Layout'
import { adminRoutes } from './admin/Pages/adminRoutes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
// import Carousel from './public/components/Carousel'
// import ProductCard from './public/components/ProductCard'
// import Details from './public/pages/Details'
// 
const App = () => {

  return <>
    <BrowserRouter>
      <ToastContainer
        theme='dark'
        position='bottom-left'
      />
      <Routes>
        <Route path="/" element={<><Navbar /> <Outlet /> </>}>
          {
            publicRoutes.map(({ path, compo }) => <Route path={path}
              element={compo} />)

          }
        </Route >

        <Route path="/admin" element={<Layout />}>
          {
            adminRoutes.map(({ path, compo }) => path === "index"
              ? <Route index element={compo} />
              : <Route
                path={path}
                element={compo} />)
          }

        </Route >
        <Route path='*' element={<PageNotfound />} />

      </Routes>
    </BrowserRouter>

  </>
}

export default App
// 🌼
// error boundary, debouncing, throttling, pagination, performance hooks