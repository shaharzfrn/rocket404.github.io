import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, ECommercePage, GET_PRODUCT_URL, AuthPage, } from '../../../const'
import { deleteCookie, getCookie } from '../../../cookies-utils';
import { Product, EMPTY_PRODUCT } from "../../../structs/product";
import { CartCard } from './cart_card';

import './eCommerce.css'
import { ProductInfo } from './info_page';
import { ProductsList } from './products';

export interface CartProps {

    setPage: React.Dispatch<React.SetStateAction<any>>;
    products: Product[];
    quantity: number;
}

export const Cart: React.FC<CartProps> = ({
    setPage,
    products,
    quantity,
}) => {

    const logout = () => {
        deleteCookie(USER_SESSION_COOKIE);
        setPage(AuthPage.LOGIN_PAGE);
    }
    const checkout = () => {
        setPage(ECommercePage.THANK_YOU_PAGE)
        //NEED TO MOVE TO PAYMENT PAGE
    }
    let total = 0;
    return (
    <>
        <button className='submit' onClick={logout}> logout </button>
        <br />
        { products.length > 0 ? products.map((product, index) => 
            <CartCard key={index} setPage={setPage} product={product} quantity={quantity} />) : "Your cart is empty! "}

        { 
            products.length > 0 ? 
            <>
                {products.map((product, index) => total += product.price)}
                <div className='checkout_box'>
                    Total Price: {total}
                    <button className='submit' onClick={checkout}>Checkout</button>
                </div>
            </>
            :
            <div className='checkout_box'>
                Total Price: 0
            </div>
        }
    </>
    );
};