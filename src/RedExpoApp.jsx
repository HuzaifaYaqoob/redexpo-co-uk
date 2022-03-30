
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";




const RedExpoApp = () => {
    return (
        <>
            <BrowserRouter>
                <div className="bg-[#0B1120]">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default RedExpoApp