export const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'fas fa-th-large',
    path: '/dashboard',
    badge: null,
    className: 'nav-dashboard-item'
  },
  {
    id: 'contacts',
    label: 'Contacts',
    icon: 'fas fa-user',
    path: '/contacts',
    badge: null,
    className: 'nav-contacts-item'
  },
  {
    id: 'organizations',
    label: 'Organizations',
    icon: 'fas fa-users',
    path: '/organizations',
    badge: null,
    className: 'nav-organizations-item'
  },
  {
    id: 'menu',
    label: 'Menu',
    icon: 'fas fa-bars',
    path: '/menu',
    badge: null,
    className: 'nav-menu-item'
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'fas fa-user-circle',
    path: '/users',
    badge: null,
    className: 'nav-users-item'
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'fas fa-database',
    path: '/database',
    badge: null,
    className: 'nav-database-item'
  },
  {
    id: 'announcements',
    label: 'Announcements',
    icon: 'fas fa-bullhorn',
    path: '/announcements',
    badge: '3',
    className: 'nav-announcements-item'
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'fas fa-file-alt',
    path: '/documents',
    badge: null,
    className: 'nav-documents-item'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'fas fa-chart-bar',
    path: '/analytics',
    badge: null,
    className: 'nav-analytics-item'
  },
  {
    id: 'files',
    label: 'Files',
    icon: 'fas fa-folder',
    path: '/files',
    badge: null,
    className: 'nav-files-item'
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'fas fa-chart-line',
    path: '/reports',
    badge: null,
    className: 'nav-reports-item'
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: 'fas fa-file',
    path: '/pages',
    badge: null,
    className: 'nav-pages-item'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: 'fas fa-calendar',
    path: '/calendar',
    badge: null,
    className: 'nav-calendar-item'
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'fas fa-envelope',
    path: '/messages',
    badge: '5',
    className: 'nav-messages-item'
  },
  {
    id: 'signatures',
    label: 'Signatures',
    icon: 'fas fa-signature',
    path: '/signatures',
    badge: null,
    className: 'nav-signatures-item'
  },
  {
    id: 'share',
    label: 'Share',
    icon: 'fas fa-share-alt',
    path: '/share',
    badge: null,
    className: 'nav-share-item'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'fas fa-cog',
    path: '/settings',
    badge: null,
    className: 'nav-settings-item'
  }
]

export const getNavigationItem = (id) => {
  return navigationItems.find(item => item.id === id)
}

export const getActiveNavigationItem = (pathname) => {
  return navigationItems.find(item => item.path === pathname)
}

export const updateNavigationBadge = (id, count) => {
  const item = navigationItems.find(item => item.id === id)
  if (item) {
    item.badge = count > 0 ? count.toString() : null
  }
  return navigationItems
}
