/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from '../image/logo.svg'
import '../styles/pages/dashboard.css'
import { AiOutlineRead, AiOutlineStock, AiOutlineHome } from 'react-icons/ai'
import Cards from "./Cards";

function Dashboard() {
    return (
        <div id="page-dash">
            <aside>
                <header>
                    <img src={logo} alt="" />

                    <ul className="menu">
                        <li><a id="button" href=""><AiOutlineHome className="icon"></AiOutlineHome>Inicio</a></li>
                        <li><a id="button" href=""><AiOutlineRead className="icon"></AiOutlineRead>Contato</a></li>
                        <li><a id="button" href=""><AiOutlineStock className="icon"></AiOutlineStock>Relatório</a></li>
                    </ul>
                </header>
            </aside>

            <div id="page-pr">
                <h1>Olá Usuário</h1>
                <hr></hr>
                <Cards></Cards>
            </div>
        </div>
    );
}

export default Dashboard;