# 🧠 Next.js Redux App 2025

A modern web application built with **Next.js 14**, **Redux Toolkit**, **i18n localization**, and **Tailwind CSS**. This project is fully set up for internationalization, state management with Redux, dynamic routing, and API integration with Axios.

---

## 🚀 Tech Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Redux Toolkit** for global state
- **Tailwind CSS** for styling
- **Axios** for API integration
- **i18n (Internationalization)** with dynamic locale routes
- **redux-logger** for debugging actions/state
- **Git & GitHub** for version control

---

## 📁 Folder Structure

src/
├── app/
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Redirect or landing
│ └── [locale]/ # Dynamic locale routing
│ ├── layout.tsx
│ ├── page.tsx
│ ├── welcome/page.tsx
│ └── about/page.tsx
├── components/
│ ├── navbar/
│ └── welcome/
├── i18/
│ ├── en-US/
│ │ └── welcome.json
│ └── te-IN/
│ └── welcome.json
├── lib/
│ └── getTranslations.ts
├── store/
│ ├── index.ts # Store configuration
│ ├── persistence.ts # Dispatch hooks
│ ├── selectors.ts # Selector hooks
│ └── slices/
│ ├── user-inputs.ts
│ ├── user-outputs.ts
│ └── launch-config.ts
└── styles/
└── globals.css

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/prven04/nextjs-redux-app-2025.git
cd nextjs-redux-app-2025
```

### 2. Install dependencies

```bash
npm install redux-logger
npm install --save-dev @types/redux-logger
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser and go to:
👉 http://localhost:3000/en-US/welcome
