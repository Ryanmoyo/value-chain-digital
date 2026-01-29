import { motion } from "framer-motion";
import digitizedCityBanner from "@/assets/digitized_city_banner2.jpeg";
import "./BannerSection.css";

const BannerSection: React.FC = () => {
  return (
    <section className="banner">
      {/* Background Image */}
      <div className="banner-bg">
        <img
          src={digitizedCityBanner}
          alt="Digitized cityscape"
          className="banner-image"
        />

        {/* Overlay gradients */}
        <div className="banner-overlay-vertical" />
        <div className="banner-overlay-horizontal" />
      </div>

      {/* Animated scan lines */}
      <motion.div
        className="banner-scanlines"
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
      <div className="banner-content">
        <motion.div
          className="banner-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="banner-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Digitising the Entire{" "}
            <span className="text-gradient-gold">
              Real Estate Value Chain
            </span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="banner-underline"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <span className="banner-description">
            EquiXToken Capital is a digital infrastructure platform that
            modernises how real estate assets are structured, owned,
            transacted, and managed — reducing friction, lowering costs,
            and expanding access to property markets.
          </span>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="banner-particle"
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
