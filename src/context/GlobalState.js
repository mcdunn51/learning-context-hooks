import React, { useState, useReducer } from 'react';

import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = props => {
    // can have as many states as you want, if you have things that don't update together then it makes sense to have different states
    const products = [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ];

    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    const addProductToCart = product => {
        dispatch({type: ADD_PRODUCT, product : product})
    }

    const removeProductFromCart = product => {
        dispatch({type: REMOVE_PRODUCT, productId : product})
    }

    return (
        <ShopContext.Provider value={{
            products: products,
            cart: cartState.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default GlobalState;