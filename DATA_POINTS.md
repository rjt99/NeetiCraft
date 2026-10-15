# Policy 360 — Data Points Checklist

> **Purpose of this document:** A single audited list of every data point the product spec (`Overview_Policy_360.md`, `OVERVIEW.md`) calls for, mapped against what the running application actually captures and displays today. Audited directly against the current code (`backend/app/agents.py`, `backend/prompts/runtime/*.txt`, `frontend/src/components/report/*.tsx`) — not from memory. Update this file whenever a data point's status changes.

Legend: ✅ Done · ⚠️ Partial · ❌ Not done

---

## Section 1 — Policy Anatomy

| Data point | Status | Note |
|---|---|---|
| Official name, owning ministry | ✅ Done | `Intake` stage → `PolicyAnatomy.tsx` |
| Enacting document / gazette reference | ✅ Done | `documentReference` field |
| First enactment year, most recent amendment year | ✅ Done | `firstEnacted` / `lastAmended` |
| **Full amendment history** (every revision, not just the latest) | ❌ Not done | Only two bare years are captured; a policy with 12 amendments over 20 years is not distinguished from one with a single revision |
| Core objectives (as stated in founding documents) | ✅ Done | `coreObjectives` |
| Key provisions, mandates, targets | ✅ Done | `keyProvisions` |
| Current implementation status (active/amended/lapsed/under review) | ✅ Done | |
| Administering bodies | ✅ Done | `administeringBodies` |
| Enforcement mechanism | ✅ Done | |

## Section 2 — Origin Story

| Data point | Status | Note |
|---|---|---|
| Surface (stated) rationale | ✅ Done | `Causality` stage → `CausalStory.tsx` |
| Deeper cause chain, as connected prose | ✅ Done | Explicitly distinguished from the surface rationale, per the spec's design note |
| Cause-flow diagram (short labelled links) | ✅ Done | `CauseFlow.tsx` |
| Trigger events | ✅ Done | |
| Political context at time of passage | ✅ Done | |
| Stakeholder / lobbying pressures | ✅ Done | |
| Prior attempts that failed or fell short | ✅ Done | |
| Confidence level on the causal reconstruction | ✅ Done | Surfaced as a badge on the Origin Story card |

## Section 3 — Current Impact Assessment

| Data point | Status | Note |
|---|---|---|
| Economic impact (prose, not just a score) | ✅ Done | |
| Environmental impact (prose) | ✅ Done | |
| Political impact (prose) | ✅ Done | |
| Social impact (prose) | ✅ Done | |
| Traffic-light indicator per dimension (performing/mixed/underperforming) | ✅ Done | `ImpactBars.tsx` colors bars by this |
| Impact score 0–100 per dimension | ✅ Done | |
| Data gaps flagged explicitly | ✅ Done | |
| **State/regional-level variation** | ❌ Not done | Flagged as an open question in the spec itself; India-specific policies routinely play out very differently by state, and nothing here distinguishes that |

## Section 4 — Policy Health Score

| Data point | Status | Note |
|---|---|---|
| 5 scored dimensions (Implementation Fidelity, Economic Impact, Environmental Alignment, Political Durability, Social Equity), 1–10 each | ✅ Done | `health_breakdown` → `HealthBreakdown.tsx` |
| One-line rationale per score | ✅ Done | |
| Composite score /100 with interpretive label | ✅ Done | |
| Score traceable to a *specific* cited claim in Section 3 | ⚠️ Partial | The rationale text references the impact assessment narratively, but there's no explicit link/anchor from a given score to the exact sentence it derives from |

## Section 5 — Global Benchmarking

| Data point | Status | Note |
|---|---|---|
| Comparator selection on genuine structural similarity (not superficial resemblance) | ✅ Done | Enforced explicitly in the prompt with a negative example |
| Per comparator: launch context, achievements, shortfalls, unintended consequences, current position | ✅ Done | `GlobalComparators.tsx` |
| Cross-comparator synthesis (what consistently works/fails/is context-dependent) | ✅ Done | |
| Position on the adoption/impact curve (phase, maturity %, momentum, nearest historical analog + similarity %) | ✅ Done | `CurvePosition.tsx` — not in the original spec, added as an evaluative extra |

## Section 6 — Related Policy Threads

| Data point | Status | Note |
|---|---|---|
| Supports / depends-on / in-tension-with / predecessor mapping | ✅ Done | `RelatedPolicies.tsx` |
| Analyst can add/remove connections | ❌ Not done | Spec calls this out explicitly ("analyst can add/remove connections") — current view is read-only |

## Section 7 — Predictive Forecast

| Data point | Status | Note |
|---|---|---|
| India-specific structural factors (demographic, geographic, market, political) | ✅ Done | `StructuralFactors.tsx` |
| Three scenarios (optimistic / base / adverse) with conditions + outcome + probability | ✅ Done | `ScenarioMatrix.tsx` |
| Named trigger conditions | ✅ Done | Rendered as `TriggerWatchlist.tsx` |
| Assumptions register, always visible (never optional) | ✅ Done | `Assumptions.tsx` renders unconditionally when present — matches the spec's strongest constraint: "a forecast without visible assumptions is not analysis, it is false confidence" |
| Quantitative forward curve (metric + confidence band across years) | ✅ Done | `ForecastCurve.tsx` — pure-SVG chart, not in the original spec, added as a predictive extra |

## Report-wide / cross-cutting

| Data point | Status | Note |
|---|---|---|
| Report header (policy, category, ministry, dates, status, health score) | ✅ Done | |
| Policy timeline as a visual anchor spanning origin → horizon | ✅ Done | `PolicyTimeline.tsx` |
| Evidence base: key facts + named source types | ✅ Done | `KeyFacts.tsx` |
| Conflicting evidence flagged | ✅ Done | |
| Evidence gaps flagged | ✅ Done | |
| **Inline citations** — every claim linkable back to its specific source | ❌ Not done | Sources are a flat list at the report's bottom, not attached per-claim; the "Traceability" design constraint isn't fully met |
| **Depth selector** (Brief / Standard / Deep Dive) | ❌ Not done | Hardcoded to `"Standard"` in `_assemble_report()`; no UI control |
| **Time horizon selector** (2yr / 5yr / 10yr) | ❌ Not done | Hardcoded to `"5yr"`; no UI control |
| **Comparison-countries override** (user picks comparators) | ❌ Not done | Comparator selection is fully model-driven |
| **Angle-of-interest input** ("focus on environmental impact") | ❌ Not done | Search bar only accepts a bare policy name |
| **PDF / document export** | ❌ Not done | Flagged as an open question in the spec itself |

## Data retrieval / grounding

| Data point | Status | Note |
|---|---|---|
| Live web search for recency | ❌ Not done | |
| GDELT event data (250M+ events since 1979, per `OVERVIEW.md`) | ❌ Not done | |
| Government/policy databases (PRS India, Gazette, MOSPI, RBI, NITI Aayog, etc.) | ❌ Not done | Named as *source types* by the model from its own training knowledge — nothing is actually fetched |
| Academic paper retrieval (Semantic Scholar, SSRN, arXiv) | ❌ Not done | |
| **Any real external grounding at all** | ❌ Not done | This is the single biggest gap between the spec and the running app — every field in every section above is generated from the model's own knowledge, with no retrieval step in front of it |

## Platform / infrastructure

*(not called out in the spec docs as report content, but load-bearing for delivering a "detailed" view reliably)*

| Data point | Status | Note |
|---|---|---|
| Real-time streaming of agent progress to the UI (token-by-token) | ✅ Done | SSE stream, `AgentTimeline.tsx` + `SharedStreamBox.tsx` |
| Per-agent raw output inspection | ✅ Done | `AgentResultPanel.tsx` |
| Per-job persistence (SQLite metadata + on-disk logs/outputs/report) | ✅ Done | `backend/jobs/<job_id>/` |
| Raw model output saved to disk on a JSON-parse failure, for debugging | ✅ Done | `raw/<stage>_unparsed.txt` |
| Landing-page policy list served from real backend data (not a frontend mock) | ✅ Done | `GET /policies` ← `backend/app/data_config/` |

---

### Summary

Everything the current 5-agent pipeline (Intake → Research → Causality → Impact → Forecast) can plausibly infer from a language model's own knowledge, the app now captures and renders — including several things the spec didn't originally ask for (curve position, quantitative forecast band). The gaps that remain are structural, not incremental:

1. **No real data retrieval** — the whole thing runs on model recall.
2. **No inline traceability** — sources aren't attached to individual claims.
3. **No user controls** for depth, time horizon, angle, or comparator override — the report is always maximal, one-size-fits-all.
4. **No state-level breakdown, amendment history, or export.**
