import { ProductType } from "./reducers" 

export enum ActionTypes {
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT'
}

export function createProductAction(product: ProductType) {
    return {
        type: ActionTypes.CREATE_PRODUCT,
        product
    }
}

export function editProductAction(product: ProductType) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product
    }
}

export function deleteProductAction(product: ProductType) {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        product
    }
}