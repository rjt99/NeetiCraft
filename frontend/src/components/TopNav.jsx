import React from 'react'
import { brand } from '../theme'

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Alerts', path: '/alerts' },
  { label: 'Trends', path: '/trends' },
  { label: 'Explorer', path: '/explorer' },
  { label: 'Me', path: '/workspace' },
]

export default function TopNav({ user }) {
  return (
    <nav className="w-full bg-brand-surface border-b border-brand-primary flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold text-brand-accent">NeetiCraft</div>
        {navItems.map((item) => (
          <a key={item.label} href={item.path} className="text-gray-200 hover:text-brand-accent px-2 py-1 rounded transition-colors">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
          {user?.username?.[0]?.toUpperCase() || 'U'}
        </div>
      </div>
    </nav>
  )
}
