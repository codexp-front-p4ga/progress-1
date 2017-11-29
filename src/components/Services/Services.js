import React from "react";

import "./Services.css"

export default (props) => (
    <section className="services">
        <div className="services__title">
            <h1>{props.content.title}</h1>
        </div>
        <div className="services__content">
            <div className="services__content__group">
                <div className="services__content__group__icons-1">
                    <img className="services__icon" src={props.content.iconPliers} alt="pliers"/>
                    <img className="services__icon" src={props.content.iconFlower} alt="flower"/>
                </div>
                <div className="services__content__group__icons-2">
                    <img className="services__icon" src={props.content.iconBug} alt="bug"/>
                    <img className="services__icon" src={props.content.iconTools} alt="tools"/>
                </div>
            </div>
                <div className="services__content__phone">
                    <img src={props.content.phone} alt="mobile phone"/>
                </div>
            <div className="services__content__group">     
                <div className="services__content__group__icons-3">
                    <img className="services__icon" src={props.content.iconTombstone} alt="tombstone"/>
                    <img className="services__icon" src={props.content.iconNotebook} alt="notebook"/>
                </div>
                <div className="services__content__group__icons-4">
                    <img className="services__icon" src={props.content.iconGear} alt="machine gear"/>
                    <img className="services__icon" src={props.content.iconLeaf} alt="leaf"/>
                </div>
            </div>
        </div>
    </section>
);