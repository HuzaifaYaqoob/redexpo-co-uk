


export const GradientButton = ({ text, to, ...props }) => {
    return (
        <div
            className={`cursor-pointer bg-gradient-to-br from-red-600 to-orange-600 rounded-full py-2 px-8 text-white`}
        >
            {text}
        </div>
    )
}

