import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import CounterProvider from "./components/CounterContextApi";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CounterProvider>
    </Provider>
  </StrictMode>
)
