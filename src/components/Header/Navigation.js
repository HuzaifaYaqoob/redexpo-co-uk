import { useState } from "react"
import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import RexButton from "../Form/RexButton"
import { GradientButton } from "../Utility/Button"
import { HamburgerIcon } from "./Header"

export const NavigationsLink = ({ text, to, active, ...props }) => {
    const navigate = useNavigate()
    return (
        <p
            className={`cursor-pointer md:text-gray-300 text-gray-700 hover:text-gray-900  md:hover:text-white px-4 rounded relative flex items-center gap-2`}
            onClick={() => {
                props.setMenuActive(false)
                navigate(to)
            }}
        >
            {
                active &&
                <span className="block w-[6px] h-[6px] bg-red-600 rounded-full shadow-lg shadow-red-400">
                </span>
            }
            {text}
        </p>
    )
}


const Navigation = (props) => {
    const path = useLocation()?.pathname
    const [show_sm_nav, setSMNav] = useState(false)
    const [menu_active, setMenuActive] = useState(false)
    const navigate = useNavigate()


    const ROUTES = {
        HOME: [
            '',
            '/',
            '/home',
            '/home/',
        ],
        SERVICES: [
            '/services',
            '/services/',
        ],
        PRICING: [
            '/pricing',
            '/pricing/',
        ],
        CONTACT: [
            '/contact-us',
            '/contact-us/',
        ],
        ABOUT: [
            '/about-us',
            '/about-us/',
        ],
    }

    return (
        <div >
            <div
                className={`flex-1 gap-1 z-[10000] px-4 ${menu_active ? 'block fixed top-[90px] left-1 right-1 bg-white rounded-lg text-gray-900' : 'hidden md:flex'}`}
            >
                <div
                    className={`absolute right-4 top-6 md:hidden z-[1000]`}
                    onClick={() => {
                        setMenuActive(false)
                    }}
                >
                    <img src="/images/close.svg" className="w-5 cursor-pointer" />
                </div>
                <NavigationsLink active={ROUTES.HOME.includes(path)} text='Home' to='/' setMenuActive={setMenuActive} />
                <NavigationsLink active={ROUTES.SERVICES.includes(path)} text='Services' to='/services' setMenuActive={setMenuActive} />
                <NavigationsLink active={ROUTES.PRICING.includes(path)} text='Pricing' to='/pricing' setMenuActive={setMenuActive} />
                <NavigationsLink active={ROUTES.CONTACT.includes(path)} text='Contact Us' to='/contact-us' setMenuActive={setMenuActive} />
                <NavigationsLink active={ROUTES.ABOUT.includes(path)} text='About Us' to='/about-us' setMenuActive={setMenuActive} />
                {/* <GradientButton>Get a qoute</GradientButton> */}
                <RexButton
                 text='Get a quote' 
                 onClick={()=>{
                    navigate('/contact-us')
                 }}
                />
            </div>

            <HamburgerIcon menu_active={menu_active} setMenuActive={setMenuActive} />
        </div>
    )
}

export default Navigation