import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import { LayoutContainer, HeaderSpace } from "./styles"

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <HeaderSpace />
            <Outlet />
        </LayoutContainer>
    )
}