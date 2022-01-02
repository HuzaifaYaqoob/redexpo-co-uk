
import Header from "../Header/Header"


const WebWrapper = (props) => {
    return (
        <>
            <Header />
            {
                props.children
            }
        </>
    )
}

export default WebWrapper