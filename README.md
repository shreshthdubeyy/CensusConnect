# CensusConnect — Demographic Field Survey & Registry Platform

A resilient, mobile-first Progressive Web App (PWA) designed for field demographic data collection, household mapping, and socio-economic registry management.

## 📌 Project Overview
CensusConnect is a lightweight field registry tool built to streamline data collection in low-connectivity rural and urban survey environments. It features a hierarchical Building ➔ Household data model, rapid search-and-edit workflows, offline resilience, and instant dual-language switching.

## ✨ Key Features
- 📱 Mobile-First PWA: Installable with offline caching via Service Workers.
- ⚡ Dual-Mode Operation: Instant 1-click recruiter Sandbox Mode (synthetic data) + password-guarded live sync.
- 🌐 Dual-Language UI (i18n): One-click toggle between English and हिन्दी.
- 🏢 Hierarchical Data Structure: Parent Building with multiple household units & non-residential tagging.
- 🔍 Fast Registry Search & Edit: Multi-parameter query with inline batch updates.
- 🎨 Modern Glassmorphism UI: Accessible design system with Lucide icons.

## 🛠️ Tech Stack
- Frontend: HTML5, Modern Vanilla JavaScript (ES6+), CSS3 Variables
- PWA: Service Worker (`sw.js`), Web App Manifest
- Icons: Lucide Icons, Custom SVG Vector Assets
- Cloud Backend: Google Apps Script REST Endpoint + Google Sheets
- Deployment: Vercel (Static Hosting)
