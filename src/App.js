import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import FlexiblePlatform from "./components/FlexiblePlatform/FlexiblePlatform";
import Order from "./components/Order/Order";


var empresa = {
nome:'EuroTech Motors, LLC',
endereco: '555. Water Town Court, Holland, MI 49242'
};
var vendedor = { nome_vendedor:'Jake Montgomery'};

var pedido = '#18801934';
var progress_code = '3110556';

var veiculo = {
    ano:'2010',
    modelo: 'Mini Cooper S',
    milhas:'31.209',
    VIN:'000193HHAAO1I345'
};
var service = [{
    description: "Tensioner",
    qty: 1,
    price: 45.00,
    amount: 45.00
}, {
    description: "Oil Filter",
    qty: 1,
    price: 103.00,
    amount: 103.00
}, {
    description: "Bilstein 5100 Shocks",
    qty: 4,
    price: 200.00,
    amount: 800.00
}, {
    description: "Labor (per hour)",
    qty: 14,
    price: 70.00,
    amount: 980.00
}];

var resultado = {
    subtotal: (service[0].amount + service[1].amount + service[2].amount + service[3].amount),
    tax: 115.68,
    total: function(){
     return this.subtotal + this.tax;   
    } 
}

export default () => (
  <div className="App">
    <Hero />
    <Features />
    <Order  empresa={empresa} vendedor={vendedor} service={service} resultado={resultado} />
    <Services />
  </div>
);