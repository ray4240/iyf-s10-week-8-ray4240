// Mini-Project: Sidebar Component
function Sidebar({ posts }) {
  const popular = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3)
  const tags = [...new Set(posts.map(p => p.tag))]

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* About */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f4', borderRadius: '10px', padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px', color: '#2563eb' }}>🌐 About CommunityHub</h3>
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
          A community platform for developers to share knowledge, ask questions, and connect with peers across Kenya and beyond.
        </p>
      </div>

      {/* Popular Posts */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f4', borderRadius: '10px', padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px', color: '#2563eb' }}>🔥 Popular Posts</h3>
        {popular.map((post, i) => (
          <div key={post.id} style={{
            display: 'flex', gap: '10px', alignItems: 'flex-start',
            padding: '8px 0', borderBottom: i < popular.length - 1 ? '1px solid #f1f5f9' : 'none'
          }}>
            <span style={{ fontWeight: '800', color: '#cbd5e1', fontSize: '16px' }}>#{i + 1}</span>
            <div>
              <p style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>{post.title}</p>
              <span style={{ fontSize: '11px', color: '#64748b' }}>❤️ {post.likes} likes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f4', borderRadius: '10px', padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px', color: '#2563eb' }}>🏷️ Tags</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: '#eff6ff', color: '#2563eb', fontSize: '12px',
              fontWeight: '600', padding: '4px 12px', borderRadius: '20px'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
