import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const EMAIL = 'YOUR_EMAIL@example.com'

export default function ContactModal({ isOpen, onClose }) {
  const overlayRef = useRef()
  const nameRef = useRef()

  useEffect(() => {
    if (!isOpen) return
    nameRef.current?.focus()
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name')
    const email = fd.get('email')
    const message = fd.get('message')
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`
    window.open(`mailto:${EMAIL}?subject=Project%20Inquiry%20from%20${encodeURIComponent(name)}&body=${body}`)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-md neon-card rounded-2xl p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Start a Project</h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-500 hover:text-white transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <input
                ref={nameRef}
                name="name"
                required
                placeholder="Your name"
                aria-label="Your name"
                className="modal-input"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
                className="modal-input"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project..."
                aria-label="Message"
                className="modal-input resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-button w-full py-3 rounded-full font-semibold text-base"
              >
                Send Message
              </motion.button>
            </form>

            <p className="text-gray-600 text-xs text-center mt-4">
              Or reach us on Telegram: <span className="text-purple-400">@YOUR_TG</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
