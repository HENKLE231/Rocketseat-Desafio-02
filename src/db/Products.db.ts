import { v4 } from 'uuid';
import { ProductType } from '../reducers/products/reducers'; 

const imgFolder = 'src/assets/menu-coffees/'
const imgsSource = {
    'Expresso Tradicional': imgFolder + 'expresso.svg',
    'Expresso Americano':   imgFolder + 'americano.svg',
    'Expresso Cremoso':     imgFolder + 'expresso-cremoso.svg',
    'Expresso Gelado':      imgFolder + 'café-gelado.svg',
    'Café com Leite':       imgFolder + 'café-com-leite.svg',
    'Latte':                imgFolder + 'latte.svg',
    'Capuccino':            imgFolder + 'capuccino.svg',
    'Macchiato':            imgFolder + 'macchiato.svg',
    'Mocaccino':            imgFolder + 'mocaccino.svg',
    'Chocolate Quente':     imgFolder + 'chocolate-quente.svg',
    'Cubano':               imgFolder + 'cubano.svg',
    'Havaiano':             imgFolder + 'havaiano.svg',
    'Árabe':                imgFolder + 'árabe.svg',
    'Irlandês':             imgFolder + 'irlandês.svg',
}

export enum Categories {
    TRADICIONAL = 'TRADICIONAL',
    ESPECIAL = 'ESPECIAL',
    COM_LEITE = 'COM LEITE',
    ALCOOLICO = 'ALCOÓLICO',
    GELADO = 'GELADO'
}

export const products: ProductType[] = [
    {
        id: v4(),
        img: imgsSource['Expresso Tradicional'],
        categories: [
            Categories.TRADICIONAL
        ],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Expresso Americano'],
        categories: [
            Categories.TRADICIONAL
        ],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Expresso Cremoso'],
        categories: [
            Categories.TRADICIONAL
        ],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Expresso Gelado'],
        categories: [
            Categories.TRADICIONAL,
            Categories.GELADO
        ],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Café com Leite'],
        categories: [
            Categories.TRADICIONAL,
            Categories.COM_LEITE
        ],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Latte'],
        categories: [
            Categories.TRADICIONAL,
            Categories.COM_LEITE
        ],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Capuccino'],
        categories: [
            Categories.TRADICIONAL,
            Categories.COM_LEITE
        ],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Macchiato'],
        categories: [
            Categories.TRADICIONAL,
            Categories.COM_LEITE
        ],
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Mocaccino'],
        categories: [
            Categories.TRADICIONAL,
            Categories.COM_LEITE
        ],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Chocolate Quente'],
        categories: [
            Categories.ESPECIAL,
            Categories.COM_LEITE
        ],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Cubano'],
        categories: [
            Categories.ESPECIAL,
            Categories.ALCOOLICO,
            Categories.GELADO
        ],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Havaiano'],
        categories: [
            Categories.ESPECIAL
        ],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Árabe'],
        categories: [
            Categories.ESPECIAL
        ],
        name: 'Árabe',
        description: 'Bebida prepara com grãos de café árabe e especiarias',
        price: 9.90,
    },
    {
        id: v4(),
        img: imgsSource['Irlandês'],
        categories: [
            Categories.ESPECIAL,
            Categories.ALCOOLICO
        ],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
    },
]