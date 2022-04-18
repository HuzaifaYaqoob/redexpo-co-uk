


const ServiceCard = ({ heading, imagePath, text , color , ...props }) => {
    return (
        <div className={`max-w-[310px] group w-full mx-auto bg-gray-800 text-white rounded-md py-4 px-3 shadow-md mb-3 border hover:border-red-600 cursor-pointer hover:-translate-y-4 transition-all relative ${props.featured && '-translate-y-4 border-red-600'}`}>
            <img
                src={`/images/services/${imagePath}`}
                className="max-w-[150px] w-auto mb-3 max-h-[100px] h-auto mx-auto"
            />
            <h3 className={`text-center text-2xl mb-3 group-hover:text-orange-600 ${props.featured && 'text-orange-600'}`}>{heading}</h3>
            <p className="text-gray-400 text-sm text-center mb-3">{text}</p>
        </div>
    )
}


const OurServicesSection = () => {
    return (
        <div className="mb-10 mt-20 px-5 md:px-0">
            <h3 className="font-semibold text-3xl text-center mb-10 text-white">Our Popular <span className="text-red-600">Services</span></h3>
            <div className="w-full max-w-7xl px-4  mx-auto flex  flex-wrap gap-4">
                <ServiceCard color='indigo' imagePath='Design.svg' heading='UI/UX' text='We do design based on a long-term study of user behavior on sites of various subjects. This allows you to naturally bring a person to the desired action.' />
                <ServiceCard featured color='yellow' imagePath='web-design.svg' heading='Web Design' text='We take your corporate identity as a basis, so that loyal users remember it and want to return to an aesthetic and convenient resource.' />
                <ServiceCard color='yellow' imagePath='web-page.svg' heading='Web Development' text='We believe in building interactive web applications using latest technologies, To create experiences beyond our clients’ expectations.' />
                <ServiceCard color='yellow' imagePath='mobile.svg' heading='Mobile Application' text='Leveraging latest technological tools & industry practices, we build high performance apps to scale your business.' />
                <ServiceCard color='yellow' imagePath='E-commerce.svg' heading='eCommerce Dev.' text='Sell your products or services online and generate revenue with your e-commerce marketplace. Our highly dedicated team of experts supports customer-centric websites.' />
                <ServiceCard color='yellow' imagePath='ai.svg' heading='AI/ML' text='Get your software product transformation with our AI/ML development services i.e media workflow automation, data analyzing & video processing tools. ' />
            </div>
        </div>
    )
}

export default OurServicesSection