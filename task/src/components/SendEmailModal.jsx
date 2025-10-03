import React, { useState, useEffect } from 'react'
import './SendEmailModal.css'

const SendEmailModal = ({ isOpen, onClose, contactInfo }) => {
  const [formData, setFormData] = useState({
    template: '',
    signature: '',
    to: contactInfo?.email || '',
    cc: '',
    bcc: '',
    subject: '',
    body: '',
    attachments: []
  })

  const [showCC, setShowCC] = useState(false)
  const [showBCC, setShowBCC] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }))
  }

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const handleSend = () => {
    console.log('Sending email:', formData)
    onClose()
  }

  const handleReset = () => {
    setFormData({
      template: '',
      signature: '',
      to: contactInfo?.email || '',
      cc: '',
      bcc: '',
      subject: '',
      body: '',
      attachments: []
    })
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="send-email-modal-overlay" onClick={handleOverlayClick}>
      <div className="send-email-modal">
        
        {/* Header */}
        <div className="modal-header">
          <h2>Send Email</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="template-signature-row">
          <input
            type="text"
            name="template"
            value={formData.template}
            onChange={handleInputChange}
            placeholder="Select Template"
            className="form-input"
          />
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleInputChange}
            placeholder="Select Signature"
            className="form-input"
          />
        </div>

        <div className="to-row">
          <span className="to-label">To <span className="required">*</span></span>
          <input
            type="email"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Search"
            className="form-input"
          />
          <div className="cc-bcc-buttons">
            <button onClick={() => setShowCC(!showCC)} className={`cc-btn ${showCC ? 'active' : ''}`}>CC</button>
            <button onClick={() => setShowBCC(!showBCC)} className={`bcc-btn ${showBCC ? 'active' : ''}`}>BCC</button>
          </div>
        </div>

        {showCC && (
          <div className="cc-bcc-row">
            <input type="email" name="cc" value={formData.cc} onChange={handleInputChange} placeholder="CC" className="form-input" />
          </div>
        )}
        {showBCC && (
          <div className="cc-bcc-row">
            <input type="email" name="bcc" value={formData.bcc} onChange={handleInputChange} placeholder="BCC" className="form-input" />
          </div>
        )}

        <div className="subject-row">
          <span className="subject-label">Subject</span>
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" className="form-input" />
        </div>

        <div className="editor-container">
          <div className="editor-toolbar">
            <select className="toolbar-select"><option>Arial</option></select>
            <select className="toolbar-select"><option>11pt</option></select>
            <select className="toolbar-select"><option>Tags</option></select>
            <select className="toolbar-select"><option>Formats</option></select>
            <button className="toolbar-btn"><i className="fas fa-list-ul"></i></button>
            <button className="toolbar-btn"><i className="fas fa-list-ol"></i></button>
            <button className="toolbar-btn"><i className="fas fa-link"></i></button>
            <button className="toolbar-btn"><i className="fas fa-image"></i></button>
            <button className="toolbar-btn"><i className="fas fa-code"></i></button>
            <button className="toolbar-btn"><i className="fas fa-font"></i></button>
            <button className="toolbar-btn"><i className="fas fa-paint-brush"></i></button>
            <select className="toolbar-select"><option>▼</option></select>
          </div>
          <div className="editor-content">
            <textarea name="body" value={formData.body} onChange={handleInputChange} className="editor-textarea" />
            <div className="editor-footer">
              <div className="ai-icon">
                <i className="fas fa-cog"></i>
                <span>AI</span>
              </div>
              <div className="resize-handle">
                <i className="fas fa-grip-lines"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="attachment-section">
          <div className="file-drop-zone" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} onClick={() => document.getElementById('file-input').click()}>
            <p>Drag and drop files here or click</p>
            <small>(jpg, png, pdf, docx, xls, csv, zip, ppt, mp3, wav)</small>
            <p className="size-limit">Size limit - 20MB</p>
          </div>
          <input id="file-input" type="file" multiple style={{ display: 'none' }} onChange={handleFileUpload} />
          {formData.attachments.length > 0 && (
            <div className="attachments-list">
              {formData.attachments.map((file, idx) => (
                <div key={idx} className="attachment-item">
                  <i className="fas fa-file"></i>
                  <span>{file.name}</span>
                  <span className="file-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  <button onClick={() => removeAttachment(idx)}><i className="fas fa-times"></i></button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button className="btn btn-primary" onClick={handleSend}>Send</button>
          <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default SendEmailModal
