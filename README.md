
# Meetly - Meeting Scheduling Platform

## Overview

Meetly is a modern meeting scheduling platform built with Next.js, designed to simplify the process of managing appointments and scheduling meetings. It provides a seamless interface for creating events, managing availability, and handling bookings with Google Calendar integration, allowing users to join meetings with Google Meet.

![Meetly Logo](/public/logo.svg)


## 🌟 Features

- **Event Management**
  - Create customizable event types
  - Set duration and privacy settings
  - Manage event descriptions and details

- **Smart Scheduling**
  - Automated time slot generation
  - Custom availability settings

- **Google Calendar Integration**
  - Automatic meeting link generation
  - Real-time calendar syncing
  - Meeting confirmations

- **User Management**
  - Custom profile pages
  - Personalized scheduling links
  - User authentication via Clerk

## Technologies

### Frontend
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Hook Form** for form handling
- **Zod** for validation

### Backend
- **Next.js API Routes** (Server Actions)
- **Prisma ORM** for database management
- **PostgreSQL** database
- **Google Calendar API** for calendar integration
- **Clerk** for authentication

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekrch/meetly.git
cd meetly
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Environment Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL="your_postgresql_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

```

### 4. Run Database Migrations

Run the following command to set up your database schema:

```bash
npx prisma migrate dev
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
