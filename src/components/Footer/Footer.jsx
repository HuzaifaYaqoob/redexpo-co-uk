


const FooterIcon = (props) => {
    return (
        <>
            <div className="rounded-full w-[40px] h-[40px] border border-gray-200 flex items-center justify-center cursor-pointer">
                {
                    props.children
                }
            </div>
        </>
    )
}


const Footer = () => {
    return (
        <footer className="bg-[#232845] w-full py-3">
            {/* <img src={'/images/redexpo-main.svg'} className="max-w-xs mx-auto" /> */}
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white">All right reserved Redexpo @ 2022</h3>

                    <div className="flex items-center gap-4">
                        <FooterIcon >
                            <img className="" src={`${process.env.PUBLIC_URL}/images/icons/Facebook F.png`} alt="" />
                        </FooterIcon>
                        <FooterIcon >
                            <img className="" src={`${process.env.PUBLIC_URL}/images/icons/LinkedIn 2.png`} alt="" />
                        </FooterIcon>
                        <FooterIcon >
                            <img className="" src={`${process.env.PUBLIC_URL}/images/icons/Instagram.png`} alt="" />
                        </FooterIcon>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer