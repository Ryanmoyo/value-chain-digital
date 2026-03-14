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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <img
                src={founderImage}
                alt="EquiXToken Founder at Future Founder SA Showcase 2025"
                className="float-left mr-8 mb-4 rounded-2xl shadow-lg object-cover"
                loading="lazy"
                style={{ width: '300px', height: '300px' }}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                EquiXToken Capital was born from a personal experience that revealed how complex and costly the traditional real estate system can be.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While navigating the process of transferring property ownership within a family, it became clear how difficult and expensive even a simple transaction could be. What should have been a straightforward process was slowed down by administrative complexity, high transaction costs, and outdated systems. That moment revealed a much larger problem. The inefficiencies experienced in that situation are not unique — they affect millions of people buying, selling, or transferring property around the world. At the same time, many individuals who want to invest in real estate are unable to participate because the barriers to entry remain too high.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>EquiXToken Capital was founded to help change this reality.</strong> By modernizing the infrastructure that powers the real estate value chain, we aim to reduce transaction costs, improve transparency, and expand access to property ownership and investment opportunities. Our goal is to help build a future where more people can participate in real estate and benefit from one of the world's most powerful drivers of generational wealth.
              </p>
              <div className="clear-both" />
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center"> Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vision is to build the digital infrastructure that powers the future of real estate. We envision a world where property ownership and investment are accessible to more people, where transactions are faster and more affordable, and where real estate can participate in the broader digital economy. By modernizing the real estate value chain, we aim to unlock a more transparent, efficient, and globally connected property market where ownership, capital, and opportunity can move more freely.
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center"> Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vision is to build the digital infrastructure that powers the future of real estate. We envision a world where property ownership and investment are accessible to more people, where transactions are faster and more affordable, and where real estate can participate in the broader digital economy. By modernizing the real estate value chain, we aim to unlock a more transparent, efficient, and globally connected property market where ownership, capital, and opportunity can move more freely.
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Why We exist</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Real estate has long been one of the most powerful vehicles for wealth creation, yet the systems that govern it remain costly, slow, and difficult to access. Complex processes, high transaction costs, and limited access to investment opportunities prevent many individuals and communities from participating in property ownership and the value it creates.
EquiXToken Capital exists to change this. We are building the infrastructure to digitize and modernize the real estate value chain, reducing costs, improving efficiency, and expanding access to property investment. By transforming how real estate assets are owned, managed, and transacted in the digital economy, we aim to unlock new financial possibilities for developers, investors, and everyday individuals while creating a more inclusive and globally connected property market.
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
