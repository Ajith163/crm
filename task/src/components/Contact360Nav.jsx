import React from 'react'
import './Contact360Nav.css'

const Contact360Nav = ({ 
  onRefresh, 
  onMoreOptions,
  breadcrumbItems = [
    { label: 'Contacts', href: '#' },
    { label: 'Contact 360', active: true }
  ]
}) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh()
    }
  }

  const handleMoreOptions = () => {
    if (onMoreOptions) {
      onMoreOptions()
    }
  }

  return (
    <div className="contact360-nav">
      <div className="nav-container">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <ol className="breadcrumb">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                {item.active ? (
                  item.label
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="nav-actions">
          <button 
            className="nav-action-btn refresh-btn" 
            onClick={handleRefresh}
            title="Refresh"
            aria-label="Refresh page"
          >
            <i className="fas fa-sync-alt"></i>
          </button>

          <button 
            className="nav-action-btn more-options-btn" 
            onClick={handleMoreOptions}
            title="More options"
            aria-label="More options menu"
          >
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact360Nav
