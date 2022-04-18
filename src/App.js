import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from "./components/NavBar";

//app组件主要配置路由
const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
            </Routes>
        </>
    );
};

export default App;
