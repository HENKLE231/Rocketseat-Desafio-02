import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: grid;
    grid-template-columns: auto min-content;
    gap: 3.5rem;
    padding: 5.75rem 0;
    justify-content: center;

    h1 {
        font-size: 3rem;
        font-family: ${(props) => props.theme['title-letter']};
        font-weight: 800;   
        margin-bottom: 1rem;
        color: ${(props) => props.theme['gray-900']};
    }

    p {
        font-size: 1.25rem;
        color: ${(props) => props.theme['gray-800']};
    }

    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 880px) {
        display: block;
        text-align: center;
        padding: 0;
    }
`

export const TextWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    gap: 3.75rem;
`

export const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1.25rem 2.5rem;
`

export const Feature = styled.div`
    display: grid;
    grid-template-columns: min-content auto;
    gap: 0.75rem;
    align-items: center;

    p {
        color: ${(props) => props.theme['gray-700']};
        font-size: 1rem;
    }

    svg {
        font-size: 1rem;
    }
`

const Round = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['white']};
`

export const DarkYellowCircle = styled(Round)`
    background: ${(props) => props.theme['yellow-600']};
`

export const YellowCircle = styled(Round)`
    background: ${(props) => props.theme['yellow-500']};
`

export const GrayCircle = styled(Round)`
    background: ${(props) => props.theme['gray-700']};
`

export const PurpleCircle = styled(Round)`
    background: ${(props) => props.theme['purple-500']};
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    @media (max-width: 576px) {
        img {
            width: 100%;
        }
    }
    /* ADAPTAÇÕES DE RESOLUÇÃO */
    @media (max-width: 880px) {
        margin-top: 2rem;
    }
`