// Daily Challenge Day 1 — Greeting Component with props & defaults
// Task 15.1 — JSX conditional rendering

const TIME_CONFIG = {
  morning:   { emoji: '☀️', message: 'Good morning', color: '#f59e0b' },
  afternoon: { emoji: '🌤️', message: 'Good afternoon', color: '#2563eb' },
  evening:   { emoji: '🌙', message: 'Good evening', color: '#7c3aed' },
}

function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const config = TIME_CONFIG[timeOfDay] || TIME_CONFIG.morning

  return (
    <div style={{
      background: '#fff', border: '1px solid #e2e8f4',
      borderRadius: '12px', padding: '18px 22px',
      marginBottom: '20px', display: 'flex',
      alignItems: 'center', gap: '14px'
    }}>
      <span style={{ fontSize: '28px' }}>{config.emoji}</span>
      <div>
        <p style={{ fontSize: '18px', fontWeight: '700', color: config.color }}>
          {config.message}, {name}!
        </p>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
          {new Date().toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  )
}

export default Greeting
