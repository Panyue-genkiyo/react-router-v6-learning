import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";

//app组件主要配置路由
const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='order-summary' element={<OrderSummary/>}/>
                <Route path='products' element={<Products/>} >
                    {/*//嵌套路由*/}
                    <Route index element={<FeatureProducts/>}/>
                    <Route path='featured' element={<FeatureProducts/>}/>
                    <Route path='new' element={<NewProducts/>}/>
                </Route>
                {/*当前面所有路由都没有匹配时会匹配path为*的路由*/}
                <Route path='*' element={<NoMatch/>} />
            </Routes>
        </>
    );
};

export default App;
