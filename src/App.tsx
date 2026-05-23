import { HomePage } from './pages/HomePage'
import { CorporateEventsBarcelonaPage } from './pages/CorporateEventsBarcelonaPage'

import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')

  if (path === '/corporate-events-barcelona') {
    return <CorporateEventsBarcelonaPage />
  }

  return <HomePage />
}

export default App
