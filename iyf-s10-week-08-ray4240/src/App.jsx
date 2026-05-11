// ============================================================
// App.jsx — CommunityHub Main App
// Week 8: React Fundamentals — David Kithi (ray4240)
// ============================================================

import { useState } from 'react'
import Layout from './components/Layout/Layout'
import PostList from './components/Post/PostList'
import CreatePost from './components/Post/CreatePost'
import Sidebar from './components/Layout/Sidebar'
import Stats from './components/shared/Stats'
import Greeting from './components/shared/Greeting'
import UserList from './components/User/UserList'

// ── Initial Data ─────────────────────────────────────────
const INITIAL_POSTS = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'React is a JavaScript library for building user interfaces. Learn the core concepts here.',
    author: 'David Kithi',
    date: 'Jan 15, 2026',
    likes: 12,
    liked: false,
    tag: 'React'
  },
  {
    id: 2,
    title: 'JavaScript Best Practices',
    excerpt: 'Write cleaner, more maintainable JavaScript with these tips and tricks for modern development.',
    author: 'Alice Wanjiku',
    date: 'Jan 14, 2026',
    likes: 8,
    liked: false,
    tag: 'JavaScript'
  },
  {
    id: 3,
    title: 'CSS Flexbox & Grid Guide',
    excerpt: 'Master modern CSS layout techniques to build responsive, beautiful web pages with ease.',
    author: 'Brian Otieno',
    date: 'Jan 13, 2026',
    likes: 15,
    liked: false,
    tag: 'CSS'
  },
  {
    id: 4,
    title: 'Building REST APIs with Node.js',
    excerpt: 'Step-by-step guide to creating robust REST APIs using Express and Node.js.',
    author: 'Sarah Njeri',
    date: 'Jan 12, 2026',
    likes: 20,
    liked: false,
    tag: 'Backend'
  }
]

const INITIAL_USERS = [
  { id: 1, name: 'David Kithi', role: 'Full Stack Dev', location: 'Nairobi', posts: 14 },
  { id: 2, name: 'Alice Wanjiku', role: 'Frontend Dev', location: 'Mombasa', posts: 9 },
  { id: 3, name: 'Brian Otieno', role: 'UI Designer', location: 'Kisumu', posts: 6 },
]

// ── App Component ─────────────────────────────────────────
function App() {
  // Task 15.1 — JSX expressions
  const currentHour = new Date().getHours()
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 17 ? 'afternoon' : 'evening'

  // Task 16.1 & 16.3 — useState with arrays
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('posts') // 'posts' | 'users' | 'challenges'

  // Task 16.4 — Lifting state up: like handler lives in App
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
        : post
    ))
  }

  // Task 16.3 — Add post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  // Task 16.3 — Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  // Filtered posts for search
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Task 16.4 — Derived state: totals for Stats
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0)

  return (
    <Layout
      searchQuery={searchQuery}
      onSearch={setSearchQuery}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Task 15.1 — Greeting with time of day (Daily Challenge Day 1) */}
      <Greeting name="David Kithi" timeOfDay={timeOfDay} />

      {/* Task 16.4 — Stats gets lifted state */}
      <Stats totalPosts={posts.length} totalLikes={totalLikes} totalUsers={INITIAL_USERS.length} />

      {/* Tab Content */}
      {activeTab === 'posts' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px', alignItems: 'start' }}>
          <div>
            {/* Mini-Project: CreatePost */}
            <CreatePost onAdd={handleAddPost} />
            {/* Mini-Project: PostList */}
            <PostList
              posts={filteredPosts}
              onLike={handleLike}
              onDelete={handleDelete}
              searchQuery={searchQuery}
            />
          </div>
          <Sidebar posts={posts} />
        </div>
      )}

      {activeTab === 'users' && (
        // Daily Challenge Day 3 — UserList with proper keys
        <UserList users={INITIAL_USERS} />
      )}

      {activeTab === 'challenges' && (
        <ChallengesPage />
      )}
    </Layout>
  )
}

// ── Daily Challenges Page ─────────────────────────────────
function ChallengesPage() {
  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
        ⚡ Daily Challenges
      </h2>
      <div style={{ display: 'grid', gap: '16px' }}>
        <ChallengeCard day={1} title="Greeting Component" component={<GreetingDemo />} />
        <ChallengeCard day={2} title="Card Component with Variants" component={<CardVariantsDemo />} />
        <ChallengeCard day={3} title="List with Keys" component={<ListWithKeysDemo />} />
        <ChallengeCard day={4} title="Reusable Button" component={<ButtonDemo />} />
        <ChallengeCard day={5} title="Counter (useState)" component={<CounterDemo />} />
      </div>
    </div>
  )
}

function ChallengeCard({ day, title, component }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f4', borderRadius: '10px', overflow: 'hidden' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: '600' }}
      >
        <span>Day {day}: {title}</span>
        <span>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div style={{ padding: '20px', borderTop: '1px solid #e2e8f4', background: '#f8faff' }}>
          {component}
        </div>
      )}
    </div>
  )
}

// Day 1: Greeting
function GreetingDemo() {
  const hours = new Date().getHours()
  const time = hours < 12 ? 'morning' : hours < 17 ? 'afternoon' : 'evening'
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Greeting name="David" timeOfDay={time} />
      <Greeting name="Alice" timeOfDay="morning" />
      <Greeting timeOfDay="evening" />
    </div>
  )
}

// Day 2: Card variants
import Card from './components/shared/Card'
function CardVariantsDemo() {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Card title="Primary Card" variant="primary"><p>Primary variant content.</p></Card>
      <Card title="Secondary Card" variant="secondary"><p>Secondary variant content.</p></Card>
      <Card title="Outlined Card" variant="outlined"><p>Outlined variant content.</p></Card>
    </div>
  )
}

// Day 3: List with keys
import UserCard from './components/User/UserCard'
function ListWithKeysDemo() {
  const users = [
    { id: 1, name: 'David Kithi', role: 'Full Stack Dev', location: 'Nairobi', posts: 14 },
    { id: 2, name: 'Alice Wanjiku', role: 'Frontend Dev', location: 'Mombasa', posts: 9 },
  ]
  return <UserList users={users} />
}

// Day 4: Buttons
import Button from './components/shared/Button'
function ButtonDemo() {
  const [loading, setLoading] = useState(false)
  const handleLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button text="Primary" variant="primary" size="medium" onClick={() => alert('Primary!')} />
      <Button text="Secondary" variant="secondary" size="medium" />
      <Button text="Danger" variant="danger" size="small" />
      <Button text="Small" variant="primary" size="small" />
      <Button text="Large" variant="primary" size="large" />
      <Button text="Disabled" variant="primary" disabled />
      <Button text={loading ? 'Loading...' : 'Click to Load'} variant="secondary" loading={loading} onClick={handleLoad} />
    </div>
  )
}

// Day 5: Counter
function CounterDemo() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '10px', fontWeight: '600' }}>Counter: {count}</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button text="−" variant="secondary" size="small" onClick={() => setCount(c => c - 1)} />
          <Button text="Reset" variant="outlined" size="small" onClick={() => setCount(0)} />
          <Button text="+" variant="primary" size="small" onClick={() => setCount(c => c + 1)} />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '10px', fontWeight: '600' }}>Toggle: {isOn ? '🟢 ON' : '🔴 OFF'}</p>
        <Button text="Toggle" variant={isOn ? 'primary' : 'secondary'} size="small" onClick={() => setIsOn(v => !v)} />
      </div>
    </div>
  )
}

export default App
