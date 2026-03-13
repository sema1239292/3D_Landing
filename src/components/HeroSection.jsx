import { motion } from 'motion/react'
import { FadeInUp } from './ScrollAnimations'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-5xl">
        <FadeInUp>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-purple-400/80 mb-6 font-medium">
            Digital Experience Studio
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              We Build
            </span>
            <br />
            <span className="text-white">
              The Future
            </span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p className="mt-8 text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Crafting immersive digital experiences through the fusion
            of 3D design, motion, and cutting-edge technology.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-4 font-semibold rounded-full text-lg min-h-[48px]"
            >
              Start a Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 hover:border-purple-400/50 text-gray-300 hover:text-white font-medium rounded-full text-lg transition-all min-h-[48px]"
            >
              View Work
            </motion.button>
          </div>
        </FadeInUp>
      </div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </motion.div>
    </section>
  )
}
