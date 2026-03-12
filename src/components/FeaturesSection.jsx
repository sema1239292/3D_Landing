import { FadeInUp } from './ScrollAnimations'

const features = [
  {
    icon: '🎨',
    title: 'Creative Design',
    description:
      'Unique visual identities that stand out. We blend aesthetics with functionality.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized performance across all devices. Every millisecond counts.',
  },
  {
    icon: '🌐',
    title: '3D Experiences',
    description:
      'Immersive WebGL-powered interfaces that captivate and engage your audience.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description:
      'Responsive designs that work beautifully from phones to ultra-wide screens.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security with 99.9% uptime. Your data is always safe.',
  },
  {
    icon: '🚀',
    title: 'Quick Launch',
    description:
      'From concept to production in weeks, not months. Agile and iterative.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Cutting-edge solutions for modern digital challenges
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeInUp key={feature.title} delay={index * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
