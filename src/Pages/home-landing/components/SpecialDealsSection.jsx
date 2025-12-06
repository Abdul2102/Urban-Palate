import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SpecialDealsSection = ({ onViewDeal }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('signature');

  // Animation variants for tabs
  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.95 },
    active: { opacity: 1, scale: 1 }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -15,
      scale: 1.03,
      transition: { duration: 0.4 }
    }
  };

  const dealCategories = {
    signature: {
      title: 'Signature Collection',
      deals: [
        {
          id: 1,
          title: 'Wagyu Beef Tasting',
          description: 'Premium A5 Wagyu with truffle reduction, seasonal vegetables, and red wine jus',
          originalPrice: 89.99,
          discountPrice: 67.99,
          discount: '25% OFF',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
          alt: 'Premium A5 Wagyu beef steak with perfect marbling, seared to perfection and garnished with truffle reduction and seasonal vegetables on an elegant black plate',
          badge: 'Chef\'s Choice',
          time: '45 min',
          rating: 4.9
        },
        {
          id: 2,
          title: 'Lobster Thermidor Deluxe',
          description: 'Fresh Maine lobster with cognac cream sauce, gruyere cheese, and herb butter',
          originalPrice: 68.99,
          discountPrice: 51.99,
          discount: '25% OFF',
          image: 'https://images.unsplash.com/photo-1625938145312-8cea7a542d71',
          alt: 'Elegant lobster thermidor with fresh Maine lobster meat in rich cognac cream sauce, topped with melted gruyere cheese and fresh herbs in the shell',
          badge: 'Ocean Fresh',
          time: '35 min',
          rating: 4.8
        },
        {
          id: 3,
          title: 'Duck Confit Perfection',
          description: 'Slow-cooked duck leg with cherry gastrique, potato fondant, and micro greens',
          originalPrice: 54.99,
          discountPrice: 41.99,
          discount: '24% OFF',
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84',
          alt: 'Artistically plated duck confit with golden crispy skin, accompanied by glossy cherry gastrique, buttery potato fondant, and delicate micro greens',
          badge: 'French Classic',
          time: '40 min',
          rating: 4.7
        }
      ]
    },
    fusion: {
      title: 'Modern Fusion',
      deals: [
        {
          id: 4,
          title: 'Asian-Inspired Salmon',
          description: 'Miso-glazed salmon with wasabi aioli, forbidden rice, and pickled vegetables',
          originalPrice: 42.99,
          discountPrice: 32.99,
          discount: '23% OFF',
          image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
          alt: 'Beautiful miso-glazed salmon fillet with caramelized surface, served over forbidden black rice with colorful pickled vegetables and wasabi aioli drizzle',
          badge: 'Healthy Choice',
          time: '25 min',
          rating: 4.6
        },
        {
          id: 5,
          title: 'Mediterranean Octopus',
          description: 'Charred octopus with olive tapenade, roasted peppers, and lemon oil',
          originalPrice: 38.99,
          discountPrice: 29.99,
          discount: '23% OFF',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b',
          alt: 'Perfectly charred octopus tentacles with beautiful grill marks, artfully arranged with olive tapenade, colorful roasted peppers, and golden lemon oil',
          badge: 'Mediterranean',
          time: '30 min',
          rating: 4.5
        },
        {
          id: 6,
          title: 'Truffle Risotto Royale',
          description: 'Creamy Arborio rice with black truffle shavings, parmesan, and wild mushrooms',
          originalPrice: 36.99,
          discountPrice: 27.99,
          discount: '24% OFF',
          image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
          alt: 'Luxurious truffle risotto with creamy Arborio rice, generous black truffle shavings, aged parmesan cheese, and assorted wild mushrooms in an elegant bowl',
          badge: 'Vegetarian',
          time: '28 min',
          rating: 4.8
        }
      ]
    },
    dessert: {
      title: 'Sweet Masterpieces',
      deals: [
        {
          id: 7,
          title: 'Chocolate Soufflé Supreme',
          description: 'Warm dark chocolate soufflé with vanilla bean ice cream and gold leaf',
          originalPrice: 18.99,
          discountPrice: 13.99,
          discount: '26% OFF',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
          alt: 'Elegant dark chocolate soufflé rising above its ramekin, dusted with powdered sugar and accompanied by premium vanilla bean ice cream with delicate gold leaf garnish',
          badge: 'Signature',
          time: '20 min',
          rating: 4.9
        },
        {
          id: 8,
          title: 'Crème Brûlée Trio',
          description: 'Classic vanilla, lavender honey, and Madagascar bourbon flavored crème brûlée',
          originalPrice: 16.99,
          discountPrice: 12.99,
          discount: '24% OFF',
          image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
          alt: 'Three elegant crème brûlée ramekins with perfectly caramelized sugar tops, featuring classic vanilla, lavender honey, and Madagascar bourbon flavors with fresh berry garnish',
          badge: 'Chef\'s Favorite',
          time: '15 min',
          rating: 4.7
        },
        {
          id: 9,
          title: 'Deconstructed Tiramisu',
          description: 'Modern presentation with mascarpone mousse, coffee caviar, and cocoa soil',
          originalPrice: 15.99,
          discountPrice: 11.99,
          discount: '25% OFF',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
          alt: 'Artistic deconstructed tiramisu with fluffy mascarpone mousse, innovative coffee caviar pearls, and rich cocoa soil, elegantly plated with ladyfinger tuile',
          badge: 'Modern Art',
          time: '12 min',
          rating: 4.6
        }
      ]
    }
  };

  const handleDealClick = (dealId) => {
    navigate('/menu-catalog', { state: { selectedDeal: dealId } });
  };

  const handleViewAllDeals = () => {
    if (onViewDeal) {
      onViewDeal('all');
    } else {
      navigate('/menu-catalog', { state: { showDeals: true } });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-purple-950/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="glass-card-light inline-block px-6 py-3 rounded-full mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent font-semibold">
              ✨ EXCLUSIVE COLLECTION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Curated <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Indulge in our chef's masterfully crafted dishes, each a symphony of flavors and artful presentation
          </p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-16 glass-card rounded-3xl p-3 shadow-neon-lg max-w-2xl mx-auto"
        >
          {Object.entries(dealCategories)?.map(([key, category]) => (
            <motion.button
              key={key}
              variants={tabVariants}
              animate={selectedTab === key ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab(key)}
              className={`px-8 py-4 rounded-2xl text-sm font-body font-semibold transition-all duration-500 ${
                selectedTab === key
                  ? 'bg-neon-gradient text-white shadow-neon'
                  : 'text-muted-foreground hover:text-white hover:bg-violet-500/20'
              }`}
            >
              {category?.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Deal Cards Grid */}
        <motion.div
          key={selectedTab}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {dealCategories?.[selectedTab]?.deals?.map((deal, index) => (
            <motion.div
              key={deal?.id}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="glass-card rounded-3xl shadow-neon-lg hover:shadow-neon-xl transition-all duration-500 overflow-hidden cursor-pointer group"
              onClick={() => handleDealClick(deal?.id)}
            >
              {/* Enhanced Deal Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={deal?.image}
                  alt={deal?.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Discount Badge with Glow */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-neon animate-pulse-glow">
                  {deal?.discount}
                </div>
                
                {/* Special Badge */}
                <div className="absolute top-4 right-4 glass-card-light text-white px-4 py-2 rounded-full text-xs font-medium shadow-neon">
                  {deal?.badge}
                </div>
                
                {/* Rating and Time */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="glass-card-light text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                    ⭐ {deal?.rating}
                  </div>
                  <div className="glass-card-light text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                    ⏱️ {deal?.time}
                  </div>
                </div>
              </div>

              {/* Enhanced Deal Content */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {deal?.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {deal?.description}
                </p>
                
                {/* Enhanced Pricing Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
                      ${deal?.discountPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${deal?.originalPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">You save</div>
                    <div className="text-sm font-bold text-success">
                      ${(deal?.originalPrice - deal?.discountPrice)?.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-neon-gradient hover:shadow-neon-lg transition-all duration-500 text-white font-semibold py-4 rounded-2xl"
                  onClick={(e) => {
                    e?.stopPropagation();
                    handleDealClick(deal?.id);
                  }}
                >
                  Reserve Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewAllDeals}
              className="px-12 py-6 text-lg font-semibold glass-card border-2 border-violet-400 text-white hover:bg-violet-500/20 hover:border-orange-400 rounded-2xl shadow-neon-lg hover:shadow-neon-xl transition-all duration-500"
            >
              Explore Full Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialDealsSection;