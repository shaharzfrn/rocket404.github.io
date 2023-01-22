import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, ECommercePage, GET_PRODUCT_URL, } from '../../../const'
import { getCookie } from '../../../cookies-utils';
import { Product, EMPTY_PRODUCT } from "../../../structs/product";

import './eCommerce.css'
import { ProductInfo } from './info_page';
import { ProductsList } from './products';

export interface CartCardProps {

    setPage: React.Dispatch<React.SetStateAction<ECommercePage>>;
    product: Product;
    quantity: number;
}

export const CartCard: React.FC<CartCardProps> = ({
    setPage,
    product,
    quantity,
}) => {

    return (
    <div className="cart-card">        
        <h3>{product.name} {quantity} {quantity * product.price}</h3>
        <button className='remove_product' onClick={() => {
        }}> X </button>
    </div>
    );
};