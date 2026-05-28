import React from 'react'
import TopBar from '../components/TopBar'

function HomePage({ user, onSignOut }) {
  return (
    <div className="min-h-screen">
      <TopBar user={user} onSignOut={onSignOut} />

      <main className="p-6">
        <div className="text-gray-300">Welcome to NeetiCraft. Core features will be added soon.</div>
      </main>
    </div>
  )
}

export default HomePage
