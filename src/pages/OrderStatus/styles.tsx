import styled from "styled-components";

export const Header = styled.header`
    margin-bottom: 2.5rem;
    margin-top: 4.625rem;

    h3 {
        color: ${(props) => props.theme['yellow-600']};
        font-family: ${(props) => props.theme['title-letter']};
        font-weight: 800;
        font-size: 2rem;
    }

    p {
        color: ${(props) => props.theme['gray-800']};
        font-size: 1.25rem;
    }
    
    @media (max-width: 880px) {
        text-align: center;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 880px) {
        display: block;
    }
`

export const InfoWrapper = styled.div`
    padding: 2.5rem;
    max-width: 32.875rem;
    width: 100%;
    display: grid;
    gap: 2rem;
    position: relative;
    background: ${(props => props.theme['gray-100'])};
    background-clip: padding-box;
    border: solid transparent;
    border-radius: 6px 36px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: linear-gradient(to right, ${(props) => props.theme['yellow-500']}, ${(props) => props.theme['purple-500']});
    }

    @media (max-width: 576px) {
        padding: 1rem;
    }
    
    @media (max-width: 880px) {
        margin: auto;
    }
`

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;

    div:first-child {
        margin-right: 0.75rem;
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

export const PurpleCircle = styled(Round)`
    background: ${(props) => props.theme['purple-500']};
`

export const YellowCircle = styled(Round)`
    background: ${(props) => props.theme['yellow-500']};
`

export const DarkYellowCircle = styled(Round)`
    background: ${(props) => props.theme['yellow-600']};
`

export const ImgWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    img {
        width: 100%;
        max-width: 30.75rem;
    }
`
