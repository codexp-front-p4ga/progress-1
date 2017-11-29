import React from "react";
import "./FlexiblePlatform.css";

export default (props) => (
<section className="flexible-platform">
        <h3 className="flexible-platform__title">{props.content.title}</h3>
        <p className="flexible-platform__text">
        {props.content.text}
        </p>
        <form action="" className="form">
            <input type="email" name="email" id="email" className="form__input" placeholder="Add your email address"/>
            <button type="submit" className="form__button">{props.content.buttonText}</button>
        </form>

        <div class="twitter">
            <p class="twitter__text">
            
            {props.content.twitterText} <a className="twitter__link" href="">{props.content.twitter}</a>
            </p>
        </div>
</section>
);