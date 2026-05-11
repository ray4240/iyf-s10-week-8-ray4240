// Task 15.4 — Layout Component with children prop
import Header from './Header'
import Footer from './Footer'

function Layout({ children, searchQuery, onSearch, activeTab, onTabChange }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        searchQuery={searchQuery}
        onSearch={onSearch}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      <main style={{ flex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '28px 24px' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
