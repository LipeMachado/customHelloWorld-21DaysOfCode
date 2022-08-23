import { createGlobalStyle } from "styled-components";

import SuperStar from './Assets/Fonts/SuperStar.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: SuperStar;
        src: url(${SuperStar});
    }

    :root {
        --background: #0e091b;
        --white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: SuperStar;
    }
`;