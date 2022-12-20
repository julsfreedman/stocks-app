import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="nav">
            <div className="nav-item"><span className="nav-logo"><Link to="/">iStocks</Link></span></div>
            <div className="nav-item"><Link to="/stocks"><h3>Stocks</h3></Link></div>
            <div className="nav-item"><Link to="/about"><h3>About</h3></Link></div>
        </div>
    );
}
