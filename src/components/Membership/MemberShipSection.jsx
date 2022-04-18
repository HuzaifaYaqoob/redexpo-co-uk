import MemberShipHeader from "./MemberShipHeader"
import MEMBERSHIP_DATA from "../../Redux/Constant/MemberShips"

import { useState } from "react"
import MemberShipCard from "./MemberShipCard"

const SwitchText = ({ text, active }) => {
    return (
        <>
            <div className={`capitalize text-[21px] cursor-pointer  ${active ? 'text-[#F25F1D] italic' : 'text-white'}`}>
                {text}
            </div>
        </>
    )

}


const MemberShipSwitch = (props) => {
    return (
        <>
            <div className="flex items-center justify-center gap-4">
                <SwitchText active={props.active} text={'Monthly'} />
                <div
                    className="w-[60px] h-[20px] rounded-full bg-gray-600 cursor-pointer p-[2px]"
                    onClick={() => {
                        props.onToggle && props.onToggle()
                    }}
                >
                    <div className={`h-[16px] w-[35px] bg-red-600 rounded-full flex items-center transition-all justify-center ${props.active ? 'mr-auto' : 'ml-auto'}`}>
                        <span className="w-[10px] h-[1px] rounded-full block bg-white"></span>
                    </div>
                </div>
                <SwitchText text={'Yearly'} active={!props.active} />
            </div>
        </>
    )
}



const MemberShipSection = () => {

    const [active_membership, setActiveMembership] = useState('MONTHLY')

    return (
        <>
            <section className="mt-10">
                <div className="max-w-7xl px-4  w-full mx-auto">
                    <MemberShipHeader />
                    <div className="mt-5">
                        <MemberShipSwitch
                            active={active_membership == 'MONTHLY' ? true : false}
                            onToggle={() => {
                                setActiveMembership(active_membership == 'MONTHLY' ? 'YEARLY' : 'MONTHLY')
                            }}
                        />
                        <div className="flex items-center flex-wrap justify-between gap-10 pb-5 mt-20">
                            {
                                MEMBERSHIP_DATA.filter(itm => itm.duration == active_membership).length > 0 ?
                                    MEMBERSHIP_DATA.filter(itm => itm.duration == active_membership).map((membership, index) => {
                                        return (
                                            <MemberShipCard
                                                key={index}
                                                data={membership}
                                            />
                                        )
                                    })
                                    :
                                    <>
                                        Not Found
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MemberShipSection