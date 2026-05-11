// Task 15.3 — PostCard with props
// Task 16.4 — Receives onLike callback (lifted state)

const TAG_COLORS = {
  React: '#2563eb', JavaScript: '#ca8a04', CSS: '#9333ea',
  Backend: '#16a34a', Default: '#64748b'
}

function PostCard({ title, excerpt, author, date, likes, liked, tag, onLike, onDelete }) {
  const tagColor = TAG_COLORS[tag] || TAG_COLORS.Default

  return (
    <article style={{
      background: '#fff', border: '1px solid #e2e8f4',
      borderRadius: '12px', padding: '22px 24px',
      transition: 'box-shadow 0.2s, border-color 0.2s',
      position: 'relative', overflow: 'hidden'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.1)'
        e.currentTarget.style.borderColor = '#bfdbfe'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#e2e8f4'
      }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: tagColor }} />

      {/* Tag */}
      <span style={{
        background: tagColor + '18', color: tagColor,
        fontSize: '11px', fontWeight: '700', padding: '3px 10px',
        borderRadius: '20px', letterSpacing: '0.5px'
      }}>
        {tag}
      </span>

      <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '10px 0 8px', lineHeight: '1.4' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', marginBottom: '16px' }}>
        {excerpt}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: '#94a3b8' }}>
          <span style={{ fontWeight: '600', color: '#475569' }}>✍️ {author}</span>
          <span style={{ margin: '0 8px' }}>·</span>
          <span>{date}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={onLike}
            style={{
              background: liked ? '#fee2e2' : '#f1f5f9',
              color: liked ? '#dc2626' : '#64748b',
              border: 'none', borderRadius: '20px',
              padding: '6px 14px', fontSize: '13px', fontWeight: '600',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {liked ? '❤️' : '🤍'} {likes}
          </button>
          <button
            onClick={onDelete}
            style={{
              background: 'transparent', color: '#cbd5e1',
              border: 'none', fontSize: '16px', cursor: 'pointer',
              padding: '4px 8px', borderRadius: '6px', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#dc2626'}
            onMouseLeave={e => e.target.style.color = '#cbd5e1'}
            title="Delete post"
          >
            ✕
          </button>
        </div>
      </div>
    </article>
  )
}

export default PostCard
