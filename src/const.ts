

export enum System {
    BACKOFFICE_SYSTEM,
    E_COMMERCE_SYSTEM,
    AUTH_SYSTEM,
}

export enum BackofficePage {
    PRODUCTS_PAGE,
    CREATE_PRODUCT_PAGE,
    EDIT_PRODUCT_PAGE,

    ORDERS_PAGE,

    REMOVE_PRODUCT_PAGE,
}


export enum ECommercePage {
    PRODUCTS_PAGE,
    INFO_PAGE,
    CART_PAGE,
    THANK_YOU_PAGE
}




export enum AuthPage {
    LOGIN_PAGE,
    SIGUP_PAGE,
    LOGOUT_PAGE,
    RESET_PAGE,
    UPDATE_PAGE
}


/* =================================================================== */

// systems requirements permissions
export const BACKOFFICE_SYSTEM_REQ_PERMISSIONS  = [];
export const E_COMMERCE_SYSTEM_REQ_PERMISSIONS  = [];
export const AUTH_SYSTEM_REQ_PERMISSIONS        = [];


// Backoffice system pages requirements permissions
export const BACKOFFICE_PRODUCTS_PAGE_REQ_PERMISSIONS = [];
export const BACKOFFICE_CREATE_PRODUCT_PAGE_REQ_PERMISSIONS = [];
export const BACKOFFICE_EDIT_PRODUCT_PAGE_REQ_PERMISSIONS = [];
export const BACKOFFICE_ORDERS_PAGE_REQ_PERMISSIONS = [];


export const USER_SESSION_COOKIE:String = "user-token"


const BASE_USER_URL = "http://localhost:4001/api/";
export const LOGIN_URL              = BASE_USER_URL + "login";
export const SIGNUP_URL             = BASE_USER_URL + "signup";
export const USER_PERMISSIONS_URL   = BASE_USER_URL + "permission";
export const RESET_URL              = BASE_USER_URL + "reset";
export const UPDATE_URL             = BASE_USER_URL + "update";


const BASE_PRODUCT_URL = "http://localhost:4000/api/";
export const GET_PRODUCTS_URL              = BASE_PRODUCT_URL + "product";
export const GET_PRODUCT_URL               = BASE_PRODUCT_URL + "product";
export const DELETE_PRODUCT_URL            = BASE_PRODUCT_URL + "product/";











