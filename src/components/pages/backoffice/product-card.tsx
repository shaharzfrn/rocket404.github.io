import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, } from '../../../const'
import { Product, EMPTY_PRODUCT } from "../../../structs/product";

import './backoffice.css'

export interface ProductCardProps {

    setPage: React.Dispatch<React.SetStateAction<BackofficePage>>;
    product: Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    setPage,
    product,
    setProduct,
}) => {

    const update_product = () => {
        setPage(BackofficePage.EDIT_PRODUCT_PAGE);
        setProduct(product);
    };
    const remove_product = () => {
        setProduct(product);
        setPage(BackofficePage.REMOVE_PRODUCT_PAGE);
//        const remove = async () => {
//            const remove_result = fetch(DELETE_PRODUCT_URL, {method: 'DELETE', body: JSON.stringify({id: product.id})});
//
//        };
//        remove();
    };

    return (<div className="product-card">
        <h3>{ product.id }</h3>
        <h3>{ product.name }</h3>
        <h3>{ product.category }</h3>
        <h3>{ product.price }</h3>
        <h3>{ product.stock }</h3>
        <div>
            <button onClick={update_product} > Update </button>
            <button onClick={remove_product} > Remove </button>
        </div>

    </div>);
};