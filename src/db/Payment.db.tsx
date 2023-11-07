import {
    ReactNode
} from 'react'
import {
    CreditCard,
    Bank,
    Money,
} from '@phosphor-icons/react'

export const deliveryFee = 3.5

export interface PaymentOptionType {
    option: string,
    icon: ReactNode
}

export const paymentOptionInfo: PaymentOptionType[] = [
    {
        option: 'CARTÃO DE CRÉDITO',
        icon: <CreditCard />
    },
    {
        option: 'CARTÃO DE DÉBITO',
        icon: <Bank />
    },
    {
        option: 'DINHEIRO',
        icon: <Money />
    },
]