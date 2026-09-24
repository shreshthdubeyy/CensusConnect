# CensusConnect — Field Demographic Data Collection & Socio-Economic Registry

<p align="center">
  <img src="logo.svg" alt="CensusConnect Logo" width="96" height="96" style="border-radius: 20px;">
</p>

<p align="center">
  <strong>A resilient, mobile-first Progressive Web App (PWA) designed for field demographic surveys, multi-tier household mapping, and socio-economic registry management.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PWA-Installable-4f46e5?style=flat-square&logo=pwa&logoColor=white" alt="PWA Ready">
  <img src="https://img.shields.io/badge/Offline-Resilient%20Service%20Worker-emerald?style=flat-square" alt="Offline Resilient">
  <img src="https://img.shields.io/badge/Runtime-Dual--Mode%20Sandbox%20%7C%20Live-blue?style=flat-square" alt="Architecture">
  <img src="https://img.shields.io/badge/i18n-English%20%7C%20हिन्दी-indigo?style=flat-square" alt="Localization">
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel" alt="Vercel">
</p>

---

## 📌 Overview

**CensusConnect** is an operational survey suite built for field enumerators, statistical surveyors, and municipal administrators. Designed specifically for mobile field workflows and low-connectivity environments, it streamlines the capture of hierarchical building structures, household units, demographic indicators, socio-economic classifications, and living amenity access.

---

## 📋 Comprehensive 4-Part Survey Questionnaire

Each household unit (`Makaan`) is structured into four distinct questionnaire modules:

```text
Physical Structure [Building No: CN-0001]
  ├── Unit 0001
  │     ├── [Section 1] Structure: Pucca | Ownership: Owned
  │     ├── [Section 2] Head: Aarav Sharma | Mobile: 9876500001 | Members: 4 | Category: General
  │     ├── [Section 3] Livelihood: Private Sector | SE-ID: SE-1024 | Scheme: Health Insurance
  │     └── [Section 4] Water: Piped Tap | Sanitation: Flush Toilet + LPG | Remarks: Permanent Resident
  └── Unit 0002
        ├── [Section 1] Structure: Pucca | Ownership: Rented
        ├── [Section 2] Head: Rohan Sharma | Mobile: 9876500002 | Members: 3 | Category: OBC
        ├── [Section 3] Livelihood: Self-Employed | SE-ID: SE-1025 | Scheme: Food Security / Ration
        └── [Section 4] Water: Piped Tap | Sanitation: Flush Toilet + LPG | Remarks: Tenant
```

### 1. 📍 Section 1: Household Mapping & Structure
- **Structure / House Type**: Classification across *Pucca (Concrete / Permanent)*, *Semi-Pucca (Tiled / Brick)*, *Kutcha (Temporary)*, *Independent House*, and *Apartment / Multi-Unit*.
- **Ownership Status**: Categorized by *Owned*, *Rented / Tenancy*, *Institutional / Provided*, or *Other*.

### 2. 👤 Section 2: Demographic Profile
- **Head of Household**: Full legal name with title capitalization.
- **Mobile Contact**: 10-digit numeric validation with auto-formatting.
- **Family Members Count**: Numeric family size index (`1 - 50`).
- **Community Group**: Classification (*General*, *OBC*, *SC*, *ST*, *Other*).

### 3. 💼 Section 3: Socio-Economic & Livelihood Registry
- **Primary Source of Income**: *Salaried / Private*, *Government Service*, *Self-Employed / Business*, *Agriculture / Farming*, *Daily Wage / Labor*, *Retired / Pensioner*.
- **Socio-Economic ID (SE-ID)**: Alphanumeric tracking for welfare scheme eligibility (e.g. `SE-1024`).
- **Social Welfare Scheme Enrollment**: *National Food Security / Ration*, *Health Insurance (Ayushman / State)*, *Housing Assistance (PMAY)*, *Multiple Schemes*, or *None*.

### 4. 🏠 Section 4: Household Amenities & Field Observations
- **Drinking Water Source**: *Piped Tap Water (Treated)*, *Borewell / Tube Well*, *Public Supply / Tanker*, *Other*.
- **Sanitation & Cooking Fuel**: *Individual Flush Toilet & LPG*, *Individual Toilet & Electric*, *Shared Facility*, *Other*.
- **Field Observations**: Free-form qualitative notes by the field officer.

---

## 🔒 Dual-Mode Architecture

To allow seamless public portfolio evaluation while protecting private citizen data, CensusConnect features a decoupled dual-mode runtime:

```mermaid
flowchart TD
    Visitor([Recruiter / Guest / Reviewer]) --> AuthGate{Login Screen}
    
    AuthGate -->|1-Click: Try Demo Mode| Sandbox[Portfolio Sandbox Engine]
    Sandbox --> MockStore[(In-Memory Synthetic Non-PII Dataset)]
    MockStore --> Workspace[Full Survey Workspace]
    
    AuthGate -->|Password Authenticated| LiveEngine[Cloud Sync Engine]
    LiveEngine --> GAS[Google Apps Script REST API]
    GAS --> SheetDB[(Secure Google Sheets Registry)]
    SheetDB --> Workspace
```

1. **Portfolio Sandbox Mode**:
   - 1-click access via the **"Try Demo Mode"** button (or `?demo=true`).
   - Uses an isolated in-memory synthetic dataset — **zero real citizen PII is exposed**.
   - Full CRUD capability (Add buildings, add household units, search, edit, delete).
2. **Live Production Mode**:
   - Guarded by backend password verification.
   - Synchronizes records in real time with Google Sheets via a Google Apps Script Web App.

---

## 🌐 Dual-Language Internationalization (`i18n`)

One-click instant UI translation between **English** and **हिन्दी**:
- All questionnaire section titles, dropdown choices, validation hints, status pills, and system toasts update dynamically without reloading the page.

---

## 🛠️ Technology Stack

| Layer | Solution | Description |
| :--- | :--- | :--- |
| **Frontend Core** | Vanilla HTML5, ES6+ JavaScript, CSS3 | Zero dependencies, instant loading, no bundler overhead |
| **PWA Architecture** | Service Worker (`sw.js`) + Web App Manifest | Offline shell caching and standalone installation |
| **Design System** | Custom CSS Variables & Glassmorphism | Clean, accessible SaaS design with responsive touch targets |
| **Icons** | Lucide Icons (SVG) | Crisp, uniform vector icons |
| **Cloud Storage** | Google Apps Script REST Web App + Google Sheets | Serverless, zero-maintenance relational spreadsheet backend |
| **Deployment** | Vercel | Global edge CDN static delivery |

---

## 📂 Project Structure

```text
├── index.html        # Single-page application markup & navigation
├── style.css         # Modern CSS tokens, responsive grid & touch UI styles
├── app.js            # Questionnaire engine, i18n dictionary, sandbox & sync
├── sw.js             # Service worker for offline shell caching (v5)
├── manifest.json     # Progressive Web App configuration
├── logo.svg          # Demographic pillar vector emblem
├── Logo.png          # App icon for PWA splash screens
├── .gitignore        # Git exclusion rules
└── README.md         # Documentation
```

---

## 🚀 Quickstart & Local Setup

Because CensusConnect uses standard web standards with zero build dependencies, running it locally is instant:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/census-connect.git

# 2. Open the directory
cd census-connect

# 3. Serve with any HTTP server (or open index.html directly)
python -m http.server 3000
# or: npx serve .
```

Navigate to `http://localhost:3000` in your browser.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub.
2. Import the repo into [Vercel](https://vercel.com).
3. Set **Framework Preset** to `Other` (Static HTML).
4. Click **Deploy** — your app will be live globally in seconds.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
