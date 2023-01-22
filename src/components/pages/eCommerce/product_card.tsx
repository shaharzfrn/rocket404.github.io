import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, ECommercePage, GET_PRODUCT_URL, } from '../../../const'
import { getCookie } from '../../../cookies-utils';
import { Product, EMPTY_PRODUCT } from "../../../structs/product";

import './eCommerce.css'
import { ProductInfo } from './info_page';
import { ProductsList } from './products';

export interface ProductCardProps {

    setPage: React.Dispatch<React.SetStateAction<ECommercePage>>;
    product: Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    setPage,
    product,
    setProduct,
}) => {


    function GetProduct(product: Product) {
        React.useEffect(() => {
            fetch(GET_PRODUCT_URL + '/{' + product.id + '}', {method: 'GET', headers: {
                authorization: "Bearer " + getCookie(USER_SESSION_COOKIE),
            }}).then((response) => response.json()).then((data) => {
                setProduct(data);
            });
        }, []);
        return <ProductInfo setPage={setPage} product={product} setProduct={setProduct} />
    }
    return (
    <div className="product-card">
        <h3>{ product.name }</h3>
        <h3>{ product.price }</h3>
        <h3>{ product.category }</h3>
        {/* <img src={ product.image } alt="Image" /> */}
        <button className='submit' onClick={() => {
            GetProduct(product);
        }} > click </button>
    </div>
    );
};