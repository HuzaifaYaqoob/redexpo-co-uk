import RexButton from "../Form/RexButton"
import { MemberShipFeature } from "../Membership/MemberShipCard"
import { GradientButton } from "../Utility/Button"



const WhyChooseProgramme = () => {

    const KEY_FEATURES = [
        {
            is_active: true,
            title: 'Have a great Idea? but no money',
        },
        {
            is_active: true,
            title: 'Have a Business Plan? but no money',
        },
        {
            is_active: true,
            title: 'Need help in software solutions',
        },
        {
            is_active: true,
            title: 'Want to migrate business to Digital world',
        },
        {
            is_active: true,
            title: 'Not want to involve in Digital Problems',
        },
    ]

    return (
        <>
            <section className="mt-10">
                <div className="max-w-7xl px-4  w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-white text-[30px]">Why choose <br /> <span className="text-red-600 italic">Business Partner Programme</span>?</h3>
                        <div className="mt-5">
                            {
                                KEY_FEATURES.map((itm, index) => {
                                    return (
                                        <MemberShipFeature textColor={'text-gray-200'} data={itm} />
                                    )
                                })
                            }
                        </div>
                        <div className="mt-6 sm:flex items-center gap-4">
                            {/* <GradientButton className='max-w-max whitespace-nowrap'>
                                <span className="flex items-center justify-between gap-2 whitespace-nowrap">
                                    <span className="whitespace-nowrap">
                                        Contact Us Now
                                    </span>
                                    <span>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect y="26" width="26" height="26" transform="rotate(-90 0 26)" fill="url(#pattern0)" />
                                            <defs>
                                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_59_127" transform="scale(0.0111111)" />
                                                </pattern>
                                                <image id="image0_59_127" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB/UlEQVR4nO3csW7TQACH8XMHQiWenAEqlQGmvkOHwiOBhBCiihg/hriLceyz4/yNzfeNsZy7+8WKZVm6UsxsxYCbtecwp81MGrgFPpRSfgA/gXvgdu157S7gjr97t/a8dhfwtQf629rzqq1ZewK1AfR93jTNJtawmf/orSd0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldCihQwkdSuhQQocSOpTQoYQOJXQooUMJHUroUEKHEjqU0KGEDiV0KKFDCR1K6FBChxI6lNChhA4ldKj/Chq4WWtb5Oig7dbEn4Aj8B14CxwC4x6A+1LKcynlCDwAb6497mq1yN2earB7zuPcxrCd8w7tGN0ellnVPxbQAM9nvEax50APIAP8ZqO7q48G/DoHNoY9FXoEGU4/+ia2RJ4c8H5g4YPYU6ArkAHurrvaFasE6MWuhb5kjF0FvAIeRyC+AK87541Cz/3u3TYHZAxa5DNNhRmCFnmkKUADx0WuqUWsuXnNOfZyfN83vtoqr8o5eSV3uwK2yOdaEFvksRbAFrm2C7BFntoMbJHnNgFb5EurwBZ5qTg91HzuQfZhZOla7Jf3jUfgo1fyFeP0Smyfb0bMNtMfEBmZ2DjdqBQAAAAASUVORK5CYII=" />
                                            </defs>
                                        </svg>
                                    </span>
                                </span>
                            </GradientButton> */}
                            <RexButton text='Contact us Now' />
                            <span className="text-gray-400 mt-3 block sm:mt-0">
                                or call us at <span className="font-bold text-white">+92-318-7834096</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={`${process.env.PUBLIC_URL}/images/Greeting.png`} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseProgramme