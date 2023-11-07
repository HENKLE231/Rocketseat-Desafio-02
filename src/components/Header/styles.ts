import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0rem;
    position: fixed;
    max-width: 72rem;
    width: calc(100% - 2rem);
    background-color: ${(props) => props.theme['gray-100']};
`

export const NavInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.75rem;
`

export const LocaleWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 4px;
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${(props) => props.theme['purple-400']};
    color: ${(props) => props.theme['purple-500']};

    svg {
        font-size: 1.375rem;
    }

    span {
        color: ${(props) => props.theme['purple-600']};
        font-size: 0.875rem;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    border-radius: 6px;
    overflow: hidden;

    button {
        line-height: 0;
        border: 0;
        background-color: ${(props) => props.theme['yellow-400']};
        color: ${(props) => props.theme['yellow-600']};
        padding: 0.5rem;
        border-radius: 6px;
        cursor: pointer;
    }

    svg {
        font-size: 1.375rem;
    }
`

export const ShoppingCartProductsAmount = styled.div`
    height: fit-content;
    width: fit-content;
    position: absolute;
    padding: 0.125rem 0.375rem;
    line-height: 1rem;
    font-size: 0.875rem;
    font-weight: bold;
    margin-left: 1.375rem;
    margin-top: -2.5rem;
    border-radius: 1000px;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['yellow-600']};
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`