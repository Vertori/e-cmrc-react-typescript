import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductProvider from './contexts/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<ProductProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
</ProductProvider>

)
