import { OrderType } from './reducers'

export enum ActionTypes {
    CREATE_ORDER = 'CREATE_ORDER'
}

export function createOrderAction(order: OrderType) {
    return {
        type: ActionTypes.CREATE_ORDER,
        order: order
    }
}