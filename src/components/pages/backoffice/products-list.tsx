import React from 'react';


import { System, BackofficePage, GET_PRODUCTS_URL, USER_SESSION_COOKIE } from '../../../const'
import { Product, EMPTY_PRODUCT } from "../../../structs/product";
import {ProductCard} from "./product-card";
import {getCookie} from "../../../cookies-utils";


export interface ProductsListProps {
    setPage: React.Dispatch<React.SetStateAction<BackofficePage>>;
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


    React.useEffect(() => {
        fetch(GET_PRODUCTS_URL, {method: 'GET', headers: {
            authorization: "Bearer " + getCookie(USER_SESSION_COOKIE),
        }}).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    }, []);

    return (<div>
        { products.length > 0 ? products.map((product, index) => <ProductCard key={index} setPage={setPage}  product={product} setProduct={setProduct}/>) : "No products in the system! "}
    </div>);
};