import React from 'react'
import './Sidebar.css'

const Sidebar = ({ 
  collapsed, 
  onToggle, 
  activeItem, 
  onItemClick,
  navigationItems = [],
  isMobileOpen = false,
  isTabletOpen = false,
  onMobileClose,
  onTabletClose
}) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''} ${isTabletOpen ? 'show' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <i className="fas fa-building"></i>
          <span className="logo-text">CRM</span>
        </div>
        
        <button 
          className="toggle-btn desktop-toggle" 
          onClick={onToggle}
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <i className={`fas ${collapsed ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
        </button>
        
        <button 
          className="mobile-cancel-btn" 
          onClick={() => {
            onMobileClose && onMobileClose();
            onTabletClose && onTabletClose();
          }}
          title="Close Sidebar"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav nav-pills flex-column">
          {navigationItems.map((item, index) => (
            <li key={item.id || index} className="nav-item">
              <a 
                className={`nav-link ${item.className || ''} ${activeItem === item.id ? 'active' : ''}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick && onItemClick(item);
                }}
                title={collapsed ? item.label : ''}
              >
                <i className={item.icon}></i>
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
