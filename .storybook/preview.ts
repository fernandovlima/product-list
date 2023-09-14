import type { Preview } from '@storybook/react'
import GlobalStyles from '../styles/GlobalStyles'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

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
      GlobalStyles
    })
  ]
}

export default preview
