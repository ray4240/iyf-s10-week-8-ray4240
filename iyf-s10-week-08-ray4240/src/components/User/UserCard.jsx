// Task 15.3 — UserCard with props & default values
function UserCard({ name = 'Anonymous', role = 'Member', location = 'Kenya', posts = 0 }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase()
  const colors = ['#2563eb', '#9333ea', '#16a34a', '#ea580c', '#0891b2']
  const color = colors[name.charCodeAt(0) % colors.length]

  return (
    <div style={{
      background: '#fff', border: '1px solid #e2e8f4',
      borderRadius: '12px', padding: '20px',
      display: 'flex', alignItems: 'center', gap: '16px',
      transition: 'box-shadow 0.2s'
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      {/* Avatar */}
      <div style={{
        width: '48px', height: '48px', borderRadius: '50%',
        background: color, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '16px', fontWeight: '700', flexShrink: 0
      }}>
        {initials}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: '700', fontSize: '15px' }}>{name}</p>
        <p style={{ fontSize: '13px', color: '#64748b' }}>{role}</p>
        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>📍 {location} · {posts} posts</p>
      </div>
      <button style={{
        background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
        borderRadius: '20px', padding: '6px 14px', fontSize: '12px',
        fontWeight: '600', cursor: 'pointer'
      }}>
        Follow
      </button>
    </div>
  )
}

export default UserCard
