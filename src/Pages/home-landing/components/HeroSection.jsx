import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = ({ onOrderNow }) => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/table-reservation');
  };

  // Enhanced floating animation variants for modern UI
  const floatingVariants = {
    float1: {
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [0, -25, 0],
      rotate: [0, -8, 8, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.7
      }
    },
    float3: {
      y: [0, -35, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.15, 1],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.2
      }
    },
    float4: {
      y: [0, -28, 0],
      rotate: [0, -12, 12, 0],
      scale: [1, 1.08, 1],
      transition: {
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.8
      }
    },
    float5: {
      y: [0, -32, 0],
      rotate: [0, 8, -8, 0],
      scale: [1, 1.12, 1],
      transition: {
        duration: 5.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2.3
      }
    },
    float6: {
      y: [0, -26, 0],
      rotate: [0, -14, 14, 0],
      scale: [1, 1.06, 1],
      transition: {
        duration: 4.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-animated-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
          alt="Modern upscale restaurant interior with elegant lighting, featuring contemporary design elements and sophisticated dining atmosphere"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-orange-900/80"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      {/* Enhanced Floating Food Items */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Premium Food Emojis with Glow Effects */}
        <motion.div
          className="absolute top-20 left-8 text-7xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.9, scale: 1, ...floatingVariants?.float1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
        >
          🍱
        </motion.div>

        <motion.div
          className="absolute top-32 right-12 text-6xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.85, scale: 1, ...floatingVariants?.float2 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(249, 115, 22, 0.8)' }}
        >
          🥘
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-16 text-5xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1, ...floatingVariants?.float3 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}
        >
          🍣
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20 text-6xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.85, scale: 1, ...floatingVariants?.float4 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
        >
          🦞
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-12 text-5xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.75, scale: 1, ...floatingVariants?.float5 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(234, 179, 8, 0.8)' }}
        >
          🧆
        </motion.div>

        <motion.div
          className="absolute bottom-52 right-16 text-6xl filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1, ...floatingVariants?.float6 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
        >
          🍮
        </motion.div>

        {/* Additional floating items for desktop */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl opacity-60 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1, ...floatingVariants?.float1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          style={{ textShadow: '0 0 15px rgba(249, 115, 22, 0.6)' }}
        >
          🥂
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-4xl opacity-65 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.65, scale: 1, ...floatingVariants?.float2 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          style={{ textShadow: '0 0 15px rgba(168, 85, 247, 0.6)' }}
        >
          🍾
        </motion.div>
      </div>
      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-20">
          
          {/* Restaurant Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="glass-card p-6 rounded-2xl animate-pulse-glow">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Urban Palate
              </h1>
              <p className="text-muted-foreground text-sm mt-2">Fine Dining Experience</p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8"
            style={{ textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
          >
            Exquisite
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Culinary
            </span>
            <br />
            Journey
          </motion.h2>

          {/* Premium Offer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="glass-card-light p-8 rounded-3xl shadow-neon-xl">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-6">
                ✨ Grand Opening Celebration ✨
              </p>
              <p className="text-xl sm:text-2xl text-orange-200 font-medium mb-6">
                Experience <span className="text-orange-400 font-bold text-2xl sm:text-3xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">30% OFF</span> on your first visit + 
                <span className="text-white font-bold"> Complimentary appetizer</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg sm:text-xl text-white mb-6">
                <span className="glass-card px-6 py-3 rounded-full backdrop-blur-sm shadow-neon">
                  🌟 Michelin-trained chefs
                </span>
                <span className="glass-card px-6 py-3 rounded-full backdrop-blur-sm shadow-neon">
                  🍷 Curated wine selection
                </span>
              </div>
              <p className="text-lg text-violet-200 font-medium">
                *Exclusive offer - Reservation code: <span className="text-orange-400 font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">URBAN30</span>
              </p>
            </div>
          </motion.div>

          {/* Enhanced Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleReservation}
                className="text-xl px-12 py-6 bg-neon-gradient hover:shadow-neon-xl text-white font-bold rounded-2xl border-0 shadow-neon-lg transition-all duration-300"
              >
                Reserve Table
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={onOrderNow}
                className="text-xl px-12 py-6 glass-card border-2 border-violet-400 text-white hover:bg-violet-500/20 hover:border-orange-400 font-bold rounded-2xl shadow-neon-lg hover:shadow-neon-xl transition-all duration-300"
              >
                Order Online
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
      {/* Enhanced Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-15">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="drop-shadow-2xl opacity-80"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;