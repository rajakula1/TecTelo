/**
 * Tectelo Consulting - Interactive Logic
 * AI Architecture & Agent Engineering
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Navigation
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });

    // Close menu on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Service Card Pre-Selection
  const serviceSelect = document.getElementById('serviceSelect');
  const serviceLinks = document.querySelectorAll('[data-service]');

  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceName = link.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        // Find matching option or closest match
        let found = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].text)) {
            serviceSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          // If it's a demo or specific request
          for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value.includes(serviceName.split(':')[0])) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }
      }
    });
  });

  // 4. Contact Form Handling (Prepares mailto & shows confirmation)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName')?.value.trim();
      const workEmail = document.getElementById('workEmail')?.value.trim();
      const companyName = document.getElementById('companyName')?.value.trim() || 'Not specified';
      const selectedService = document.getElementById('serviceSelect')?.value;
      const projectDetails = document.getElementById('projectDetails')?.value.trim();

      const recipient = 'raj.akula@praxifyai.com';
      const subject = encodeURIComponent(`Tectelo Consulting Inquiry: ${selectedService} - ${fullName}`);
      const body = encodeURIComponent(
`Hi Raj,

I would like to inquire about consulting services with Tectelo Consulting.

Name: ${fullName}
Company: ${companyName}
Email: ${workEmail}
Service of Interest: ${selectedService}

Context / Project Details:
${projectDetails}

Looking forward to speaking with you.
`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Show user feedback
      if (formFeedback) {
        formFeedback.hidden = false;
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Thank you, ${fullName}!</strong><br/>
          Your inquiry is ready. Opening your email client to send to <strong>${recipient}</strong>.<br/>
          <small>If your mail client didn't open automatically, <a href="${mailtoUrl}" style="color: #38bdf8; text-decoration: underline;">click here to send directly</a> or call <strong>(737) 610-3312</strong>.</small>
        `;
      }

      // Trigger mailto link
      window.location.href = mailtoUrl;
    });
  }

  // 5. Microsoft Bookings Modal Handlers
  const bookingTriggers = document.querySelectorAll('.trigger-booking-modal');
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (bookingModal) {
    bookingTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        bookingModal.classList.add('active');
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
      });
    }

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  // 6. Interactive Architecture Demo Specs Modal
  const demoButtons = document.querySelectorAll('.demo-spec-btn');
  const archModal = document.getElementById('architectureModal');
  const archModalCloseBtn = document.getElementById('archModalCloseBtn');
  const archModalTitle = document.getElementById('archModalTitle');
  const archModalBadge = document.getElementById('archModalBadge');
  const archModalContent = document.getElementById('archModalContent');
  const archModalInquireBtn = document.getElementById('archModalInquireBtn');

  const demoSpecsData = {
    'healthtech-scout': {
      title: 'HealthTech Scout — Autonomous Research & Citation Engine',
      badge: 'AGENTIC WORKFLOW SHOWCASE',
      pipeline: `[User Query] ──> [Planner & Query Fan-Out] ──> [Exa Neural Search API]
      │
      ├──> [Document Parser & HTML Cleaner]
      └──> [Cross-Encoder Claim Validator] ──> [Report Generator + Verified Citations]`,
      stack: ['LangGraph / Custom Agent State Loop', 'Exa AI Neural Search API', 'Cross-Encoder Claim Verification', 'Pydantic Structured Output Schemas'],
      challenges: [
        'Eliminates hallucinated URLs by enforcing neural claim-source grounding',
        'Parallelized sub-queries across medical journals and industry filings',
        'Deterministic JSON output with exact footnote citations'
      ],
      benchmarks: [
        { label: 'Claim Verification', value: '100% Grounded' },
        { label: 'Latency', value: '4.2s Full Report' },
        { label: 'Data Boundary', value: 'Public / Synthetic Only' }
      ]
    },
    'voice-ai': {
      title: 'Voice AI Appointment Agent — Real-Time Conversational Pipeline',
      badge: 'REAL-TIME VOICE PIPELINE',
      pipeline: `[Caller Audio] ──(WebRTC/WS)──> [Deepgram Nova-2 Streaming STT]
      │
      ├──> [Pipecat Turn Detector & Interruption Gate]
      └──> [Stateful LLM Agent Loop] ──> [Calendar API Tool Call]
            │
            └──> [ElevenLabs Turbo v2.5 Streaming TTS] ──> [Audio Egress <650ms]`,
      stack: ['Pipecat Voice Framework', 'Deepgram Nova-2 Streaming STT', 'ElevenLabs Turbo v2.5 TTS', 'WebSockets / Daily WebRTC', 'Google / Outlook Calendar APIs'],
      challenges: [
        'Sub-650ms round-trip voice turn latency to prevent awkward pauses',
        'Natural barge-in / interruption handling when caller speaks mid-response',
        'Deterministic tool execution for calendar availability & scheduling'
      ],
      benchmarks: [
        { label: 'Turn Latency', value: '< 650ms Total' },
        { label: 'VAD Delay', value: '180ms Cutoff' },
        { label: 'Interruption Success', value: '99.4%' }
      ]
    },
    'healthcare-rag': {
      title: 'Healthcare RAG Engine — Grounded Non-PHI Clinical Retrieval',
      badge: 'HIPAA-SAFE HYBRID RETRIEVAL',
      pipeline: `[Clinical Guidelines] ──> [Hierarchical Semantic Chunking]
      │
      ├──> [Hybrid Dense Vectors (Qdrant) + Sparse BM25 Keyword Search]
      └──> [Cross-Encoder Reranker] ──> [Verbatim Grounding Gate]
            │
            └──> [Response Synthesis with Exact Paragraph Anchor Citations]`,
      stack: ['Qdrant / pgvector Vector Database', 'BGE / Cohere Cross-Encoder Reranker', 'BM25 Sparse Lexical Search', 'Synthetic Non-PHI Guidelines Dataset', 'Ragas / TruLens Eval Harness'],
      challenges: [
        'Zero-hallucination tolerance for policy and dosage guidelines',
        'Multi-stage reranking to prioritize precise paragraph-level matches',
        'Strict tenant boundary isolation and non-PHI compliance guardrails'
      ],
      benchmarks: [
        { label: 'Precision @ 3', value: '96.2%' },
        { label: 'Hallucination Rate', value: '0% on Test Suite' },
        { label: 'Retrieval Latency', value: '110ms' }
      ]
    }
  };

  if (archModal && demoButtons.length > 0) {
    demoButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const demoKey = btn.getAttribute('data-demo');
        const spec = demoSpecsData[demoKey];

        if (spec && archModalContent) {
          archModalTitle.textContent = spec.title;
          archModalBadge.textContent = spec.badge;

          let stackList = spec.stack.map(s => `<li>✓ ${s}</li>`).join('');
          let challengeList = spec.challenges.map(c => `<li>• ${c}</li>`).join('');
          let benchChips = spec.benchmarks.map(b => `<span class="arch-bench-chip"><strong>${b.value}</strong> &bull; ${b.label}</span>`).join('');

          archModalContent.innerHTML = `
            <div class="arch-pipeline-view">${spec.pipeline}</div>
            
            <div class="arch-modal-grid">
              <div class="arch-box">
                <h4>Engineered Tech Stack</h4>
                <ul>${stackList}</ul>
              </div>
              <div class="arch-box">
                <h4>Key Challenges Solved</h4>
                <ul>${challengeList}</ul>
              </div>
            </div>

            <div class="arch-benchmarks">
              ${benchChips}
            </div>
          `;

          if (archModalInquireBtn) {
            archModalInquireBtn.setAttribute('data-service', spec.title);
          }

          archModal.classList.add('active');
        }
      });
    });

    if (archModalCloseBtn) {
      archModalCloseBtn.addEventListener('click', () => {
        archModal.classList.remove('active');
      });
    }

    archModal.addEventListener('click', (e) => {
      if (e.target === archModal) {
        archModal.classList.remove('active');
      }
    });
  }
});

