import { GradientButton } from "../Utility/Button"



const ArrowRight = () => {
    return (
        <span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect y="26" width="26" height="26" transform="rotate(-90 0 26)" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_53_43" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_53_43" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB/UlEQVR4nO3csW7TQACH8XMHQiWenAEqlQGmvkOHwiOBhBCiihg/hriLceyz4/yNzfeNsZy7+8WKZVm6UsxsxYCbtecwp81MGrgFPpRSfgA/gXvgdu157S7gjr97t/a8dhfwtQf629rzqq1ZewK1AfR93jTNJtawmf/orSd0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldKj/Chq4WWtb5Oig7dbEn4Aj8B14CxwC4x6A+1LKcynlCDwAb6497mq1yN2earB7zuPcxrCd8w7tGN0ellnVPxbQAM9nvEax50APIAP8ZqO7q48G/DoHNoY9FXoEGU4/+ia2RJ4c8H5g4YPYU6ArkAHurrvaFasE6MWuhb5kjF0FvAIeRyC+AK87541Cz/3u3TYHZAxa5DNNhRmCFnmkKUADx0WuqUWsuXnNOfZyfN83vtoqr8o5eSV3uwK2yOdaEFvksRbAFrm2C7BFntoMbJHnNgFb5EurwBZ5qTg91HzuQfZhZOla7Jf3jUfgo1fyFeP0Smyfb0bMNtMfEBmZ2DjdqBQAAAAASUVORK5CYII=" />
                </defs>
            </svg>
        </span>
    )
}


const BecomeOurPartnerSection = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="relative">
                    <h3 className="text-[30px] text-white">Become Our <span className="text-red-600 italic">Partner</span></h3>
                    <span className="block bg-[#F25F1D] h-[2px] rounded-full w-[200px] bottom-0"></span>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <div className="flex-1">
                        <img src={`${process.env.PUBLIC_URL}/images/Business strategy.png`} alt="" />
                    </div>
                    <div className="flex-1">
                        <div>
                            <h3 className="text-white text-[33px] mb-3">Services <span className="text-[#F25F1D]">Partner Programme</span></h3>
                            <p className="text-gray-100">In our Services Partner Programme.<br />
                                <span className="flex gap-3">
                                    <ArrowRight />
                                    You will get Maintenance, Web Design/Developement, UI/UX, Mobile App Services on a Monthly or Yearly Subscription.
                                </span>
                                <br />
                                <span className="flex gap-3">
                                    <ArrowRight />
                                    No Extra Charges.
                                </span>
                                <br />
                                <span className="flex gap-3">
                                    <ArrowRight />
                                    Everything include in Subscription Packages
                                </span>
                            </p>
                            <GradientButton className='max-w-max flex items-center gap-2 mt-5'>
                                <span className="flex items-center gap-2">
                                    <ArrowRight />
                                    <span>
                                        See More
                                    </span>
                                </span>
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BecomeOurPartnerSection