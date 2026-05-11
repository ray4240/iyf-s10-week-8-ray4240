// Task 15.2 — Header Component
function Header({ searchQuery, onSearch, activeTab, onTabChange }) {
  return (
    <header style={{
      background: '#2563eb',
      color: '#fff',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(37,99,235,0.3)'
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', height: '60px', gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }}>🌐</span>
          <span style={{ fontWeight: '800', fontSize: '20px', letterSpacing: '-0.5px' }}>CommunityHub</span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          style={{
            flex: 1, maxWidth: '320px', padding: '8px 16px',
            borderRadius: '20px', border: 'none', fontSize: '14px',
            background: 'rgba(255,255,255,0.15)', color: '#fff',
            outline: 'none'
          }}
        />

        <button style={{
          background: 'rgba(255,255,255,0.15)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px',
          padding: '8px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'
        }}>
          🔑 Login
        </button>
      </div>

      {/* Nav tabs */}
      <nav style={{ display: 'flex', gap: '4px' }}>
        {[
          { key: 'posts', label: '📝 Posts' },
          { key: 'users', label: '👥 Members' },
          { key: 'challenges', label: '⚡ Challenges' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            style={{
              background: 'transparent', border: 'none', color: '#fff',
              padding: '12px 18px', fontSize: '13px', fontWeight: '500',
              cursor: 'pointer', borderBottom: activeTab === tab.key ? '3px solid #fff' : '3px solid transparent',
              opacity: activeTab === tab.key ? 1 : 0.7,
              transition: 'all 0.2s'
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
