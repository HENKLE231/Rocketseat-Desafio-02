import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default'
import { ShopContextProvider } from './contexts/ShopContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShopContextProvider>
          <Router />
        </ShopContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
