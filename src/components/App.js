import React from 'react';
import stockData from './stock-data';
import Header from './Header';
import Main from './Main';

export default function App(props) {
    return (
        <div>
            <Header />
            <Main stockData={stockData} />
        </div>
    );
}


