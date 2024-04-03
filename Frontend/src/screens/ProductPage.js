import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductForm  from '../components/ProductForm';
function Home() {
  return (
    <div>
      <Navbar />
 
      
      <ProductForm/>
      <Footer />
    </div>
  )
}

export default Home;