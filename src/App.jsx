import { useState } from "react"
import HomePage from "./HomePage"
import LandingPage from "./LandingPage"
import { CustomThemeProvider } from "./ThemeContext"
import { NotificationProvider } from "./NotificationSystem"
import "./App.css"

function App() {
  const [showApp, setShowApp] = useState(false)

  const handleGetStarted = () => {
    setShowApp(true)
  }

  return (
    <>
      <CustomThemeProvider>
        <NotificationProvider>
          {!showApp ? (
            <LandingPage onGetStarted={handleGetStarted} />
          ) : (
            <HomePage />
          )}
        </NotificationProvider>
      </CustomThemeProvider>
    </>
  )
}

export default App
