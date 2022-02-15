import { GradientButton } from "../Utility/Button"

const HeadingSection = (props) => {
    return (
        <div className="px-5 mb-10 md:mb-0">
            <h3 className="text-red-600">Your success partner</h3>
            <h1 className="text-3xl md:text-left md:text-6xl mb-3 md:mb-9 font-medium text-white-RE">Business value through digital products.</h1>
            <p className="mb-9 md:mb-0 text-lg">Helping <span className="text-red-600">Startups</span> and <span className="text-red-600">Growth Companies</span>. We build
                custom softwares, providing reliable end-to-end
                design & development solutions</p>
            <div className="flex items-center gap-3 mt-8">

                <GradientButton>Contact Us</GradientButton>
                <GradientButton
                    borderBtn
                    className='text-gray-900'
                >
                    Our Partner Programme
                </GradientButton>
            </div>
        </div>
    )
}


const HeroSection = () => {
    return (
        <div
            className={`w-full max-w-7xl px-5 md:px-0 mx-auto my-20 md:flex md:items-center`}
        >
            <HeadingSection />
            <img className="w-full max-w-2xl" src="/images/bulb-img.svg" alt="" />
        </div>
    )
}

export default HeroSection