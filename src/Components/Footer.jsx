import React from "react";
import  ReactDOM  from "react-dom/client";
import "../public/styles.css";

function Footer()
{
    const year = new Date().getFullYear();
    return <footer className="footer">Copyright @ {year}</footer>
}

export default Footer;