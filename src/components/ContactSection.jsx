import { motion } from 'motion/react'
import { FadeInUp } from './ScrollAnimations'

export default function ContactSection() {
  return (
    <section className="relative py-32 px-4 md:px-6 flex items-center min-h-screen">
      <div className="max-w-4xl mx-auto text-center w-full">
        <FadeInUp>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3 font-semibold">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Create
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Something Great
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-md mx-auto">
            Ready to elevate your digital presence? Let&apos;s talk.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <motion.a
            href="mailto:semen.rubssss@gmail.com"
            whileHover={{ scale: 1.03 }}
            className="inline-block text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent"
          >
            semen.rubssss@gmail.com
          </motion.a>
        </FadeInUp>

        <FadeInUp delay={0.35} className="mt-24">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
