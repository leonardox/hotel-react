import React from "react";
import Intro from "../intro/Intro"
import About from "../about/About"
import Galery from "../galery/Galery"
import Contact from "../contact/Contact"
import Board from "../board/Board"
import Tours from "../tours/Tours"
import Values from "../values/Values"
import Login from "../login/Login"
import PrivateRoute from "./PrivateRouter"

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" element={
                <div>
                    <Intro />
                    {/* <Board /> */}
                    <About />
                    <Galery />
                    <Values />
                    <Tours />
                    <Contact />
                </div>
            } />
            <Route exact path="/editar-valores" element={<PrivateRoute />} />
            <Route exact path="/admin" element={<Login />} />
        </Routes>
    </BrowserRouter>);

}

export default Router