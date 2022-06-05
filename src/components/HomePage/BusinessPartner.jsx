import RexButton from "../Form/RexButton"
import { GradientButton } from "../Utility/Button"


const BusinessPartnerProgrammSection = () => {
    return (

        <>
            <section className="mt-10">
                <div className="max-w-7xl px-4 w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3">
                    <div className="flex-1">
                        <div className="relative mb-4">
                            <h3 className="text-[30px] text-white">Business <span className="text-[#F25F1D] italic">Partner Programme</span></h3>
                            <span className="absolute bottom-0 left-0 h-[2px] bg-[#F25F1D] w-[200px] block rounded-full"></span>
                        </div>
                        <p className="text-white font-light">We help startups/Business or Interprises to grow their business with a Partnership of 50%. In this Partner Programme, We provide all digital Services e.g UI/UX Designing, Web/Mobile App Development, SEO (Search Engin Optimizing), Digital Marketing etc.</p>
                        <div className="mt-10 flex items-center gap-3">
                            {/* <GradientButton className='w-max'>
                                <span className="flex items-center gap-2">
                                    <span>
                                        <svg className="-rotate-90" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect width="26" height="26" fill="url(#pattern0)" />
                                            <defs>
                                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_53_43" transform="scale(0.0111111)" />
                                                </pattern>
                                                <image id="image0_53_43" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB/UlEQVR4nO3csW7TQACH8XMHQiWenAEqlQGmvkOHwiOBhBCiihg/hriLceyz4/yNzfeNsZy7+8WKZVm6UsxsxYCbtecwp81MGrgFPpRSfgA/gXvgdu157S7gjr97t/a8dhfwtQf629rzqq1ZewK1AfR93jTNJtawmf/orSd0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldKj/Chq4WWtb5Oig7dbEn4Aj8B14CxwC4x6A+1LKcynlCDwAb6497mq1yN2earB7zuPcxrCd8w7tGN0ellnVPxbQAM9nvEax50APIAP8ZqO7q48G/DoHNoY9FXoEGU4/+ia2RJ4c8H5g4YPYU6ArkAHurrvaFasE6MWuhb5kjF0FvAIeRyC+AK87541Cz/3u3TYHZAxa5DNNhRmCFnmkKUADx0WuqUWsuXnNOfZyfN83vtoqr8o5eSV3uwK2yOdaEFvksRbAFrm2C7BFntoMbJHnNgFb5EurwBZ5qTg91HzuQfZhZOla7Jf3jUfgo1fyFeP0Smyfb0bMNtMfEBmZ2DjdqBQAAAAASUVORK5CYII=" />
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>
                                        See More
                                    </span>
                                </span>
                            </GradientButton> */}
                            <RexButton text='See More' />
                            <div className="w-max px-4 py-2 rounded-md border border-[#F25F1D] text-white cursor-pointer">
                                Terms & Conditions
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img className="max-w-full max-h-full" src={`${process.env.PUBLIC_URL}/images/Welcome.png`} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessPartnerProgrammSection