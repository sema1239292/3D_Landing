import { motion } from 'motion/react'
import { FadeInUp, SlideInLeft } from './ScrollAnimations'

const socials = [
  { name: 'GitHub', href: '#', icon: 'GH' },
  { name: 'Twitter', href: '#', icon: 'TW' },
  { name: 'LinkedIn', href: '#', icon: 'LI' },
  { name: 'Dribbble', href: '#', icon: 'DR' },
]

export default function ContactSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-6 flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Ready to bring your vision to life? Get in touch and let&apos;s
            create something extraordinary.
          </p>
        </FadeInUp>

        <SlideInLeft delay={0.2}>
          <a
            href="mailto:hello@example.com"
            className="inline-block text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all"
          >
            hello@example.com
          </a>
        </SlideInLeft>

        <FadeInUp delay={0.4}>
          <div className="flex justify-center gap-6 mt-12">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, color: '#818cf8' }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:border-indigo-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.6} className="mt-20">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Creative Studio. All rights reserved.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
