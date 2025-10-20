import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import FrontendLayout from './pages/FrontendLayout.jsx'
import Shop from './pages/shop/Shop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
           <Route path="/"  />
           <Route path="/shop" element={<Shop />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
