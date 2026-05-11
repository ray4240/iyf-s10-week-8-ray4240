// Daily Challenge Day 4 — Reusable Button with all props
// Task 15.3 — Props with default values

const STYLES = {
  primary:   { background: '#2563eb', color: '#fff', border: 'none' },
  secondary: { background: '#f1f5f9', color: '#475569', border: '1.5px solid #e2e8f4' },
  danger:    { background: '#dc2626', color: '#fff', border: 'none' },
  outlined:  { background: 'transparent', color: '#2563eb', border: '1.5px solid #2563eb' },
}

const SIZES = {
  small:  { padding: '6px 14px', fontSize: '12px', borderRadius: '6px' },
  medium: { padding: '10px 20px', fontSize: '14px', borderRadius: '8px' },
  large:  { padding: '14px 28px', fontSize: '15px', borderRadius: '10px' },
}

function Button({
  text = 'Click me',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick
}) {
  const variantStyle = STYLES[variant] || STYLES.primary
  const sizeStyle = SIZES[size] || SIZES.medium

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...variantStyle,
        ...sizeStyle,
        fontFamily: 'inherit',
        fontWeight: '600',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      {loading && <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>}
      {text}
    </button>
  )
}

export default Button
