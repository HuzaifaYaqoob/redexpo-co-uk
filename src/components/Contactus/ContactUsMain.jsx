import { useState } from "react"
import { InputField, IconInputField } from "../Form/Form"
import { GradientButton } from "../Utility/Button"



const PhoneTab = () => {
    return (
        <>
            <div>
                <p className="text-center text-white">Call Us at +92-318-7834096</p>
            </div>
        </>
    )
}

const ServicesCard = ({ text, active_service, setActiveService }) => {
    return (
        <>
            <div
                className={`cursor-pointer py-2 px-4 rounded-md box-border border ${active_service == text ? ' border-orange-600' : 'bg-gray-100'}`}
                onClick={() => {
                    setActiveService(text)
                }}
            >
                <p>{text}</p>
            </div>
        </>
    )
}


const MailTab = () => {
    const [active_service, setActiveService] = useState('')

    return (
        <>
            <div className="w-full max-w-[700px] mx-auto bg-white p-4 rounded-xl">
                <div>
                    <h3 className="text-gray-900 text-[19px]">Contact Form</h3>
                </div>
                <div className="md:flex justify-between items-stretch mt-4 gap-4">
                    <div className="flex-1">
                        <div className="text-gray-900">
                            <IconInputField
                                label='Your Name'
                                icon={
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.25 5C11.25 6.79493 9.79493 8.25 8 8.25V9.75C10.6234 9.75 12.75 7.62335 12.75 5H11.25ZM8 8.25C6.20507 8.25 4.75 6.79493 4.75 5H3.25C3.25 7.62335 5.37665 9.75 8 9.75V8.25ZM4.75 5C4.75 3.20507 6.20507 1.75 8 1.75V0.25C5.37665 0.25 3.25 2.37665 3.25 5H4.75ZM8 1.75C9.79493 1.75 11.25 3.20507 11.25 5H12.75C12.75 2.37665 10.6234 0.25 8 0.25V1.75ZM14.25 15.5C14.25 16.0294 13.8014 16.7105 12.6143 17.3041C11.4722 17.8751 9.84181 18.25 8 18.25V19.75C10.0242 19.75 11.8938 19.3414 13.2852 18.6457C14.6316 17.9725 15.75 16.9036 15.75 15.5H14.25ZM8 18.25C6.15819 18.25 4.52782 17.8751 3.38566 17.3041C2.19864 16.7105 1.75 16.0294 1.75 15.5H0.25C0.25 16.9036 1.36836 17.9725 2.71484 18.6457C4.10618 19.3414 5.97582 19.75 8 19.75V18.25ZM1.75 15.5C1.75 14.9706 2.19864 14.2895 3.38566 13.6959C4.52782 13.1249 6.15819 12.75 8 12.75V11.25C5.97582 11.25 4.10618 11.6586 2.71484 12.3543C1.36836 13.0275 0.25 14.0964 0.25 15.5H1.75ZM8 12.75C9.84181 12.75 11.4722 13.1249 12.6143 13.6959C13.8014 14.2895 14.25 14.9706 14.25 15.5H15.75C15.75 14.0964 14.6316 13.0275 13.2852 12.3543C11.8938 11.6586 10.0242 11.25 8 11.25V12.75Z" fill="#1E2124" />
                                    </svg>
                                }
                                placeholder='Enter Your Name'
                            />
                            <IconInputField
                                type='email'
                                label='Email'
                                icon={
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41603 5.37596C5.07138 5.1462 4.60573 5.23933 4.37596 5.58397C4.1462 5.92862 4.23933 6.39427 4.58397 6.62404L5.41603 5.37596ZM8.7812 8.5208L9.19723 7.89676L8.7812 8.5208ZM13.2188 8.5208L12.8028 7.89676L13.2188 8.5208ZM17.416 6.62404C17.7607 6.39427 17.8538 5.92862 17.624 5.58397C17.3943 5.23933 16.9286 5.1462 16.584 5.37596L17.416 6.62404ZM5 1.75H17V0.25H5V1.75ZM20.25 5V15H21.75V5H20.25ZM17 18.25H5V19.75H17V18.25ZM1.75 15V5H0.25V15H1.75ZM5 18.25C3.20507 18.25 1.75 16.7949 1.75 15H0.25C0.25 17.6234 2.37665 19.75 5 19.75V18.25ZM20.25 15C20.25 16.7949 18.7949 18.25 17 18.25V19.75C19.6234 19.75 21.75 17.6234 21.75 15H20.25ZM17 1.75C18.7949 1.75 20.25 3.20507 20.25 5H21.75C21.75 2.37665 19.6234 0.25 17 0.25V1.75ZM5 0.25C2.37665 0.25 0.25 2.37665 0.25 5H1.75C1.75 3.20507 3.20507 1.75 5 1.75V0.25ZM4.58397 6.62404L8.36518 9.14484L9.19723 7.89676L5.41603 5.37596L4.58397 6.62404ZM13.6348 9.14484L17.416 6.62404L16.584 5.37596L12.8028 7.89676L13.6348 9.14484ZM8.36518 9.14484C9.9607 10.2085 12.0393 10.2085 13.6348 9.14484L12.8028 7.89676C11.7111 8.62454 10.2889 8.62454 9.19723 7.89676L8.36518 9.14484Z" fill="#1E2124" />
                                    </svg>

                                }
                                placeholder='Enter Your Email'
                            />
                            <IconInputField
                                type='text'
                                label='Phone Number'
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.25 14V16H19.75V14H18.25ZM13.75 16V14H12.25V16H13.75ZM16 18.25C14.7574 18.25 13.75 17.2426 13.75 16H12.25C12.25 18.0711 13.9289 19.75 16 19.75V18.25ZM18.25 16C18.25 17.2426 17.2426 18.25 16 18.25V19.75C18.0711 19.75 19.75 18.0711 19.75 16H18.25ZM16 11.75C17.2426 11.75 18.25 12.7574 18.25 14H19.75C19.75 11.9289 18.0711 10.25 16 10.25V11.75ZM16 10.25C13.9289 10.25 12.25 11.9289 12.25 14H13.75C13.75 12.7574 14.7574 11.75 16 11.75V10.25ZM6.25 14V16H7.75V14H6.25ZM1.75 16V14H0.25V16H1.75ZM4 18.25C2.75736 18.25 1.75 17.2426 1.75 16H0.25C0.25 18.0711 1.92893 19.75 4 19.75V18.25ZM6.25 16C6.25 17.2426 5.24264 18.25 4 18.25V19.75C6.07107 19.75 7.75 18.0711 7.75 16H6.25ZM4 11.75C5.24264 11.75 6.25 12.7574 6.25 14H7.75C7.75 11.9289 6.07107 10.25 4 10.25V11.75ZM4 10.25C1.92893 10.25 0.25 11.9289 0.25 14H1.75C1.75 12.7574 2.75736 11.75 4 11.75V10.25ZM1.75 14V10H0.25V14H1.75ZM18.25 10V14H19.75V10H18.25ZM10 1.75C14.5563 1.75 18.25 5.44365 18.25 10H19.75C19.75 4.61522 15.3848 0.25 10 0.25V1.75ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75V0.25C4.61522 0.25 0.25 4.61522 0.25 10H1.75Z" fill="#1E2124" />
                                    </svg>
                                }
                                placeholder='Enter Your Number'
                            />
                        </div>
                    </div>
                    <div className="flex-1 h-full ">
                        <div className={`flex-1`}>
                            <p
                                className="text-gray-900 mb-1"
                            >Message</p>
                            <textarea
                                className="min-h-[200px] w-full border border-gray-200 bg-gray-100 rounded-md outline-none p-3"
                                placeholder="Type Your Message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="text-gray-900 text-[19px]">Services</h3>
                    <div className="flex gap-4 flex-wrap">
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='Web Design' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='Web Development' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='UI/UX' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='Mobile App Development' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='eCommerce' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='Software Solution' />
                        <ServicesCard setActiveService={setActiveService} active_service={active_service} text='Other' />
                    </div>
                    <div className="mt-4">
                        <GradientButton className='text-center md:mx-auto w-max'>
                            Send Message
                        </GradientButton>
                    </div>
                </div>
            </div>
        </>
    )
}

const SelectAbleService = ({ text }) => {
    return (
        <>
            <div className="px-7 py-3 bg-[#EA580C] rounded-md text-white cursor-pointer">
                {text}
            </div>
        </>
    )
}


const ContactCardSect = ({ text, icon, active, ...props }) => {
    return (
        <>
            <div
                className={`max-w-[250px] sm:mx-0 mx-auto w-full rounded-md ${active ? 'bg-gray-800' : 'hover:bg-red-600'} transition-all min-h-[100px] cursor-pointer px-4 py-1 flex flex-col items-center justify-center`}
                onClick={() => {
                    props.onClick && props.onClick()
                }}
            >
                <span className="mx-auto mb-2 h-[35px] flex items-center justify-center">
                    {icon}
                </span>
                <p className={`text-white font-sans `}>{text}</p>
            </div>
        </>
    )
}


const ContactUsMainSection = () => {
    const [active_tab, setActiveTab] = useState('MAIL')
    const [selected_items, setSelectedItems] = useState([])

    const SERVICES = [
        'Web Design', 'UI/UX', 'Graphic Design', 'Figma Expert', 'Web Development', 'Prototyping', 'FrontEnd Development', 'BackEnd Development', 'Machine Learning', 'Search Engine Optimization', 'Mobile App'
    ]
    return (
        <>
            <div className="px-4  mx-auto">
                <div className="mb-10">
                    <h1 className="text-center text-[60px] text-white font-mono font-black">Get In Touch!</h1>
                    <p className="text-center text-white text-[18px] italic font-thin font-sans">Fill up this form and our Team will get back to you within 24 hours</p>
                </div>
                {/* <div className="sm:flex items-center justify-center gap-3 my-10">
                    <ContactCardSect
                        active={active_tab == 'PHONE'}
                        icon={
                            <>
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44365 1.75 1.75 5.44365 1.75 10V14.75H0.25V10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10V14.75H18.25V10C18.25 5.44365 14.5563 1.75 10 1.75Z" fill="#F8F8F8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 14C12.25 11.9289 13.9289 10.25 16 10.25C18.0711 10.25 19.75 11.9289 19.75 14V16C19.75 18.0711 18.0711 19.75 16 19.75C13.9289 19.75 12.25 18.0711 12.25 16V14Z" fill="#F8F8F8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 14C0.25 11.9289 1.92893 10.25 4 10.25C6.07107 10.25 7.75 11.9289 7.75 14V16C7.75 18.0711 6.07107 19.75 4 19.75C1.92893 19.75 0.25 18.0711 0.25 16V14Z" fill="#F8F8F8" />
                                </svg>
                            </>
                        }
                        text='+92-318-7834096'
                        onClick={() => {
                            setActiveTab('PHONE')
                        }}
                    />
                    <ContactCardSect
                        active={active_tab == 'MAIL'}
                        icon={
                            <>
                                <svg width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4C20 1.79086 18.2091 0 16 0H4ZM4.41603 4.37592C4.07138 4.14616 3.60573 4.23929 3.37597 4.58393C3.1462 4.92858 3.23933 5.39423 3.58398 5.624L7.36518 8.1448C8.9607 9.20848 11.0393 9.20848 12.6348 8.14479L16.416 5.624C16.7607 5.39423 16.8538 4.92858 16.624 4.58393C16.3943 4.23929 15.9286 4.14616 15.584 4.37592L11.8028 6.89672C10.7111 7.6245 9.2889 7.6245 8.19723 6.89672L4.41603 4.37592Z" fill="#F8F8F8" />
                                </svg>
                            </>
                        }
                        text='redexpo.official@gmail.com'
                        onClick={() => {
                            setActiveTab('MAIL')
                        }}
                    />
                </div>
                <div>
                    {
                        active_tab == 'MAIL' ?
                            <MailTab />
                            :
                            active_tab == 'PHONE' &&
                            <PhoneTab />
                    }
                </div> */}
                <div className="max-w-[1600px] w-full mx-4 bg-white rounded-lg lg:mx-auto">
                    <div className="px-10 py-20">
                        <h1 className="text-5xl font-bold text-gray-800 mb-10">Now, About your Project...</h1>
                        <div className="flex items-start gap-4 justify-between">
                            <div className="flex-1">
                                <p className="text-lg font-medium mb-4">We like beign on a first-name basis, but it also helps us get in touch with you.</p>
                                <div className="flex items-center justify-between gap-3 mb-10">
                                    <div className="flex-1">
                                        <p className="mb-2">What is your full name?</p>
                                        <input type="text" placeholder="You Name..." className="focus:border-[#EA580C] text-[16px] w-full focus:border-l-[8px] transition-all outline-none border-gray-300 border-2 rounded-md py-3 px-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="mb-2">What is your Email address?</p>
                                        <input type="email" placeholder="yourname@example.com" className="focus:border-[#EA580C] text-[16px] w-full focus:border-l-[8px] transition-all outline-none border-gray-300 border-2 rounded-md py-3 px-4" />
                                    </div>
                                </div>
                                <div>
                                    What sort of creative work do you need help with?
                                    <div className="flex flex-wrap gap-3">
                                        {
                                            SERVICES.map((service, index) => {
                                                return (
                                                    <>
                                                        <SelectAbleService text={service} key={index} active={selected_items.includes(service)} />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">

                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUsMainSection