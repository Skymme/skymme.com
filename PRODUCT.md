# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and leads of data science teams (finance, space industry, and more broadly any field where forecasting drives decisions) evaluating Jade Vaillant for a first permanent position (CDI) as a Data Scientist. They arrive from a CV, LinkedIn or an application, usually on desktop during a screening pass, and need to judge within seconds whether the profile is credible, then find depth (projects, experience, skills) and a way to contact.

Secondary: HR recruiters scanning for the target role, availability and the downloadable CV.

## Product Purpose

skymme.com is Jade Vaillant's personal site: who she is, the role she is looking for (data scientist focused on prediction: analyse, model, predict), projects, background, skills, downloadable CV and contact. Success means a data hiring manager leaves convinced of a solid double culture (software engineering + data/ML) and sends an e-mail or downloads the CV.

## Positioning

An INSA Rennes engineer with real full stack delivery experience (six internships, Sopra Steria, 6TM, Infotel, Airbus…) who specialised in Data & AI and defines the data scientist job as prediction: understanding how data behaves in order to forecast it and turn forecasts into decisions. The software culture is the differentiator versus pure-statistics profiles.

## Operating Context

- Visitors come from CV PDFs, LinkedIn and job applications; many also open the PDF CV.
- Content must stay readable without JavaScript (search engines, screen readers, applicant tracking systems).
- French-language site.

## Capabilities and Constraints

- Static single page: Vite + TypeScript, no framework, Tailwind CSS 4. All content is authored in `index.html`; scripts only enhance (theme toggle, reveal on scroll, copy e-mail).
- Magic UI components (React) are ported to vanilla TypeScript/CSS rather than adding React.
- Light and dark themes, both first-class, with a toggle and system preference.
- Hosted on OVH free 100 MB plan at the root of `www/`, shared with Le Mamichat (`/le-mamichat/`); deploy via SFTP script, relative paths (`base: './'`).
- CV PDFs in `public/cv/` are synced from the Curriculum-Vitae repo; only the Data Scientist CV is published (classic + ATS versions).
- Sections and copy may be reorganised; copy changes are proposed to the user before shipping.

## Brand Commitments

- Name: Jade Vaillant, domain skymme.com, GitHub handle Skymme.
- Must read as modern / tech, with dark and light themes, and colours that evoke data work.
- Must not resemble Meeply (meeply.tv), the user's own board-game app whose look inspired the previous version of this site (dark ground, single electric-blue accent, blue-violet gradients, rounded cards).
- Style reference chosen by the user (2026-09-14): the Melodify music-streaming demo at https://uupm.cc/demo/music-streaming, with an emerald + violet palette to evoke data. A "topographic survey" contour-map direction was tried and rejected.

## Evidence on Hand

- Real content in `index.html`: experiences, education, languages (TOEIC 940/990), skills, projects (Meeply, Le Mamichat, Little Search Engine, 15-puzzle, FourchLang) with GitHub links.
- CV PDFs: `public/cv/CV-Jade-Vaillant-Data-Scientist.pdf` and `-ATS.pdf`.
- No testimonials, metrics from employers, or published models/benchmarks: none may be invented.

## Product Principles

- Prove the data mindset through the page itself, not through claims.
- Screening speed first: role, availability and CV reachable within one viewport.
- Honest and precise: every number and fact comes from the CV.
- Lightweight and accessible: works without JS, fast on a shared host.

## Accessibility & Inclusion

WCAG AA contrast in both themes, keyboard navigation, reduced-motion support, content available without JavaScript.
