🏎️ F1 Hub — Formula 1 Dashboard & Race Predictor

A full-stack Formula 1 analytics platform built with Next.js, TailwindCSS, Framer Motion, and Supabase.
This project delivers an interactive dashboard for F1 fans with real-time-style widgets, team-colored UI elements, and a machine-learning-ready architecture.

⸻

🚀 Features

🏠 Home Dashboard

A live F1-style dashboard featuring:
	•	Favourite Driver Card (2025 driver lineup ready)
	•	Car Widget with dynamic livery
	•	Upcoming Starting Grid (team-colored, alternating layout)
	•	Driver Stats (predictions + last races)
	•	Pole Gap vertical chart
	•	Next Race Countdown
	•	Driver Standings (team-colored indicator bar)
	•	Constructor Standings
	•	Weather Summary
	•	Last Race Results
	•	Trending Drivers
	•	Fastest Lap Comparison
	•	Track Preview Card (track map ready)

All widgets are fully animated using Framer Motion, with a modern dark theme inspired by F1 Live Timing.

⸻

🧑‍🤝‍🧑 User System (Supabase Auth)

Includes a complete authentication system using Supabase:
	•	User Signup (Email + Password)
	•	Login Page
	•	Onboarding Flow
	•	Select favourite driver
	•	Select favourite team
	•	Stores preferences in profiles table
	•	Row-Level Security policies ensuring every user sees only their own data

Backend connected via a single Supabase client in /lib/supabase.ts.

⸻

🏎️ Predictor Page (ML-Ready)

The Predictor page (frontend prototype for now) includes:
	•	Driver Head-to-Head widget
	•	Track Characteristics
	•	Tyre Strategy Suggestion
	•	Weather impact
	•	Sector Pace Panel
	•	Race Pace Delta Analysis
	•	Performance Index Summary
	•	Race Prediction Result Block

All widgets currently use static data but are structured to plug directly into FastF1 API outputs and a future machine-learning model.

⸻

🧩 Additional Pages

Drivers Page

Grid of all 2025 drivers with:
	•	PNG photos from public/drivers/
	•	Team colors
	•	Clean, minimal cards

Teams Page

All 10 teams with:
	•	Team logo from public/team-logos/
	•	Short description
	•	Mini color bar

Races Page

All 24 races of the 2025 calendar with:
	•	Title, date, circuit
	•	Track outline map support
	•	Dark card layout

⸻

🛠️ Tech Stack

Frontend
	•	Next.js 14+ (App Router)
	•	React
	•	TailwindCSS
	•	Framer Motion
	•	Radix UI (optional)

Backend
	•	Supabase Authentication
	•	Supabase Database
	•	RLS Security Policies

Future Integrations
	•	FastF1 API for real lap timing & telemetry
	•	Machine learning winner predictor model
