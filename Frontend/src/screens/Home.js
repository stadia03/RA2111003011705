import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItemList from "../components/ItemList";

function Home() {
  return (
    <div>
      <Navbar />
 
      <ItemList />
      
      <Footer />
    </div>
  )
}

export default Home;
