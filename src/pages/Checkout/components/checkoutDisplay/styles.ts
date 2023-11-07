import styled from "styled-components"

export const Title = styled.h3`
    font-family: ${(props) => props.theme['title-letter']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 1rem 0;
`

export const AddressWrapper = styled.div`
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
    margin-bottom: 0.75rem;

    svg {
        color: ${(props) => props.theme['yellow-500']};
    }
`

export const CheckoutHeader = styled.div`
    display: flex;
    margin-bottom: 2rem;

    svg {
        font-size: 1.375rem;
    }

    div {
        margin-left: 0.5rem;
    }

    p:first-child {
        color: ${(props) => props.theme['gray-800']};
    }

    p:last-child {
        font-size: 0.875rem;
    }
`

export const Error = styled.p`
    color: ${(props) => props.theme['red-500']};
    padding: 0.5rem 0.125rem;
`

export const AddressFieldsWrapper = styled.div`
    input {
        background-color: ${(props) => props.theme['gray-300']};
        padding: 0.75rem;
        border: 1px solid ${(props) => props.theme['gray-400']};
        border-radius: 6px;
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-700']};
        width: 100%;

        &:focus {
            border: 1px solid ${(props) => props.theme['yellow-600']};
        }

        &::placeholder {
            color: ${(props) => props.theme['gray-600']};
        }
    }
`

const AddressLine = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
`

export const FirstLine = styled(AddressLine)`
    div:first-child {
        width: 35.7%;
    }

    @media (max-width: 500px) {
        div:first-child {
            width: 100%;
        }
    }
`

export const SecondLine = styled(AddressLine)`
    div:first-child {
        width: 100%;
    }
`

export const ThirdLine = styled(AddressLine)`
    label {
        color: ${(props) => props.theme['gray-600']};
        position: absolute;
        padding: calc(0.75rem + 1px);
        border-radius: 0 6px 6px 0;
        border-left: none;
        font-size: 0.875rem;
        width: 5rem;
        cursor: text;
        font-style: italic;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    div:first-child {
        width: 35.7%;
        margin-right: 0.75rem;
    }

    div:last-child {
        width: calc(100% - 35.7% - 0.75rem);
    }

    @media (max-width: 500px) {
        display: block;

        div:first-child {
            width: 100%;
            margin-right: 0;
            margin-bottom: 1rem;
        }

        div:last-child {
            width: 100%;
        }
    }
`

export const FourthLine = styled(AddressLine)`
    div:first-child {
        width: 35.7%;
        margin-right: 0.75rem;
    }

    div {
        width: calc(100% - 35.7% - 60px - 1.5rem);
    }

    div:last-child {
        width: 60px;
        margin-left: 0.75rem;
    }

    @media (max-width: 500px) {
        display: block;

        div:first-child {
            width: 100%;
            margin-right: 0;
            margin-bottom: 1rem;
        }

        div {
            width: 100%;
            margin-bottom: 1rem;
        }

        div:last-child {
            width: 100%;
            margin-left: 0;
            margin-bottom: 0;
        }
    }
`

export const PaymentWrapper = styled.div`
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
`

export const PaymentOptionWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0.75rem;
    line-height: 1.6;

    @media (max-width: 500px) {
        grid-template-columns: auto;
    }

    @media (min-width: 500px) {
        grid-template-columns: auto auto;
    }

    @media (min-width: 615px) {
        grid-template-columns: auto auto auto;
    }
`

export const PaymentOption = styled.div`
    label {
        display: flex;
        padding: 1rem;
        border: 1px solid ${(props) => props.theme['gray-400']};
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-800']};
        border-radius: 6px;
        cursor: pointer;
        align-items: center;
        height: 100%;
    }

    svg {
        color: ${(props) => props.theme['purple-500']};
        font-size: 1rem;
    }

    &:has(input[type="radio"]:checked) > label {
        background-color: ${(props) => props.theme['purple-400']};
        color: ${(props) => props.theme['gray-700']};
        border: 1px solid ${(props) => props.theme['purple-500']};
    }

    input {
        display: none;
    }

    span {
        margin-left: 0.75rem;
        font-size: 0.75rem;
    }
`