import { motion } from 'motion/react'
import { FadeInUp } from './ScrollAnimations'

const features = [
  {
    num: '01',
    title: 'Creative Design',
    description: 'Unique visual identities that stand out. We blend aesthetics with functionality.',
  },
  {
    num: '02',
    title: 'Lightning Performance',
    description: 'Optimized experiences across all devices. Every millisecond counts.',
  },
  {
    num: '03',
    title: '3D Experiences',
    description: 'Immersive WebGL-powered interfaces that captivate and engage your audience.',
  },
  {
    num: '04',
    title: 'Mobile First',
    description: 'Responsive designs that work beautifully from phones to ultra-wide screens.',
  },
  {
    num: '05',
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with 99.9% uptime. Your data is always safe.',
  },
  {
    num: '06',
    title: 'Rapid Delivery',
    description: 'From concept to production in weeks, not months. Agile and iterative.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="works" className="relative py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300 text-center mb-3 font-semibold">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
            What We Do
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeInUp key={feature.num} delay={index * 0.08}>
              <motion.div
                whileHover={{ borderColor: 'rgba(139, 92, 246, 0.4)' }}
                className="neon-card-solid group rounded-2xl p-8 h-full transition-all duration-300"
              >
                <span className="text-3xl font-bold text-purple-500/40 group-hover:text-purple-400/70 transition-colors">
                  {feature.num}
                </span>
                <h3 className="text-lg font-bold mt-4 mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
