import React, { useState } from 'react'
import './Header.css'

const Header = ({ 
  onSearch,
  onWhatsNew,
  onAdminClick,
  onMyAgentsClick,
  onIconClick,
  onMobileMenuToggle
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
  }

  const handleIconClick = (iconName) => {
    if (onIconClick) {
      onIconClick(iconName)
    }
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <header className="main-header">
      <div className="small-mobile-header">
        <div className="small-mobile-top-row">
          <button 
            className="small-mobile-toggle"
            onClick={() => onMobileMenuToggle && onMobileMenuToggle()}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="small-mobile-logo">
            <i className="fas fa-building logo-icon"></i>
            <span className="logo-name">CRM</span>
          </div>

          <div className="small-mobile-search">
            <input 
              type="text" 
              placeholder="Search..." 
              className="small-mobile-search-input"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <i className="fas fa-search small-mobile-search-icon"></i>
          </div>
        </div>

        <div className="small-mobile-icons-row">
          <div className="small-mobile-icon" onClick={() => handleIconClick('refresh')}>
            <i className="fas fa-sync-alt"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('add')}>
            <i className="fas fa-plus"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('clock')}>
            <i className="fas fa-clock"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('bell')}>
            <i className="fas fa-bell"></i>
            <span className="notification-dot"></span>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('envelope')}>
            <i className="fas fa-envelope"></i>
            <span className="notification-dot"></span>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('phone')}>
            <i className="fas fa-phone"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('grid')}>
            <i className="fas fa-th"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('ai')}>
            <i className="fas fa-microchip"></i>
          </div>

          <div className="small-mobile-icon" onClick={() => handleIconClick('profile')}>
            <i className="fas fa-user"></i>
            <span className="notification-dot"></span>
          </div>

          <div className="small-mobile-dropdown">
            <button 
              className="small-mobile-dropdown-btn"
              onClick={toggleDropdown}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
            
            {showDropdown && (
              <div className="small-mobile-dropdown-menu">
                <div className="dropdown-item" onClick={() => { onWhatsNew && onWhatsNew(); setShowDropdown(false); }}>
                  <i className="fas fa-fire"></i>
                  <span>What's New</span>
                </div>
                <div className="dropdown-item" onClick={() => { onAdminClick && onAdminClick(); setShowDropdown(false); }}>
                  <i className="fas fa-cog"></i>
                  <span>Admin</span>
                </div>
                <div className="dropdown-item" onClick={() => { onMyAgentsClick && onMyAgentsClick(); setShowDropdown(false); }}>
                  <i className="fas fa-users"></i>
                  <span>My Agents</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mobile-header">
        <button 
          className="mobile-menu-toggle"
          onClick={() => onMobileMenuToggle && onMobileMenuToggle()}
        >
          <i className="fas fa-bars"></i>
          <span className="menu-text">Menu</span>
        </button>

        <div className="mobile-logo">
          <i className="fas fa-building logo-icon"></i>
          <span className="logo-name">CRM</span>
        </div>

        <div className="mobile-search">
          <input 
            type="text" 
            placeholder="Search..." 
            className="mobile-search-input"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <i className="fas fa-search mobile-search-icon"></i>
        </div>

        <div className="mobile-header-icons">
          <div className="mobile-header-icon" onClick={() => handleIconClick('refresh')}>
            <i className="fas fa-sync-alt"></i>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('add')}>
            <i className="fas fa-plus"></i>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('clock')}>
            <i className="fas fa-clock"></i>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('bell')}>
            <i className="fas fa-bell"></i>
            <span className="notification-dot"></span>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('envelope')}>
            <i className="fas fa-envelope"></i>
            <span className="notification-dot"></span>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('phone')}>
            <i className="fas fa-phone"></i>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('grid')}>
            <i className="fas fa-th"></i>
          </div>

          <div className="mobile-header-icon" onClick={() => handleIconClick('ai')}>
            <i className="fas fa-microchip"></i>
          </div>

=          <div className="mobile-header-icon mobile-user-profile" onClick={() => handleIconClick('profile')}>
            <i className="fas fa-user"></i>
            <span className="notification-dot"></span>
          </div>
        </div>

        <div className="mobile-dropdown-container">
          <button 
            className="mobile-dropdown-btn"
            onClick={toggleDropdown}
          >
            <i className="fas fa-chevron-down"></i>
          </button>
          
          {showDropdown && (
            <div className="mobile-dropdown-menu">
              <div className="dropdown-item" onClick={() => { onWhatsNew && onWhatsNew(); setShowDropdown(false); }}>
                <i className="fas fa-fire"></i>
                <span>What's New</span>
              </div>
              <div className="dropdown-item" onClick={() => { onAdminClick && onAdminClick(); setShowDropdown(false); }}>
                <i className="fas fa-cog"></i>
                <span>Admin</span>
              </div>
              <div className="dropdown-item" onClick={() => { onMyAgentsClick && onMyAgentsClick(); setShowDropdown(false); }}>
                <i className="fas fa-users"></i>
                <span>My Agents</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="desktop-header">
        <div className="header-left">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Smart Search" 
              className="search-input"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
        
        <div className="header-right">
          <div className="whats-new-section" onClick={() => onWhatsNew && onWhatsNew()}>
            <i className="fas fa-fire whats-new-icon"></i>
            <span className="whats-new-text">What's New</span>
          </div>

          <div className="admin-dropdown">
            <button className="btn admin-btn" onClick={() => onAdminClick && onAdminClick()}>
              Admin
              <i className="fas fa-chevron-down admin-chevron"></i>
            </button>
          </div>

          <div className="my-agents-dropdown">
            <button className="btn btn-primary my-agents-btn" onClick={() => onMyAgentsClick && onMyAgentsClick()}>
              My Agents
              <i className="fas fa-chevron-down agents-chevron"></i>
            </button>
          </div>
          
          <div className="header-icons">
            <div className="header-icon" onClick={() => handleIconClick('refresh')}>
              <i className="fas fa-sync-alt"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('add')}>
              <i className="fas fa-plus"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('clock')}>
              <i className="fas fa-clock"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('bell')}>
              <i className="fas fa-bell"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('document')}>
              <i className="fas fa-file-alt"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('ai')}>
              <i className="fas fa-microchip"></i>
            </div>

            <div className="header-icon" onClick={() => handleIconClick('list')}>
              <i className="fas fa-list"></i>
            </div>

            <div className="header-icon user-profile" onClick={() => handleIconClick('profile')}>
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

