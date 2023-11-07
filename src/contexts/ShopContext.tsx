import {
    createContext,
    ReactNode,
    useReducer,
    useEffect
} from "react"
import {
    ProductType
} from "../reducers/products/reducers";
import {
    shoppingCartReducer,
    getSubtotal,
    ProductAndAmount,
} from "../reducers/shoppingCart/reducers";
import {
    addProductAction,
    decreaseProductAmountAction,
    removeProductAction,
    clearShoppingCartAction
} from "../reducers/shoppingCart/actions";
import {
    OrderType,
    ordersReducer
} from '../reducers/orders/reducers'
import { createOrderAction } from '../reducers/orders/actions'
import {
    products,
    Categories
} from "../db/Products.db";
import {
    deliveryFee,
    paymentOptionInfo,
    PaymentOptionType
} from "../db/Payment.db";

interface ShopContextType {
    deliveryFee: number,
    products: ProductType[],
    shoppingCart: ProductAndAmount[],
    categoriesList: string[],
    orders: OrderType[],
    paymentOptionInfo: PaymentOptionType[],
    addProductToShoppingCart: (product: ProductType, amount: number) => void,
    decreaseProductAmountFromShoppingCart: (product: ProductType, amount: number) => void,
    removeProductFromShoppingCart: (product: ProductType) => void,
    getShoppingCartSubtotal: () => number,
    formatToPrice: (price: number) => string,
    createOrder: (order: OrderType) => void,
    formatAsTitle: (phrase: string) => string
}

interface ShopContextProviderProps {
    children: ReactNode,
}

export const ShopContext = createContext({} as ShopContextType)

export function ShopContextProvider({
    children
}: ShopContextProviderProps) {
    // const [ProductsState, productsDispatch] = useReducer(
    //     productsReducer,
    //     {products : productsFromDB},
    //     (initialState) => {
    //         const storedStateAsJSON = localStorage.getItem(
    //           '@react-desafio-02:products-state-1.0.0',
    //         )
      
    //         if (storedStateAsJSON) {
    //           return JSON.parse(storedStateAsJSON)
    //         }
      
    //         return initialState
    //     }
    // )
    
    // useEffect(() => {
    //     const stateJSON = JSON.stringify(products)
    //     localStorage.setItem('@react-desafio-02:products-state-1.0.0', stateJSON)
    // }, [])

    const [ShoppingCartState, ShoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            shoppingCart: []
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@react-desafio-02:shopping-cart-state-1.0.0',
            )
      
            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }
      
            return initialState
        }
    )
    
    useEffect(() => {
        const stateJSON = JSON.stringify(ShoppingCartState)
        localStorage.setItem('@react-desafio-02:shopping-cart-state-1.0.0', stateJSON)
    }, [ShoppingCartState])

    const [OrdersState, OrderDispatch] = useReducer(
        ordersReducer,
        {
            orders: []
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@react-desafio-02:orders-state-1.0.0',
            )
        
            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }
            
            return initialState
        }
    )
    
    useEffect(() => {
        const stateJSON = JSON.stringify(OrdersState)
        localStorage.setItem('@react-desafio-02:orders-state-1.0.0', stateJSON)
    }, [OrdersState])

    const categoriesList = Object.values(Categories)
    const shoppingCart = ShoppingCartState.shoppingCart
    const orders = OrdersState.orders

    function addProductToShoppingCart(product: ProductType, amount: number) {
        ShoppingCartDispatch(addProductAction(product, amount))
    }

    function decreaseProductAmountFromShoppingCart(product: ProductType, amount: number) {
        ShoppingCartDispatch(decreaseProductAmountAction(product, amount))
    }

    function removeProductFromShoppingCart(product: ProductType) {
        ShoppingCartDispatch(removeProductAction(product))
    }

    function getShoppingCartSubtotal() {
        return getSubtotal(ShoppingCartState)
    }
    
    function formatToPrice(price: number) {
        return 'R$ ' + String(price.toFixed(2)).replace('.', ',')
    }

    function createOrder(order: OrderType) {
        OrderDispatch(createOrderAction(order))
        ShoppingCartDispatch(clearShoppingCartAction())
        window.location.href = "./OrderStatus";
    }

    function formatAsTitle(phrase: string) {
        return phrase.toLowerCase().split(" ").map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
    }

    return (
        <ShopContext.Provider
            value={{
                deliveryFee,
                products,
                shoppingCart,
                categoriesList,
                orders,
                paymentOptionInfo,
                addProductToShoppingCart,
                decreaseProductAmountFromShoppingCart,
                removeProductFromShoppingCart,
                getShoppingCartSubtotal,
                formatToPrice,
                createOrder,
                formatAsTitle
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}
