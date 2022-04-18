

const SingleDot = () => {
    return (
        <>
            <span className="w-1.5 h-1.5 bg-gray-500 block rounded-full"></span>
        </>
    )
}


const DotterLine = () => {
    return (
        <>
            <div className="flex gap-4 mb-4">
                <SingleDot />
                <SingleDot />
                <SingleDot />
                <SingleDot />
                <SingleDot />
                <SingleDot />
            </div>
        </>
    )
}


const DottedGallery = () => {
    return (
        <>
            <div className="">
                <DotterLine />
                <DotterLine />
                <DotterLine />
                <DotterLine />
                <DotterLine />
                <DotterLine />
            </div>
        </>
    )
}


const OurDisplay = () => {
    return (
        <>
            <div className="relative pt-14 pb-20">

                <div className="max-w-[1100px] px-4 mx-auto text-white md:flex items-center justify-between mb-10 relative">
                    <div className="flex-1">
                        <h3 className="text-6xl mb-8 text-center md:text-left font-bold leading-[70px]">We Create <br />Digital Products</h3>
                        <p className="text-md text-gray-400 text-center md:text-left md:border-l md:border-gray-200 px-3">We create your digital Products,<br className="hidden md:inline" />Branding, Illustrations with well crafted <br />Design Team.</p>
                    </div>
                    <div className="flex-1 min-h-[400px] mt-10 md:mt-0">
                        <div className="max-w-max mx-auto">
                            <div className="relative flex items-end" >
                                <div
                                    className={`w-40 h-40 bg-cover bg-center rounded-tl-[50px] rounded-br-[50px] z-30 relative`}
                                    style={{
                                        backgroundImage: `url('${process.env.PUBLIC_URL}/images/Home/1.jpg')`
                                    }}
                                ></div>
                                <span className="block -bottom-1/2 -translate-x-1/3 w-44 h-44 z-10 absolute rounded-full border-2 border-dashed -rotate-45 border-gray-400 border-b-transparent border-r-transparent"></span>
                                <div>
                                    <div className="flex items-end relative">
                                        <div className="w-12 h-12 mr-2 z-30 rounded-full rounded-tr-none bg-yellow-600 ml-4">

                                        </div>
                                        <div
                                            className="w-28 h-28 z-30 rounded-full bg-center bg-cover bg-no-repeat bg-red-600"
                                            style={{
                                                backgroundImage: `url('${process.env.PUBLIC_URL}/images/Home/3.jpg')`
                                            }}
                                        >

                                        </div>
                                        <div className="absolute top-2/3 z-10 left-12">
                                            <DottedGallery />
                                        </div>
                                    </div>
                                    <div className="w-28 h-28 rounded-full bg-gray-700 rounded-bl-none">
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-stretch mt-4 relative">
                                <div className="py-4">
                                    <div className="w-24 h-24 rounded-full bg-orange-600 rounded-br-none z-30 relative">
                                    </div>
                                    <div className="w-20 h-20 rounded-full bg-indigo-600 relative">
                                        <span className="block w-4 h-4 bg-gray-600 rounded-full absolute bottom-0 -left-3"></span>
                                    </div>
                                </div>
                                <div
                                    className="w-44 bg-red-600 z-10 rounded-tl-[40px] bg-center bg-cover bg-no-repeat"
                                    style={{
                                        backgroundImage: `url('${process.env.PUBLIC_URL}/images/Home/2.jpg')`
                                    }}
                                >
                                </div>
                                <div className="absolute -bottom-14 z-0 left-2/4 w-44 h-44 rounded-full border-2 border-t-transparent border-gray-400 border-dashed"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurDisplay