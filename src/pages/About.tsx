import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import founderImage from "@/assets/EquixFounder.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient-gold">EquiXToken</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are building the digital infrastructure to modernise how real estate assets are structured,
              owned, transacted, and managed across emerging markets.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={founderImage}
                alt="EquiXToken Founder at Future Founder SA Showcase 2025"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Meet the Founder</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founder's vision for EquiXToken Capital was born from a deep understanding of the
                inefficiencies plaguing traditional real estate markets across Africa and emerging economies.
                Recognised at the Future Founder SA Showcase 2025, EquiXToken was awarded R100,000 for its
                innovative approach to digitising property markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-10 shadow-md"
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-foreground text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Innovation", desc: "Leveraging cutting-edge blockchain and digital infrastructure to transform property markets." },
              { title: "Accessibility", desc: "Breaking down barriers to property investment and making real estate markets inclusive for everyone." },
              { title: "Transparency", desc: "Building trust through open, verifiable, and secure digital processes across the value chain." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 shadow-sm text-center"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
