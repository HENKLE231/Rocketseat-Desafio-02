import { ProductType } from "../products/reducers" 

export enum ActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    CLEAR_SHOPPING_CART = 'CLEAR_SHOPPING_CART'
}

export function addProductAction(product: ProductType, amount: number) {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            product,
            amount
        }
    }
}

export function decreaseProductAmountAction(product: ProductType, amount: number) {
    return {
        type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
        payload: {
            product,
            amount
        }
    }
}

export function removeProductAction(product: ProductType) {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: {
            product,
        }
    }
}

export function clearShoppingCartAction() {
    return {
        type: ActionTypes.CLEAR_SHOPPING_CART
    }
}
