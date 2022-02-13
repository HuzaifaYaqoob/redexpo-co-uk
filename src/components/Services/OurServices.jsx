


const ServiceCard = () => {
    return (
        <div className={`max-w-[310px] w-full mx-auto bg-white rounded-md py-4 px-3 shadow-md mb-3 border hover:border-red-600 cursor-pointer hover:-translate-y-4 transition-all relative`}>
            <img
                src={`/images/services/Design.svg`}
                className="max-w-[150px] w-auto mb-3 max-h-[100px] h-auto mx-auto"
            />
            <h3 className="text-center text-2xl mb-3">UI/UX</h3>
            <p className="text-gray-600 text-sm text-center mb-3">We do design based on a long-term study of user behavior on sites of various subjects. This Allows you to naturally bring a person to the desired action</p>
        </div>
    )
}


const OurServicesSection = () => {
    return (
        <div className="mb-10 mt-20 px-5 md:px-0">
            <h3 className="font-semibold text-3xl text-center mb-10">Our Popular <span className="text-red-600">Services</span></h3>
            <div className="w-full max-w-7xl mx-auto flex  flex-wrap gap-4">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default OurServicesSection