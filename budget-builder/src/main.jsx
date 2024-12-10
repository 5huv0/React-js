import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Build from './components/Build.jsx'
import Build1 from './components/Build1.jsx'
import Build2 from './components/Build2.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='build' element={<Build/>}/>
      <Route path='build1' element={<Build1/>}/>
      <Route path='build2' element={<Build2/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
