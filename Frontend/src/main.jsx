import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home.page.jsx'
import BookChefForm from './form/Book.form.jsx'
import ChefListingPage from './pages/ChefListing.page.jsx'
import ChefRegistrationForm from './form/ChefRegistration.form.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage/>}/>
      <Route path='bookChefForm' element={<BookChefForm/>}/>
      <Route path='chefListing' element={<ChefListingPage/>}/>
      <Route path='chefRegistrationForm' element={<ChefRegistrationForm/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)