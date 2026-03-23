import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'

const redirect = sessionStorage.getItem('redirect')

if (redirect) {
  sessionStorage.removeItem('redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')!).render(<App />)