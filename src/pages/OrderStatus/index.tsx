import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
    Header,
    Container,
    InfoWrapper,
    InfoBlock,
    PurpleCircle,
    YellowCircle,
    DarkYellowCircle,
    ImgWrapper
} from './styles'
import { useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext'
import MotorcycleCourier from '../../assets/motorcycle-courier.svg'

export function OrderStatus() {
    const { orders, formatAsTitle } = useContext(ShopContext)
    if (orders.length > 0) {
        const lastOrder = orders[orders.length - 1]

        return (
            <div>
                <Header>
                    <h3>Uhu! Peido confirmado</h3>
                    <p>Agora é so aguardar que logo o café chegará até você</p>
                </Header>

                <Container>
                    <InfoWrapper>
                        <InfoBlock>
                            <div>
                                <PurpleCircle>
                                    <MapPin weight="fill" />
                                </PurpleCircle>
                            </div>
                            <div>
                                <p>Entrega em <strong>{formatAsTitle(lastOrder.address.street)}, {lastOrder.address.number}</strong></p>
                                <p>{formatAsTitle(lastOrder.address.neighborhood)} - {formatAsTitle(lastOrder.address.city)}, {lastOrder.address.federatedState.toUpperCase()}</p>
                            </div>
                        </InfoBlock>
                        <InfoBlock>
                            <div>
                                <YellowCircle>
                                    <Timer weight="fill" />
                                </YellowCircle>
                            </div>
                            <div>
                                <p>Previsão de entrega</p>
                                <p><strong>20min - 30min</strong></p>
                            </div>
                        </InfoBlock>
                        <InfoBlock>
                            <div>
                                <DarkYellowCircle>
                                    <CurrencyDollar />
                                </DarkYellowCircle>
                            </div>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><strong>{formatAsTitle(lastOrder.payment.form)}</strong></p>
                            </div>
                        </InfoBlock>
                    </InfoWrapper>
                    <ImgWrapper>
                        <img src={MotorcycleCourier} alt="" />
                    </ImgWrapper>
                </Container>
            </div>
        )
    } else {
        return (
            <h1>Opps! Página não encontrada.</h1>
        )
    }
}