import React from "react";
import "./Hero.css"

export default (props) => (
    <header className="hero">
        <div>
            <h1 className="hero__title">{props.content.title}</h1>
            <p className="hero__text">
            {props.content.text}
            </p>
        </div>
        <img className="hero__icon" src={props.content.image} alt="Celular com a tela inicial do aplicativo progress"/>
    </header>
);