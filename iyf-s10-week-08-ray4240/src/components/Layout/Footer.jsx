// Task 15.2 — Footer Component
function Footer() {
  return (
    <footer style={{
      background: '#0f1e3a', color: '#94a3b8',
      textAlign: 'center', padding: '24px 32px',
      fontSize: '13px', borderTop: '1px solid #1e293b',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: '12px'
    }}>
      <span>© 2026 CommunityHub. All rights reserved.</span>
      <span>Built with ⚛️ React — David Kithi (ray4240)</span>
      <div style={{ display: 'flex', gap: '16px' }}>
        {['Home', 'About', 'Privacy', 'Contact'].map(link => (
          <a key={link} href="#" style={{ color: '#64748b', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#60a5fa'}
            onMouseLeave={e => e.target.style.color = '#64748b'}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
