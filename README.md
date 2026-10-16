# NeetiCraft (Policy 360)

NeetiCraft is an AI-powered policy intelligence and evaluation platform designed to systematically analyze, benchmark, and forecast public policies. Utilizing a sequential multi-agent LLM pipeline, the application deconstructs policies into structured anatomical data, maps causal origins, quantifies multi-dimensional impacts, benchmarks against global analogs, and projects probabilistic forward-looking scenarios.

---

## Major Features

* **Multi-Agent Analytical Pipeline**
  * **Policy Intake Agent:** Extracts foundational metadata, legal gazette references, core mandates, and governing bodies.
  * **Causal Chain Agent:** Identifies underlying trigger events, political contexts, and legislative origin stories.
  * **Impact Assessment Agent:** Evaluates and scores economic, environmental, social, and political outcomes.
  * **Global Comparator Agent:** Benchmarks domestic policy frameworks against structural international analogs.
  * **Predictive Forecast Agent:** Models multi-scenario projections (optimistic, baseline, adverse) with explicit assumption tracking.

* **Interactive Analytical Console**
  * Real-time streaming updates displaying token-by-token progress across active agent stages.
  * Visual impact meters, causal flow diagrams, and quantitative forecast curves.
  * Health score synthesis measuring implementation fidelity, durability, and equity.

* **Job Management & Persistence**
  * SQLite-backed job history capturing raw model outputs, debug logs, and assembled final reports.
  * Capability to inspect intermediate reasoning stages and previous policy evaluations.

---

## Architecture & Tech Stack

* **Backend:** FastAPI, Python, SQLite, Anthropic Claude / OpenRouter API integrations.
* **Frontend:** React, TypeScript, Vite, Tailwind CSS, Lucide Icons.

---

## Getting Started

### Prerequisites

* Python 3.10 or higher
* Node.js 18 or higher with npm
* An API key for Claude (Anthropic) or supported LLM provider

---

### Backend Setup
```bash
   cd backend
  # macOS/Linux
  python3 -m venv .venv
  source .venv/bin/activate
  
  # Windows
  python -m venv .venv
  .venv\Scripts\activate

  pip install -r requirements.txt
  ```
Configure environment variables by creating a .env file in backend/:
ANTHROPIC_API_KEY="your-api-key-here"
DATABASE_URL="sqlite:///./policy360.db"

Launch
```bash
  uvicorn app.main:app --reload --port 8000
```

### Frontend
NodeJs setup

Open your browser and navigate to: http://localhost:5173
