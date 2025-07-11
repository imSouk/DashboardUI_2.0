  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import Login from './Login'
  import { createBrowserRouter } from 'react-router-dom'
  import { RouterProvider } from 'react-router'
import Register from './components/register'
import Dashboard from './components/Dashboard'

  const router = createBrowserRouter([
    {path:"/",
    element: <Login></Login>,
    },
     {path:"/Register",
    element: <Register></Register>,
    },
     {path:"/Dashboard",
    element: <Dashboard  ></Dashboard>,
    },
  ])
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router= {router} />
    </StrictMode>,
  )
