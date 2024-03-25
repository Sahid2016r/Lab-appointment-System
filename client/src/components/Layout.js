import React from "react";
import '../styles/DocStyles.css';




export const Layout = ({children}) =>{
    return(
    <>
    <div  className="main">
        <div className="layout">
            <div className="sidebar">
                <div className="logo">logo</div>
                <div className="menu">menu</div>
            </div>
            <div className="content">
                <div className="headers">Header</div>
                <div className="body">{children}</div>

            </div>
        </div>
    </div>
    </>
    );
};
export  default Layout