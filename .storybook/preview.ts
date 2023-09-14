import type { Preview } from '@storybook/react'
import GlobalStyles, { styles } from '../styles/GlobalStyles'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
    ${styles}
`

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: globalStyles
    })
  ]
}

export default preview
