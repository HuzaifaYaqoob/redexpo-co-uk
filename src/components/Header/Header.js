
import { useState } from "react"
import { GradientButton } from "../Utility/Button"
import Navigation from "./Navigation"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"
import { useNavigate } from "react-router-dom"
import RexButton from "../Form/RexButton"


export const HamburgerIcon = ({ setMenuActive, menu_active }) => {
    return (
        <>
            <div
                className={`group block md:hidden transition-all duration-75 cursor-pointer `}
                onClick={() => {
                    setMenuActive(!menu_active)
                }}
            >
                <span className={`w-11 h-[4px] bg-white block mb-1.5 ${menu_active ? 'w-[7px] h-[7px] rounded-full' : 'rounded'} transition-all duration-75 `}></span>
                <span className={`w-11 h-[4px] bg-white block mb-1.5 ${menu_active ? 'w-[7px] h-[7px] rounded-full' : 'rounded'} transition-all duration-75 `}></span>
                <span className={`w-11 h-[4px] bg-white block mb-1.5 ${menu_active ? 'w-[7px] h-[7px] rounded-full' : 'rounded'} transition-all duration-75 `}></span>
            </div>
        </>
    )
}

const Logo = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div
                className="cursor-pointer"
                onClick={() => {
                    navigate('/')
                }}
            >
                <div className="flex items-center justify-center gap-3">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-rex.png`} className='w-[140px]' />
                </div>
            </div>
        </div>
    )
}



const Header = () => {
    const [menu_active, setMenuActive] = useState(false)
    return (
        <div className="w-full relative z-[100]">
            <div className="relative w-full max-w-7xl px-4  mx-auto flex items-center justify-between">
                <Logo />
                <Navigation />
            </div>
        </div >
    )
}

export default Header