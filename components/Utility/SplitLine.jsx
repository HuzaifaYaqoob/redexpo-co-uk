

const SplitLine = (props) => {
    return (
        <div
            className="relative px-5 mx-auto"
            style={{
                width: 'max-content'
            }}
        >
            <span className="block absolute top-1/2 left-2 -translate-x-full -translate-y-1/2 w-32 rounded-full h-px bg-gray-400"></span>
            <span className="text-gray-600">
                {props.text}
            </span>
            <span className="block absolute top-1/2 right-2 translate-x-full -translate-y-1/2 w-32 rounded-full h-px bg-gray-400"></span>
        </div>
    )
}

export default SplitLine