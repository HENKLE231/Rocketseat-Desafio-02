import styled from "styled-components"; 

export const MenuWrapper = styled.div`
    padding: 2rem 0;

    h3 {
        font-family: ${(props) => props.theme['title-letter']};
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme['gray-800']};
    }
`

export const MenuHeader = styled.header`
    margin-bottom: 3.375rem;
    display: flex;
    justify-content: space-between;
    
    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 880px) {
        display: block;
        text-align: center;

        h3 {
            margin: 1rem;
        }
    }
`

export const FilterWrapper = styled.div`
    display: flex;
    height: min-content;
    justify-content: center;

    input {
        display: none;
    }

    label {
        font-size: 0.625rem;
        height: fit-content;
        font-weight: 700;
        color: ${(props) => props.theme['yellow-600']};
        border: 1px solid ${(props) => props.theme['yellow-500']};
        border-radius: 100px;
        padding: 0.375rem 0.75rem;
        cursor: pointer;

        &:has(input[type="checkbox"]:checked) {
            color: ${(props) => props.theme['white']};
            background-color: ${(props) => props.theme['yellow-500']};
            border: 1px solid ${(props) => props.theme['yellow-600']};
        }
    }

    label:first-child {
        margin-left: 0;
    }
    
    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 576px) {
        display: block;

        label {
            display: block;
            width: 100%;
            /* margin-left: 0; */
            /* margin-bottom: 0.5rem; */
            font-size: 0.875rem;
        }
    }
`

export const Category = styled.div`
    margin-left: 0.5rem;

    @media (max-width: 576px) {
        width: 100%;
        margin-left: 0;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }
`

export const ProductList = styled.div`
    display: grid;
    gap: 2.5rem 2rem;
    
    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 576px) {
        grid-template-columns: auto;
    }
    @media (min-width: 577px) {
        grid-template-columns: auto auto;
    }

    @media (min-width: 880px) {
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 1050px) {
        grid-template-columns: auto auto auto auto;
    }
`