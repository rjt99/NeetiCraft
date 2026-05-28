import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage({ onLogin }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    // stubbed auth - accept any credentials
    const username = email.split('@')[0]
    const user = { email, username, lastLogin: new Date().toISOString() }
    onLogin(user)
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-[#081026] rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-brand-orange mb-6">NeetiCraft</h1>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full bg-transparent border border-gray-700 rounded px-3 py-2 outline-none focus:border-brand-orange"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full bg-transparent border border-gray-700 rounded px-3 py-2 outline-none focus:border-brand-orange"
            />
          </div>

          <button className="w-full py-2 bg-brand-orange rounded text-black font-semibold">Sign in</button>
        </form>

        <p className="mt-4 text-sm text-gray-400">Don't have an account? <Link to="/register" className="text-brand-orange">Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
