import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether,
    PageBreak
)

def build_study_pdf(pdf_path):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Color Palette - Professional Deep Slate & Tech Blue
    PRIMARY = colors.HexColor("#0F172A")    # Deep Navy / Slate
    SECONDARY = colors.HexColor("#0284C7")  # Tech Cyan / Blue
    ACCENT = colors.HexColor("#0D9488")     # Emerald / Teal
    TEXT_DARK = colors.HexColor("#1E293B")  # Charcoal for body text
    TEXT_MUTED = colors.HexColor("#475569") # Subtle slate
    BG_CARD = colors.HexColor("#F8FAFC")    # Very light slate
    LINE_COLOR = colors.HexColor("#E2E8F0") # Border line

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=PRIMARY,
        alignment=1 # Center
    )

    sub_title = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=SECONDARY,
        alignment=1 # Center
    )

    meta_style = ParagraphStyle(
        'DocMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_MUTED,
        alignment=1 # Center
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=PRIMARY,
        spaceAfter=2,
        textTransform='uppercase'
    )

    module_title = ParagraphStyle(
        'ModuleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=SECONDARY
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_DARK,
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_DARK,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    prompt_box_style = ParagraphStyle(
        'PromptBox',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#0F172A")
    )

    story = []

    # Helper function for section divider
    def add_section_header(title):
        return [
            Spacer(1, 4),
            Paragraph(title, section_heading),
            HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceAfter=6, spaceBefore=2)
        ]

    # --- COVER / HEADER ---
    story.append(Paragraph("HARSH SHUKLA — FULL-STACK MASTER LEARNING PLAN", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Zero-Fluff, High-Leverage AI Mentorship Syllabus & Interview Defense Guide", sub_title))
    story.append(Spacer(1, 3))
    meta_text = (
        "<b>Student:</b> Harsh Shukla &nbsp;|&nbsp; <b>Degree:</b> B.Tech CSE (3rd Year, 5th Sem), BSACET/AKTU &nbsp;|&nbsp; "
        "<b>Portfolio:</b> <a href='https://portfolio-website-two-nu-77.vercel.app' color='#0284C7'><u>portfolio-website-two-nu-77.vercel.app</u></a><br/>"
        "<b>Purpose:</b> Mobile-First Learning Guide & System Prompt for ChatGPT / AI Tutors"
    )
    story.append(Paragraph(meta_text, meta_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=8, spaceBefore=0))

    # --- SECTION 1: SYSTEM PROMPT INSTRUCTIONS FOR CHATGPT ---
    story.extend(add_section_header("PART 1: MASTER PROMPT FOR CHATGPT (HOW CHATGPT MUST TEACH)"))
    
    prompt_box_content = [
        [
            Paragraph(
                "<b>INSTRUCTIONS FOR CHATGPT:</b><br/>"
                "• <b>Student Background:</b> Harsh is a 3rd-year B.Tech CSE student (5th Semester). He has built and deployed a top-tier portfolio with 5 live projects, but needs to master the underlying fundamentals from the ground up.<br/>"
                "• <b>Teaching Methodology:</b> No 50-hour YouTube tutorial boredom. Explain every concept using <b>real-world analogies</b> (e.g. Restaurants, Postal services, Bank lockers, Delivery logistics). Use conversational Hinglish/simple English.<br/>"
                "• <b>Lesson Format (15-Minute Micro Sessions):</b><br/>"
                "&nbsp;&nbsp;1. <i>The Core Mental Model:</i> What is this concept and why does it exist in 3 bullet points?<br/>"
                "&nbsp;&nbsp;2. <i>Real-Life Analogy:</i> How does it work in the physical world?<br/>"
                "&nbsp;&nbsp;3. <i>Code in Action:</i> Minimal, crisp 5-10 lines of code showing how it works in Harsh's projects.<br/>"
                "&nbsp;&nbsp;4. <i>Interview Defense Drill:</i> Provide the exact question an interviewer will ask, followed by the exact punchy answer Harsh should speak.",
                prompt_box_style
            )
        ]
    ]
    p_table = Table(prompt_box_content, colWidths=[540])
    p_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CARD),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#CBD5E1")),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(p_table)
    story.append(Spacer(1, 8))

    # --- SECTION 2: HARSH'S 5 LIVE PORTFOLIO PROJECTS ---
    story.extend(add_section_header("PART 2: HARSH'S CORE PROJECTS (ANCHOR FOR ALL LESSONS)"))
    story.append(Paragraph("All concepts must be taught by relating them back to these 5 live applications:", body_style))

    projects_data = [
        ("1. MPLADS AI Sentinel", "React, TypeScript, Node.js, Geospatial Mapping, AI Anomaly Detection", "https://mplads-ai-sentinel-final.vercel.app/", "SIH National Finalist project auditing MP fund expenditures, detecting duplicate invoices, geospatial project auditing."),
        ("2. Talk to Jyotisha", "Python, Flask, Skyfield, NASA JPL DE421 Ephemeris, PostgreSQL, ReportLab", "https://talk-2-jyotisha.vercel.app/", "Astronomical computation engine for planetary longitudes, Lahiri sidereal conversion, automated Kundli PDF creation."),
        ("3. Heena Arora Fashion", "React 19, TypeScript, Google Gemini Multimodal API, Tailwind CSS, Vite", "https://heenaarora.vercel.app/", "Live couture designer client platform featuring interactive AI styling concierge and virtual fashion consultations."),
        ("4. HOS (House of Styles)", "React, TypeScript, Tailwind CSS, Vite, Responsive E-Commerce", "https://hos-dusky.vercel.app/", "Modern fashion label storefront with lookbooks, category filtering, cart management, and fluid responsive UX."),
        ("5. AI Code Reviewer", "Python, FastAPI, React, TypeScript, LLM Analysis, AST Parser", "https://ai-code-reviewer-eight-cyan.vercel.app/", "College capstone tool analyzing code snippets for bugs, security vulnerabilities, and Big-O complexity.")
    ]

    for p_name, p_stack, p_url, p_desc in projects_data:
        story.append(Paragraph(f"• <b>{p_name}</b> &nbsp;|&nbsp; <i>{p_stack}</i>", module_title))
        story.append(Paragraph(f"&nbsp;&nbsp;<b>Live:</b> <a href='{p_url}' color='#0284C7'><u>{p_url}</u></a>", body_style))
        story.append(Paragraph(f"&nbsp;&nbsp;<b>Summary:</b> {p_desc}", body_style))
        story.append(Spacer(1, 2))

    story.append(PageBreak())

    # --- SECTION 3: THE 7 COMPREHENSIVE LEARNING PILLARS ---
    story.extend(add_section_header("PART 3: THE 7 CORE FULL-STACK SYLLABUS PILLARS"))

    # PILLAR 1
    story.append(Paragraph("PILLAR 1: FRONTEND ARCHITECTURE & HOW BROWSERS THINK", module_title))
    story.append(Paragraph("• <b>HTML5 Semantic Skeleton:</b> DOM tree structure, &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, SEO tags, accessibility (a11y).", bullet_style))
    story.append(Paragraph("• <b>CSS & Modern Tailwind:</b> Box model (margin, border, padding, content), Flexbox vs CSS Grid, responsive design (sm, md, lg breakpoints), CSS specificity.", bullet_style))
    story.append(Paragraph("• <b>JavaScript Essentials (The Engine):</b> Variables (let, const), data types, arrow functions, Array methods (map, filter, reduce), Async/Await, Promises, and the Event Loop.", bullet_style))
    story.append(Paragraph("• <b>React 19 Core Mechanics:</b> Component hierarchy, Props vs State, Reconciliation & Virtual DOM, Hooks (useState, useEffect, useMemo, useRef), and unidirectional data flow.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> Why does React re-render? What is the difference between Virtual DOM and Real DOM?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 2
    story.append(Paragraph("PILLAR 2: CLIENT-SERVER HIGHWAY & NETWORKING", module_title))
    story.append(Paragraph("• <b>The HTTP Protocol:</b> Request-Response cycle, Headers, Status Codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error).", bullet_style))
    story.append(Paragraph("• <b>RESTful API Principles:</b> HTTP verbs (GET for fetch, POST for create, PUT/PATCH for update, DELETE for remove), clean resource URLs (`/api/projects`, `/api/users/123`).", bullet_style))
    story.append(Paragraph("• <b>Data Exchange & JSON:</b> Serialization (`JSON.stringify()`), Deserialization (`JSON.parse()`), payload structure.", bullet_style))
    story.append(Paragraph("• <b>CORS (Cross-Origin Resource Sharing):</b> What causes CORS errors, Preflight OPTIONS requests, and how to configure Access-Control-Allow-Origin on the backend.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> What is CORS and why is it enforced by the browser, not the server?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 3
    story.append(Paragraph("PILLAR 3: BACKEND DEVELOPMENT & AUTHENTICATION", module_title))
    story.append(Paragraph("• <b>Backend Frameworks:</b> Node.js/Express.js (event-driven asynchronous) vs Python/FastAPI (high-speed ASGI microservices with automatic Swagger docs).", bullet_style))
    story.append(Paragraph("• <b>Authentication vs Authorization:</b> Authentication = 'Who are you?'; Authorization = 'What are you allowed to do?'.", bullet_style))
    story.append(Paragraph("• <b>JWT (JSON Web Tokens):</b> Structure (Header.Payload.Signature), stateless authentication, Access Tokens vs Refresh Tokens, storing tokens securely (HttpOnly Cookies vs LocalStorage).", bullet_style))
    story.append(Paragraph("• <b>Password Security:</b> Hashing with salt (bcrypt/argon2), why plaintext passwords must never be stored.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> Why are HttpOnly cookies safer than localStorage for JWT storage?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 4
    story.append(Paragraph("PILLAR 4: DATABASES & DATA INTEGRITY", module_title))
    story.append(Paragraph("• <b>SQL (Relational) vs NoSQL (Document):</b> When to use PostgreSQL/SQLite (strict ACID, relationships, financial/audit data) vs MongoDB (flexible schemas, catalogs, nested documents).", bullet_style))
    story.append(Paragraph("• <b>Database Indexing:</b> B-Tree indexing, index lookups (O(log N)) vs full table scans (O(N)), trade-offs (fast reads vs slower writes).", bullet_style))
    story.append(Paragraph("• <b>ACID Properties:</b> Atomicity, Consistency, Isolation, Durability — banking transaction guarantee.", bullet_style))
    story.append(Paragraph("• <b>ORMs vs Query Builders vs Raw SQL:</b> Prisma, SQLAlchemy, Mongoose, and preventing N+1 query performance bugs.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> What is an index and why shouldn't we put an index on every single column?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 5
    story.append(Paragraph("PILLAR 5: SECURITY, AI BREACHES & DATA DEFENSE", module_title))
    story.append(Paragraph("• <b>SQL Injection (SQLi):</b> How attackers inject malicious SQL strings, and how Parameterized Queries/ORMs completely prevent it.", bullet_style))
    story.append(Paragraph("• <b>Cross-Site Scripting (XSS) & CSRF:</b> How script injection works, sanitizing user inputs, and CSRF protection tokens.", bullet_style))
    story.append(Paragraph("• <b>AI Breaches & Prompt Injection:</b> Defending LLM applications (like Heena Arora AI Concierge & AI Code Reviewer) against jailbreaks, system prompt leakage, and unauthorized data extraction.", bullet_style))
    story.append(Paragraph("• <b>Database Interruption & Disaster Recovery:</b> Connection pooling, read replicas, automated database snapshots/backups, and graceful failure fallbacks.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> How do you protect your database if your server gets compromised?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 6
    story.append(Paragraph("PILLAR 6: SYSTEM DESIGN & SCALABILITY", module_title))
    story.append(Paragraph("• <b>Handling Traffic Spikes (10,000 to 1 Million Users):</b> Monolith vs Microservices, Vertical scaling (bigger server) vs Horizontal scaling (more servers).", bullet_style))
    story.append(Paragraph("• <b>Caching with Redis:</b> Memory caching (RAM speed), caching API responses, Cache Invalidation strategies.", bullet_style))
    story.append(Paragraph("• <b>Load Balancers:</b> Nginx, Reverse Proxies, Round-robin distribution, SSL termination.", bullet_style))
    story.append(Paragraph("• <b>Edge CDNs:</b> Vercel / Cloudflare edge caching, eliminating server round-trips for static assets.", bullet_style))
    story.append(Paragraph("• <i>Interview Check:</i> How would you scale an e-commerce website during a flash sale?", body_style))
    story.append(Spacer(1, 5))

    # PILLAR 7
    story.append(Paragraph("PILLAR 7: MOCK INTERVIEW DRILLS & PROJECT DEFENSE", module_title))
    story.append(Paragraph("• <b>MPLADS AI Sentinel Defense:</b> Explain SIH problem statement, real-time anomaly detection heuristics, geospatial polygon mapping, and preventing duplicate fund requests.", bullet_style))
    story.append(Paragraph("• <b>Talk to Jyotisha Defense:</b> Explain astronomical coordinate calculation, NASA JPL ephemeris files, sidereal ayanamsha mathematics, and generating dynamic PDF charts.", bullet_style))
    story.append(Paragraph("• <b>Heena Arora Defense:</b> Explain Gemini API integration, prompt engineering for fashion advice, client business requirements, and sub-second asset delivery on Vercel.", bullet_style))
    story.append(Paragraph("• <b>Behavioral & Leadership:</b> Explaining role as Event & Technical Community Lead at Tech Manthan BSACET (organizing hackathons, mentoring peers, conflict resolution).", bullet_style))

    story.append(PageBreak())

    # --- SECTION 4: HOW TO USE WITH CHATGPT ON MOBILE ---
    story.extend(add_section_header("PART 4: HOW TO USE THIS ON CHATGPT (MOBILE STEP-BY-STEP)"))

    usage_steps = [
        ("Step 1: Save or Upload", "Download this PDF on your phone, or upload it to ChatGPT Plus/GPT-4o. If using free ChatGPT, simply copy-paste the Master Prompt below."),
        ("Step 2: Initialize Session", "Tell ChatGPT: 'You are my Senior Engineering Mentor. I am Harsh Shukla (3rd Year B.Tech CSE). Use the attached study plan to teach me Pillar by Pillar in 15-minute lessons.'"),
        ("Step 3: Daily Learning Cycle", "Every day, ask: 'Teach me Topic 1 of Pillar X using real-world analogies, code from my portfolio, and end with 2 mock interview questions.'"),
        ("Step 4: Speak Answers Out Loud", "When ChatGPT asks you the interview questions, type or voice-record your answer in your own words. Ask ChatGPT to critique and improve your answer.")
    ]

    for title, desc in usage_steps:
        story.append(Paragraph(f"• <b>{title}:</b> {desc}", body_style))
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 6))

    # Box with Copy-Paste Master Prompt for ChatGPT
    story.append(Paragraph("<b>COPY-PASTE MASTER PROMPT FOR CHATGPT:</b>", module_title))
    story.append(Spacer(1, 2))

    chatgpt_prompt = (
        "&quot;Act as my 1-on-1 Senior Software Engineering Mentor. My name is Harsh Shukla, a 3rd-year B.Tech CSE student at BSACET/AKTU. "
        "I have built a live developer portfolio at https://portfolio-website-two-nu-77.vercel.app with 5 real projects (MPLADS AI Sentinel, "
        "Talk to Jyotisha, Heena Arora Fashion, HOS Fashion, and AI Code Reviewer).<br/><br/>"
        "I want to master Full-Stack Development from the absolute basics to advanced system design for engineering job interviews. "
        "Follow these strict rules:<br/>"
        "1. Teach me in clear, conversational Hinglish with zero fluff.<br/>"
        "2. Explain every technical concept using intuitive real-world analogies (restaurants, banks, postal systems).<br/>"
        "3. Show how each concept applies directly to my 5 live portfolio projects.<br/>"
        "4. Keep each lesson short (15-minute bite-sized concepts).<br/>"
        "5. Conclude every topic with an Interview Defense Drill: Ask me 2 exact interview questions and guide me on how to answer with 100% confidence.<br/><br/>"
        "Let's start now with Pillar 1, Lesson 1: How Browsers, HTML, and the DOM actually work.&quot;"
    )

    prompt_table = Table([[Paragraph(chatgpt_prompt, prompt_box_style)]], colWidths=[540])
    prompt_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#EFF6FF")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#93C5FD")),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(prompt_table)

    doc.build(story)
    print(f"Study PDF successfully built at: {pdf_path}")

if __name__ == '__main__':
    out_dir = r"C:\Users\harsh\.gemini\antigravity\scratch\harsh-portfolio\public"
    os.makedirs(out_dir, exist_ok=True)
    pdf_target = os.path.join(out_dir, "Harsh_FullStack_AI_StudyPlan.pdf")
    build_study_pdf(pdf_target)
