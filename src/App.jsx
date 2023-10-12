import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Home from './components/home'
import ProductsList from './components/products'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className=''>
        <Header />
      </div>
      <div className="d-flex jusify-content-center">
        <div>
          <Sidebar />
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
      <div className='w-100 bg-info'><Footer/></div>
    </>
  )
}

export default App
