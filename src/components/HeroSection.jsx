import { motion } from 'motion/react'
import { FadeInUp } from './ScrollAnimations'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <FadeInUp>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-white">Digital Studio</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We craft immersive digital experiences that push the boundaries
            of design and technology.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full text-lg transition-colors min-h-[44px]"
          >
            Explore Our Work
          </motion.button>
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <span className="text-sm text-gray-400">Scroll</span>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
