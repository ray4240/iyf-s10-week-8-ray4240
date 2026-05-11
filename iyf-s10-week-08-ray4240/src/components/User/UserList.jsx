// Daily Challenge Day 3 — List with proper key prop
import UserCard from './UserCard'

function UserList({ users }) {
  // Empty state handling
  if (!users || users.length === 0) {
    return (
      <div style={{
        textAlign: 'center', padding: '48px', background: '#fff',
        borderRadius: '12px', border: '1px solid #e2e8f4', color: '#94a3b8'
      }}>
        <p style={{ fontSize: '32px', marginBottom: '12px' }}>👥</p>
        <p>No members yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>👥 Community Members</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {users.map(user => (
          // key prop — required! Unique identifier for each item
          <UserCard
            key={user.id}
            name={user.name}
            role={user.role}
            location={user.location}
            posts={user.posts}
          />
        ))}
      </div>
    </div>
  )
}

export default UserList
