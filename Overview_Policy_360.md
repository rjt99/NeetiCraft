# Policy 360 — India Policy Intelligence System
### Functional Overview Document v1.0

> **Purpose of this document:** This is the functional specification and design reference for Policy 360 — an AI-powered policy analysis system focused on Indian policy. Every feature, data decision, and output format must be validated against this document. Update this document before changing scope.

---

## Product Statement

**Policy 360** is an AI-powered research tool that takes any Indian government policy as input and generates a comprehensive, structured intelligence report covering the policy's origin, current impact, global comparisons, and a data-grounded predictive forecast — tailored for policy researchers and analysts.

---

## Primary User

**Policy Researcher / Analyst**

This user is academically or professionally trained. They read dense reports, understand caveats, and value sourced, nuanced analysis over simplified summaries. They are comfortable with uncertainty if it is stated explicitly. They are not looking for a dashboard — they are looking for a well-structured, deeply researched brief that would otherwise take them days to compile manually.

**What they need:**
- Depth over brevity
- Explicit sourcing and traceability
- Honest acknowledgment of data gaps and uncertainty
- Comparative context (not just India in isolation)
- Forward-looking analysis grounded in stated assumptions

**What they do today without this system:**
- Read 10–15 government documents, academic papers, and news articles
- Manually piece together a comparative picture from separate country reports
- Write their own synthesis, often missing cross-domain connections
- Estimate the future based on experience and intuition alone

**What success looks like:**
A researcher can produce a fully sourced, comparative, forward-looking policy brief in under 30 minutes instead of 3–4 days.

---

## Input

The user enters:

| Field | Description | Example |
|---|---|---|
| **Policy Name** | The Indian policy to analyze | Biofuel Policy |
| **Depth** | Brief / Standard / Deep Dive | Standard |
| **Time Horizon** | Short (2yr) / Medium (5yr) / Long (10yr) | Medium |

Optional:
- Specific angle of interest (e.g., "focus on environmental impact")
- Comparison countries override (default: auto-selected by system)

---

## Output Structure

A structured report with seven sections, always produced in this order.

---

### Section 1 — Policy Anatomy
**Job:** Establish what the policy is before any analysis begins.

**Contents:**
- Full name, official document reference, ministry ownership
- Date of first enactment and all major revisions
- Core objectives as stated in the policy document
- Key provisions, mandates, and targets
- Current implementation status (active / amended / lapsed / under review)
- Administering bodies and enforcement mechanism

**Data sources:** PRS Legislative Research, Ministry websites, Gazette notifications, PIB press releases

---

### Section 2 — Origin Story
**Job:** Explain why this policy came into existence — the full causal chain, not just the stated rationale.

**Contents:**
- The triggering conditions (crisis, international pressure, political mandate, economic necessity)
- The upstream causal chain — what decisions and conditions made this policy inevitable or necessary
- Political context at time of passage — which government, what mandate, what opposition
- Lobbying and stakeholder pressures that shaped its final form
- What was attempted before this policy and why it failed or was insufficient

**Design note:** Offer two depths — a 3-line summary for quick reading and a full causal chain for deep research. The system must distinguish between the official stated rationale and the actual driving conditions, which are often different.

**Example (Biofuel Policy):**
```
Surface rationale:    Reduce crude oil import dependency
Deeper cause chain:   Rising crude import bill (2003–2008) → forex pressure →
                      current account deficit → energy security concerns →
                      sugarcane surplus creating farmer distress →
                      political need to raise MSP without direct subsidy →
                      biofuel as dual solution
```

**Data sources:** Parliamentary debate records (Lok Sabha / Rajya Sabha archives), Economic Survey reports, RBI annual reports, academic papers on policy genesis

---

### Section 3 — Current Impact Assessment
**Job:** Assess how the policy is actually affecting India today across four dimensions.

**Dimensions:**

#### 3a. Economic Impact
- GDP contribution or drag from policy-related sectors
- Employment generated or displaced
- Import/export changes attributable to the policy
- Fiscal cost (subsidies, tax foregone, administrative cost)
- Market distortions created (price effects, supply chain shifts)

#### 3b. Environmental Impact
- Intended environmental outcomes vs. actual measured outcomes
- Lifecycle analysis where available (e.g., biofuel net carbon savings)
- Unintended environmental consequences (land use change, water consumption)
- Alignment with India's NDC commitments and international climate obligations

#### 3c. Political Impact
- Which constituencies benefit and which bear the cost
- Level of political consensus vs. contestation around the policy
- Federalism dimension — how states are implementing vs. resisting
- International diplomatic implications (trade partners, climate forums)

#### 3d. Social Impact
- Effect on rural vs. urban populations
- Caste and class distribution of benefits and costs
- Gender dimension where applicable
- Effect on vulnerable or marginal communities

**Design note:** Each dimension should carry a traffic-light indicator (performing / mixed / underperforming) with a one-line justification.

**Data sources:** MOSPI data, NITI Aayog reports, World Bank India data, Ministry annual reports, peer-reviewed impact assessments

---

### Section 4 — Policy Health Score
**Job:** Give the analyst a synthesized at-a-glance assessment before they go into comparative or forward-looking sections.

**Scored dimensions (1–10):**

| Dimension | Score | One-line rationale |
|---|---|---|
| Implementation Fidelity | x/10 | Are targets being met on schedule? |
| Economic Impact | x/10 | Net economic contribution vs. cost |
| Environmental Alignment | x/10 | Does it deliver on environmental intent? |
| Political Durability | x/10 | How likely to survive a change in government? |
| Social Equity | x/10 | Are benefits distributed fairly? |

**Overall composite score** with a brief interpretive statement.

**Design note:** Scores must be traceable — each score links to the evidence in Section 3. No score without a cited basis.

---

### Section 5 — Global Benchmarking
**Job:** Place the Indian policy in global context using structurally comparable countries and cases.

**Comparator selection logic:**
The system auto-selects comparators based on:
- Similar economic development stage at time of policy launch
- Similar structural conditions (agricultural base, energy mix, demographic profile)
- Geographic/climate similarity where relevant
- Availability of outcome data

> Example for Biofuel: Brazil (world leader, sugarcane-based), Indonesia (palm oil model, similar agricultural economy), USA (corn-based, different but well-documented outcomes)
> NOT: Norway, Germany — structurally incomparable

**Contents per comparator:**
- When they launched a similar policy and under what conditions
- What the policy achieved (with data)
- What it failed to achieve (with data)
- What unintended consequences emerged
- Where that country is today on this policy trajectory

**Synthesis:** What patterns emerge across all comparators — what consistently works, what consistently fails, what is context-dependent.

**Data sources:** World Bank policy databases, OECD policy briefs, IEA/IRENA reports, FAO for agriculture-linked policies, academic comparative policy literature

---

### Section 6 — Related Policy Threads
**Job:** Surface the policies that intersect with or depend on this policy — preventing analysis in a vacuum.

**Contents:**
- List of directly related Indian policies with brief description of the relationship
- Tension map — where this policy's goals conflict with another policy's goals
- Dependency map — what other policies must succeed for this one to work
- Historical precedents — earlier Indian policies that tried to solve the same problem

**Example (Biofuel Policy):**
```
SUPPORTS:        NDC climate commitments, Atmanirbhar Bharat (import reduction)
DEPENDS ON:      MSP policy for sugarcane, Agricultural water policy
IN TENSION WITH: Food security policy (land use competition), EV policy (competing mandates)
PREDECESSOR:     Ethanol Blending Programme 2003 (partial precedent)
```

**Data source:** System-generated from policy corpus; analyst can add/remove connections

---

### Section 7 — Predictive Forecast
**Job:** Project the likely trajectory of this policy over the selected time horizon, grounded in India-specific structural factors.

**Structure:**

#### 7a. India-Specific Structural Factors
Before any forecast, the system surfaces the structural realities that will shape outcomes:
- **Demographic:** Working-age population growth, rural-urban migration rate, literacy/skill profile
- **Geographic:** Monsoon dependence, arable land constraints, water table trends, regional variation
- **Market:** Private sector capacity, financial system depth, infrastructure gaps
- **Political:** Electoral cycle alignment, federal dynamics, bureaucratic capacity

#### 7b. Scenario Forecasts
Three scenarios, not one point prediction:

| Scenario | Conditions | Projected Outcome |
|---|---|---|
| **Optimistic** | What has to go right | Outcome + probability |
| **Base Case** | Most likely continuation | Outcome + probability |
| **Adverse** | What breaks the policy | Outcome + probability |

#### 7c. Trigger Conditions
Named, specific events that would shift the trajectory from one scenario to another:
- What would accelerate the optimistic path
- What would trigger the adverse path
- Key decision points and their expected dates

#### 7d. Assumptions Register
Every forecast assumption stated explicitly:
- Economic assumptions (growth rate, inflation, commodity prices)
- Policy continuity assumptions (which government decisions are assumed to hold)
- External assumptions (global commodity prices, climate events, geopolitical)

**Design note:** The forecast must never be presented without its assumptions register visible. A forecast stripped of its assumptions is not analysis — it is false confidence.

**Data sources:** NITI Aayog Vision documents, RBI projections, IMF Article IV reports, demographic data from Census + UNFPA, climate projections from IMD

---

## Policy Timeline (Visual Anchor)

Every report includes a horizontal timeline spanning from the policy's origin to the end of the selected forecast horizon. All seven sections anchor their key events to this timeline.

```
[Origin] ──── [Key revisions] ──── [TODAY] ──── [Forecast milestones] ──── [Horizon]
```

This prevents the report from feeling like disconnected sections — the timeline is the connective thread.

---

## Report Header (Standard Format)

Every generated report begins with:

```
POLICY 360 REPORT
─────────────────────────────────────────────
Policy:        [Policy Name]
Category:      [Energy / Agriculture / Finance / Social / Industrial / etc.]
Ministry:      [Owning ministry]
First enacted: [Year]
Last amended:  [Year]
Status:        [Active / Under review / Lapsed]
Analysis date: [Date]
Depth:         [Brief / Standard / Deep Dive]
Time horizon:  [2yr / 5yr / 10yr]
─────────────────────────────────────────────
Health Score:  [x/50] — [Interpretive label]
─────────────────────────────────────────────
```

---

## Data Source Architecture

| Layer | Sources | Freshness |
|---|---|---|
| Policy text | PRS India, Ministry websites, Gazette of India | Updated on change |
| Parliamentary record | Lok Sabha / Rajya Sabha debate archives | Historical + recent |
| Economic data | MOSPI, RBI, World Bank, IMF | Annual / quarterly |
| Environmental data | MoEFCC, IMD, UNEP, IPCC | Annual |
| Global comparisons | OECD, World Bank, IEA, IRENA, FAO | Annual |
| News + commentary | Indian and international press archives | Continuous |
| Academic research | Semantic Scholar, SSRN, JSTOR abstracts | Continuous |
| Forecasts + projections | NITI Aayog, RBI, IMF, UN agencies | Annual |

---

## Design Constraints

### Honesty over confidence
When data is sparse, contradictory, or absent — the system must say so. A section with insufficient data should show a data gap indicator, not generate a confident-sounding guess.

### No section is optional
All seven sections are always produced. Depth varies by user selection, but no section is skipped. A policy report without an origin story or a forecast is incomplete analysis.

### Traceability
Every factual claim in the report links to its source. The analyst must be able to follow any statement back to the underlying document.

### Structural comparators only
Global benchmarking must only include countries with comparable structural conditions at the relevant time. Comparing India to Scandinavian countries on social policy is misleading without explicit qualification.

### Assumptions are first-class outputs
The forecast is only as good as its assumptions. Assumptions are not footnotes — they are prominently surfaced alongside every forward-looking statement.

---

## MVP Scope

For the first working version, deliver:

1. Policy input field with category tagging
2. Sections 1, 2, and 3 fully functional (Anatomy, Origin, Impact)
3. Section 5 with two auto-selected comparators
4. Section 7 with base-case scenario only and explicit assumptions
5. Static policy timeline visualization
6. Health Score for Section 3 dimensions only

Sections 4 (full composite score), 6 (related policy threads), and multi-scenario forecasting are Phase 2.

---

## Open Questions

1. **Policy corpus scope** — Should the system cover all Indian policies or begin with a defined set (e.g., top 50 by economic significance)?
2. **Amendment tracking** — How does the system handle a policy with 12 amendments over 20 years? Does it analyze the current version only or the full evolution?
3. **Conflicting data** — When government data and independent research contradict each other (common in Indian policy), how does the system present this?
4. **Regional variation** — Many Indian policies are implemented very differently across states. Does the report include state-level breakdown or stay national?
5. **Language** — Policy documents are often in Hindi. Does the system need Hindi-language ingestion at MVP?
6. **Report export** — Do analysts need a downloadable PDF or Word document for submission?

---

*Document version: 1.0 — Pre-development. Derived from brainstorm session dated 2026-06-10. Update before beginning any implementation sprint.*
