import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Contact360Nav from './components/Contact360Nav'
import SendEmailModal from './components/SendEmailModal'
import { navigationItems } from './data/navigationData'
import './App.css'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isTabletOpen, setIsTabletOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('communications')
  const [activeCommTab, setActiveCommTab] = useState('all')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedEmails, setExpandedEmails] = useState({
    email1: true,
    email2: true
  })
  const [activeNavItem, setActiveNavItem] = useState('contacts')
  const [isSendEmailModalOpen, setIsSendEmailModalOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileOpen(false)
  }

  const toggleTabletSidebar = () => {
    setIsTabletOpen(!isTabletOpen)
  }

  const closeTabletSidebar = () => {
    setIsTabletOpen(false)
  }

  const handleNavItemClick = (item) => {
    setActiveNavItem(item.id)
    setIsMobileOpen(false)
    setIsTabletOpen(false)
    console.log('Navigating to:', item.label, 'Path:', item.path)
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleEmail = (emailId) => {
    setExpandedEmails(prev => ({
      ...prev,
      [emailId]: !prev[emailId]
    }))
  }

  const expandAll = (e) => {
    e.preventDefault()
    const allSections = ['organization', 'payment', 'other', 'customData', 'addresses']
    const areAllExpanded = allSections.every(section => expandedSections[section])

    if (areAllExpanded) {
      setExpandedSections({})
    } else {
      const expanded = {}
      allSections.forEach(section => {
        expanded[section] = true
      })
      setExpandedSections(expanded)
    }
  }

  return (
    <div className="app-container">
      {isMobileOpen && (
        <div className="sidebar-overlay active" onClick={closeMobileSidebar}></div>
      )}
      
      {isTabletOpen && (
        <div className="sidebar-overlay active" onClick={closeTabletSidebar}></div>
      )}
      
      <button 
        className="tablet-toggle-btn"
        onClick={toggleTabletSidebar}
        title="Toggle Sidebar"
      >
        <i className="fas fa-bars"></i>
      </button>

      <Sidebar 
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
        navigationItems={navigationItems}
        isMobileOpen={isMobileOpen}
        isTabletOpen={isTabletOpen}
        onMobileClose={closeMobileSidebar}
        onTabletClose={closeTabletSidebar}
      />

      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header 
          onMobileMenuToggle={toggleMobileSidebar}
          onTabletMenuToggle={toggleTabletSidebar}
        />

        <Contact360Nav />

        <div className="row">
          <div className="col-4">
            <div className="prospect-section">
              <div className="prospect-badge">Prospect</div>
              <div className="prospect-header">
                <div className="prospect-title">
                  <h6 className="prospect-name">Modify <i className="fas fa-star"></i></h6>
                  <div className="rating">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <button className="edit-btn">
                  <i className="fas fa-edit"></i>
                </button>
              </div>

                  <div className="contact-info">
                    <div className="info-item">
                      <strong>Full name:</strong> Modify
                    </div>
                    <div className="info-item">
                      <strong>Accounts:</strong> <a href="#" className="text-success">Modify <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="info-item">
                      <strong>Agent:</strong> James Addam
                    </div>
                    <div className="info-item">
                      <strong>Email:</strong> <a href="#" className="text-success">modify@example.com (Personal)</a>
                    </div>
                    <div className="info-item">
                      <strong>Do Not Contact:</strong>
                      <div className="contact-preferences">
                        <div className="preference-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="preference-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <div className="preference-icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="preference-icon">
                          <i className="fas fa-envelope-open"></i>
                        </div>
                      </div>
                    </div>
                    <div className="info-item description-item">
                      <strong>Description:</strong>
                      <div className="description-icon">
                        <i className="fas fa-align-left"></i>
                      </div>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <div className="action-btn">
                      <i className="fas fa-sticky-note"></i>
                      <span>Note</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-envelope"></i>
                      <span>Email</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Scheduler</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-sms"></i>
                      <span>SMS</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-tasks"></i>
                      <span>Task</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-file"></i>
                      <span>File</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-video"></i>
                      <span>Meeting</span>
                    </div>
                    <div className="action-btn">
                      <i className="fas fa-microphone"></i>
                      <span>Voicemail</span>
                    </div>
                  </div>
                  </div>
<div>
                    <div className="expand-all" style={{marginLeft:'15px'}}>
                      <a href="#" onClick={expandAll}>
                        <i className={`fas fa-chevron-down ${Object.keys(expandedSections).length > 0 ? 'rotated' : ''}`}></i>
                        {Object.keys(expandedSections).length > 0 ? 'Collapse All' : 'Expand All'}
                      </a>
                    </div>
                  <div className="expandable-sections">
                   
                    
                    <div className="accordion" id="contactAccordion">
                      <div className="card">
                        <div className="card-header" onClick={() => toggleSection('organization')}>
                          <i className={`fas fa-chevron-right ${expandedSections.organization ? 'rotated' : ''}`}></i>
                          <span>Organization</span>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fas fa-edit"></i>
                            Edit
                          </button>
                        </div>
                        <div className={`collapse ${expandedSections.organization ? 'show' : ''}`}>
                          <div className="card-body">
                            <div className="info-item">
                              <strong>Company:</strong> Modify Corp
                            </div>
                            <div className="info-item">
                              <strong>Industry:</strong> Technology
                            </div>
                            <div className="info-item">
                              <strong>Size:</strong> 50-100 employees
                            </div>
                            <div className="info-item">
                              <strong>Website:</strong> <a href="#" className="text-success">www.modify.com</a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" onClick={() => toggleSection('payment')}>
                          <i className={`fas fa-chevron-right ${expandedSections.payment ? 'rotated' : ''}`}></i>
                          <span>Payment</span>
                          <button className="btn btn-sm btn-primary">Request Payment</button>
                        </div>
                        <div className={`collapse ${expandedSections.payment ? 'show' : ''}`}>
                          <div className="card-body">
                            <div className="info-item">
                              <strong>Payment Method:</strong> Credit Card
                            </div>
                            <div className="info-item">
                              <strong>Last Payment:</strong> $2,500.00 on 09/15/2025
                            </div>
                            <div className="info-item">
                              <strong>Next Payment:</strong> $2,500.00 due 10/15/2025
                            </div>
                            <div className="info-item">
                              <strong>Status:</strong> <span className="text-success">Current</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" onClick={() => toggleSection('other')}>
                          <i className={`fas fa-chevron-right ${expandedSections.other ? 'rotated' : ''}`}></i>
                          <span>Other</span>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fas fa-edit"></i>
                            Edit
                          </button>
                        </div>
                        <div className={`collapse ${expandedSections.other ? 'show' : ''}`}>
                          <div className="card-body">
                            <div className="info-item">
                              <strong>Source:</strong> Website Lead
                            </div>
                            <div className="info-item">
                              <strong>Lead Score:</strong> 85/100
                            </div>
                            <div className="info-item">
                              <strong>Last Activity:</strong> Email opened 2 hours ago
                            </div>
                            <div className="info-item">
                              <strong>Tags:</strong> <span className="badge badge-secondary">Hot Lead</span> <span className="badge badge-secondary">Enterprise</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" onClick={() => toggleSection('customData')}>
                          <i className={`fas fa-chevron-right ${expandedSections.customData ? 'rotated' : ''}`}></i>
                          <span>Custom Data</span>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fas fa-edit"></i>
                            Edit
                          </button>
                        </div>
                        <div className={`collapse ${expandedSections.customData ? 'show' : ''}`}>
                          <div className="card-body">
                            <div className="info-item">
                              <strong>Budget Range:</strong> $10,000 - $50,000
                            </div>
                            <div className="info-item">
                              <strong>Decision Maker:</strong> Yes
                            </div>
                            <div className="info-item">
                              <strong>Timeline:</strong> Q4 2025
                            </div>
                            <div className="info-item">
                              <strong>Competitors:</strong> Salesforce, HubSpot
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" onClick={() => toggleSection('addresses')}>
                          <i className={`fas fa-chevron-right ${expandedSections.addresses ? 'rotated' : ''}`}></i>
                          <span>Addresses</span>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="fas fa-edit"></i>
                            Edit
                          </button>
                        </div>
                        <div className={`collapse ${expandedSections.addresses ? 'show' : ''}`}>
                          <div className="card-body">
                            <div className="info-item">
                              <strong>Business Address:</strong><br/>
                              123 Business Street<br/>
                              Suite 100<br/>
                              San Francisco, CA 94105
                            </div>
                            <div className="info-item">
                              <strong>Mailing Address:</strong><br/>
                              Same as Business Address
                            </div>
                            <div className="info-item">
                              <strong>Phone:</strong> <a href="#" className="text-success">+1 (555) 123-4567</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          <div className="col-8" style={{marginTop: '20px'}}>
            <div className="communications-section">
              <div className="main-nav">
                <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'policies' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('policies')}>
                          Policies
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'pipeline' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('pipeline')}>
                          Pipeline Cards
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'files' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('files')}>
                          Files
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'communications' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('communications')}>
                          Communications
                          <span className="nav-badge">2</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'tasks' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('tasks')}>
                          Tasks
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'notes' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('notes')}>
                          Notes
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'meetings' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('meetings')}>
                          Meetings
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'logs' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('logs')}>
                          Logs
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'esignatures' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('esignatures')}>
                          eSignatures
                          <span className="nav-badge">0</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${activeTab === 'timeline' ? 'active' : ''}`} 
                           onClick={() => setActiveTab('timeline')}>
                          Timeline
                          <span className="nav-badge">2</span>
                        </a>
                      </li>
                </ul>
              </div>
              
              <div className="sub-nav">
                {activeTab === 'communications' && (
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'all' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('all')}>All</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'email' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('email')}>Email</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'text' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('text')}>Text</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'calls' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('calls')}>Calls</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'voicemail' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('voicemail')}>Voicemail Drop</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'nps' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('nps')}>NPS</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'thanks' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('thanks')}>Thanks.io</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'drips' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('drips')}>Single Contact Drips</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'campaigns' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('campaigns')}>Email Campaigns</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${activeCommTab === 'workflows' ? 'active' : ''}`} 
                         onClick={() => setActiveCommTab('workflows')}>Workflows</a>
                    </li>
                  </ul>
                )}
              </div>
              
              <div className="communications-content">
                {activeTab === 'communications' && (
                  <div className="communications-list">
                          <div className="communication-item">
                            <div className="comm-header" onClick={() => toggleEmail('email1')}>
                              <div className="comm-type">
                                <i className={`fas fa-chevron-down ${expandedEmails.email1 ? 'rotated' : ''}`}></i>
                                <i className="fas fa-envelope text-warning"></i>
                                <span>Email</span>
                              </div>
                              <div className="comm-meta">
                                <span>James Addam 09/18/2025, 3:15 PM</span>
                                <i className="fas fa-eye"></i>
                                <i className="fas fa-ellipsis-v"></i>
                              </div>
                            </div>
                            <div className={`comm-content ${expandedEmails.email1 ? 'show' : ''}`}>
                              <div className="comm-subject-to">
                                <span className="comm-subject">Subject: sample test</span>
                                <span className="comm-to">To: modify@example.com</span>
                              </div>
                              <div className="comm-from">From: priyankahosur@outlook.com</div>
                              <div className="comm-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 

                                <div className="comm-footer">
                                  <i className="fas fa-ellipsis-h"></i>
                                  <i className="fas fa-ellipsis-h"></i>
                                  <i className="fas fa-ellipsis-h"></i>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="communication-item mb-5">
                            <div className="comm-header" onClick={() => toggleEmail('email2')}>
                              <div className="comm-type">
                                <i className={`fas fa-chevron-down ${expandedEmails.email2 ? 'rotated' : ''}`}></i>
                                <i className="fas fa-envelope text-warning"></i>
                                <span>Email</span>
                              </div>
                              <div className="comm-meta">
                                <span>James Addam 09/18/2025, 3:14 PM</span>
                                <i className="fas fa-eye"></i>
                                <i className="fas fa-ellipsis-v"></i>
                              </div>
                            </div>
                            <div className={`comm-content ${expandedEmails.email2 ? 'show' : ''}`}>
                              <div className="comm-subject-to">
                                <span className="comm-subject">Subject:</span>
                                <span className="comm-to">To: modify@example.com</span>
                              </div>
                              <div className="comm-from">From: priyankahosur@outlook.com</div>
                              <div className="comm-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                <div className="comm-footer">
                                  <i className="fas fa-ellipsis-h"></i>
                                  <i className="fas fa-ellipsis-h"></i>
                                  <i className="fas fa-ellipsis-h"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-button">
        <button 
          className="btn btn-warning btn-circle" 
          onClick={() => setIsSendEmailModalOpen(true)}
          title="Send Email"
        >
          <i className="fas fa-envelope"></i>
        </button>
      </div>

      <SendEmailModal 
        isOpen={isSendEmailModalOpen}
        onClose={() => setIsSendEmailModalOpen(false)}
        contactInfo={{
          name: 'Modify',
          email: 'modify@example.com',
          agent: 'James Addam'
        }}
      />
      
      <div className="help-tab">
        <div className="help-icon">
          <i className="fas fa-info"></i>
        </div>
        <div className="help-text">Help</div>
      </div>
    </div>
  )
}

export default App
