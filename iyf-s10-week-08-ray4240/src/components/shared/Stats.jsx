// Task 16.4 — Stats receives lifted state from App (totalLikes, totalPosts)
function Stats({ totalPosts, totalLikes, totalUsers }) {
  const stats = [
    { label: 'Posts', value: totalPosts, emoji: '📝' },
    { label: 'Total Likes', value: totalLikes, emoji: '❤️' },
    { label: 'Members', value: totalUsers, emoji: '👥' },
  ]

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '14px', marginBottom: '24px'
    }}>
      {stats.map(stat => (
        <div key={stat.label} style={{
          background: '#fff', border: '1px solid #e2e8f4',
          borderRadius: '12px', padding: '18px 20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '6px' }}>{stat.emoji}</div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#2563eb' }}>{stat.value}</div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Stats
