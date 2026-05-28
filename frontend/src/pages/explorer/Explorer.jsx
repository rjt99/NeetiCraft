import React from 'react'
import TopNav from '../../components/TopNav'

export default function Explorer() {
  const user = { username: 'policyops', email: 'policyops@neeticraft.in' }
  return (
    <div className="min-h-screen bg-brand-surface text-gray-100">
      <TopNav user={user} />
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Search Bar + Filters */}
        <div className="bg-brand-primary/80 rounded-lg p-4 flex flex-col gap-2">
          <input
            className="bg-brand-surface border border-brand-accent rounded px-4 py-2 text-lg focus:outline-none focus:border-brand-accent"
            placeholder="EV policy Maharashtra"
          />
          <div className="flex gap-2 mt-2">
            <span className="bg-brand-accent text-brand-surface px-2 py-1 rounded">State</span>
            <span className="bg-brand-accentLight text-brand-surface px-2 py-1 rounded">Ministry</span>
            <span className="bg-brand-muted text-brand-accent px-2 py-1 rounded">Year</span>
            <span className="bg-brand-primary text-brand-accent px-2 py-1 rounded">Sector</span>
            <span className="bg-brand-accent text-brand-surface px-2 py-1 rounded">Type</span>
          </div>
        </div>

        {/* Results + Insight Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-brand-muted/80 rounded-lg p-4">
            <div className="font-bold text-brand-accent mb-2">SEARCH RESULTS</div>
            <ul className="list-disc ml-4">
              <li>Maharashtra EV Policy 2025 <span className="text-brand-accent">[Score: 92]</span></li>
              <li>Karnataka EV Amendment</li>
              <li>Gujarat EV Policy</li>
            </ul>
          </div>
          <div className="bg-brand-accentLight/80 rounded-lg p-4">
            <div className="font-bold text-brand-surface mb-2">DOCUMENT INSIGHT PANEL</div>
            <div className="mb-2">Summary:</div>
            <ul className="list-disc ml-4 text-brand-surface">
              <li>Subsidy for EV infra</li>
              <li>Charging network rollout</li>
              <li>Budget: ₹X crore</li>
            </ul>
            <div className="mt-2">Key Entities:</div>
            <ul className="list-disc ml-4 text-brand-surface">
              <li>MSMEs</li>
              <li>Energy Dept</li>
            </ul>
            <div className="mt-2">Ask AI: <span className="italic">Compare with Tamil Nadu</span></div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="bg-brand-primary/80 rounded-lg p-4">
          <div className="font-bold text-brand-accent mb-2">DOCUMENT VIEWER (PDF + OCR TEXT)</div>
          <div className="h-32 flex items-center justify-center text-brand-accent/60">[Highlighted clauses + extracted sections]</div>
        </div>
      </main>
    </div>
  )
}
