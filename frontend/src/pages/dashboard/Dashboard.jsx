import React from 'react'
import TopNav from '../../components/TopNav'

export default function Dashboard() {
  const user = { username: 'policyops', email: 'policyops@neeticraft.in' }
  return (
    <div className="min-h-screen bg-brand-surface text-gray-100">
      <TopNav user={user} />
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Global Search Bar */}
        <div className="bg-brand-primary/80 rounded-lg p-4 flex flex-col gap-2">
          <label className="text-lg font-semibold text-brand-accent">Ask:</label>
          <input
            className="bg-brand-surface border border-brand-accent rounded px-4 py-2 text-lg focus:outline-none focus:border-brand-accent"
            placeholder="What policy trends are emerging in EV sector?"
          />
        </div>

        {/* 3-column: Trend Radar | Recent Policy Updates | Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-brand-muted/80 rounded-lg p-4">
            <div className="font-bold text-brand-accent mb-2">TREND RADAR</div>
            <div>EV <span className="text-brand-accent">↑ 82%</span></div>
            <div>Hydrogen <span className="text-brand-accent">↑ 120%</span></div>
            <div>AI <span className="text-brand-accent">↑ 65%</span></div>
            <div>Semicon <span className="text-brand-accent">↑ 90%</span></div>
          </div>
          <div className="bg-brand-accentLight/80 rounded-lg p-4">
            <div className="font-bold text-brand-surface mb-2">RECENT POLICY UPDATES</div>
            <ul className="list-disc ml-4 text-brand-surface">
              <li>Karnataka EV Policy</li>
              <li>MNRE circular</li>
              <li>Budget 2026 update</li>
              <li>DPIIT notice</li>
            </ul>
          </div>
          <div className="bg-brand-accent/80 rounded-lg p-4">
            <div className="font-bold text-brand-surface mb-2">ALERTS</div>
            <ul className="list-disc ml-4 text-brand-surface">
              <li>EV subsidy changed</li>
              <li>Hydrogen spike detected</li>
            </ul>
          </div>
        </div>

        {/* Policy Momentum Snapshot */}
        <div className="bg-brand-primary/80 rounded-lg p-4">
          <div className="font-bold text-brand-accent mb-2">POLICY MOMENTUM SNAPSHOT</div>
          <div className="h-32 flex items-center justify-center text-brand-accent/60">[Line chart: mentions over time by sector]</div>
        </div>

        {/* Emerging Signals */}
        <div className="bg-brand-muted/80 rounded-lg p-4">
          <div className="font-bold text-brand-accent mb-2">EMERGING SIGNALS (AI GENERATED INSIGHTS)</div>
          <ul className="list-disc ml-4">
            <li>Green hydrogen becoming cross-ministry priority</li>
            <li>EV subsidies converging across 4 states</li>
            <li>Semiconductor policy cluster forming in South India</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
