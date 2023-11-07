import {
    Title,
    AddressWrapper,
    CheckoutHeader,
    Error,
    AddressFieldsWrapper,
    FirstLine,
    SecondLine,
    ThirdLine,
    FourthLine,
    PaymentWrapper,
    PaymentOptionWrapper,
    PaymentOption
} from './styles'
import { useFormContext } from 'react-hook-form'
import { useRef, useLayoutEffect, useContext } from 'react'
import {
    MapPinLine,
    CurrencyDollar
} from '@phosphor-icons/react'
import { ShopContext } from '../../../../contexts/ShopContext'

export function CheckoutDisplay() {
    const { paymentOptionInfo } = useContext(ShopContext)
    const { register, formState: { errors }, watch } = useFormContext()
    const complementDiv = useRef<HTMLDivElement>(null)

    function setLabelMargin() {
        if (complementDiv.current) {
            const label = complementDiv.current.children[1] as unknown as HTMLElement
            const labelWidth = label.clientWidth
            label.style.marginLeft = - labelWidth + 'px'
        }
    }

    // Atribui posicionamento ao label
    useLayoutEffect(() => {setLabelMargin()}, [])
    window.addEventListener('load', setLabelMargin);
    window.addEventListener('resize', setLabelMargin);

    const complement = watch('complement')
    
    useLayoutEffect(() => {
        if (complementDiv.current) {
            const label = complementDiv.current.children[1] as unknown as HTMLElement
            if (complement) {
                label.style.display = 'none'
            } else {
                label.style.display = 'inline-block'
            }
        }
    }, [complement])

    return (
        <div>
            <Title>Complete seu pedido</Title>
            <AddressWrapper>
                <CheckoutHeader>
                    <MapPinLine />
                    <div>
                        <p>Endereço de Entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </CheckoutHeader>
                <AddressFieldsWrapper>
                    <FirstLine>
                        <div>
                            <input type="text" placeholder='CEP' {...register('zipCode')} />
                            {errors.zipCode && <Error>{String(errors.zipCode.message)}</Error>}
                        </div>
                    </FirstLine>
                    <SecondLine>
                        <div>
                            <input type="text" placeholder='Rua' {...register('street')} />
                            {errors.street && <Error>{String(errors.street.message)}</Error>}
                        </div>
                    </SecondLine>
                    <ThirdLine>
                        <div>
                            <input type="number" placeholder='Número' {...register('number')} />
                            {errors.number && <Error>{String(errors.number.message)}</Error>}
                        </div>
                        <div ref={complementDiv}>
                            <input
                                type="text"
                                id='complement'
                                placeholder='Complemento'
                                {...register('complement')}
                            />
                            <label htmlFor='complement' style={{display: 'inline-block'}}>Opcional</label>
                        </div>
                    </ThirdLine>
                    <FourthLine>
                        <div>
                            <input type="text" placeholder='Bairro' {...register('neighborhood')} />
                            {errors.neighborhood && <Error>{String(errors.neighborhood.message)}</Error>}
                        </div>
                        <div>
                            <input type="text" placeholder='Cidade' {...register('city')} />
                            {errors.city && <Error>{String(errors.city.message)}</Error>}
                        </div>
                        <div>
                            <input type="text" placeholder='UF' {...register('federatedState')} />
                            {errors.federatedState && <Error>{String(errors.federatedState.message)}</Error>}
                        </div>
                    </FourthLine>
                </AddressFieldsWrapper>
            </AddressWrapper>
            <PaymentWrapper>
                <CheckoutHeader>
                    <CurrencyDollar  />
                    <div>
                        <p>Pagamento</p>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </CheckoutHeader>
                <PaymentOptionWrapper>
                    {
                        paymentOptionInfo.map((paymentOption) => {
                            return (
                                <PaymentOption key={paymentOption.option}>
                                    <input
                                        type="radio"
                                        id={paymentOption.option}
                                        {...register('payment')}
                                        value={paymentOption.option}
                                    />
                                    <label htmlFor={paymentOption.option}>
                                        {paymentOption.icon}
                                        <span>{paymentOption.option}</span>
                                    </label>
                                </PaymentOption>
                            )
                        })
                    }
                </PaymentOptionWrapper>
                {errors.payment && <Error>{String(errors.payment.message)}</Error>}
            </PaymentWrapper>
        </div>
    )
}