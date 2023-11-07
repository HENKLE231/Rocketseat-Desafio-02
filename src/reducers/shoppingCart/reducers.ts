import { produce } from 'immer'
import { ActionTypes } from './actions'
import { ProductType } from '../products/reducers'

export interface ProductAndAmount {
    product: ProductType,
    amount: number
}

interface ShoppingCartState {
    shoppingCart: ProductAndAmount[]
}

interface ShoppingCartPayload {
    product: ProductType,
    amount?: number
}

interface ShoppingCartAction {
    type: string,
    payload?: ShoppingCartPayload
}

export function shoppingCartReducer(
    state: ShoppingCartState,
    action: ShoppingCartAction
) {
    const product = action.payload?.product
    const amount = action.payload?.amount ? action.payload.amount : 1
    const currentProductAndAmountIndex = state.shoppingCart.findIndex(
        (productAndAmount) => productAndAmount.product.id == product?.id
    )
    const isProductInShoppingCart = currentProductAndAmountIndex >= 0

    switch (action.type) {
        case ActionTypes.ADD_PRODUCT: {
            if (!product) {
                return state
            }

            return isProductInShoppingCart ?
                increaseProductAmountInShoppingCart(
                    state,
                    amount,
                    currentProductAndAmountIndex
                ) :
                addProductToShoppingCart(
                    state,
                    product,
                    amount
                )
        }
        case ActionTypes.DECREASE_PRODUCT_AMOUNT: {
            if (!isProductInShoppingCart) {
                return state  
            }

            const amountLeft = state.shoppingCart[currentProductAndAmountIndex].amount - amount

            return amountLeft > 0 ?
                decreaseProductAmountInShoppingCart(
                    state,
                    amount,
                    currentProductAndAmountIndex
                ) :
                removeProductFromShoppingCart(state, currentProductAndAmountIndex)
        }
        case ActionTypes.REMOVE_PRODUCT: {
            return removeProductFromShoppingCart(state, currentProductAndAmountIndex)
        }
        case ActionTypes.CLEAR_SHOPPING_CART : {
            return produce(state, (draft) => {
                draft.shoppingCart = []
            })
        }
        default: {
            return state
        }
    }
}

function addProductToShoppingCart(state: ShoppingCartState, product: ProductType, amount: number) {
    const newProductAndAmount = {
        product: product,
        amount: amount
    }

    return produce(state, (draft) => {
      draft.shoppingCart.push(newProductAndAmount)
    })
}

function increaseProductAmountInShoppingCart(state: ShoppingCartState, amount: number, currentProductAndAmountIndex: number) {
    return produce(state, (draft) => {
        draft.shoppingCart[currentProductAndAmountIndex].amount += amount
    })
}

function decreaseProductAmountInShoppingCart(state: ShoppingCartState, amount: number, currentProductAndAmountIndex: number) {
    return produce(state, (draft) => {
        draft.shoppingCart[currentProductAndAmountIndex].amount -= amount
    })
}

function removeProductFromShoppingCart(state: ShoppingCartState, currentProductAndAmountIndex: number) {
    return produce(state, (draft) => {
        draft.shoppingCart.splice(currentProductAndAmountIndex, 1)
    })
}

export function getSubtotal(state: ShoppingCartState) {
    const subtotal = state.shoppingCart.length > 0 ?
    state.shoppingCart.reduce((totalAmount, productAmount) => totalAmount + (productAmount.amount * productAmount.product.price), 0) :
    0
    return subtotal
}