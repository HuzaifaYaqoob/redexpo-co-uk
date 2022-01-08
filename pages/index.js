import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Importing Components 

import HeroSection from '../components/HomePage/HeroSection'
import ReliableCustomers from '../components/HomePage/ReliableCustomers'
import OurServicesSection from '../components/Services/OurServices'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <ReliableCustomers />
      <OurServicesSection />
    </div>
  )
}


export default HomePage