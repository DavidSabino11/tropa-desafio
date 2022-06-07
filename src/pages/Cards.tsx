/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import girlCard from '../image/girlCard.svg'
import '../styles/pages/cards.css'

function Cards() {
    return (
        <div className="row">
            <div className="card1">
                <img src={girlCard} alt="" />

                <h2>Lorem Ipsum is simply dummy text of the printing and typesettin...</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesettin.</h3>
            </div>
        </div>
    );
}

export default Cards;