"use client";

import {
  Brain,
  Code2,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { animateInView, fadeInUp } from "../utils/animation";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size:64px_64px] mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Placeholder - Replace with your actual logo */}
          <motion.div
            {...fadeInUp(0.2, 0.5)}
            className="relative h-72 w-72 mb-6 mx-auto cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/anonymous-dominators-logo.png"
              alt="Logo"
              fill
              className="mx-auto"
            />
          </motion.div>

          <motion.h1
            {...fadeInUp(0.4, 0.5)}
            className="text-5xl md:text-7xl font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent mb-6"
          >
            Anonymous
            <span className="block bg-linear-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Dominators
            </span>
          </motion.h1>

          <motion.p
            {...animateInView(0.6, 0.5)}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Elite AI innovators pushing boundaries in machine learning,
            automation, and cutting-edge development.
          </motion.p>

          <motion.div
            {...animateInView(0.8, 0.5)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("/pages/login")}
              className="group relative px-8 py-4 bg-linear-to-r from-secondary to-tertiary rounded-2xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Join the Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              View Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...animateInView(0.2, 0.5)}
            className="grid md:grid-cols-3 gap-6"
          >
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="AI & ML"
              text="Advanced neural networks, generative AI, and intelligent automation systems."
              delay={0.1}
            />

            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Full-Stack"
              text="Scalable applications with cutting-edge architecture and seamless UX."
              delay={0.2}
            />

            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Elite Team"
              text="Four specialized engineers driving innovation through collaboration."
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...animateInView(0.2, 0.5)}
            className="bg-linear-to-r from-secondary/10 to-tertiary-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
          >
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate the Future?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join us in building the next generation of AI-powered solutions.
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-8 px-6 text-center text-gray-400">
        <div className="max-w-6xl mx-auto">
          © {new Date().getFullYear()} Anonymous Dominators — Innovating
          Tomorrow
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, text, delay }: any) {
  return (
    <motion.div
      {...animateInView(delay, 0.5)}
      className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}
