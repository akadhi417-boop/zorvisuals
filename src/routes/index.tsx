import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "@/assets/zor-logo.png";
import { Camera, Film, Palette, Sparkles, Phone, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ZOR VISUALS | Cinematic Videography & Creative Branding Studio" },
      {
        name: "description",
        content:
          "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics.",
      },
      { property: "og:title", content: "ZOR VISUALS | Cinematic Videography & Creative Branding Studio" },
      {
        property: "og:description",
        content: "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics.",
      },
    ],
  }),
});

const services = [
  { icon: Camera, title: "Photography", desc: "Editorial, portrait, and lifestyle imagery crafted with intention." },
  { icon: Film, title: "Videography", desc: "Cinematic films that capture motion, mood, and meaning." },
  { icon: Palette, title: "Editing & Color", desc: "Refined post-production and signature color grading." },
  { icon: Sparkles, title: "Brand Shoots", desc: "Bespoke campaigns built around your brand's essence." },
];


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const instagramPosts = [
  "https://www.instagram.com/zor.visuals/p/DTp3QchD0GL/",
  "https://www.instagram.com/zor.visuals/reel/DYJb0ArpnPa/",
  "https://www.instagram.com/zor.visuals/p/DYJYdQJiTOX/",
  "https://www.instagram.com/zor.visuals/reel/DWq6KsAj384/",
  "https://www.instagram.com/zor.visuals/reel/DWOz8czjzp3/",
  "https://www.instagram.com/zor.visuals/reel/DUS1w8JkgP1/",
];

const driveFiles = [
  { id: "1fyfwwm-YEHTkODKossXL4ZgwGurSabXX", name: "Cinematic Car Reel", type: "Video" },
  { id: "1sYxUyL7ss9HZ_5tJ8AoLMMrOneQbIqV5", name: "Brand Content I", type: "Creative" },
  { id: "1pJ0nCoXnVEgF_f8FPOuD891I6ijSYaYl", name: "Visual Narrative II", type: "Film" },
  { id: "1YFepR1o7fV25ZU3vdQ555EmHkEehGKGQ", name: "Fashion Study", type: "Editorial" },
  { id: "1i21TfseRa8WRKyxaeOPuZI68nsI6FnET", name: "Portrait Series", type: "Photography" },
  { id: "1xVBpwKh6bZwrG1OmyMArSOewTfPyG0FU", name: "Minimalist Motion", type: "Art" },
];

function Index() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
             style={{ background: "radial-gradient(circle at 50% 30%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 60%)" }} />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            variants={fadeUp}
            src={logo}
            alt="ZOR VISUALS - Premium Creative Studio Logo"
            width={1024}
            height={1024}
            className="w-44 md:w-56 h-auto"
          />
          <motion.h1 variants={fadeUp} className="mt-8 font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Crafting <em className="gradient-gold-text not-italic">Timeless</em> Visual Stories
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-8 gold-divider mx-auto" />
          <motion.p variants={fadeUp} className="mt-6 text-xs md:text-sm tracking-luxury text-muted-foreground">
            Photography • Videography • Creative Direction
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/zor.visuals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 border border-gold/60 text-xs tracking-luxury text-charcoal hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Get in Touch
              <span aria-hidden>→</span>
            </a>
            <WhatsAppButton variant="inline" className="border-gold/30 hover:border-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-luxury text-gold mb-6">About</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl leading-tight">
            A studio devoted to the quiet beauty of well-told stories.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-10 gold-divider mx-auto" />
          <motion.p variants={fadeUp} className="mt-10 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            ZOR Visuals is a creative studio born from a love of craft and detail. We collaborate with
            discerning brands and individuals to shape imagery that feels enduring — restrained yet
            emotive, modern yet quietly classic. Every frame is composed with intention; every project
            is a study in light, texture, and feeling.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12">
            <a
              href="https://www.instagram.com/zor.visuals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-[10px] tracking-luxury text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 group rounded-full"
            >
              <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              VIEW INSTAGRAM
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Works */}
      <section id="works" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 0%, var(--gold), transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-luxury text-gold mb-6 uppercase">Our Works</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif">Real stories. Real visuals.</motion.h2>
            <motion.div variants={fadeUp} className="mt-8 gold-divider mx-auto" />
          </motion.div>

          {/* Instagram Posts Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
              <h3 className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                <Instagram className="w-6 h-6 text-gold" /> Instagram Showcase
              </h3>
              <a href="https://www.instagram.com/zor.visuals" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-[10px] tracking-luxury text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 group rounded-full uppercase">
                View More on Instagram <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instagramPosts.map((url, index) => (
                <motion.div 
                  key={url} 
                  variants={fadeUp}
                  className="instagram-embed-container bg-black/40 rounded-sm overflow-hidden border border-border/40 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 group"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: "#000",
                      border: "0",
                      borderRadius: "3px",
                      boxShadow: "none",
                      display: "block",
                      margin: "1px",
                      maxWidth: "540px",
                      minWidth: "326px",
                      padding: "0",
                      width: "calc(100% - 2px)",
                    }}
                  ></blockquote>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Drive Portfolio Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
              <h3 className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                <Film className="w-6 h-6 text-gold" /> Portfolio Drive
              </h3>
              <a href="https://drive.google.com/drive/folders/1_p3siWx8sntgQF-iyLE3fnJtnHFCePjR" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-[10px] tracking-luxury text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 group rounded-full uppercase">
                Open Portfolio Drive <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-shadow duration-700">
              {driveFiles.map((file) => (
                <motion.div variants={fadeUp} key={file.id} className="group relative bg-background aspect-video overflow-hidden">
                  <iframe
                    src={`https://drive.google.com/file/d/${file.id}/preview`}
                    className="w-full h-full border-0 pointer-events-none grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    allow="autoplay"
                    loading="lazy"
                    title={`ZOR VISUALS - ${file.name}`}
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] tracking-luxury text-gold uppercase mb-2">{file.type}</span>
                    <h3 className="text-xl font-serif text-white mb-4">{file.name}</h3>
                    <a 
                      href={`https://drive.google.com/file/d/${file.id}/view`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-fit flex items-center gap-2 text-[10px] tracking-luxury text-white/60 hover:text-gold transition-colors"
                    >
                      VIEW IN DRIVE <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  {/* Overlay to catch clicks and redirect */}
                  <a 
                    href={`https://drive.google.com/file/d/${file.id}/view`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="absolute inset-0 z-10"
                    aria-label={`View ${file.name} in Drive`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-secondary/40">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.p variants={fadeUp} className="text-xs tracking-luxury text-gold mb-6">Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl">What we create</motion.h2>
            <motion.div variants={fadeUp} className="mt-8 gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div variants={fadeUp} key={title} className="group bg-background p-10 text-center transition-colors duration-500 hover:bg-card">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/40 text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.25} />
                </div>
                <h3 className="text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-32 px-6 bg-secondary/40">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-luxury text-gold mb-6">Founder</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl leading-tight">
            Hi, I'm <em className="gradient-gold-text not-italic">Dhanuroop</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8 gold-divider mx-auto" />
          <motion.p variants={fadeUp} className="mt-8 font-serif italic text-xl md:text-2xl leading-relaxed text-foreground">
            "Transforming moments into captivating stories."
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted-foreground font-light">
            I specialize in professional video shooting and editing, and photography — delivering
            high-quality content that engages, inspires, and leaves a lasting impact. Your vision,
            perfectly captured and edited to shine.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-8 text-xs tracking-luxury text-muted-foreground">
            Founder & Creative Director — ZOR Visuals
          </motion.p>
        </motion.div>
      </section>


      <section id="contact" className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-luxury text-gold mb-6">Contact</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl">Let's work together.</motion.h2>
          <motion.div variants={fadeUp} className="mt-8 gold-divider mx-auto" />
          <motion.p variants={fadeUp} className="mt-8 text-muted-foreground font-light max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out and let's craft something
            timeless.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-14 grid sm:grid-cols-2 gap-8 text-sm">
            <a href="tel:+916238478283" className="group flex flex-col items-center gap-3 hover:text-gold transition-colors">
              <Phone className="w-5 h-5 text-gold" strokeWidth={1.25} />
              <span className="tracking-luxury text-xs text-muted-foreground group-hover:text-gold transition-colors">Phone</span>
              <span>+91 62384 78283</span>
            </a>
            <a href="https://www.instagram.com/zor.visuals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5 text-gold" strokeWidth={1.25} />
              <span className="tracking-luxury text-xs text-muted-foreground group-hover:text-gold transition-colors">Instagram</span>
              <span>@zor.visuals</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton variant="inline" className="px-10 border-gold" />
            <a
              href="https://www.instagram.com/zor.visuals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-gold/30 text-[10px] tracking-luxury text-gold hover:border-gold transition-all duration-500 group rounded-full"
            >
              <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              FOLLOW OUR WORKS
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

declare global {
  interface Window {
    instgrm: any;
  }
}
