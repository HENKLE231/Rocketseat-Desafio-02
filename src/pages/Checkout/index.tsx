import { CheckoutWrapper } from "./styles"
import { ShoppingCartDisplay } from "./components/shoppingCartDisplay"
import { CheckoutDisplay } from "./components/checkoutDisplay"
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react"
import { ShopContext } from "../../contexts/ShopContext"
import { OrderType } from "../../reducers/orders/reducers"

export function Checkout () {
    const {
        createOrder,
        shoppingCart,
        deliveryFee,
        getShoppingCartSubtotal,
    } = useContext(ShopContext)

    const orderValidationSchema = zod.object({
        zipCode: zod.string().min(1, 'Informe o CEP.').length(9, 'O CEP deve possuir 9 dígitos.'),
        street: zod.string().min(1, 'Informe a rua.'),
        number: zod.coerce.number({
            required_error: "Informe o número.",
            invalid_type_error: "Informe apenas números."
        }).min(1, 'Informe o número'),
        neighborhood: zod.string().min(1, 'Informe o bairro.'),
        complement: zod.string(),
        city: zod.string().min(1, 'Informe a cidade.'),
        federatedState: zod.string().min(1, 'Informe a unidade federativa.').length(2, 'Unidade federativa inválida.'),
        payment: zod.string().min(1, 'Escolha uma forma de pagamento.')
    })
  
    type OrderFormData = zod.infer<typeof orderValidationSchema>
  
    const orderForm = useForm<OrderFormData>({
      resolver: zodResolver(orderValidationSchema),
      defaultValues: {
        zipCode: '',
        street: '',
        neighborhood: '',
        complement: '',
        city: '',
        federatedState: '',
        payment: ''
      },
    })
  
    const { handleSubmit, reset } = orderForm

    function handleConfirmOrder(data: OrderFormData) {
        const address = {
            zipCode: data.zipCode,
            street: data.street,
            number: data.number,
            neighborhood: data.neighborhood,
            complement: data.complement,
            city: data.city,
            federatedState: data.federatedState,
        }
        const total = getShoppingCartSubtotal() + deliveryFee
        const payment = {
            form: data.payment,
            deliveryFee: deliveryFee,
            total: total
        }
        const order: OrderType = {
            address: address,
            shoppingCart: shoppingCart,
            payment: payment
        }
        createOrder(order)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(handleConfirmOrder)}>
            <FormProvider {...orderForm}>
                <CheckoutWrapper>
                    <CheckoutDisplay />
                    <ShoppingCartDisplay />
                </CheckoutWrapper>
            </FormProvider>
        </form>
    )
}