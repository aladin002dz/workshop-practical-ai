# Practical AI: Build Your Personal Website

> Interactive workshop presentation by Mahfoudh Arous: Plan, design, build and publish your personal portfolio on GitHub Pages using Gemini and Antigravity — with prompting, design, SEO and accessibility tips. Tamkeen Club for Media Skills, Chlef.

_32 slides — content generated from `lib/content/en.ts`._

---

### Slide 1/33 : Title

- **Title:** Practical AI: From Idea to Personal Website
- **Subtitle:** Plan, design, build and deploy your portfolio on GitHub Pages without complex setup
- **Speaker:** Mahfoudh Arous — Tamkeen Club for Media Skills · Chlef

---

### Slide 2/33 : A Live Website on Your Phone

*Our Goal*

- **A concrete outcome:** Leave today with a clear path to a live one-page personal website you can open on any smartphone.
- **Guided in plain language:** Directing modern AI tools with structured human briefs instead of memorizing complex coding syntax.
- **Human responsibility:** AI generates the draft and code, but you verify every claim, test the layout, and approve the result.
- **For every level:** Slides tagged Beginner give you the essentials; slides tagged Advanced give you the pro techniques.

---

### Slide 3/33 : The 4 Practical Stages

*The Roadmap*

1. **Planning & Content:** Define your audience, structure key sections, and brief Gemini with the RCTFC prompting framework.
2. **Visual Design:** Generate mockups with Nano Banana, then fix layout hierarchy, typography and color contrast.
3. **Building with Antigravity:** Produce clean HTML, CSS and JavaScript that is responsive, accessible and SEO-ready.
4. **Publishing on GitHub Pages:** Deploy to a free public URL, test on mobile, and share it with the world.

---

### Slide 4/33 : Four Free Tools, One Workflow [Beginner]

*Today's Toolkit*

- **Gemini:** Plan and write your content, save reusable Gems, and design visuals with Nano Banana image generation.
- **Antigravity:** Google's AI coding agent: it plans, writes the files, and previews your site in a built-in browser.
- **GitHub + GitHub Pages:** Stores every version of your code and hosts your website for free at `username.github.io`.
- **Chrome DevTools & Lighthouse:** Test phone sizes and get scores for performance, accessibility and SEO — already in your browser.

---

### Slide 5/33 : Stage 1 (section divider)

- **Planning & Content Structuring**

---

### Slide 6/33 : Audience First: Why Build a Website?

*Stage 1 · Audience & Purpose*

- **Who is your visitor?** Potential clients, future employers, academic collaborators, or student community peers.
- **What is their action?** Contacting you directly, exploring your portfolio samples, or learning about your specific skills.
- **Essential sections:** Hero headline ('I am … I help …'), About summary, Core skills, 2 featured project cards, and Contact.
- **Simplicity wins:** A polished, honest single-page website is vastly more effective than an unfinished multi-page site.

---

### Slide 7/33 : The RCTFC Prompting Framework

*Stage 1 · Prompting Framework*

- **R — Role:** Define AI's persona (e.g. 'Patient website content strategist for beginners').
- **C — Context:** Background scenario (e.g. 'One-page portfolio for a learner in Chlef seeking project collaborations').
- **T — Task:** Exact requested action (e.g. 'Structure the 5 page sections and draft concise copy for each').
- **F — Format:** Output layout (e.g. 'A markdown table with Section, Purpose, Draft Copy, and Facts to Verify').
- **C — Constraints:** Strict guardrails (e.g. 'Use only supplied facts; never invent credentials or fake testimonials; keep copy brief').

---

### Slide 8/33 : From a Vague Wish to a Precise Brief

*Stage 1 · Before & After*

> *Make me a portfolio website.*

**Result:** a generic template, an invented biography, the wrong language — and lots of rework.

> *You are a content planner. I'm a design student in Chlef looking for collaborators. Draft 5 sections as a table, in Arabic. Use only the facts below and mark gaps as [TO CONFIRM].*

**Result:** a structured, honest draft that is ready for your review in one shot.

---

### Slide 9/33 : 5 Habits for Better Answers [Beginner]

*Stage 1 · Prompting Tips*

- **One task per message:** Plan first, then write the copy, then the code — not everything in a single prompt.
- **Let the AI ask first:** 'Before answering, ask me up to 5 questions about my goals and audience.'
- **Show an example:** Paste a sentence or a site you like — one example beats a paragraph of description.
- **Iterate precisely:** 'Keep everything, only shorten the About section to 3 lines.' Say what to keep, not just what to change.
- **State language & length:** 'Answer in Arabic, maximum 60 words per section, simple vocabulary.'

---

### Slide 10/33 : Pro Prompting Techniques [Advanced]

*Stage 1 · Prompting Tips*

- **Separate data from instructions:** Wrap pasted material in tags like `<profile>…</profile>` so the model never confuses your CV with your orders.
- **Plan → review → execute:** Ask for a plan, correct it, and only then approve the work. Cheap to fix a plan, costly to fix a result.
- **Explain the why:** 'Keep it short because visitors read on phones' generalizes better than a bare 'be short'.
- **Built-in self-check:** 'Before finishing, verify every constraint and list any you could not meet.'
- **Build a prompt library:** Save prompts that worked as templates with [placeholders] — your personal toolkit grows every project.

---

### Slide 11/33 : Reliable Facts, Protected Privacy

*Stage 1 · Data & Privacy*

- **LinkedIn without scraping:** On your profile: More → Save to PDF, then upload that PDF to Gemini as your source of facts.
- **Fact-check every line:** AI fills gaps with confident fiction. Ask it to mark unknowns as [TO CONFIRM] and verify each one.
- **Label training exercises:** Never pass off academic exercises as real commercial clients. Honesty builds lasting professional trust.
- **Protect your privacy:** Never paste passwords, national ID numbers, home addresses, or secret API keys into AI prompts.

---

### Slide 12/33 : Gems & Skills: Write Your Rules Once

*Stage 1 · Reusable Instructions*

- **Gem (in Gemini):** A custom assistant with a name, standing instructions and knowledge files — e.g. your CV and tone guide.
- **Skill (in coding agents):** A folder with a `SKILL.md` file — name, description, steps — that the agent loads only when the task matches.
- **Same idea:** Your quality rules travel with you, instead of being retyped in every new conversation.
- **Where to find them:** Gems: gemini.google.com → Gems. Skills: supported by a growing list of agents — check your tool's docs.

---

### Slide 13/33 : How to Write a Great Skill or Gem [Advanced]

*Stage 1 · Reusable Instructions*

- **One job per skill:** 'portfolio-copy-reviewer' beats 'do-everything'. Small skills are easier to trigger, test and fix.
- **The description is the trigger:** Say what it does AND when to use it — agents choose which skill to load from that one line.
- **Steps, then a checklist:** A numbered procedure followed by a final quality checklist the agent must pass before answering.
- **Show one good output:** A short example of the expected result teaches more than a page of rules.
- **Test and version it:** Run it on 3 real requests, fix where it drifts, and keep it in Git like any other code.

---

### Slide 14/33 : Stage 2 (section divider)

- **Visual Design & Layout Reference**

---

### Slide 15/33 : Design Essentials for Modern Portfolios [Beginner]

*Stage 2 · Principles*

- **Readable typography:** Maximum 2 fonts, body text at least 16px, line height about 1.6, lines of 60–75 characters.
- **The 60-30-10 color rule:** 60% neutral background, 30% primary color, 10% accent reserved for buttons and links.
- **Contrast you can measure:** At least 4.5:1 for text and 3:1 for large text and icons — check it with a free contrast checker.
- **Whitespace & hierarchy:** A consistent spacing scale (8, 16, 24, 32px…) and one clear focal point per section.
- **Reading direction:** Right-to-left (RTL) for Arabic, left-to-right (LTR) for English/French — mirror the layout, not just the text.

---

### Slide 16/33 : Prompting Nano Banana for Web Mockups

*Stage 2 · Nano Banana*

- **Use a recipe:** Subject + layout + style + palette + mood: 'Portfolio homepage screenshot, desktop 16:9, minimal, warm white, navy text, green accent'.
- **Be concrete:** Hex codes (#0F766E), font styles ('geometric sans-serif') and section names beat 'nice colors'.
- **Edit, don't restart:** 'Keep everything, make the header navy.' Conversational edits keep the design consistent.
- **Use reference images:** Upload a site you admire, or your photo to get a matching avatar or hero illustration.
- **Generate assets, too:** Profile illustration, hero background, favicon — then compress them before using them on the site.

---

### Slide 17/33 : From Image Mockup to Working Website

*Stage 2 · Visual Reference*

- **An image is not code:** Generated images cannot be clicked, copied, indexed by Google, or adapted across screen sizes.
- **Separate visuals from copy:** Keep your approved text stored separately; AI-rendered text in images is often misspelled.
- **Iterate before building:** Refine design decisions ('simplify layout', 'increase text contrast') before asking for implementation.
- **Hand over the image:** Attach the final mockup to the coding agent as a visual reference, together with your approved copy.

---

### Slide 18/33 : Design Systems, DESIGN.md & Templates [Advanced]

*Stage 2 · Design Systems*

- **A system, not a picture:** Color tokens, type scale, spacing, components and their states (hover, focus, disabled).
- **DESIGN.md:** One markdown file that describes your system so coding agents follow it — browse examples on designmd.ai.
- **Extract it from your mockup:** 'Extract this image's palette, fonts and spacing as CSS variables and a DESIGN.md file.'
- **Templates, legally:** Start from a gallery template and customize it — check the license and credit the author.
- **Light & dark from day one:** Define both palettes as tokens and verify contrast in each theme, like these slides do.

---

### Slide 19/33 : Stage 3 (section divider)

- **Building with Antigravity**

---

### Slide 20/33 : The Web Trio: HTML, CSS & JavaScript

*Stage 3 · Code Generation*

- **Clear roles for each file:** index.html defines semantic structure, styles.css styles visual presentation, script.js adds interaction.
- **Lightweight static stack:** No complex frameworks, npm build chains, or backend servers needed — simple files run in any browser.
- **Briefing Antigravity:** Feed the agent the approved content table + design reference image + strict responsive rules.
- **Instant local preview:** Verify the working page immediately in the built-in browser preview before uploading anywhere.

---

### Slide 21/33 : Getting the Best from Antigravity

*Stage 3 · Working with an Agent*

- **Plan first:** Use Planning mode, read the implementation plan, and comment on it before any code is written.
- **Small steps:** One feature per request, checked in the preview each time. Big-bang requests hide big bugs.
- **Checkpoints with Git:** Commit every working version, so a bad change is one click away from being undone.
- **Project rules:** Write your stack, style and 'never do' rules in a rules file (e.g. `AGENTS.md`) the agent reads every time.
- **Debug with evidence:** Paste the exact error, a screenshot, and what you expected versus what you saw.

---

### Slide 22/33 : Responsive: One Site, Every Screen

*Stage 3 · Responsive Design*

- **Mobile-first:** Style for a 360px phone first, then add `@media (min-width: …)` rules for larger screens.
- **The viewport tag:** `<meta name="viewport" content="width=device-width, initial-scale=1">` — without it, phones zoom out.
- **Fluid layout:** Flexbox and Grid, `rem` and `%` units, and `clamp()` for font sizes instead of fixed pixels.
- **Flexible images:** `max-width: 100%` so nothing overflows, and `srcset` to serve smaller files to phones.
- **Test for real:** DevTools device mode at 360 / 768 / 1280px, plus a real phone. Tap targets of 44px or more.

---

### Slide 23/33 : Accessible to Everyone

*Stage 3 · Accessibility*

- **Semantic HTML:** `header`, `nav`, `main`, `section`, `footer`; one `h1`, headings in order, real `button` and `a` elements.
- **Text alternatives:** Meaningful `alt` text on informative images; `alt=""` on decorative ones.
- **Contrast & color:** 4.5:1 minimum for text, and never convey meaning by color alone (add an icon or label).
- **Keyboard first:** Tab through every link and button; the focus outline must always be visible.
- **Language & preferences:** Set `lang` and `dir` on `<html>`; respect `prefers-reduced-motion` and `prefers-color-scheme`.

---

### Slide 24/33 : SEO: Help People Find You

*Stage 3 · SEO*

- **Title & description:** A unique `<title>` under 60 characters (name + role) and a meta description of about 155 characters.
- **Real, relevant text:** Write what people search for — your name, skills and city — as text, never inside an image.
- **Social previews:** Open Graph tags (`og:title`, `og:description`, `og:image` 1200×630) for rich WhatsApp/LinkedIn cards.
- **Structured data:** A JSON-LD `Person` block with your name, job title and `sameAs` links (LinkedIn, GitHub).
- **Get indexed:** Canonical URL, `sitemap.xml` and `robots.txt`, then submit the site in Google Search Console.

---

### Slide 25/33 : Fast Sites & AI-Powered Audits [Advanced]

*Stage 3 · Performance*

- **Light images:** WebP/AVIF, resized to their display size (ideally under 200 KB), with `width`/`height` to avoid layout shift.
- **Load only what's seen:** `loading="lazy"` on images below the fold; no heavy libraries for a one-page site.
- **Fonts with care:** System fonts or at most 2 weights, with `font-display: swap`.
- **Measure with Lighthouse:** DevTools → Lighthouse: aim for 90+ in Performance, Accessibility, Best Practices and SEO.
- **Let AI audit AI:** 'Audit this site against our checklist, report the 3 worst issues, then fix only those.'

---

### Slide 26/33 : Review Before You Publish

*Stage 3 · Quality Checklist*

- **Mobile responsiveness:** Test at smartphone widths (360px): no horizontal scrolling, readable text, comfortable tap targets.
- **Accessibility & structure:** One logical H1, ordered headings, visible keyboard focus, descriptive alt text, sufficient contrast.
- **Real links, no fake forms:** Use a real mailto: or public LinkedIn link. Avoid forms that pretend to send emails without a backend.
- **Security audit:** Confirm no passwords, private credentials, or API keys exist in client-side HTML, CSS, or JS files.

---

### Slide 27/33 : Stage 4 (section divider)

- **Publishing on GitHub Pages**

---

### Slide 28/33 : Git: Track and Save Your Work

*Stage 4 · Version Control*

- **Download Git:** Free installer for Windows, macOS and Linux at [git-scm.com/downloads](https://git-scm.com/downloads).
- **Start tracking:** `git init` — turns your project folder into a Git repository.
- **Stage your files:** `git add .` — selects every changed file for the next save point.
- **Save a snapshot:** `git commit -m "first version"` — records the staged files with a short message.
- **Upload to GitHub:** `git push` — sends your commits to the repository online.

---

### Slide 29/33 : GitHub: Publish Your Site in 4 Steps

*Stage 4 · Free Hosting*

1. **Create repository:** On [GitHub](https://github.com), create a public repository named `username.github.io` (replace username with your exact handle).
2. **Add your files:** Push from Antigravity or upload index.html, styles.css and script.js to the root of the main branch.
3. **Enable Pages:** In Settings → Pages: set Source to 'Deploy from a branch', choose 'main' and '/(root)', then Save.
4. **Visit your live site:** After a minute or two, open `https://username.github.io` on your phone!

---

### Slide 30/33 : Going Further After Launch [Advanced]

*Stage 4 · After Launch*

- **Custom domain:** Settings → Pages → Custom domain, a DNS CNAME record pointing to `username.github.io`, then Enforce HTTPS.
- **Google Search Console:** Verify the site, submit your sitemap, and watch the indexing and page-experience reports.
- **Check your link preview:** Paste your URL in WhatsApp or LinkedIn to confirm the Open Graph card looks right.
- **A README is part of the portfolio:** Explain the project, the tools used and what you learned — recruiters read repositories too.
- **Automate later:** When you outgrow plain files, GitHub Actions can build and deploy on every push.

---

### Slide 31/33 : You Are the Editor and Publisher

*Stage 4 · Ethical Responsibility*

- **Own your content:** AI can draft code and sentences, but you are legally and professionally accountable for what goes live.
- **Public repositories are open:** Anyone can read source code in a public GitHub repository. Never commit private notes or API secrets.
- **Factual accuracy:** Regularly audit your live portfolio to ensure all project links, descriptions, and contact info stay up to date.
- **Continuous improvement:** Your website is a living project. Update it monthly as you complete new training exercises and projects.

---

### Slide 32/33 : Closing — Your Next Step: Build Your Own

AI provides the leverage and speed. Your personal voice, honesty, and consistent practice create the real value.

- **Plan:** Brief Gemini with RCTFC, using only verified facts about you.
- **Design:** One mockup, a 60-30-10 palette, contrast of 4.5:1 or more.
- **Build & Check:** Responsive, accessible, SEO-ready — then a Lighthouse score of 90+.
- **Publish:** Free hosting on GitHub Pages at `username.github.io`.

---

### Slide 33/33 : Stay in Touch

Keep learning after the workshop — scan a code to follow along.

- **مركز التسلية العلمية الغلام محمد** (Facebook page): https://www.facebook.com/profile.php?id=100093977586577
- **نادي تمكين للمهارات الإعلامية** (Facebook page): https://www.facebook.com/profile.php?id=61587196953545
- **mahfoudh.dev** (Website): https://mahfoudh.dev/
- **Mahfoudh Tech** (YouTube channel): https://www.youtube.com/@mahfoudh-tech-ar

---
