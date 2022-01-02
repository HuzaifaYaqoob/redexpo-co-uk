import { useRouter } from "next/dist/client/router"
import { GradientButton } from "../Utility/Button"


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
        <div className="flex gap-9 items-end">
            <NavigationsLink active={ROUTES.HOME.includes(route.asPath) ? true : false} text='Home' to='/' />
            <NavigationsLink active={ROUTES.SERVICES.includes(route.asPath) ? true : false} text='Services' to='#Services' />
            <NavigationsLink active={ROUTES.PRICING.includes(route.asPath) ? true : false} text='Pricing' to='#Pricing' />
            <NavigationsLink active={ROUTES.CONTACT.includes(route.asPath) ? true : false} text='Contact Us' to='#Contact' />
            <NavigationsLink active={ROUTES.ABOUT.includes(route.asPath) ? true : false} text='About Us' to='/' />
            <GradientButton text='Get a qoute' />
        </div>
    )
}

export default Navigation