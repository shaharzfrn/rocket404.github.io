import React from 'react';

import { System, BackofficePage, USER_SESSION_COOKIE, DELETE_PRODUCT_URL, ECommercePage, AuthPage, } from '../../../const'
import { deleteCookie } from '../../../cookies-utils';
import { Product, EMPTY_PRODUCT } from "../../../structs/product";
import { Cart } from './cart_page';

import './eCommerce.css'
import { ProductsList } from './products';

export interface ProductCardProps {

    setPage: React.Dispatch<React.SetStateAction<any>>;
    product: Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductInfo: React.FC<ProductCardProps> = ({
    setPage,
    product,
    setProduct,
}) => {

    const logout = () => {
        deleteCookie(USER_SESSION_COOKIE);
        setPage(AuthPage.LOGIN_PAGE);
    }

    let qua = 0;
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        qua = parseInt(e.target.value);
    }

    return (
    <>
        <button className='submit' onClick={logout}> logout </button>
        <br />
        <div className="product-card">
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            {/* <img src={ product.image } alt="Image" /> */}
            <input type="number" name="quantity" placeholder="Quantity" inputMode='numeric' max={ product.stock } onChange={handler}/>
            <button className='submit' onClick={() => {
                    return <Cart setPage={setPage} products={[product]} quantity={qua} />
                }}>
                Add Product To Shopping Cart!
            </button>
        </div>    
    </>
    );
};