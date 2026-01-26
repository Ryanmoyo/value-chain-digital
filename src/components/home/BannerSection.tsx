import { motion } from "framer-motion";
import digitizedCityBanner from "@/assets/digitized_city_banner2.jpeg";

const BannerSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={digitizedCityBanner}
          alt="Digitized cityscape"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-dark/80" />
      </div>

      {/* Animated scan lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(45 85% 46% / 0.03) 2px,
            hsl(45 85% 46% / 0.03) 4px
          )`,
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h2
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-light leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Digitising the Entire  {" "}
            <span className="text-gradient-gold">Real Estate Value Chain</span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="mt-6 mx-auto h-1 bg-gradient-gold rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span>EquiXToken Capital is a digital infrastructure platform that modernises how real estate assets are structured, owned, transacted, and managed — reducing friction, lowering costs, and expanding access to property markets.

</span>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </section>
  );
};

export default BannerSection;
