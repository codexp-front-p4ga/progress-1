import React from "react";

import "./Features.css"

export default (props) => (
    <section className="section-feature">
        <article className="feature">
            <div className="description">
                <h2>{props.content.title1}</h2>
                <p>{props.content.description1}</p>
            </div>
            <img src={props.content.image1} alt="chat feature" />
            <div className="description">
                <h2>{props.content.title2}</h2>
                <p>{props.content.description2}</p>
            </div>
        </article>
        <article className="feature">
            <img src={props.content.image2} alt="chat feature" />
            <div className="description">
                <h2>{props.content.title3}</h2>
                <p>{props.content.description3}</p>
            </div>
        </article>
    </section>
);
