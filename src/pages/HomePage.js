
// Importing Components 

import HeroSection from '../components/HomePage/HeroSection'
import ReliableCustomers from '../components/HomePage/ReliableCustomers'
import OurServicesSection from '../components/Services/OurServices'
import ContactUs from '../components/Contactus/Contactus'

import SplitLine from '../components/Utility/SplitLine'
import RedExpoStudio from '../components/HomePage/RedExpoStudio'
import OurDisplay from '../components/HomePage/OurDisplay'
import BecomeOurPartnerSection from '../components/HomePage/BecomeOurPartner'
import BusinessPartnerProgrammSection from '../components/HomePage/BusinessPartner'
import MemberShipSection from '../components/Membership/MemberShipSection'
import WhyChooseProgramme from '../components/HomePage/WhyChooseProgramme'

const HomePage = () => {
  return (
    <div className='w-full'>
      <div
        className="top-0 right-0 min-h-screen left-0 absolute bg-repeat z-10 backdrop-blur-md"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/lines.svg')`
        }}

      >
        <div className='absolute top-0 bottom-0 right-0 left-0 ' />
      </div>
      <div className='z-[100] relative'>
        {/* <RedExpoStudio /> */}
        <OurDisplay />
        {/* <HeroSection /> */}
        <ReliableCustomers />
        <OurServicesSection />
        <div className='text-center mb-5 '>
          <h3 className='font-semibold text-2xl mb-4 text-white'>Got a new <span className='text-red-600 '>Project Idea?</span></h3>
          <div>
            <p className='text-sm text-gray-400 mb-2'>Call use for fast support at</p>
            <p className='text-sm text-orange-600 mb-4'>+92-318-783-4096</p>
          </div>
          <SplitLine text='or' />
        </div>
        <ContactUs />
        <BecomeOurPartnerSection />
        <BusinessPartnerProgrammSection />
        <MemberShipSection />
        <WhyChooseProgramme />
      </div>
    </div>
  )
}


export default HomePage