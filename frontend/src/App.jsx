import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/dashboard/Dashboard'
import Explorer from './pages/explorer/Explorer'

function App() {
  const [user, setUser] = React.useState(null)

  return (
    <div className="min-h-screen bg-[#0b1320] text-gray-100">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path="/register" element={<RegisterPage onRegister={setUser} />} />
        <Route
          path="/"
          element={user ? <HomePage user={user} onSignOut={() => setUser(null)} /> : <Navigate to="/login" />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </div>
  )
}

export default App
