// Task 15.4 — Card with children prop
// Daily Challenge Day 2 — Card with variants

const VARIANT_STYLES = {
  primary: {
    border: '1px solid #bfdbfe',
    background: '#fff',
    titleColor: '#2563eb',
    accent: '#2563eb'
  },
  secondary: {
    border: '1px solid #e2e8f4',
    background: '#f8faff',
    titleColor: '#475569',
    accent: '#94a3b8'
  },
  outlined: {
    border: '2px solid #2563eb',
    background: '#fff',
    titleColor: '#1d4fd8',
    accent: '#1d4fd8'
  }
}

function Card({ children, title, variant = 'primary' }) {
  const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary

  return (
    <div style={{
      background: styles.background,
      border: styles.border,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
    }}>
      {/* Top accent */}
      <div style={{ height: '3px', background: styles.accent }} />

      <div style={{ padding: '20px 22px' }}>
        {title && (
          <h3 style={{
            fontSize: '15px', fontWeight: '700',
            color: styles.titleColor, marginBottom: '12px'
          }}>
            {title}
          </h3>
        )}
        {/* children prop — anything between <Card> tags */}
        <div style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
