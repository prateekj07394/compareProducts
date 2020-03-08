import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListings';
import {data} from './data';
const App = () => {

    return (
        <div>
            <Navbar />
            <div className="wrapper">
            <ProductListing data={data}/>
            </div>
        </div>
    )
}

export default App;