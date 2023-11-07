import coffeeIntro from '../../../../assets/coffee-intro.svg'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import {
    IntroWrapper,
    TextWrapper,
    FeaturesWrapper,
    Feature,
    DarkYellowCircle,
    YellowCircle,
    GrayCircle,
    PurpleCircle,
    ImgWrapper
} from './styles'

export function Intro() {
    return (
        <IntroWrapper>
            <TextWrapper>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <FeaturesWrapper>
                    <Feature>
                        <DarkYellowCircle>
                            <ShoppingCart weight='fill' />
                        </DarkYellowCircle>
                        <p>Compra simples e segura</p>
                    </Feature>
                    <Feature>
                        <GrayCircle>
                            <Package weight='fill' />
                        </GrayCircle>
                        <p>Embalagem mantém o café intacto</p>
                    </Feature>
                    <Feature>
                        <YellowCircle>
                            <Timer weight='fill' />
                        </YellowCircle>
                        <p>Entrega rápida e rastreada</p>
                    </Feature>
                    <Feature>
                        <PurpleCircle>
                            <Coffee weight='fill' />
                        </PurpleCircle>
                        <p>O café chega fresquinho até você</p>
                    </Feature>
                </FeaturesWrapper>
            </TextWrapper>
            <ImgWrapper>
                <img src={coffeeIntro} alt="" />
            </ImgWrapper>
        </IntroWrapper>
    )
}