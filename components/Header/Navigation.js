import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { GradientButton } from "../Utility/Button"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"

export const NavigationsLink = ({ text, to, active, ...props }) => {
    const route = useRouter()
    return (
        <p
            className={`cursor-pointer text-black ${active && 'text-red-600'} `}
            onClick={() => {
                to && route.push(to)
            }}
        >
            {text}
        </p>
    )
}


const Navigation = () => {
    const route = useRouter()
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
            <div
                className="md:hidden"
                onClick={() => {
                    setSMNav(!show_sm_nav)
                }}
            >
                <img src="/images/menu.svg" className="w-8 cursor-pointer" />
            </div>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setSMNav(false)
                }}
            >
                <div
                    className={`${show_sm_nav ? 'flex' : 'hidden'} md:flex gap-9 p-4 items-start flex-col absolute left-4 right-4 top-full rounded shadow-md bg-white md:relative md:flex-row md:items-end md:shadow-none`}
                >
                    <div
                        className="absolute right-4 top-6 md:hidden"
                        onClick={() => {
                            setSMNav(!show_sm_nav)
                        }}
                    >
                        <img src="/images/close.svg" className="w-5 cursor-pointer" />
                    </div>

                    <NavigationsLink active={ROUTES.HOME.includes(route.asPath) ? true : false} text='Home' to='/' />
                    <NavigationsLink active={ROUTES.SERVICES.includes(route.asPath) ? true : false} text='Services' to='#Services' />
                    <NavigationsLink active={ROUTES.PRICING.includes(route.asPath) ? true : false} text='Pricing' to='#Pricing' />
                    <NavigationsLink active={ROUTES.CONTACT.includes(route.asPath) ? true : false} text='Contact Us' to='#Contact' />
                    <NavigationsLink active={ROUTES.ABOUT.includes(route.asPath) ? true : false} text='About Us' to='/' />
                    <GradientButton text='Get a qoute' />
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Navigation