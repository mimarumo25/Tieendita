import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body{
    display: flex;
flex-direction: column;
align-items: center;
padding: 40px;

position: static;
width: 100%;
left: 0px;
top: 88px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
}
`

export default GlobalStyle
