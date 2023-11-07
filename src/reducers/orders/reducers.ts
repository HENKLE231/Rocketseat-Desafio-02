import { produce } from 'immer'
import { ActionTypes } from './actions'
import { ProductAndAmount } from '../shoppingCart/reducers'

interface Address {
    zipCode: string,
    street: string,
    number: number,
    complement: string,
    neighborhood: string,
    city: string,
    federatedState: string,
}

interface Payment {
    form: string,
    deliveryFee: number,
    total: number
}

export interface OrderType {
    address: Address,
    shoppingCart: ProductAndAmount[]
    payment: Payment,
}

interface OrdersState {
    orders: OrderType[]
}

interface OrdersAction {
    type: string,
    order: OrderType
}

export function ordersReducer(
    state: OrdersState,
    action: OrdersAction
) {
    switch (action.type) {
        case ActionTypes.CREATE_ORDER: {
            return produce(state, (draft) => {
                draft.orders.push(action.order)
            })
        }
        default: {
            return state
        }
    }
}