# iyf-s10-week-08-ray4240

**Student:** David Kithi  
**GitHub:** ray4240  
**Week:** 8 — React Fundamentals

## What's Covered

### Lesson 15 — Introduction to React
- **Task 15.1** — JSX syntax, expressions, conditional rendering, current date/time
- **Task 15.2** — Header, Footer, PostCard, Sidebar, Button components
- **Task 15.3** — Props, default values, rendering lists with `map` & `key`
- **Task 15.4** — Component composition with `children` prop, Layout component

### Lesson 16 — State & Events
- **Task 16.1** — `useState` hook (counter, toggle, multiple state variables)
- **Task 16.2** — Controlled forms with `onChange`, `onSubmit`, `e.preventDefault()`
- **Task 16.3** — State with arrays & objects (add, toggle, delete — never mutate!)
- **Task 16.4** — Lifting state up: `App` holds posts state, passes handlers as props

### Mini-Project: CommunityHub
Full React frontend with:
- ✅ Header with search, nav tabs, login button
- ✅ PostList — renders posts from state with map + key
- ✅ PostCard — props: title, excerpt, author, date, likes, tag
- ✅ CreatePost — controlled form, adds to posts array
- ✅ Sidebar — popular posts, tags, about section
- ✅ Footer — links, copyright
- ✅ Like/unlike posts (lifted state)
- ✅ Delete posts
- ✅ Search/filter posts
- ✅ Stats dashboard (lifted state)

### Daily Challenges
- ✅ Day 1 — Greeting component (name + timeOfDay props, default values)
- ✅ Day 2 — Card component with primary/secondary/outlined variants
- ✅ Day 3 — UserList with proper key prop, empty state handling
- ✅ Day 4 — Reusable Button (variant, size, disabled, loading props)
- ✅ Day 5 — Counter + Toggle with useState

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Sidebar.jsx
│   ├── Post/
│   │   ├── PostCard.jsx
│   │   ├── PostList.jsx
│   │   └── CreatePost.jsx
│   ├── User/
│   │   ├── UserCard.jsx
│   │   └── UserList.jsx
│   └── shared/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Greeting.jsx
│       └── Stats.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

## How to Push to GitHub

```bash
git init
git add .
git commit -m "complete week 8 react fundamentals"
git remote add origin https://github.com/ray4240/iyf-s10-week-08-ray4240.git
git branch -M main
git push -u origin main --force
```
