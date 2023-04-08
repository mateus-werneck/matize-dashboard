'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Agrandir";
        src: url("/fonts/Agrandir-Regular.otf");
        font-style: normal;
       
    }
:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --black: #000000;
    --blue: #6933FF;
    
    --pink-50: #FFF5F7;
    --pink-80: #FFF5F7;
    --pink-150: #fce1f4;
    --pink-200: #FBB6CE;
    --pink-300:#F687B3;
    --pink-400:#ED64A6;
    --pink-500:#D53F8C;
    --pink-600: #B83280;
    --purple-100: #E9D8FD;


    --white: #FFFFFF;
    --light-gray: #F0F0F4;
    --gray-light: #aab2bd;
    --gray-lighter: #e8eff4;
    --gray-lightest: #e6e9ed;
    --gray-20: #ededf0;
    --gray-50: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-500: #5B5B66;
    --gray-700: #29292e;
    --gray-800: #1f2729;
    --gray-900: #121214;

   
    --cyan-500: #61dafb;
    --yellow-580: #eba417;
    
    
    //Matize Colors
    --orange-100: #e68937;
    --orange-200: #d6591e;
    --green-100: #bccd32;
    --pink-100: #d152a4;
    --purple-200: #824575;
    --purple-150: #926cb8;
    --blue-100: #324498;



    @media(max-width: 1280px) {
        html {
            font-size:87.5%;
        }
    }
    @media(max-width: 1920px) {
        html {
            font-size:93.75%;
        }
    }
    
    
}
* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size:18px;
    letter-spacing: 1.5px;
}
body {
    background: var(--gray-50);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, select, button {
    font-family: "Agrandir", "Montserrat", sans-serif;
}
input, select, textarea{
    font-size: 0.8rem;
    text-indent: 0.4rem;
    border: 1px solid var(--pink-200);
    box-shadow: none;
    &:focus {
        outline: none !important;
        border: 1px solid var(--pink-300);
        box-shadow: none;
    }
    &::placerholder {
        color: gray;
    }
}
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button {
        opacity: 1;
        -webkit-appearance: none;
        -moz-appearance: textfield;
}
button {
    cursor:pointer;
    
    transition: filter 0.2;
    
    &::hover{
        filter: brightness(0.7);
    }
}
a {
    text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
`;
