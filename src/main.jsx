// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from './AboutMe.jsx'
import Home from './Home.jsx'
import Skills from './Skills.jsx'
import Portfolio from './Portfolio.jsx'
import Blog from './Blog.jsx'
import Contacts from './Contacts.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router= createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:'/about me',
    element:<AboutMe/>
  },
  {
    path:'/skills',
    element:<Skills/>
  },
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/portfolio',
    element:<Portfolio/>
  },
  {
    path:'/contact',
    element:<Contacts/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
