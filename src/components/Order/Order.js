import React from "react";
import "./Order.css";


export default (props) => (


    <section className="order">
        <div className="order___entreprise">
            <h3>{props.empresa.nome}</h3>
            <span>{props.empresa.endereco}</span>
            <h3>Prepared for {props.vendedor.nome_vendedor}</h3>
        </div>
        <div className="order__details">
            <h3>Estimate</h3>
            <h3>Progress</h3>
            <span>Vehicule</span>
            <span>2010 Mini</span>
        </div>
        <div className="order__description">
            <table>
                <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>

                <tr>
                    <td>{props.service[0].description}</td>
                    <td>{props.service[0].qty}</td>
                    <td>{props.service[0].price}</td>
                    <td>{props.service[0].amount}</td>

                </tr>

                <tr>
                    <td>{props.service[1].description}</td>
                    <td>{props.service[1].qty}</td>
                    <td>{props.service[1].price}</td>
                    <td>{props.service[1].amount}</td>

                </tr>
                

                <tr>
                    <td>{props.service[2].description}</td>
                    <td>{props.service[2].qty}</td>
                    <td>{props.service[2].price}</td>
                    <td>{props.service[2].amount}</td>

                </tr>

                <tr>
                    <td>{props.service[3].description}</td>
                    <td>{props.service[3].qty}</td>
                    <td>{props.service[3].price}</td>
                    <td>{props.service[3].amount}</td>

                </tr>


            </table>
        </div>
        <div className="order__submit">
            <button> approve </button>
            <button> decline </button>
        </div>
    </section>
);