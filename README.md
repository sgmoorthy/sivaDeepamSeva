# Siva Deepam Seva - Divine Offering

A web application for managing temple lamp offerings and seva registrations. This platform enables devotees to participate in the sacred tradition of offering lamps to Lord Siva, while providing administrators with tools to manage registrations and track offerings.

## Overview

Siva Deepam Seva is a spiritual platform that facilitates:
- Online registration for lamp offerings
- Bilingual content (English and Tamil) for accessibility
- Comprehensive seva management system
- Administrative dashboard for tracking and managing offerings

## Features

- **Interactive User Interface**
  - Responsive design for all devices
  - Smooth scrolling navigation
  - Dynamic content switching between English and Tamil

- **Seva Registration System**
  - Multiple seva options
  - Automated Pournami date selection
  - Integrated donation processing

- **Administrative Dashboard**
  - Registration management
  - Statistical analysis
  - Data export capabilities

## Registration Flow

### User Registration Process
1. **Form Submission**
   - Users fill out the registration form with:
     - Full Name
     - Nakshatra/Rasi
     - Seva Cycle selection
     - Start Month
     - Email Address
     - WhatsApp Number
     - Address

2. **Data Storage**
   - Registration data is stored locally using browser's localStorage
   - Each entry includes:
     - Unique ID (UUID)
     - Registration Date
     - Status ("In Progress" by default)

3. **Confirmation**
   - Users receive immediate confirmation
   - Option to proceed to payment
   - Access to spiritual insights and divine image generation

### Data Retrieval System

1. **Admin Access**
   - Secure login system
   - Comprehensive dashboard view

2. **Data Management**
   - View all registrations in tabular format
   - Filter by:
     - Keyword search (across all fields)
     - Start Month
     - Seva Cycle

3. **Data Visualization**
   - Participant distribution charts
   - Seva cycle analytics
   - Donation tracking

4. **Export Options**
   - CSV export for spreadsheet compatibility
   - TSV export for Excel integration

## Tech Stack

### Frontend
- HTML5
- TailwindCSS (via CDN) for styling
- Chart.js for data visualization
- Vanilla JavaScript for interactivity

### Fonts
- Google Fonts:
  - Noto Serif
  - Rasa
  - Poppins

### Design Features
- Responsive layout
- Mobile-first approach
- Custom animations
- Modal system for interactions

### Color Palette
- Spiritual Harmony Theme:
  - Saffron
  - Gold
  - Deep Blue
  - Warm White

## Getting Started

1. Clone the repository
2. Open `sivaDeepamSeva/main.html` in a web browser
3. For development, use a local server to preview the site

## Project Structure
