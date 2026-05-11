// Task 16.2 — Controlled Form with useState
// Mini-Project: CreatePost Component
import { useState } from 'react'

const TAGS = ['React', 'JavaScript', 'CSS', 'Backend', 'General']

function CreatePost({ onAdd }) {
  const [open, setOpen] = useState(false)
  // Task 16.2 — formData object in state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    tag: 'React'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.excerpt.trim()) return

    onAdd({
      id: Date.now(),
      title: formData.title,
      excerpt: formData.excerpt,
      author: 'David Kithi',
      date: new Date().toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' }),
      likes: 0,
      liked: false,
      tag: formData.tag
    })

    // Reset form
    setFormData({ title: '', excerpt: '', tag: 'React' })
    setOpen(false)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: '100%', padding: '14px', background: '#fff',
            border: '2px dashed #bfdbfe', borderRadius: '12px',
            color: '#2563eb', fontSize: '14px', fontWeight: '600',
            cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.target.style.background = '#eff6ff'; e.target.style.borderStyle = 'solid' }}
          onMouseLeave={e => { e.target.style.background = '#fff'; e.target.style.borderStyle = 'dashed' }}
        >
          ✏️ Write a new post...
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff', border: '1px solid #bfdbfe',
            borderRadius: '12px', padding: '22px 24px',
            boxShadow: '0 4px 20px rgba(37,99,235,0.08)'
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#2563eb' }}>
            ✏️ Create New Post
          </h3>

          <div style={{ marginBottom: '12px' }}>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Post title..."
              required
              style={{
                width: '100%', padding: '10px 14px', fontSize: '15px', fontWeight: '500',
                border: '1.5px solid #e2e8f4', borderRadius: '8px', outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#2563eb'}
              onBlur={e => e.target.style.borderColor = '#e2e8f4'}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Write your post content..."
              required
              rows={3}
              style={{
                width: '100%', padding: '10px 14px', fontSize: '14px',
                border: '1.5px solid #e2e8f4', borderRadius: '8px',
                outline: 'none', resize: 'vertical'
              }}
              onFocus={e => e.target.style.borderColor = '#2563eb'}
              onBlur={e => e.target.style.borderColor = '#e2e8f4'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <select
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              style={{
                padding: '8px 14px', fontSize: '13px',
                border: '1.5px solid #e2e8f4', borderRadius: '8px',
                outline: 'none', background: '#fff'
              }}
            >
              {TAGS.map(tag => <option key={tag} value={tag}>{tag}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={{
              background: '#2563eb', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '10px 24px',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer'
            }}>
              Publish Post
            </button>
            <button type="button" onClick={() => setOpen(false)} style={{
              background: '#f1f5f9', color: '#64748b', border: 'none',
              borderRadius: '8px', padding: '10px 20px',
              fontSize: '14px', fontWeight: '500', cursor: 'pointer'
            }}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default CreatePost
