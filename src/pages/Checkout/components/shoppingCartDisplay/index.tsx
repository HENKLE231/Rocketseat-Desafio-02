import {
    Title,
    ItemsWrapper,
    PricesWrapper,
    Subtotal,
    Total,
    ConfirmationButton
} from './styles'
import { useContext } from 'react'
import { ShopContext } from '../../../../contexts/ShopContext'
import { CartProduct } from './components/CartProduct'

export function ShoppingCartDisplay() {
    const { shoppingCart, formatToPrice, deliveryFee, getShoppingCartSubtotal } = useContext(ShopContext)

    const subtotal = getShoppingCartSubtotal()
    const total = subtotal + deliveryFee
    const isConfirmationButtonDisabled = subtotal == 0

    return (
        <div>
            <Title>Cafés selecionados</Title>
            <ItemsWrapper>
                {
                    shoppingCart.map((productAndAmount) => {
                        return (
                            <div key={productAndAmount.product.id}>
                                <CartProduct
                                    product={productAndAmount.product}
                                    amount={productAndAmount.amount}
                                />
                            </div>
                        )
                    })
                }
                <PricesWrapper>
                    <Subtotal>
                        <span>Total de itens</span>
                        <span>{formatToPrice(subtotal)}</span>
                    </Subtotal>
                    <Subtotal>
                        <span>Entrega</span>
                        <span>{formatToPrice(deliveryFee)}</span>
                    </Subtotal>
                    <Total>
                        <span>Total</span>
                        <span>{formatToPrice(total)}</span>
                    </Total>
                </PricesWrapper>
                <ConfirmationButton type='submit' disabled={isConfirmationButtonDisabled}>CONFIRMAR PEDIDO</ConfirmationButton>
            </ItemsWrapper>
        </div>
    )
}