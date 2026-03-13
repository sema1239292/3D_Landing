import { motion } from 'motion/react'
import { FadeInUp } from './ScrollAnimations'

const socials = [
  { name: 'GitHub', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
]

export default function ContactSection() {
  return (
    <section className="relative py-32 px-4 md:px-6 flex items-center min-h-screen">
      <div className="max-w-4xl mx-auto text-center w-full">
        <FadeInUp>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400/80 mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Create
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Something Great
            </span>
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
            Ready to elevate your digital presence? Let&apos;s talk.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.03 }}
            className="inline-block text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent"
          >
            hello@example.com
          </motion.a>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <div className="flex justify-center gap-4 mt-14">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.5} className="mt-24">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
