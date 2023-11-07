import { useContext, useState } from 'react'
import { MenuWrapper } from "./styles"
import {
    MenuHeader,
    FilterWrapper,
    ProductList,
    Category
} from "./styles"
import { MenuProduct } from "./components/MenuProduct"
import { ShopContext } from '../../../../contexts/ShopContext'
import { ProductType } from '../../../../reducers/products/reducers'

export function Menu() {
    const { products, categoriesList } = useContext(ShopContext)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products)

    function handleSelectCategory(category: string) {
        const newSelectedCategories = selectedCategories

        selectedCategories.includes(category) ?
            newSelectedCategories.splice(selectedCategories.indexOf(category), 1) :
            newSelectedCategories.push(category)
        
        setSelectedCategories(newSelectedCategories)
        
        const currentSelectedCategories = newSelectedCategories.length > 0 ? newSelectedCategories : categoriesList

        setFilteredProducts(
            products.filter(
                (product) => {
                    for (const category of product.categories) {
                        if (currentSelectedCategories.includes(category)) {
                            return true
                        }
                    }
                    return false
                }
            )
        )
    }

    return (
        <MenuWrapper>
            <MenuHeader>
                <h3>Nossos cafés</h3>
                <FilterWrapper>
                    {
                        categoriesList.map((category) => {
                           return (
                                <Category key={category}>
                                    <label htmlFor={category}>
                                        <input
                                            type="checkbox"
                                            id={category}
                                            value={category}
                                            defaultChecked={selectedCategories.includes(category)}
                                            onChange={() => handleSelectCategory(category)}
                                        />
                                        {category}
                                    </label>
                                </Category>
                           )
                        })
                    }
                </FilterWrapper>
            </MenuHeader>
            <ProductList>
                {
                    filteredProducts.map(
                        (product) => {
                            return <MenuProduct product={product} key={product.id} />
                        }
                    )
                }
            </ProductList>
        </MenuWrapper>
    )
}