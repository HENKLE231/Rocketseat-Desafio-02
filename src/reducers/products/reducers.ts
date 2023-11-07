import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface ProductType {
    id: string
    img: string
    categories: string[]
    name: string
    description: string
    price: number
}

interface ProductsState {
    products: ProductType[]
}

interface ProductsAction {
    type: string,
    product: ProductType
}

export function productsReducer(
    state: ProductsState,
    action: ProductsAction
) {
    switch (action.type) {
        case ActionTypes.CREATE_PRODUCT: {
            return produce(state, (draft) => {
              draft.products.push(action.product)
            })
        }
        case ActionTypes.EDIT_PRODUCT: {
            const currentProductIndex = state.products.findIndex((product) => {
                return product.id === action.product.id
            })
      
            if (currentProductIndex < 0) {
                return state
            }
      
            return produce(state, (draft) => {
                draft.products[currentProductIndex] = action.product
            })
        }
        case ActionTypes.DELETE_PRODUCT: {
            const currentProductIndex = state.products.indexOf(action.product)
      
            if (currentProductIndex < 0) {
                return state
            }
      
            return produce(state, (draft) => {
                draft.products.splice(currentProductIndex, 1)
            })
        }
        default: {
            return state
        }
    }
}