import { useState } from "react"
import { useLocation, useNavigate, useRoutes  } from "react-router-dom"
import { GradientButton } from "../Utility/Button"

export const NavigationsLink = ({ text, to, active, ...props }) => {
    const navigate = useNavigate()
    return (
        <p
            className={`cursor-pointer text-gray-300 hover:text-white py-2 px-4 rounded relative flex items-center gap-2`}
            onClick={() => {
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
            {/* <div
                className="md:hidden"
                onClick={() => {
                    setSMNav(!show_sm_nav)
                }}
            >
                <img src="/images/menu.svg" className="w-8 cursor-pointer" />
            </div> */}

            <div
                className={`flex-1 ${show_sm_nav ? 'flex' : 'hidden'} md:flex gap-1 p-4 items-start flex-col absolute left-4 right-4 top-full rounded shadow-md  md:relative md:flex-row md:items-center md:shadow-none`}
            >
                <div
                    className="absolute right-4 top-6 md:hidden"
                    onClick={() => {
                        setSMNav(!show_sm_nav)
                    }}
                >
                    <img src="/images/close.svg" className="w-5 cursor-pointer" />
                </div>

                <NavigationsLink active={ROUTES.HOME.includes(path)} text='Home' to='/' />
                <NavigationsLink active={ROUTES.SERVICES.includes(path)} text='Services' to='/services' />
                <NavigationsLink active={ROUTES.PRICING.includes(path)} text='Pricing' to='/pricing' />
                <NavigationsLink active={ROUTES.CONTACT.includes(path)} text='Contact Us' to='/contact-us' />
                <NavigationsLink active={ROUTES.ABOUT.includes(path)} text='About Us' to='/about-us' />
                <GradientButton>Get a qoute</GradientButton>
            </div>
            {/* <div className="py-3 px-4 border-t border-gray-600 flex justify-end">
                <div className="mx-1 px-3 py-2 rounded border border-gray-500 cursor-pointer active:scale-95">Create New Account</div>
                <GradientButton className="mx-1 active:scale-95">Login</GradientButton>
            </div> */}
        </div>
    )
}

export default Navigation