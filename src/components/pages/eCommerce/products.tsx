import React from 'react';


import { GET_PRODUCTS_URL, USER_SESSION_COOKIE, ECommercePage, AuthPage } from '../../../const'
import { Product } from "../../../structs/product";
import {ProductCard} from "./product_card";
import {deleteCookie, getCookie} from "../../../cookies-utils";
import "./eCommerce.css";


export interface ProductsListProps {
    setPage: React.Dispatch<React.SetStateAction<any>>;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;

    products: Product[];

    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsList: React.FC<ProductsListProps> = ({
    setPage,
    setProduct,
    products,
    setProducts,
}) => {

    const logout = () => {
        deleteCookie(USER_SESSION_COOKIE);
        setPage(AuthPage.LOGIN_PAGE);
    }

    React.useEffect(() => {
        fetch(GET_PRODUCTS_URL, {method: 'GET', headers: {
            authorization: "Bearer " + getCookie(USER_SESSION_COOKIE),
        }}).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    }, []);
    return (
    <div>
        <button className='submit' onClick={logout}> logout </button>
        <br /><br />
        { products.length > 0 ? products.map((product, index) => 
        <div className='product_list'>
            <ProductCard key={index} setPage={setPage}  product={product} setProduct={setProduct}/>
            <br />
        </div>
        ) : "No products in the system! "}
    </div>
    );
};