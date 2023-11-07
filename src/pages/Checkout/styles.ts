import styled from "styled-components";

export const CheckoutWrapper = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: calc(60% - 2rem) 40%;
    
    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 1060px) {
        grid-template-columns: 100%;
    }
`