# 369 Fitness Wellness – Premium Gym & Wellness Website

Modern, high-energy React website for a premium gym & wellness studio in Chennai, India. Built for conversions with fast performance, strong branding, and clear CTAs.

## 🚀 Features

- **Modern Design**: Premium, energetic design with brand colors (#D72638 crimson, #111111 black)
- **Fully Responsive**: Mobile-first design that works on all devices
- **7 Complete Pages**: Home, About, Programs, Membership, Wellness Corner, Testimonials, Contact
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **SEO Optimized**: Meta tags and keywords for better search visibility
- **Fast Performance**: Optimized images and lazy loading
- **Accessibility**: Alt text for images, good color contrast

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Express API** - Lightweight backend for bookings + emails
- **JSON Content** - Easy-to-edit section-based JSON files in `src/data`

## 📦 Local Development

```bash
# Install dependencies
npm install

# Start frontend (Vite)
npm run dev

# Start backend (Express API)
npm run server

# Or run both together
npm run dev:full

# Build for production (static assets in dist)
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
369-fitness-wellness/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation with mobile menu
│   │   └── Footer.jsx       # Comprehensive footer
│   ├── pages/
│   │   ├── Home.jsx         # Homepage with all sections
│   │   ├── About.jsx        # About page
│   │   ├── Programs.jsx     # Programs listing
│   │   ├── Membership.jsx   # Membership plans
│   │   ├── Wellness.jsx     # Wellness corner
│   │   ├── Testimonials.jsx # Success stories
│   │   └── Contact.jsx      # Contact form & map
│   ├── data/                 # Easy-to-edit content files
│   │   ├── gym.json          # Name, tagline, contact, social, why369
│   │   ├── programs.json     # Programs list
│   │   ├── trainers.json     # Team
│   │   ├── memberships.json  # Pricing plans
│   │   ├── testimonials.json # Success stories
│   │   ├── wellness.json     # Wellness services
│   │   ├── facility.json     # Facility sections/images
│   │   └── about.json        # Story, mission, values
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports
├── public/                  # Static assets
├── index.html               # HTML template
└── tailwind.config.js       # Tailwind configuration
```

## 🎨 Brand Colors

- **Black**: `#111111` (brand-black)
- **Crimson Red**: `#D72638` (brand-red)
- **White**: `#FFFFFF` (brand-white)
- **Light Gray**: `#EFEFEF` (brand-light)

## 📱 Pages

### Home Page
- Hero section with tagline and CTAs
- Why Choose 369 section
- Featured Programs preview
- World-Class Facilities showcase
- Call-to-Action section with free trial benefits
- Stats showcase (500+ members, 15+ trainers, 10K+ hours)

### Contact Page
- Free trial booking form (React Hook Form + Zod)
- Email notifications via backend (Nodemailer)
- Google Maps embed for the Velachery location
- WhatsApp quick action

## 🗄️ Content Management

Edit content directly in `src/data/*.json`. No code changes required.

## 🔧 Customization

To update content, edit `src/data/database.json`. All components automatically pull data from this file.

## 🔔 Email Setup (Gmail)

1) Enable 2‑Step Verification in your Google account
2) Create an App Password (App: Mail, Device: Other)
3) Create `.env` at project root:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=YOUR_16_CHAR_APP_PASSWORD
FROM_EMAIL=369 Fitness <yourgmail@gmail.com>
NOTIFY_TO=yourgmail@gmail.com
```

4) Restart server: `npm run server` (or `npm run dev:full`)
5) Test: `curl -X POST http://localhost:4000/api/test-email -H "Content-Type: application/json" -d '{}'`

## 🌐 Deployment

Static-only (no emails)
- Netlify: build `npm run build`, publish `dist/`

Full (emails/API enabled)
- Vercel: import repo, set env vars, deploy; API runs as serverless functions
- Alternatively, host API separately (Render/Fly/Netlify Functions) and point `/api` proxy to it

Vite dev proxy for local API: see `vite.config.js` (`/api -> http://localhost:4000`).

## 🧪 Endpoints

- `POST /api/bookings` – Save booking and send emails (admin + user)
- `GET /api/bookings` – List bookings (basic admin)
- `POST /api/test-email` – Send a test email using current SMTP config

## ✅ Checklist Before Go‑Live

- Replace Unsplash images with real photos (hero, programs, facility)
- Set GA4 ID in `index.html`
- Configure SMTP `.env` and send a real test booking
- Add domain + deploy to Vercel (if email needed)
- Update OG image and sitemap domain
