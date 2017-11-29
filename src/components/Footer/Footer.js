import React from "react";
import "./Footer.css"


export default (props) => (
    <footer class="footer">
        <p class="footer__text">{props.content.text}</p>
    </footer>
);