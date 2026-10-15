# Universal Causal-Predictive Engine — Project Overview

> **Purpose of this document:** This is the canonical reference for the product's vision, scope, architecture, and functional fidelity. Every design decision, feature addition, and data strategy should be validated against what is written here. If something contradicts this document, update the document first — then change the code.

---

## The Core Idea

Everything that exists today is downstream of something. No market move, policy outcome, or social shift happens in a vacuum. This system is built on that premise.

Given any **field** (e.g., commodities, public policy, social media trends) and a **sub-category** (e.g., gold market, EV policy, immigration sentiment), the system:

1. Harvests comprehensive historical and present data from across the internet
2. Reconstructs the **causal chain** — what decisions, events, and signals led to where things are today
3. Matches the current state against **historical analogs** — similar patterns from the past
4. Generates a **predictive curve** — where this trajectory is likely headed, with confidence intervals and trigger conditions

This is not standard forecasting. It is **causal-chain reconstruction + pattern-matched prediction**, applied to any domain a user defines.

---

## The Three Capabilities

### 1. Retrospective — "What caused this?"
Trace backward from a current state to understand the upstream decisions, events, and conditions that produced it.

> Example: Why is India now strategically dependent on Chinese imports for electronics and pharma APIs?
> → 1991 liberalization favored services → IT boom of 2000s validated services-first → manufacturing investment remained low relative to China → supply chain fragility exposed by COVID-19 → now a national security concern.

### 2. Evaluative — "Where does this currently sit on a known curve?"
Place the current state of a topic onto a historical pattern — identifying the phase, momentum, and proximity to known inflection points.

> Example: India's EV adoption in 2025 looks structurally similar to China's EV adoption curve in 2017–2018 — pre-inflection, with subsidy dependence and charging infrastructure as the binding constraint.

### 3. Predictive — "What typically follows this pattern?"
Based on matched historical analogs, generate a forward-looking trajectory with explicitly stated assumptions, confidence ranges, and the specific triggers that would accelerate or reverse the trend.

> Example: Every time US 10-year real yields drop below −1%, gold rallies within 60 days in 80% of historical cases. Current yield: −0.8% and falling. Trigger condition for rally: next CPI print above consensus.

---

## How It Differs From Existing Tools

| Tool | What It Does | What This System Adds |
|---|---|---|
| Bloomberg Terminal | Financial data, charts, news | Cross-domain causality, natural language input, any field |
| Palantir Gotham/AIP | Entity-relationship graphs (defense/gov focus) | Open domain, topic-agnostic, accessible |
| Google Trends | Surface-level search interest over time | Causal depth, historical context, predictive output |
| Metaculus / Manifold Markets | Human-driven prediction markets | AI-driven, no crowd needed, mechanistic reasoning |
| Peter Turchin's Cliodynamics | Quantitative historical cycle analysis | Real-time data, any domain, not limited to civilization-scale |
| Recorded Future | Cyber/geopolitical threat pattern detection | Not limited to security, broader domain coverage |
| Wolfram Alpha | Computational knowledge engine | Causal inference, narrative generation, future projection |

**Closest existing combination:** Palantir AIP + knowledge graph + time-series regression + LLM narrative layer — but no single product unifies these for open-domain, user-defined topics.

---

## Example Use Cases

### Gold Market
**Input:** Field → Commodities | Sub-category → Gold

The system identifies:
- Correlation: US 10-year real yield below −1% → gold rally within 60 days (80% historical hit rate)
- Cross-domain signals: dollar index, geopolitical tension scores, ETF flow data, jewelry demand from India and China
- Current position on curve: negative real rate environment, dollar weakening — consistent with pre-rally phase
- Prediction: Gold likely holds above $2,800 for 12–18 months; reversal trigger = Fed pivot signal or real yield recovery above 0%

### Immigration + Social Media Sentiment
**Input:** Field → Social Policy | Sub-category → Immigration

The system identifies:
- Pattern: Social media sentiment spikes → 8–18 month lag → legislative action → 3–5 year demographic shift → labor market distortion
- Historical analog: France 2005 suburban riots → 2007 Sarkozy immigration legislation → measurable demographic policy shift by 2010
- Current pattern match: UK 2024 rhetoric matches France 2004–2005 curve with ~85% structural similarity
- Prediction: Policy tightening likely within one to two election cycles; inflection trigger = next major high-visibility incident

### EV Policy (India)
**Input:** Field → Industrial Policy | Sub-category → Electric Vehicles — India

The system identifies:
- Causal chain: subsidy announcement → OEM commitment → charging infrastructure investment → grid strain → battery materials squeeze → lithium/cobalt price spike
- Historical analog: India's current position resembles China's EV curve circa 2017 — subsidy-dependent, pre-scale, charging infrastructure as binding constraint
- Prediction: Adoption acceleration likely post-2027 if PLI scheme sustained; lithium supply security becomes critical dependency by 2028

### India Manufacturing Deficit
**Input:** Field → Macroeconomics | Sub-category → Manufacturing policy — India

The system reconstructs:
- 1991 liberalization → services-first strategy validated by IT boom → relative underinvestment in manufacturing vs. China → import dependency for electronics, APIs, capital goods → COVID-19 exposed strategic fragility → current "Make in India" as reactive correction
- Evaluative position: India is at the same point China was in 1994–1995 on its manufacturing build-out curve, but with less state capacity and higher political complexity
- Prediction: 15–20 year lag to close the gap even under optimistic policy conditions; near-term vulnerability window remains open through 2030

---

## Data Architecture (Conceptual)

```
USER INPUT
  [Field]  →  [Sub-category]  →  [Geographic scope]  →  [Time horizon]
       |
       ▼
DATA HARVEST LAYER
  - News archives (GDELT: 250M+ events since 1979)
  - Academic papers (Semantic Scholar, arXiv, SSRN)
  - Government / policy databases (legislation, budget documents)
  - Financial time series (prices, flows, macro indicators)
  - Social media signals (sentiment, volume, virality)
  - Wikipedia / encyclopedia-class factual grounding
  - Web search for recency (last 30–90 days)
       |
       ▼
EVENT EXTRACTION + TIMELINE CONSTRUCTION
  - Named entity recognition: who, what, where, when
  - Event typing: policy decision / market move / social signal / natural event
  - Temporal tagging: absolute and relative timestamps
       |
       ▼
CAUSAL GRAPH BUILDER
  - What connected to what, with what time lag
  - Mechanistic plausibility scoring (is there a logical chain, not just correlation?)
  - Confounding variable identification
  - Confidence weight per causal edge
       |
       ▼
PATTERN LIBRARY MATCHER
  - Embed current state as a vector
  - Search historical analog library for structural similarity
  - Rank matches by: temporal structure, domain, magnitude, geographic context
       |
       ▼
PREDICTION CURVE GENERATOR
  - Forward trajectory with confidence intervals
  - Explicit assumption list
  - Named trigger conditions (what would accelerate / reverse / stall the trend)
       |
       ▼
OUTPUT
  - Narrative explanation (plain language)
  - Visual causal timeline
  - Prediction curve with confidence bands
  - Trigger condition watchlist
```

---

## The Key Philosophical Differentiator

Most prediction systems ask:
> *"Given what I know about X, what happens to X?"*

This system asks:
> *"What are the upstream causes of X, what historical patterns match this structure, and what do those patterns say happens next — including to Y and Z that most people are not yet watching?"*

That second framing is how macro hedge funds (Bridgewater's All Weather approach), geopolitical intelligence analysts, and long-horizon policymakers actually think. The insight that **everything is downstream of something** is the philosophical foundation.

---

## Critical Design Constraints

### The Counterfactual Problem
Not every correlation is causal. India's manufacturing gap is causal. "Gold rises when a specific sports team wins" is spurious. The system must weight **mechanistic plausibility** — is there a logical chain of cause and effect? — against statistical fit. Statistical correlation alone is not sufficient for inclusion in a causal graph.

### Variable Time Horizons
Some effects resolve in days (earnings report → stock price). Others take decades (education policy → workforce composition). The system must handle lag structures across wildly different timescales and be explicit about which horizon a prediction applies to.

### Cross-Domain Causality
The hardest and most valuable capability. Gold prices affect mining employment, which affects regional politics, which affects commodity regulation, which feeds back into gold prices. The system should be capable of tracing chains that cross conventional domain boundaries — even if it does so with lower confidence than within-domain chains.

### Unknown Unknowns
The system cannot know in advance which variables matter for a given topic. The data harvest layer must cast wide, and the causal graph must be allowed to surface unexpected connections — not just confirm expected ones.

### Human Agency
Unlike physical systems, human systems can change course. Policy can reverse. A single election can break a 20-year trend. The prediction layer must model this explicitly — not as noise, but as a named risk category with estimated probability.

---

## What a Minimum Viable Version Looks Like

A working MVP needs only:

1. A user interface that accepts: Field + Sub-category + (optional) geographic scope
2. A data retrieval pipeline that pulls: recent web content, GDELT event data, and one financial data source
3. An LLM-based causal chain extractor that builds a rough timeline from retrieved content
4. A historical analog matcher against a small seeded library of 20–30 well-documented cases
5. A plain-language output with a basic visual timeline

The full causal graph engine, cross-domain linking, and confidence-interval prediction curves are Phase 2 and beyond.

---

## Scale Estimate

| Dimension | Scale |
|---|---|
| Domains coverable at launch | 5–10 (finance, policy, social trends, commodities, technology adoption) |
| Data sources at MVP | 4–6 (GDELT, web search, Wikipedia, 1 financial feed, academic abstracts) |
| Historical analog library at MVP | 20–30 seeded cases, growing via usage |
| Prediction horizon at MVP | 6 months to 5 years (medium-term) |
| Languages at MVP | English primary; multilingual in Phase 2 |
| Full-scale data volume | 250M+ historical events (GDELT alone), expanding continuously |

---

## Open Questions for Design Phase

1. Should users be able to **contribute** causal connections (crowd-sourced knowledge graph edges)?
2. How do we handle **classified or paywalled** data sources — especially for financial and policy domains?
3. What is the right **confidence communication model** — percentages, ranges, qualitative tiers?
4. Should the system show its **reasoning chain** explicitly, or summarize it for non-expert users?
5. How do we handle **rapidly changing situations** where the causal graph is being rewritten in real time (active conflicts, live markets)?
6. What is the **monetization model** — B2B (hedge funds, policy shops, consultancies) or B2C (general public)?

---

*Document version: 1.0 — Brainstorm phase. Update this document before beginning any implementation work.*
