import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomThemeProvider } from './ThemeContext.jsx'
import './index.css'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faEnvelope)

createRoot(document.getElementById('root')).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
)
