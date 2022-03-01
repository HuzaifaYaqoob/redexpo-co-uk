
import { useState } from "react"
import { GradientButton } from "../Utility/Button"
import Navigation from "./Navigation"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"


const HamburgerIcon = ({ setMenuActive, menu_active }) => {
    return (
        <>
            <div
                className={`group origin-right ${menu_active ? 'rotate-90' : ''} transition-all duration-75 cursor-pointer `}
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
    const [menu_active, setMenuActive] = useState(false)
    return (
        <div className="w-full relative z-[100]">
            <div className="relative w-full max-w-7xl mx-auto p-2 flex items-center justify-between">
                <Logo />
                {/* <HamburgerIcon menu_active={menu_active} setMenuActive={setMenuActive} />
                <div
                    className={`text-white fixed bottom-2 left-1/2 -translate-x-1/2 ${menu_active ? 'h-[400px]' : 'h-0'} rounded-lg max-w-[700px] w-full backdrop-blur-lg bg-black bg-opacity-50 transition-all duration-300 `}
                    style={{
                        zIndex: 1000000
                    }}
                >
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setMenuActive(false)
                        }}
                    >
                        <Navigation />
                    </OutsideClickHandler>
                </div> */}
                <Navigation />
            </div>
        </div >
    )
}

export default Header