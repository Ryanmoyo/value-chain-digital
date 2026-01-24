import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-dark overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(hsl(45 85% 46% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(45 85% 46% / 0.3) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

      

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;