
import Header from "../Header/Header"
import Head from 'next/head'


const WebWrapper = (props) => {
    return (
        <>
            <Head>
                <title>RedExpo | The Future Is Here</title>
                <link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
            </Head>
            <Header />
            {
                props.children
            }
        </>
    )
}

export default WebWrapper