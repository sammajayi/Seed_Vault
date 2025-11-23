'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const trustIndicators = [
    { icon: Shield, text: 'Zero personal data stored', highlight: 'Zero' },
    { icon: DollarSign, text: 'fees', highlight: '$0' },
    { icon: ArrowRight, text: 'withdrawals', highlight: 'Instant' },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-[#0A0A12]">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#355DFF]/20 via-[#7A4BFF]/10 to-[#47D1FF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 5,
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#7A4BFF]/15 via-[#47D1FF]/10 to-[#355DFF]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#191A23]/80 border border-[#355DFF]/30 rounded-full text-[#47D1FF] font-medium mb-6 backdrop-blur-sm shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="h-4 w-4" />
            </motion.div>
            <span className="text-sm">Built on Celo • Verified by Self Protocol</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-[#F3F3F7] leading-tight mb-6"
          >
            Automated DeFi
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block bg-gradient-to-r from-[#355DFF] via-[#7A4BFF] to-[#47D1FF] bg-clip-text text-transparent"
            >
              Yield Generation
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="block text-5xl md:text-6xl mt-2"
            >
              on Celo
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-[#B5B5C4] mb-8 leading-relaxed"
          >
            Verify once, earn forever. We <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-[#F3F3F7] inline-block"
            >
              deploy your funds
            </motion.span> to 
            DeFi protocols for <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-[#47D1FF] inline-block"
            >
              3-15% APY
            </motion.span>. 
            AI-powered, <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-[#F3F3F7] inline-block"
            >
              fully automated
            </motion.span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-[#355DFF] to-[#7A4BFF] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Link href="/dashboard">
                Launch App
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works"
              className="px-8 py-4 bg-[#191A23]/80 border-2 border-[#191A23] text-[#F3F3F7] rounded-2xl font-semibold hover:border-[#47D1FF] hover:shadow-md transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#B5B5C4]"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#191A23]/60 rounded-full backdrop-blur-sm hover:bg-[#191A23]/80 transition-colors"
              >
                <indicator.icon className="h-5 w-5 text-[#47D1FF]" />
                <span>
                  <strong className="text-[#F3F3F7]">{indicator.highlight}</strong> {indicator.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 hidden lg:block"
          >
            <div className="h-16 w-16 bg-gradient-to-br from-[#355DFF] to-[#7A4BFF] rounded-2xl opacity-20 blur-sm" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-32 right-16 hidden lg:block"
          >
            <div className="h-12 w-12 bg-gradient-to-br from-[#7A4BFF] to-[#47D1FF] rounded-xl opacity-20 blur-sm" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-20 left-20 hidden lg:block"
          >
            <div className="h-8 w-8 bg-gradient-to-br from-[#47D1FF] to-[#355DFF] rounded-lg opacity-20 blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
