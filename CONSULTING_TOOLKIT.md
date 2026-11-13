# Tectelo Consulting — Client Intake & Operations Toolkit
**AI Architecture & Agent Engineering**  
*Operating entity: Tectelo Consulting LLC &bull; Austin, Texas*

---

## 1. Microsoft Bookings Setup & Integration

When your official Microsoft Bookings calendar link is ready:
1. Open [`index.html`](file:///Users/rajakula/Documents/Code/TecTelo/index.html).
2. Search for:
   ```html
   https://outlook.office365.com/owa/calendar/TecteloConsulting@tectelo.com/bookings/
   ```
3. Replace that URL with your published Microsoft Bookings URL.

---

## 2. 20-Minute Discovery Call Framework

### Phase 1: Context & Current Architecture (0–5 mins)
- *"What does your application or workflow do today?"*
- *"Where are you seeing bottlenecks with LLMs? (e.g., latency, hallucinations, tool-calling failures, cost, token limits)?"*
- *"Are you currently running a proof-of-concept or targeting production users?"*

### Phase 2: Technical Scope & Constraints (5–12 mins)
- **Model & Orchestration**: Are you using LangChain, LlamaIndex, Pipecat, custom Python/TypeScript agents, or direct API calls?
- **Data & Ingestion**: Where is the knowledge stored (vector DB, SQL, internal APIs, FHIR/EHR)?
- **Real-time Voice**: Target latency budget (e.g., <700ms)? Which STT/TTS models?
- **Compliance & Security**: Does any part of the data flow touch real PHI / HIPAA data?
  > **Tectelo PHI Rule**: *"Assessments operate on architecture schemas, synthetic datasets, and API specs. If real PHI access is required, we execute a BAA under a dedicated SOW before touching live systems."*

### Phase 3: Deliverable Mapping & Next Steps (12–20 mins)
- **Path A (De-risking)**: Start with an **AI Architecture Assessment** (written report + 60-min walkthrough).
- **Path B (Implementation)**: Scope an **AI Agent Prototype** or **Voice AI Prototype** (clean-room delivery in 1–2 weeks).
- **Path C (Ongoing Advisory)**: Establish a **Fractional AI Architect** monthly retainer.

---

## 3. Outreach Templates

### Template A: Direct Network (Former Colleagues, Founders, Engineering Leaders)
> **Subject**: Quick question on your AI / agent architecture
>
> Hi [Name],
>
> Hope you're doing well! I'm reaching out because I recently launched **Tectelo Consulting**, where I take on a small number of focused architecture and engineering engagements around AI agents, real-time Voice AI, RAG, and production LLM systems.
>
> Given my background (18+ years in enterprise architecture, TOGAF, AWS SAP, and shipping production multi-agent systems in healthcare), I'm working with a few engineering teams to solve agent orchestration failure modes, high latency, and production integration challenges.
>
> If you or your engineering team are looking to review your AI architecture or prototype an agent/voice pipeline, I’d be glad to share a few technical observations.
>
> No pressure at all — happy to connect and catch up either way: [Your Microsoft Bookings Link]
>
> Best,  
> **Raj Akula**  
> Principal AI Architect &bull; Tectelo Consulting  
> Austin, TX &bull; (737) 610-3312

---

### Template B: Targeted LinkedIn InMail (CTOs, Heads of AI, HealthTech Founders)
> Hi [Name] — I noticed you're scaling [Company/Product] and working on AI automation.
>
> I run **Tectelo Consulting** in Austin, TX, helping teams turn fragile AI prototypes into production-grade systems — specifically multi-agent workflows, real-time Voice AI (<650ms turn latency), hybrid RAG, and EHR/FHIR integrations.
>
> If you're tackling architecture bottlenecks, tool-calling reliability, or latency hurdles, I’d be happy to take a look and share a quick technical breakdown.
>
> Here’s our site and portfolio demos: https://tectelo.com
>
> Best,  
> **Raj Akula** &bull; raj.akula@tectelo.com

---

## 4. Statement of Work (SOW) Standard Clauses

### Clause 1: PraxifyAI IP Separation & Clean-Room Guarantee
> *"Client acknowledges that Consultant operates as an independent contractor under Tectelo Consulting LLC. All work product, custom code, diagrams, and documentation created specifically for Client under this Statement of Work ('Deliverables') shall become the sole property of Client upon final payment. Consultant expressly covenants that Deliverables are created clean-room and do not incorporate any proprietary IP, trade secrets, confidential datasets, or source code belonging to PraxifyAI or any other third party."*

### Clause 2: PHI & BAA Governance
> *"Unless explicitly covered by an executed Business Associate Agreement (BAA) appended hereto as Exhibit A, all Services, architecture reviews, and prototype testing shall be conducted exclusively using synthetic, anonymized, or non-PHI datasets and schemas. Client agrees not to transmit, disclose, or provide access to Protected Health Information (PHI) to Consultant without prior execution of said BAA."*

