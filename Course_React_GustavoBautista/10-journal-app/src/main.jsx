import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { JournalApp } from './journalApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
)
