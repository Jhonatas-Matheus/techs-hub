import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
    /* BackGround Color:*/
    --back-ground-color: #121214;
    /* Primary Palette: */
    --color-primary : #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
    /* Grey Scale Palette: */
    --grey-four: #121214;
    

    --grey-three:#212529;
    --grey-two: #343b41;
    --grey-one: #868e96;
    --grey-zero: #f8f9fa;
    /* Feedback Palette: */
    --color-sucess: #3fe864;
    --color-negative: #e83f5b ;
    /* Buttons Colors: */
    --btn-primary: #ff577f;
    --btn-primary-hover: #FF427F;

    --btn-disable: #59323F;

    --btn-secundary: #868E96;
    --btn-secundary-hover: #343B41;

    --btn-default: #212529;
    --btn-default-hover: #868E96;
    
    --btn-text-color: #ffffff;
    --text-color: #ffffff;
 }
 .light-mode:root{
   /* BackGround Color:*/
   --back-ground-color: #f8f9fa;
    /* Primary Palette: */
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
    /* Grey Scale Palette: */
    --grey-four: #121214;
    --grey-three:#212529;
    --grey-two: #343b41;
    --grey-one: #868e96;
    --grey-zero: #f8f9fa;
    /* Feedback Palette: */
    --color-sucess: #3fe864;
    --color-negative: #e83f5b ;
    /* Buttons Colors: */
    --btn-primary: #ff577f;
    --btn-primary-hover: #FF427F;

    --btn-disable: #59323F;

    --btn-secundary: #868E96;
    --btn-secundary-hover: #343B41;

    --btn-default: #212529;
    --btn-default-hover: #868E96;
    
    --btn-text-color: #ffffff;
 }
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
*{
    box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    .App{
        width: 100vw;
        height: 100vh;
        line-height: 1;
        background-color: var(--back-ground-color);
        
    }
    font-family: 'Inter', sans-serif;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;
