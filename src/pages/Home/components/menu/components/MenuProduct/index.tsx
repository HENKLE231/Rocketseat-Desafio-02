import { ShoppingCart, Minus, Plus } from '@phosphor-icons/react'
import { useState, useContext } from 'react';
import {
    MenuProductWrapper,
    ImgFrame,
    CategoryWrapper,
    Category,
    ProductDescription,
    Price,
    ActionWrapper,
    Counter,
    BuyButton
} from './styles';
import { ProductType } from '../../../../../../reducers/products/reducers'; 
import { ShopContext } from '../../../../../../contexts/ShopContext';

interface MenuProductProps {
    product: ProductType
}

export function MenuProduct({product}: MenuProductProps) {
    const [productAmount, setProductAmount] = useState(1);
    const { addProductToShoppingCart } = useContext(ShopContext)

    function handleDecreaseProductAmount() {
        if (productAmount > 1) {
            setProductAmount((state) => {
                return state - 1
            })
        }
    }

    function handleIncreaseProductAmount() {
        setProductAmount((state) => {
            return state + 1
        })
    }

    function handleAddProductToShoppingCart() {
        addProductToShoppingCart(product, productAmount)
    }

    const productPrice = String(product.price.toFixed(2)).replace('.', ',')

    return (
        <MenuProductWrapper>
            <ImgFrame>
                <img src={product.img} alt={product.name} />
            </ImgFrame>
            <CategoryWrapper>
                {product.categories.map((category) => {
                    return <Category key={category}>{category}</Category>
                })}
            </CategoryWrapper>
            <h3>{product.name}</h3>
            <ProductDescription>
                {product.description}
            </ProductDescription>
            <footer>
                <Price>
                    R$
                    <span>{productPrice}</span>
                </Price>
                <ActionWrapper>
                    <Counter>
                        <div onClick={handleDecreaseProductAmount} title='Reduzir quantidade'>
                            <Minus />
                        </div>
                        <span>{productAmount}</span>
                        <div onClick={handleIncreaseProductAmount} title='Aumentar quantidade'>
                            <Plus />
                        </div>
                    </Counter>
                    <BuyButton onClick={handleAddProductToShoppingCart} title='Adicionar ao carrinho'>
                        <ShoppingCart weight='fill' />
                    </BuyButton>
                </ActionWrapper>
            </footer>
        </MenuProductWrapper>
    )
}