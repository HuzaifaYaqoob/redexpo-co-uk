
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages 
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";




const RedExpoApp = () => {
    return (
        <>
            <BrowserRouter>
                <div className="bg-[#0B1120] min-h-screen">
                    <Header />
                    <div className="z-0 relative">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/contact-us" element={<ContactUsPage />} />
                            <Route path="/about-us" element={<AboutUsPage />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default RedExpoApp