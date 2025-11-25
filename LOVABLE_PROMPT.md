# Lovable Portfolio Generation Prompt

Create a professional portfolio website for Vijayakumar K with the following specifications:

## Personal Information
- **Name**: VIJAYAKUMAR K
- **Title**: Product Manager | Agile Coach | Digital Transformation Leader
- **Email**: kvkumarsg@gmail.com
- **Phone**: +91 91763 60717
- **LinkedIn**: https://www.linkedin.com/in/vijaykm/
- **Notion Portfolio**: https://vijayakumar.notion.site/VIJAYAKUMAR-K-Portfolio-764911b22f8540fbb8920f1df6e0cfe9
-  **Summary**: Product leader with 15+ years of experience in product management, agile coaching, and digital transformation. Certified SAFe LPM, SAFe POPM, PSPO, PSM, and multiple ICAgile certifications. Expert in fintech, healthcare, and enterprise solutions.

## Design Requirements

### Color Scheme
- **Background**: Clean white (#ffffff)
- **Primary Colors**: Blue (#3b82f6) and Green (#10b981) gradients
- **Text**: Dark gray (#1a202c) for body, black for headings
- **Accents**: Blue-green gradients for buttons and highlights

### Layout
- **Header**: Fixed top navigation with horizontal menu
  - Logo: "VIJAYAKUMAR K" with blue-green gradient
  - Menu items in a single row with light blue/green backgrounds
  - Active menu item has full blue-green gradient with white text
  - Responsive mobile menu (hamburger on mobile)

### Menu Items
1. Home
2. About
3. PM Show Case
4. Other Portfolios
5. Certifications
6. Side Projects
7. Speaking
8. Vibe Coding
9. Resources
10. Recognition
11. Contact

### Footer
- Clean gradient from light gray to white
- **4 Social Media Icons** (spread out with good spacing):
  - LinkedIn (blue gradient icon)
  - Twitter/X (cyan gradient icon)
  - Email (red/pink gradient icon)
  - Portfolio/Notion (purple gradient icon)
- Icons should be 32px, with rounded backgrounds and hover effects
- Copyright info and "Built with React" text

## Page Content

### Home Page
- **Hero Section**:
  - Large heading: "Building Products That Matter"
  - Subtitle with personal summary
  - Contact links (email, phone, LinkedIn)
  - CTAs: "View My Work" and "Get In Touch" buttons
  - Product management hero image from Unsplash

- **Stats Section** (3 cards):
  - "15+ Years of Experience"
  - "22+ Certifications"
  - "50+ Teams Coached"
  - Each card: white background, border, icon at top

- **Featured Case Studies** (4 projects):
  1. UniAcco - Product Teardown (EdTech, student accommodation)
  2. Zepto - Quick Commerce Analysis (10-minute delivery)
  3. Jupiter - Fintech Product Review (digital banking)
  4. WazirX - Crypto Exchange Analysis (cryptocurrency trading)
  
  Each project card:
  - Image at top
  - Title and description
  - Tags (blue pills)
  - Outcome metric in green box

- **Core Expertise** (8 skills in grid):
  - Product Strategy, Agile Coaching, User Research, Stakeholder Management
  - Product Discovery, Fintech, Digital Transformation, Team Leadership

### PM Showcase Page
- Grid of all case studies with images
- Each card: image, title, description, tags, outcome
- Clean white cards with subtle shadows

### Certifications Page
- Grid layout of certification badges
- 22+ certifications including:
  - SAFe LPM, SAFe POPM
  - PSPO, PSM (Scrum.org)
  - ICAgile certifications (ICP-APO, ICP-ATF, ICP-ACC, ICP-ENT, ICP-CAT)
  - Product Management certifications
- Each cert: icon/badge, name, issuer

###About Page
- Professional profile image at top
- Bio and philosophy
- Highlighted stats (same as home)
- Core expertise with icons
- "What Drives Me" section with values

### Side Projects Page
- 3 side projects with emoji icons
- Vibe Coding section below
- Each project: icon, title, description, link

### Speaking Page
- List of speaking engagements
- Each: title, event, date, topics
- Call-to-action: "Want me to speak at your event?"

### Contact Page
- Contact form (name, email, message)
- Contact information displayed
- Social links

## Technical Requirements
- Use React with React Router
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Mobile-responsive design
- Clean, minimal white background throughout
- Professional typography (Inter font)
- Smooth hover effects and transitions

## Key Features
- ✅ Horizontal navigation menu (not vertical sidebar)
- ✅ White/light backgrounds everywhere (NO dark backgrounds)
- ✅ Blue-green gradient buttons with embossed text
- ✅ Social media icons spread out in footer (not clustered)
- ✅ Clean, readable design with excellent contrast
- ✅ Professional images from Unsplash API
- ✅ Smooth animations and micro-interactions
 ✅ Mobile-first responsive design

## Sample Data

### PM Showcase Projects
```
1. {
  title: "UniAcco - Product Teardown",
  description: "Comprehensive analysis of student accommodation platform",
  outcome: "Identified 5 key UX improvements for 18-22% conversion increase",
  tags: ["Product Teardown", "UX Analysis", "EdTech"],
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
}

2. {
  title: "Zepto - Quick Commerce Giant",
  description: "Strategic analysis of 10-minute delivery model",
  outcome: "Analyzed growth strategy and unit economics",
  tags: ["Quick Commerce", "Strategy", "Delivery"],
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
}

3. {
  title: "Jupiter - Fintech Product Review",
  description: "Deep dive into digital banking experience",
  outcome: "Evaluated feature set and user engagement tactics",
  tags: ["Fintech", "Digital Banking", "Product Analysis"],
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
}

4. {
  title: "WazirX - Crypto Exchange Analysis",
  description: "Cryptocurrency trading platform assessment",
  outcome: "Reviewed security, UX, and trading features",
  tags: ["Crypto", "Trading Platform", "Security"],
  image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
}
```

### Certifications (Sample)
- Professional Scrum Product Owner (PSPO) - Scrum.org
- SAFe® Lean Portfolio Management (LPM) - Scaled Agile
- Professional Scrum Master (PSM) - Scrum.org
- ICP-Agile Product Ownership (ICP-APO) - ICAgile
- ICP-Agile Team Facilitation (ICP-ATF) - ICAgile
- SAFe® Product Owner/Product Manager (POPM) - Scaled Agile

## Final Notes
- Keep everything clean and minimal
- White backgrounds throughout
- Excellent readability is priority #1
- Professional, modern design
- Fast loading with optimized images
- SEO-friendly with proper meta tags

Generate a complete, production-ready portfolio website based on these specifications!
