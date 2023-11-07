import {
    CoffeeCard,
    Counter,
    InfoWrapper,
    ButtonsWrapper,
    RemoveButton,
    Price,
    Divider
} from './styles'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { ProductType } from "../../../../../../reducers/products/reducers"
import { useContext, useState} from 'react'
import { ShopContext } from "../../../../../../contexts/ShopContext"

interface CartProductProps {
    product: ProductType
    amount: number
}

export function CartProduct({product, amount}: CartProductProps) {
    const [productAmount, setProductAmount] = useState(amount);
    const {
        addProductToShoppingCart,
        decreaseProductAmountFromShoppingCart,
        removeProductFromShoppingCart,
        formatToPrice
    } = useContext(ShopContext)

    function handleDecreaseProductAmount() {
        if (productAmount > 1) {
            setProductAmount((state) => {
                return state - 1
            })
            decreaseProductAmountFromShoppingCart(product, 1)
        }
    }

    function handleIncreaseProductAmount() {
        setProductAmount((state) => {
            return state + 1
        })
        addProductToShoppingCart(product, 1)
    }

    function handleRemoveProduct() {
        removeProductFromShoppingCart(product)
    }

    const productPrice = (product.price * amount)

    return (
        <div>
            <CoffeeCard>
                <div>
                    <img src={product.img} alt="" />
                    <InfoWrapper>
                        <p>{product.name}</p>
                        <ButtonsWrapper>
                            <Counter>
                                <div onClick={handleDecreaseProductAmount} title='Reduzir quantidade'>
                                    <Minus />
                                </div>
                                <span>{productAmount}</span>
                                <div onClick={handleIncreaseProductAmount} title='Aumentar quantidade'>
                                    <Plus />
                                </div>
                            </Counter>
                            <RemoveButton onClick={handleRemoveProduct}>
                                <Trash />
                                <span>REMOVER</span>
                            </RemoveButton>
                        </ButtonsWrapper>
                    </InfoWrapper>
                </div>
                <Price>
                    {formatToPrice(productPrice)}
                </Price>
            </CoffeeCard>
            <Divider />
        </div>
    )
}