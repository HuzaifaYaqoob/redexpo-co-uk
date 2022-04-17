

export const Label = ({ text }) => {
    return (
        <p
            className="text-gray-400 mb-1"
        >{text ? text : ''}</p>
    )
}


export const InputField = (props) => {
    return (
        <div className={`flex-1 mb-4 `}>
            <Label text={props.label ? props.label : ''} />
            <input
                className={`py-1 px-4 outline-none border border-gray-300 rounded focus:border-red-600 text-gray-600 w-full ${props.className}`}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder ? props.placeholder : ""}
                onChange={props.onChange && props.onChange}
            />
        </div>
    )
}

export const TextField = (props) => {
    return (
        <div className={`flex-1 mb-4 `}>
            <Label text={props.label ? props.label : ''} />
            <textarea
                className={`py-1 px-4 outline-none border border-gray-300 rounded focus:border-red-600 text-gray-600 w-full min-h-[150px] ${props.className}`}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder ? props.placeholder : ""}
                onChange={props.onChange && props.onChange}
            ></textarea>
        </div>
    )
}




export const IconInputField = (props) => {
    return (
        <>
            <div className={`flex-1 mb-4`}>
                <p
                    className="text-gray-900 mb-1"
                >{props.label ? props.label : ''}</p>
                <div className="flex gap-1 items-center group border px-2 py-1 border-gray-300 rounded-md focus:border-red-600">
                    <div>
                        <span className="block">
                            {props.icon}
                        </span>
                    </div>
                    <input
                        className={`py-1 px-4 outline-none border-0 text-gray-600 w-full ${props.className}`}
                        type={props.type ? props.type : "text"}
                        placeholder={props.placeholder ? props.placeholder : ""}
                        onChange={props.onChange && props.onChange}
                    />
                </div>
            </div>
        </>
    )
}