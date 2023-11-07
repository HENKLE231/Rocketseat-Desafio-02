import logo from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import {
    HeaderContainer,
    NavInfoWrapper,
    LocaleWrapper,
    ButtonWrapper,
    ShoppingCartProductsAmount
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext'

export function Header() {
    const { shoppingCart } = useContext(ShopContext)
    const totalAmount = shoppingCart.length > 0 ?
    shoppingCart.reduce((totalAmount, productAmount) => totalAmount + productAmount.amount, 0) :
    0
    
    return (
        <HeaderContainer>
            <NavLink to='/' title='Home' >
                <img src={logo} alt="" />
            </NavLink>
            <NavInfoWrapper>
                <LocaleWrapper>
                    <MapPin weight='fill'/>
                    <span>Porto Alegre, RS</span>
                </LocaleWrapper>
                <NavLink to='/Checkout' title='Carrinho' style={{textDecoration: 'none'}}>
                    <ButtonWrapper>
                        <button>
                            <ShoppingCart weight='fill' />
                            {
                                totalAmount > 0 &&
                                    <ShoppingCartProductsAmount>
                                        {totalAmount}
                                    </ShoppingCartProductsAmount>
                            }
                        </button>
                    </ButtonWrapper>
                </NavLink>
            </NavInfoWrapper>
        </HeaderContainer>
    )
}