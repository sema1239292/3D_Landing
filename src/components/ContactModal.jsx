import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function ContactModal({ isOpen, onClose }) {
  const overlayRef = useRef()
  const nameRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    if (!isOpen) return
    setStatus('idle')
    nameRef.current?.focus()
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.target)).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
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

            {status === 'sent' ? (
              <div className="text-center py-8">
                <p className="text-green-400 text-lg font-semibold mb-2">Message sent!</p>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" className="space-y-4">
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
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="neon-button w-full py-3 rounded-full font-semibold text-base disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
                )}

                <p className="text-gray-500 text-xs text-center pt-2">Or contact me directly</p>

                <motion.a
                  href="https://t.me/flexloll"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-base border border-[#229ED9]/40 text-[#229ED9] hover:bg-[#229ED9]/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Message me on Telegram
                </motion.a>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
