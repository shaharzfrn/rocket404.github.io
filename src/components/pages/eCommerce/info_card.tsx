import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, ECommercePage, } from '../../../const'
import { Product, EMPTY_PRODUCT } from "../../../structs/product";

import './eCommerce.css'

export interface InfoCardProps {

    setPage: React.Dispatch<React.SetStateAction<ECommercePage>>;
    product: Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductCard: React.FC<InfoCardProps> = ({
    setPage,
    product,
    setProduct,
}) => {

    const info_page = () => {
        setPage(ECommercePage.INFO_PAGE);
        setProduct(product);
    };

    return (
    <div className="info_card">
        <div className='img'>
            {/* need to enable image for the product*/}
        </div>
        <div className='product_data'>
            <h3>{ product.name }</h3>
            <h3>{ product.price }</h3>
            <h3>{ product.category }</h3>
        </div>
        <div>
            <button onClick={info_page} > click </button>
        </div>

    </div>);
};