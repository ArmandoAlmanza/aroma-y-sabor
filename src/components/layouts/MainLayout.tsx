import { Outlet } from "react-router-dom";
import Header from "../generals/Header";
import Footer from "../generals/Footer";
const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
