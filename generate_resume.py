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
    KeepTogether
)

def build_resume(pdf_path):
    # Page setup with 0.45 inch margins for clean 2-page or comprehensive layout
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Color Palette - Professional Corporate Navy & Slate
    PRIMARY = colors.HexColor("#0F172A")    # Deep Slate / Navy
    SECONDARY = colors.HexColor("#0284C7")  # Tech Cyan / Blue
    TEXT_DARK = colors.HexColor("#1E293B")  # Charcoal for body text
    TEXT_MUTED = colors.HexColor("#475569") # Subtle slate
    LINE_COLOR = colors.HexColor("#CBD5E1") # Divider line

    # Custom Typography Styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=PRIMARY,
        alignment=1 # Center
    )

    subtitle_style = ParagraphStyle(
        'ResumeSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=SECONDARY,
        alignment=1 # Center
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
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
        fontSize=11,
        leading=14,
        textColor=PRIMARY,
        spaceAfter=3,
        textTransform='uppercase'
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=PRIMARY
    )

    item_subtitle = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=TEXT_MUTED
    )

    item_right = ParagraphStyle(
        'ItemRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=TEXT_MUTED,
        alignment=2 # Right
    )

    body_bullet = ParagraphStyle(
        'BodyBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    skills_category = ParagraphStyle(
        'SkillsCat',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=PRIMARY
    )

    skills_text = ParagraphStyle(
        'SkillsText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("HARSH SHUKLA", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("FULL-STACK SOFTWARE ENGINEER | B.TECH CSE (2024 – 2028)", subtitle_style))
    story.append(Spacer(1, 3))

    contact_line = (
        "Hathras, UP, India &nbsp;|&nbsp; +91 8273989136 &nbsp;|&nbsp; "
        "<a href='mailto:harshitshukla8218@gmail.com' color='#0284C7'><u>harshitshukla8218@gmail.com</u></a> &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/harsh-shukla-214196364' color='#0284C7'><u>linkedin.com/in/harsh-shukla</u></a> &nbsp;|&nbsp; "
        "<a href='https://github.com/harshitshukla8218-cell' color='#0284C7'><u>github.com/harshitshukla8218-cell</u></a>"
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.2, color=PRIMARY, spaceAfter=8, spaceBefore=0))

    # Helper function for section divider
    def add_section_header(title):
        elements = [
            Paragraph(title, section_heading),
            HRFlowable(width="100%", thickness=0.75, color=LINE_COLOR, spaceAfter=6, spaceBefore=1)
        ]
        return elements

    # 2. EDUCATION
    story.extend(add_section_header("EDUCATION"))
    edu_table_data = [
        [
            Paragraph("<b>BSA College of Engineering & Technology (BSACET), Mathura</b> — AKTU", item_title),
            Paragraph("2024 – 2028", item_right)
        ],
        [
            Paragraph("Bachelor of Technology (B.Tech) in Computer Science & Engineering &nbsp;|&nbsp; <b>CGPA: 7.8 / 10.0</b>", item_subtitle),
            Paragraph("Hathras / Mathura, UP", item_right)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[410, 130])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• <b>Relevant Coursework:</b> Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems (DBMS), Operating Systems, Software Engineering, RESTful Web Architecture.", body_bullet))
    story.append(Spacer(1, 6))

    # 3. TECHNICAL SKILLS
    story.extend(add_section_header("TECHNICAL SKILLS"))
    skills_data = [
        [Paragraph("• Programming Languages:", skills_category), Paragraph("Python 3, C/C++, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3", skills_text)],
        [Paragraph("• Frameworks & Web Tech:", skills_category), Paragraph("React 19, Node.js, Express.js, FastAPI, Flask, Tailwind CSS, Vite, Skyfield, ReportLab", skills_text)],
        [Paragraph("• Databases & Platforms:", skills_category), Paragraph("PostgreSQL, MongoDB Atlas, SQLite, REST APIs, Git, GitHub, Vercel, Postman", skills_text)],
        [Paragraph("• Core Engineering:", skills_category), Paragraph("Data Structures & Algorithms, Full-Stack Architecture, AI & LLM Integration (Google Gemini API), Anomaly Detection, Geospatial Mapping", skills_text)],
    ]
    skills_table = Table(skills_data, colWidths=[130, 410])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # 4. LEADERSHIP & TECHNICAL EXPERIENCE
    story.extend(add_section_header("LEADERSHIP & EXPERIENCE"))
    exp_table_data = [
        [
            Paragraph("<b>Tech Manthan Student Technical Community (BSACET)</b>", item_title),
            Paragraph("2024 – Present", item_right)
        ],
        [
            Paragraph("<i>Event & Technical Community Lead</i>", item_subtitle),
            Paragraph("Mathura, UP", item_right)
        ]
    ]
    exp_table = Table(exp_table_data, colWidths=[410, 130])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(exp_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Spearhead technical workshops, competitive programming sessions, and hackathon training for 300+ engineering students.", body_bullet))
    story.append(Paragraph("• Mentor junior students in full-stack web development (React, TypeScript, Node.js), version control with Git, and system design basics.", body_bullet))
    story.append(Spacer(1, 5))

    exp2_table_data = [
        [
            Paragraph("<b>Full-Stack Development (Independent & Client Work)</b>", item_title),
            Paragraph("2024 – Present", item_right)
        ],
        [
            Paragraph("<i>Freelance Software Developer</i>", item_subtitle),
            Paragraph("Remote", item_right)
        ]
    ]
    exp2_table = Table(exp2_table_data, colWidths=[410, 130])
    exp2_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(exp2_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Architect and deploy high-performance web applications, e-commerce storefronts, and automated microservices with clean modern UI/UX.", body_bullet))
    story.append(Spacer(1, 6))

    # 5. FEATURED PROJECTS (Exact 5 from Portfolio)
    story.extend(add_section_header("FEATURED PROJECTS"))

    def add_project(title, tech_stack, live_url, bullets):
        proj_elements = []
        p_table_data = [
            [
                Paragraph(f"<b>{title}</b> &nbsp;|&nbsp; <i>{tech_stack}</i>", item_title),
                Paragraph(f"<a href='{live_url}' color='#0284C7'><u>Live Website ↗</u></a>", item_right)
            ]
        ]
        p_table = Table(p_table_data, colWidths=[430, 110])
        p_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        proj_elements.append(p_table)
        proj_elements.append(Spacer(1, 2))
        for bullet in bullets:
            proj_elements.append(Paragraph(f"• {bullet}", body_bullet))
        proj_elements.append(Spacer(1, 5))
        return KeepTogether(proj_elements)

    # 1. MPLADS AI Sentinel
    story.append(add_project(
        "MPLADS AI Sentinel — Smart India Hackathon Finalist",
        "React, TypeScript, Node.js, AI Anomaly Detection, Geospatial Mapping",
        "https://mplads-ai-sentinel-final.vercel.app/",
        [
            "Built an AI-driven anomaly and fraud detection engine for the Smart India Hackathon (SIH) to monitor public development expenditures under the Member of Parliament Local Area Development Scheme.",
            "Engineered automated audit algorithms to flag duplicate vendor invoices, abnormal budget milestones, and ghost developmental claims.",
            "Integrated interactive geospatial tracking dashboards to visually audit physical progress on map coordinates against financial disbursement logs."
        ]
    ))

    # 2. Talk to Jyotisha
    story.append(add_project(
        "Talk to Jyotisha — Astronomical Engine & Vedic Platform",
        "Python, Flask, Skyfield, NASA JPL DE421 Ephemeris, PostgreSQL, ReportLab",
        "https://talk-2-jyotisha.vercel.app/",
        [
            "Engineered high-precision astronomical computation engine utilizing NASA JPL DE421 ephemeris and Skyfield to calculate exact planetary coordinates.",
            "Implemented Lahiri sidereal algorithms for whole-sign Vedic house systems with automated server-side generation of Kundli chart PDFs.",
            "Integrated OpenStreetMap Nominatim API for birthplace geocoding and automated appointment scheduling."
        ]
    ))

    # 3. Heena Arora Fashion
    story.append(add_project(
        "Heena Arora Fashion — Client Luxury Brand Platform",
        "React 19, TypeScript, Google Gemini Multimodal API, Tailwind CSS, Vite",
        "https://heenaarora.vercel.app/",
        [
            "Delivered a live commercial couture fashion storefront for designer client Heena Arora with editorial collections and high-conversion UX.",
            "Integrated Google Gemini multimodal AI to power an intelligent interactive styling concierge and personalized consultation bookings.",
            "Optimized frontend performance, achieving fluid transitions, responsive layouts across devices, and sub-second asset delivery."
        ]
    ))

    # 4. HOS (House of Styles)
    story.append(add_project(
        "HOS (House of Styles) — Brand Fashion E-Commerce Store",
        "React, TypeScript, Tailwind CSS, Vite, Responsive UI",
        "https://hos-dusky.vercel.app/",
        [
            "Created an end-to-end modern brand storefront for the HOS fashion label featuring curated seasonal lookbooks and apparel galleries.",
            "Engineered interactive category and silhouette filtering, fluid shopping bag state management, and frictionless checkout intent flows."
        ]
    ))

    # 5. AI Code Reviewer
    story.append(add_project(
        "AI Code Reviewer — Automated Source Code Quality Tool",
        "Python, FastAPI, React, TypeScript, LLM Analysis, AST Parser",
        "https://ai-code-reviewer-eight-cyan.vercel.app/",
        [
            "Built a developer analysis platform that inspects multi-language code snippets to detect runtime bugs, syntax errors, and security issues.",
            "Employed AST parsing and LLMs to evaluate algorithmic efficiency, generating Big-O time and space complexity ratings and refactoring guidance."
        ]
    ))

    # 6. CERTIFICATIONS & ACHIEVEMENTS
    story.extend(add_section_header("HONORS & CERTIFICATIONS"))

    cert_items = [
        ("Automate India Hackathon 2026 — Certificate of Recognition", "HackBriven & Microsoft Office Noida", "Aug 2026", "Recognized for outstanding innovation, technical dedication, and performance at Microsoft Office Noida."),
        ("GenAI Powered Data Analytics Job Simulation", "Tata & Forage", "June 2026", "Completed practical simulation in Exploratory Data Analysis, Delinquency Risk Prediction with AI, and AI-driven Strategy."),
        ("Smart India Hackathon (SIH) Finalist", "Ministry of Education Innovation Cell, Govt. of India", "2024", "Selected as national finalist for MPLADS AI Sentinel anomaly and fraud detection solution."),
        ("Full-Stack Web Development & Modern React Architecture", "Engineering Specialization", "2024", "Advanced React 19, TypeScript, Tailwind CSS, component architecture, and asynchronous state management.")
    ]

    for title, issuer, date, desc in cert_items:
        c_table_data = [
            [
                Paragraph(f"• <b>{title}</b> — <i>{issuer}</i>", item_title),
                Paragraph(date, item_right)
            ]
        ]
        c_table = Table(c_table_data, colWidths=[440, 100])
        c_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(c_table)
        story.append(Paragraph(f"&nbsp;&nbsp;{desc}", body_bullet))
        story.append(Spacer(1, 2))

    doc.build(story)
    print(f"Resume generated successfully at: {pdf_path}")

if __name__ == '__main__':
    out_dir = r"C:\Users\harsh\.gemini\antigravity\scratch\harsh-portfolio\public"
    os.makedirs(out_dir, exist_ok=True)
    pdf_target = os.path.join(out_dir, "Harsh_Shukla_Resume.pdf")
    build_resume(pdf_target)
