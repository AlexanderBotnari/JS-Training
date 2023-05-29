import * as ShopingCart from "./shopping-cart.js";
import { price, cart } from "./shopping-cart.js";

ShopingCart.addToCart('pantaloni', 2);
ShopingCart.addToCart('cofta', 3);
console.log(price);
console.log(cart);


//Metoda veche de module
// const ShopingCart = (function(){
//     const cart = [];

//     const addToCart = function (product, quantity){
//         cart.push(product, quantity);
//         console.log(`In carta s-a adaugat ${product} in cantitatea de ${quantity} bucati`);
//     }

//     const price = 200;
    
//     return {
//         addToCart,
//         cart,
//     }
// })();

// ShopingCart.addToCart('apelisini', 3);
// console.log(ShopingCart.cart);

//Common.js - sistem de module in node js
    // export.addToCart = function (product, quantity){
    //         cart.push(product, quantity);
    //         console.log(`In carta s-a adaugat ${product} in cantitatea de ${quantity} bucati`);
    //     }

    // const { addToCart } = require('./shopping-cart.js');

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart : [
        {product: 'mere', quantity: 3},
        {product: 'pere', quantity: 2},
    ],
    user : {loggedIn: true},
};

const stateCopy = Object.assign({}, state);
const stateDeepCopy = cloneDeep(state);
 
state.user.loggedIn = false;
console.log(stateCopy);
console.log(stateDeepCopy);


//Polyfilling
Promise.resolve("Testing").then(value => console.log(value));

import 'core-js/stable';

//Polyfilling async functions
import 'regenerator-runtime/runtime';
