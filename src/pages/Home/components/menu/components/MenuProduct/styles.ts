import styled from "styled-components";

export const MenuProductWrapper = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 6px 36px;
    padding: 0 1.25rem 1.25rem 1.25rem;
    text-align: center;

    h3 {
        font-size: 1.25rem;
        font-family: ${(props) => props.theme['title-letter']};
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const ImgFrame = styled.div`
    width: fit-content;
    margin: auto;

    img {
        width: 7.5rem;
        width: 7.5rem;
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`

export const CategoryWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 0.25rem;
    justify-content: center;
    margin-bottom: 1rem;
`

export const Category = styled.span`
width: fit-content;
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-600']};
    background-color: ${(props) => props.theme['yellow-400']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
`

export const ProductDescription = styled.p`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['gray-600']};
`

export const Price = styled.p`
    font-size: 0.875rem;

    span {
        margin-left: 0.25rem;
        font-family: ${(props) => props.theme['title-letter']};
        font-size: 1.5rem;
        font-weight: 800;
    }
`

export const ActionWrapper = styled.div`
    display: flex;
`

export const Counter = styled.div`
    display: grid;
    grid-template-columns: min-content auto min-content;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};
    gap: 0.25rem;
    height: fit-content;
    overflow: hidden;

    div:first-child {
        padding-left: 0.5rem;
    }

    div:last-child {
        padding-right: 0.5rem;
    }

    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${(props) => props.theme['purple-500']};
    }

    div:hover {
        color: ${(props) => props.theme['purple-600']};
    }

    span {
        padding: 0.5325rem 0.25rem;
        color: ${(props) => props.theme['gray-900']};
        font-size: 1rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    svg {
        font-size: 1rem;
    }
`

export const BuyButton = styled.button`
    background-color: ${(props) => props.theme['purple-600']};
    color: ${(props) => props.theme['white']};
    border: 0;
    line-height: 0;
    height: fit-content;
    padding: 0.5rem;
    border-radius: 6px;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme['purple-500']};
    }

    svg {
        font-size: 1.375rem;
    }
`

