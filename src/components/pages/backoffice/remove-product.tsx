import React from 'react';

import { BackofficePage, DELETE_PRODUCT_URL } from '../../../const'
import { Product, EMPTY_PRODUCT } from "../../../structs/product";
import {  } from "../../../cookies-utils";

export interface RemoveProductProps {
    product: Product;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setPage: React.Dispatch<React.SetStateAction<BackofficePage>>;
}

export const RemoveProduct: React.FC<RemoveProductProps> = ({
    product,
    products,
    setProducts,
    setPage,
}) => {
    const remove_product = () => {
        fetch(DELETE_PRODUCT_URL + product.id, {method: 'DELETE'}).then((response) => response.json()).then((data) => {
            setProducts(products.filter(function(value, index, arr){return value.id === product.id;}));
            setPage(BackofficePage.PRODUCTS_PAGE);
        });
    };

    React.useEffect(remove_product);
    return null;
};


