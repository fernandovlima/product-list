'use client'

import { createGlobalStyle, css } from 'styled-components'
const styled = { createGlobalStyle }

export const styles = css`
  /*
      1. Use a more-intuitive box-sizing model.
    */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /*
  2. Remove default margin
*/
  * {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }
  /*
  3. Add accessible line-height
  4. Improve text rendering
*/
  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
  /*
  5. Improve media defaults
*/
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /*
  6. Remove built-in form typography styles
*/
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /*
  7. Avoid text overflows
*/
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
  8. Create a root stacking context
*/
  #root,
  #__next {
    isolation: isolate;
  }
`

const GlobalStyles = styled.createGlobalStyle`
  ${styles}
`

export default GlobalStyles
