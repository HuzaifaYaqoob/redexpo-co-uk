import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Importing Components 

import HeroSection from '../components/HomePage/HeroSection'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
    </div>
  )
}


export default HomePage