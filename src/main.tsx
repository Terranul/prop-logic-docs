import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Redirection from './routes.tsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Redirection />
    </BrowserRouter>
  </StrictMode>,
)
