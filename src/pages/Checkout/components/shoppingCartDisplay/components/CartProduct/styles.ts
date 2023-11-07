import styled from "styled-components";

export const CoffeeCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;

    div:first-child {
        display: flex;

        img {
            width: 4rem;
            height: 4rem;
            margin-right: 1.25rem;
        }
    }

    @media (max-width: 485px) {
        display: block;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;

    @media (max-width: 380px) {
        display: block;
    }
`

export const InfoWrapper = styled.div`
    p {
        color: ${(props) => props.theme['gray-800']};
        margin-bottom: 0.5rem;
    }
`

export const Counter = styled.div`
    width: fit-content;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};
    gap: 0.25rem;
    height: fit-content;
    overflow: hidden;
    margin-right: 0.5rem;

    svg {
        font-size: 0.875rem;
    }

    div:first-child {
        padding: 0.375rem 0 0.375rem 0.625rem;
    }

    div:last-child {
        padding: 0.375rem 0.625rem 0.375rem 0;
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
        padding: 0.625rem 0.25rem;
        color: ${(props) => props.theme['gray-900']};
        font-size: 1rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`

export const RemoveButton = styled.div`
    display: grid;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    align-items: center;
    line-height: 1rem;
    grid-template-columns: min-content auto;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};
    font-size: 0.75rem;
    cursor: pointer;

    svg {
        font-size: 1rem;
        color: ${(props) => props.theme['purple-500']};
    }

    &:hover {
        background-color: ${(props) => props.theme['gray-500']};

        svg {
            color: ${(props) => props.theme['purple-600']};
        }
    }

    @media (max-width: 485px) {
        margin-top: 0.5rem;
    }
`

export const Price = styled.div`
    font-weight: bold;

    @media (max-width: 485px) {
        margin-top: 1rem;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 1.5rem 0;
    background-color: ${(props) => props.theme['gray-400']};
`
