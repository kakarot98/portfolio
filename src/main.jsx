import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Education from './components/education/Education.jsx'
import Experience from './components/experience/Experience.jsx'
import Skills from './components/skills/Skills.jsx'
import Project from './components/projects/Project.jsx'
import FunZone from './components/funzone/FunZone.jsx';

const router = createBrowserRouter([{
  path: '/portfolio',
  element: <App />,
  children: [
    {
      path: '',
      element: <About/>,
    },
    {
      path: 'education',
      element: <Education />,
    },
    {
      path: 'experience',
      element: <Experience />,
    },
    {
      path: 'skills',
      element: <Skills />,
    },
    {
      path: 'project',
      element: <Project />,
    },
    { path: 'funzone', element: <FunZone /> }
  ]
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
