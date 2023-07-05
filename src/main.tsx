import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductProvider from './contexts/ProductContext.tsx'
import SidebarProvider from './contexts/SidebarContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SidebarProvider>
<ProductProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
</ProductProvider>
</SidebarProvider>
)
