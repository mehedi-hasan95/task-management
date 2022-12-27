import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import NavMenu from "../NavMenu/NavMenu";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
