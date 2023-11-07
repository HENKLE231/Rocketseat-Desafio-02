import styled from "styled-components";

export const Title = styled.h3`
    font-family: ${(props) => props.theme['title-letter']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 1rem 0;
`

export const ItemsWrapper = styled.div`
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 6px 36px;
    padding: 2.5rem;
    margin-bottom: 2rem;
`

export const PricesWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 0.75rem;
    margin-bottom: 0.875rem;
`

const PriceDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Subtotal = styled(PriceDisplay)`
    span:first-child {
        font-size: 0.875rem;
    }
`

export const Total = styled(PriceDisplay)`
    font-size: 1.25rem;
    font-weight: bold;
`

export const ConfirmationButton = styled.button`
    width: 100%;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
    padding: 0.75rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['white']};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

