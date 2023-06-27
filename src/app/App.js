import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from '../services/auth'
import Header from '../features/header/Header'
import Landing from '../features/landing/Landing'
import About from '../features/about/About'
import RecipeList from '../features/recipes/RecipeList'
import RecipeForm from '../features/recipes/RecipeForm'
import Pantry from '../features/pantry/Pantry'
import Login from '../features/login/Login'
import Register from '../features/register/Register'
import Profile from '../features/profile/Profile'

const App = () => {
  class User {
    constructor(id, email, admin) {
      this.id = id
      this.email = email
      this.admin = admin
    }
  }

  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Header handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Landing user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes/:urlId" element={<RecipeList user={user} />} />
          <Route
            path="/recipes/form"
            element={
              <RecipeForm heading="Create New Recipe" submit="Create Recipe" />
            }
          />
          <Route
            path="/recipes/form/:recipeId"
            element={
              <RecipeForm
                updateForm="true"
                heading="Update Recipe"
                submit="Update Recipe"
              />
            }
          />
          <Route path="/pantry" element={<Pantry user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
