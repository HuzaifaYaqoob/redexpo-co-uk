


export const GradientButton = ({ text, to, ...props }) => {
    return (
        <div
            className={` cursor-pointer ${props.borderBtn ? 'text-white border border-red-600' : 'bg-gradient-to-br text-white from-red-600 to-orange-600'} rounded py-2 px-4  ${props.className}`}
        >
            {props.children}
        </div>
    )
}

