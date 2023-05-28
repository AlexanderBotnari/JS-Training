import * as ShopingCart from "./shopping-cart.js";
import { price, cart } from "./shopping-cart.js";

ShopingCart.addToCart('pantaloni', 2);
ShopingCart.addToCart('cofta', 3);
console.log(price);
console.log(cart);