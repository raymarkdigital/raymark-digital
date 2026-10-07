/* ==========================================================================
   RAYMARK DIGITAL — OFFICIAL CLIENT INTERACTION LOGIC
   Domain: https://raymarkdigital.com
   Brand: Raymark Digital | Tagline: WHERE YOUR BRAND SHINES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. Sticky Header Scroll Effect
  // ------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // ------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  function openMobileMenu() {
    mobileDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileMenu);
  }

  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeMobileMenu();
    }
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', closeMobileMenu);
  });

  // ------------------------------------------------------------------------
  // 3. Selected Work / Concept Filter Controls
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 4. Detailed Service Architecture Modal
  // ------------------------------------------------------------------------
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalTag = document.getElementById('serviceModalTag');
  const serviceModalBody = document.getElementById('serviceModalBody');
  const serviceModalCta = document.getElementById('serviceModalCta');
  const serviceTriggerLinks = document.querySelectorAll('.open-service');

  const serviceData = {
    seo: {
      tag: 'Search Engine Optimization',
      title: 'Strategic Search Visibility (SEO)',
      body: `
        <p>Improve organic search relevance, crawl efficiency, and long-term search equity through an engineering-led SEO methodology.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Core Technical & Strategic Deliverables:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Technical SEO:</strong> Server response times, Core Web Vitals, clean canonicalization, and indexation controls.</li>
            <li>&bull; <strong>On-Page & Information Architecture:</strong> Semantic hierarchy, internal linking graph, and search intent alignment.</li>
            <li>&bull; <strong>Topical Authority Clusters:</strong> Comprehensive content modeling designed to establish domain credibility.</li>
            <li>&bull; <strong>Strict Compliance:</strong> No black-hat shortcuts or artificial backlink schemes; solely enduring search equity.</li>
          </ul>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-dark-muted);">Note: Raymark Digital never guarantees arbitrary rank positions; we engineer the structural prerequisites for sustainable organic prominence.</p>
      `
    },
    aeo: {
      tag: 'Next-Generation Search',
      title: 'AEO & GEO (Answer & Generative Engine Optimization)',
      body: `
        <p>Structure your digital footprint so modern AI answer engines, generative summarizers, and conversational agents cite your brand with high factual clarity.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Optimization Vectors:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Entity Clarity:</strong> Disambiguating brand entities and corporate leadership in machine-readable knowledge graphs.</li>
            <li>&bull; <strong>Structured Schema Modeling:</strong> Extensive JSON-LD implementation (Organization, Services, FAQs, Articles).</li>
            <li>&bull; <strong>Synthesized Content Structuring:</strong> Direct, citation-friendly answers that LLMs ingest during generative search.</li>
            <li>&bull; <strong>Topical Brand Consistency:</strong> Ensuring cross-platform messaging reinforces singular brand authority.</li>
          </ul>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-dark-muted);">We optimize for AI comprehension and factual retrieval without misleading algorithmic guarantees.</p>
      `
    },
    social: {
      tag: 'Brand Resonance',
      title: 'Social Media Marketing',
      body: `
        <p>Build an enduring digital presence tailored to where executive buyers, industry peers, and discerning consumers spend their attention.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Strategic Focus Areas:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Platform-Specific Strategy:</strong> Tailored narratives across LinkedIn, Instagram, and vertical channels.</li>
            <li>&bull; <strong>High-Aesthetic Creative:</strong> Editorial visuals, motion assets, and brand storytelling aligned with your luxury tone.</li>
            <li>&bull; <strong>Active Community Cultivation:</strong> Fostering qualified dialogues and direct relationship building.</li>
          </ul>
        </div>
      `
    },
    performance: {
      tag: 'Paid Acquisition',
      title: 'Performance Marketing',
      body: `
        <p>Create measurable, disciplined advertising campaigns centered on precise audience segmentation, compelling creative, and frictionless landing experiences.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Methodology:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Audience & Intent Targeting:</strong> Eliminating ad waste by focusing on high-intent buyer cohorts.</li>
            <li>&bull; <strong>Creative as Targeting:</strong> Testing copy angles, visual formats, and value propositions systematically.</li>
            <li>&bull; <strong>Post-Click Alignment:</strong> Tight message-matching between ad creative and landing page experiences.</li>
            <li>&bull; <strong>Clean Attribution:</strong> Server-side tracking and reliable customer acquisition cost monitoring.</li>
          </ul>
        </div>
      `
    },
    web: {
      tag: 'Digital Experience',
      title: 'Website Design & Development',
      body: `
        <p>Design and engineer fast, responsive, and conversion-focused websites built around your strategic brand posture and business objectives.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Architectural Principles:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Performance & Core Web Vitals:</strong> Zero bloat, rapid paint metrics, and flawless mobile responsiveness.</li>
            <li>&bull; <strong>Conversion-Rate Optimization (CRO):</strong> Clear navigation hierarchy and psychological clarity in layout.</li>
            <li>&bull; <strong>Design System Integrity:</strong> Purposeful typography, moderate corner radii, and sophisticated color ratios.</li>
          </ul>
        </div>
      `
    },
    content: {
      tag: 'Editorial Authority',
      title: 'Content Marketing',
      body: `
        <p>Develop useful, high-substance content assets that build undeniable brand authority, search relevance, and long-term commercial trust.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Core Content Formats:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Industry Whitepapers & Briefings:</strong> Insightful perspectives addressing complex buyer questions.</li>
            <li>&bull; <strong>Search-Optimized Knowledge Hubs:</strong> Evergreen resources that earn organic backlinks naturally.</li>
            <li>&bull; <strong>Human, Confident Voice:</strong> Avoiding hollow AI buzzwords in favor of authoritative, clear writing.</li>
          </ul>
        </div>
      `
    },
    branding: {
      tag: 'Brand Elevation',
      title: 'Branding & Creative Design',
      body: `
        <p>Forge a distinctive, luxury identity through strategic visual positioning, refined creative direction, and campaign design that commands prestige.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Deliverables:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Visual Identity Systems:</strong> Logo usage, luxury color palettes, and typographic hierarchies.</li>
            <li>&bull; <strong>Campaign Creative Suites:</strong> Digital ad assets, editorial layouts, and pitch collateral.</li>
            <li>&bull; <strong>Brand Voice Guidelines:</strong> Confident, precise, and sophisticated communication standards.</li>
          </ul>
        </div>
      `
    },
    strategy: {
      tag: 'Growth Intelligence',
      title: 'Digital Strategy & Analytics',
      body: `
        <p>Connect core business goals with verified audience data, reliable conversion tracking, and ongoing multi-channel optimization.</p>
        <div style="margin: 1.25rem 0; padding: 1rem; background: rgba(67, 7, 10, 0.4); border-left: 2px solid var(--color-gold); border-radius: 4px;">
          <strong style="color: var(--color-white); display: block; margin-bottom: 0.35rem;">Intelligence Disciplines:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem;">
            <li>&bull; <strong>Measurement Frameworks:</strong> Auditing analytics, tracking event integrity, and funnel drop-off analysis.</li>
            <li>&bull; <strong>Audience Journey Mapping:</strong> Uncovering how high-value prospects discover, evaluate, and purchase.</li>
            <li>&bull; <strong>Executive Reporting:</strong> Clear commercial briefings connecting digital actions with bottom-line revenue.</li>
          </ul>
        </div>
      `
    }
  };

  function openServiceModal(key) {
    const data = serviceData[key] || serviceData['seo'];
    serviceModalTag.textContent = data.tag;
    serviceModalTitle.textContent = data.title;
    serviceModalBody.innerHTML = data.body;
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  serviceTriggerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = link.getAttribute('data-service');
      openServiceModal(serviceKey);
    });
  });

  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', closeServiceModal);
  }

  if (serviceModalCta) {
    serviceModalCta.addEventListener('click', closeServiceModal);
  }

  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
      closeServiceModal();
    }
  });

  // ------------------------------------------------------------------------
  // 5. Privacy Policy & Legal Modal
  // ------------------------------------------------------------------------
  const privacyModal = document.getElementById('privacyModal');
  const privacyModalClose = document.getElementById('privacyModalClose');
  const privacyLinks = document.querySelectorAll('.open-privacy, #privacyPolicyLink, #termsLink');

  function openPrivacyModal() {
    privacyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePrivacyModal() {
    privacyModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openPrivacyModal();
    });
  });

  if (privacyModalClose) {
    privacyModalClose.addEventListener('click', closePrivacyModal);
  }

  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      closePrivacyModal();
    }
  });

  // ------------------------------------------------------------------------
  // 6. Contact Form Submission (Validation & Modal Feedback)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('raymarkContactForm');
  const successModal = document.getElementById('successModal');
  const successModalCloseBtn = document.getElementById('successModalCloseBtn');
  const successModalMessage = document.getElementById('successModalMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value;
      const email = document.getElementById('clientEmail').value;
      const company = document.getElementById('clientCompany').value;
      const website = document.getElementById('clientWebsite').value || 'Not provided';
      const service = document.getElementById('serviceSelect').value;
      const budget = document.getElementById('budgetSelect').value;
      const message = document.getElementById('projectDetails').value;

      // Button loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Transmitting Strategy Request...</span>';
      submitBtn.disabled = true;

      const payload = {
        name: name,
        email: email,
        company: company,
        website: website,
        service: service,
        budget: budget,
        message: message,
        _subject: `New Strategic Inquiry from ${name} (${company}) — Raymark Digital`,
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/contact.raymarkdigital@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        successModalMessage.innerHTML = `
          Thank you, <strong>${name}</strong> from <strong>${company}</strong>.<br><br>
          Your strategic inquiry regarding <strong>${service}</strong> has been delivered directly to <strong>contact.raymarkdigital@gmail.com</strong>.<br><br>
          A Senior Strategist will review your requirements and follow up at <strong>${email}</strong> within one business day.
        `;
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        contactForm.reset();
      })
      .catch(error => {
        console.error('Submission error:', error);
        // Fallback notification
        successModalMessage.innerHTML = `
          Thank you, <strong>${name}</strong> from <strong>${company}</strong>.<br><br>
          Your strategic inquiry has been recorded. You can also reach our leadership desk directly at <a href="mailto:contact.raymarkdigital@gmail.com" style="color: var(--color-gold-bright); text-decoration: underline;">contact.raymarkdigital@gmail.com</a>.
        `;
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      })
      .finally(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      });
    });
  }

  function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (successModalCloseBtn) {
    successModalCloseBtn.addEventListener('click', closeSuccessModal);
  }

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      closeSuccessModal();
    }
  });

  // ------------------------------------------------------------------------
  // 7. Global Keyboard Accessibility (Escape key)
  // ------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      closePrivacyModal();
      closeSuccessModal();
      closeMobileMenu();
    }
  });

});
