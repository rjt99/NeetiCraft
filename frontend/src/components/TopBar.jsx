import React from 'react'

function UserMenu({ user, onSignOut }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-green rounded-full flex items-center justify-center text-black font-semibold">{(user.username || user.email[0]).charAt(0).toUpperCase()}</div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium">{user.username}</div>
          <div className="text-xs text-gray-400">{user.email}</div>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#06070a] border border-gray-800 rounded shadow-lg p-3 text-sm">
          <div className="mb-2">
            <div className="text-xs text-gray-400">Signed in as</div>
            <div className="font-medium">{user.username}</div>
            <div className="text-xs text-gray-400">{user.email}</div>
          </div>
          <div className="text-xs text-gray-400">Last login</div>
          <div className="mb-3 text-xs">{new Date(user.lastLogin).toLocaleString()}</div>
          <button onClick={onSignOut} className="w-full py-2 bg-red-600 rounded text-white">Sign out</button>
        </div>
      )}
    </div>
  )
}

export default function TopBar({ user, onSignOut }) {
  return (
    <header className="w-full bg-[#071026] border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="text-xl font-semibold text-brand-orange">NeetiCraft</div>
        </div>

        <div className="flex items-center gap-4">
          <UserMenu user={user} onSignOut={onSignOut} />
        </div>
      </div>
    </header>
  )
}
