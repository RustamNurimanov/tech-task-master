import styled from 'styled-components'

import forest from './assets/background/forest.png'

export const StyledBackground = styled.main`
    display: flex;
    justify-content: center;
    background-image: url(${forest});
    background-color: black;
    height: fit-content;
    min-height: 100dvh;
    width: 100dvw;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`
