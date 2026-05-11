// Task 15.3 — Rendering lists with map & key prop
import PostCard from './PostCard'

function PostList({ posts, onLike, onDelete, searchQuery }) {
  // Empty state
  if (posts.length === 0) {
    return (
      <div style={{
        textAlign: 'center', padding: '48px 24px',
        background: '#fff', borderRadius: '12px',
        border: '1px solid #e2e8f4', color: '#94a3b8'
      }}>
        <p style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</p>
        <p style={{ fontWeight: '600', marginBottom: '4px' }}>No posts found</p>
        {searchQuery && <p style={{ fontSize: '14px' }}>No results for "{searchQuery}"</p>}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {posts.map(post => (
        // key prop — required for lists in React!
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
          likes={post.likes}
          liked={post.liked}
          tag={post.tag}
          onLike={() => onLike(post.id)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  )
}

export default PostList
