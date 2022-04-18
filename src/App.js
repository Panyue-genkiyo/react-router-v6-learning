import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";

//app组件主要配置路由
const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='order-summary' element={<OrderSummary/>}/>
            </Routes>
        </>
    );
};

export default App;
