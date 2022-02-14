
import { GradientButton } from "../Utility/Button"
import Navigation from "./Navigation"

const Logo = () => {
    return (
        <div>
            <img
                src='/images/Logo-white.svg'
                className="cursor-pointer"
                onClick={() => {
                    // route.push('/')
                }}
            />
        </div>
    )
}



const Header = () => {
    return (
        <div className="w-full">
            <div className="relative w-full max-w-7xl mx-auto p-2 flex items-center justify-between">
                <Logo />
                <Navigation />
                <GradientButton>Get a qoute</GradientButton>
            </div>
        </div>
    )
}

export default Header