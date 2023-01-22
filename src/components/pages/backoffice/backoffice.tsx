import React from 'react';

import {BackofficePage, System} from '../../../const'

import {EMPTY_PRODUCT, Product} from "../../../structs/product";

import {ProductsList} from './products-list'
import { RemoveProduct } from './remove-product'

export interface BackofficeProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
}

export const Backoffice: React.FC<BackofficeProps> = ({
    setSystem,
}) => {

    const [page, setPage] = React.useState<BackofficePage>(BackofficePage.PRODUCTS_PAGE);
    const [product, setProduct] = React.useState<Product>(EMPTY_PRODUCT);
    const [products, setProducts] = React.useState<Product[]>([]);
//
//    useEffect(() => {
//        fetch(GET_PRODUCTS_URL, {method: 'GET', headers: {
//            authorization: "Bearer " + getCookie(USER_SESSION_COOKIE),
//        }}).then((response) => response.json()).then((data) => {
//            setProducts(data);
//        });
//    }, []);


    switch(page) {
        case BackofficePage.PRODUCTS_PAGE:
            return <ProductsList setPage={setPage} setProduct={setProduct} products={products} setProducts={setProducts}/>
        case BackofficePage.EDIT_PRODUCT_PAGE:
            return (<div> Edit Product {product.name} </div>);
        case BackofficePage.REMOVE_PRODUCT_PAGE:
            return <RemoveProduct product={product} products={products} setProducts={setProducts} setPage={setPage} />
        default:
                return (<div> Default </div>);
    }


};