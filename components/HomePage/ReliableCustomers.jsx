



const Customer = (props) => {
    return (
        <div className="mx-auto ">
            <img src={props.imagePath} className={`mb-3 max-h-[100px] w-auto h-auto max-w-[70px] ${props.className}`} />
        </div>
    )
}


const ReliableCustomers = () => {
    return (
        <div className="w-full px-5 mb-10">
            <h3 className="text-center text-3xl font-semibold mb-4">Our Reliable <span className="text-red-600">Customers</span></h3>
            <div className="max-w-4xl mx-auto w-full bg-white shadow-lg rounded py-2 px-4 mt-4 flex items-center flex-wrap ">
                <Customer imagePath='/images/customers/alpha-star-tech.png' />
                <Customer imagePath='/images/customers/pentutor.webp' />
                <Customer imagePath='/images/customers/kasi-eats.png' />
                <Customer imagePath='/images/customers/aloomic.svg'  className='max-w-[150px]' />
                <Customer imagePath='/images/customers/edudaras.jpg' className='max-w-[150px]' />
                <Customer imagePath='/images/customers/supereats.svg' />
            </div>
        </div>
    )
}

export default ReliableCustomers