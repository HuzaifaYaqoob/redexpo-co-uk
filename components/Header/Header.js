
import { useRouter } from "next/dist/client/router"
import Navigation from "./Navigation"

const Logo = () => {
    const route = useRouter()
    return (
        <div>
            <img
                src='/images/logo.svg'
                className="cursor-pointer"
                onClick={() => {
                    route.push('/')
                }}
            />
        </div>
    )
}



const Header = () => {
    return (
        <div className="w-full bg-white ">
            <div className="relative w-full max-w-7xl mx-auto p-2 flex items-center justify-between">
                <Logo />
                <Navigation />
            </div>
        </div>
    )
}

export default Header