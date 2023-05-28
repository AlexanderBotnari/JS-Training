export const cart = [];

export const addToCart = function (product, quantity){
    cart.push(product, quantity);
    console.log(`In carta s-a adaugat ${product} in cantitatea de ${quantity} bucati`);
}

const price = 200;
export {price};