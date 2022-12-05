import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

const container = document.getElementById('app')
const root = createRoot(container)
// eslint-disable-next-line react/jsx-filename-extension
root.render(<App />)
