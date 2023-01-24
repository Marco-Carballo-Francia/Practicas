import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
// import { Medio } from "../../Practices/constPractices";

export const Home = () => {

    return (
        <div >
            <NavBar />
            <Link to={'/medio'}> Practica Medio </Link>
        </div>
    )
} 