# Student Dashboard – KodeCamp 6.0 Stage 2

## Overview

This project is a React application built as part of the KodeCamp 6.0 Stage 2 assessment. The application displays a dashboard of student profile cards using reusable React components and demonstrates the fundamentals of React development.

The project focuses on component composition, props, JSX, conditional rendering, array methods, and reusable UI components without using React state.

---

## Features

* Displays a dashboard of student profiles.
* Reusable `Header` component showing:

  * App title
  * Total number of students
  * Class average score
* Reusable `Badge` component for:

  * Student track
  * Student status
  * Student grade
* Reusable `StatBar` component showing a visual representation of each student's score.
* Student profile cards displaying:

  * Avatar
  * Full name
  * Track
  * Active/Inactive status
  * Grade
  * Score bar
  * Skills list
* Displays a message when a student has no listed skills.
* Uses component composition to keep the code clean and reusable.

---

## React Concepts Demonstrated

* Functional Components
* JSX
* Props
* Prop Destructuring
* Component Composition
* Conditional Rendering
* Default Props (Default Parameters)
* Array Mapping (`.map()`)
* Array Reduction (`.reduce()`)
* Template Literals
* Dynamic `className`
* Inline Styling
* Reusable Components

---

## Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── Badge.jsx
│   ├── StatBar.jsx
│   ├── StudentCard.jsx
│   └── StudentList.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---



Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS3

---

---

## Live Demo
https://kode-camp-stage-2-dashboard.vercel.app/


---

## GitHub Repository

```
https://github.com/Scotcee/kode-camp-stage-2-dashboard.git
```

---

## Author

**Ajemba Joseph**

KodeCamp 6.0 Stage 2 Assessment
