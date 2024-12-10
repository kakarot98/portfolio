import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/education/Education.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/education',
      element: <Education />,
    },
    {
      path: '/experience',
      element: <Experience />,
    },
    {
      path: '/skills',
      element: <Skills />,
    }
  ]
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
