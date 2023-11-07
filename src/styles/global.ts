import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing: antialiased;
        font-family: ${(props) => props.theme['text-letter']};
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
    }
`