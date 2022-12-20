import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';


export default function Main(props) {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/stocks/:symbol" element={<Stock />} />
                <Route path="/stocks" element={<Dashboard />} />
            </Routes>
        </main>
    );
}

