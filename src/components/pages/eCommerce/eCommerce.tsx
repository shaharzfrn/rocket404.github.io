import React from 'react';

import {AuthPage, ECommercePage, System} from '../../../const'

import {EMPTY_PRODUCT, Product} from "../../../structs/product";
import { Cart } from './cart_page';
import { ProductsList } from './products';


export interface eCommerceProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
}

export const ECommerce: React.FC<eCommerceProps> = ({
    setSystem,
}) => {
    const [page, setPage] = React.useState<ECommercePage>(ECommercePage.PRODUCTS_PAGE);
    const [product, setProduct] = React.useState<Product>(EMPTY_PRODUCT);
    const [products, setProducts] = React.useState<Product[]>([]);

    switch(page) {
        case ECommercePage.PRODUCTS_PAGE:
            return <ProductsList setPage={setPage} setProduct={setProduct} products={products} setProducts={setProducts}/>
        case ECommercePage.THANK_YOU_PAGE:
            return (<div>
                Thank You For Your Purchase!
            </div>)
        default:
                return (<div> Default </div>);
    }


};