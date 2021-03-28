import React from "react";
import Header from "./Header";


const Layout = ({children}) => {

    return (
        <div>
            <Header siteTitle="Default Starter" />
            {children}
        </div>
    );
};

export default Layout;
