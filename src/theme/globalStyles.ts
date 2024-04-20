import { createGlobalStyle } from "styled-components";

import Media from "../responsive/Media";
export const GlobalStyles = createGlobalStyle`
    
    :root {
        color:${({ theme }) => theme.text.W100};
        font-size: 16px;
        ${Media.mobile}{
            font-size: 14px;
        }
    }
    body, html {
        font-family: 'Lato Medium', sans-serif;
        font-weight: normal;
    }
 
`;
