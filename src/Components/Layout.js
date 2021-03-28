import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {

    return (
        <div className={"App--container"}>
            <Header />
            <main className={"Main--container"}>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;
