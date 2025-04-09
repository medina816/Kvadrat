import React from 'react'
import './home.scss'
import Banner from '../../components/banner/Banner'
import BlockService from '../../components/BlockService/BlockService'
import Card from '../../shared/Card/Card.jsx' 
import Advantages from '../../components/Advantages/Advantages.jsx'
import FAQ from './FAQ/FAQ.jsx'
import Reviews from './FAQ/Reviews/Reviews.jsx'

function Home() {
  return (
    <div>
      <Banner />
      <BlockService />
      <Card /> 
      <Advantages />
      <FAQ />
      <Reviews />
    </div>
  )
}

export default Home
