import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./SolutionSection.css";

const SolutionSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // House configuration
    const houses: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      roofHeight: number;
      offset: number;
      speed: number;
      opacity: number;
    }> = [];

    // Generate random houses
    const generateHouses = () => {
      houses.length = 0;
      const numHouses = Math.floor(canvas.width / 150) + 2;
      
      for (let i = 0; i < numHouses; i++) {
        houses.push({
          x: (i * canvas.width) / numHouses + Math.random() * 50,
          y: canvas.height * 0.6 + Math.random() * 100,
          width: 40 + Math.random() * 30,
          height: 50 + Math.random() * 40,
          roofHeight: 25 + Math.random() * 20,
          offset: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
          opacity: 0.15 + Math.random() * 0.25,
        });
      }
    };

    generateHouses();

    // Animation
    let animationFrame: number;
    let time = 0;

    const drawHouse = (house: typeof houses[0], t: number) => {
      const float = Math.sin(t * house.speed + house.offset) * 3;
      const baseY = house.y + float;

      ctx.globalAlpha = house.opacity;

      // Draw main house body (rectangle)
      ctx.fillStyle = "#D4AF37";
      ctx.beginPath();
      ctx.moveTo(house.x, baseY);
      ctx.lineTo(house.x + house.width, baseY);
      ctx.lineTo(house.x + house.width, baseY + house.height);
      ctx.lineTo(house.x, baseY + house.height);
      ctx.closePath();
      ctx.fill();

      // Draw roof (triangle)
      ctx.fillStyle = "#B8942F";
      ctx.beginPath();
      ctx.moveTo(house.x - 5, baseY);
      ctx.lineTo(house.x + house.width / 2, baseY - house.roofHeight);
      ctx.lineTo(house.x + house.width + 5, baseY);
      ctx.closePath();
      ctx.fill();

      // Draw door
      const doorWidth = house.width * 0.25;
      const doorHeight = house.height * 0.4;
      const doorX = house.x + house.width / 2 - doorWidth / 2;
      const doorY = baseY + house.height - doorHeight;
      
      ctx.fillStyle = "#8B7021";
      ctx.fillRect(doorX, doorY, doorWidth, doorHeight);

      // Draw windows
      const windowSize = house.width * 0.15;
      const windowY = baseY + house.height * 0.3;
      
      ctx.fillStyle = "#FFF8DC";
      // Left window
      ctx.fillRect(house.x + house.width * 0.15, windowY, windowSize, windowSize);
      // Right window
      ctx.fillRect(house.x + house.width * 0.7, windowY, windowSize, windowSize);

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      houses.forEach((house) => {
        drawHouse(house, time);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="solution-section">
      <canvas ref={canvasRef} className="houses-background" />
      <div className="solution-container">
        <motion.div
          className="solution-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="solution-label">
            <span>Our Solution</span>
          </div>

          <h2 className="solution-title">
            A Unified Digital{" "}
            <span className="text-gradient-gold">Property Infrastructure</span>
          </h2>

          <p className="solution-description">
            EquiXToken Capital digitises every stage of the real estate lifecycle — from asset origination and legal structuring to ownership issuance, capital participation, settlement, and transfer. This creates a single, auditable system where property assets can move efficiently between stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;