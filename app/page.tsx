"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Shield,
  Bell,
  Zap,
  Home,
  Building2,
  CheckCircle,
  BarChart3,
  Menu,
  X,
  Wifi,
  Battery,
  Signal,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Link from "next/link";

// Enhanced Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Components
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: headerBackground }}
      className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-emerald-100/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-emerald-800">
          AcuteMeter
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-700 hover:text-emerald-700 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-emerald-700 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#team"
            className="text-gray-700 hover:text-emerald-700 transition-colors"
          >
            Team
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-emerald-700 transition-colors"
          >
            Reviews
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-emerald-700 hover:text-emerald-800"
          >
            Support
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Pre-order Now
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-emerald-100/20 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-emerald-700 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-gray-700 hover:text-emerald-700 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="#team"
                  className="text-gray-700 hover:text-emerald-700 transition-colors"
                >
                  Team
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-700 hover:text-emerald-700 transition-colors"
                >
                  Reviews
                </Link>
                <Button
                  variant="ghost"
                  className="text-emerald-700 hover:text-emerald-800 justify-start"
                >
                  Support
                </Button>
                <Link href="/preorder">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white justify-start">
                    Pre-order Now
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

function AdvancedFeaturesSection() {
  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Continuous tracking of gas levels with precision sensors and instant updates.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Smart Alerts",
      description:
        "Timely notifications via SMS, USSD, or mobile app when gas levels are low.",
      icon: <Bell className="w-8 h-8" />,
    },
    {
      title: "Leak Detection",
      description:
        "Advanced sensors to detect and alert you about potential gas leaks.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Smart Technology
            <br />
            <span className="text-emerald-600">At Your Service</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the future of gas monitoring with our innovative features
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_emerald_1px,_transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 text-sm px-6 py-2 bg-emerald-100 text-emerald-800 border-emerald-200"
          >
            🚀 Revolutionary IoT Technology
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Smarter Cooking.
          <br />
          <span className="text-emerald-600">Safer Living.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Monitor your LPG levels in real-time and receive instant alerts via
          SMS, USSD, or mobile app. Never run out of gas again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
          >
            <Play className="w-5 h-5 mr-2" />
            See It In Action
          </Button>
          <Link href="/preorder">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full"
            >
              Pre-order Now
            </Button>
          </Link>
        </motion.div>

        {/* Hero Product Visual */}
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl scale-150" />

            {/* Product Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-100">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Device Mockup */}
                <div className="text-center">
                  <div className="bg-black/20 rounded-xl p-6 mb-4 backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">88%</div>
                    <div className="text-sm opacity-80">LPG LEVEL</div>
                  </div>
                  <div className="flex justify-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <Wifi className="w-4 h-4 mr-1" />
                      Connected
                    </div>
                    <div className="flex items-center">
                      <Battery className="w-4 h-4 mr-1" />
                      95%
                    </div>
                    <div className="flex items-center">
                      <Signal className="w-4 h-4 mr-1" />
                      Strong
                    </div>
                  </div>
                </div>

                {/* Animated Signals */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 right-4 w-3 h-3 bg-lime-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home");
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  type Problem = {
    title: string;
    description: string;
    icon: React.ReactElement;
  };

  type Solution = {
    title: string;
    description: string;
    icon: React.ReactElement;
  };

  const problems: Record<"home" | "business", Problem[]> = {
    home: [
      {
        title: "Unexpected Shortages",
        description:
          "Running out of gas during cooking, disrupting family meals",
        icon: <AlertTriangle className="w-6 h-6" />,
      },
      {
        title: "Safety Concerns",
        description: "Worrying about gas leaks and potential hazards",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Cost Inefficiency",
        description: "Emergency refills at premium prices",
        icon: <DollarSign className="w-6 h-6" />,
      },
    ],
    business: [
      {
        title: "Operational Disruption",
        description: "Service interruptions affecting customer experience",
        icon: <AlertTriangle className="w-6 h-6" />,
      },
      {
        title: "Fleet Management",
        description: "Difficulty tracking multiple cylinders across locations",
        icon: <Building2 className="w-6 h-6" />,
      },
      {
        title: "Cost Management",
        description: "Unpredictable expenses and emergency refills",
        icon: <DollarSign className="w-6 h-6" />,
      },
    ],
  };

  const solutions: Record<"home" | "business", Solution[]> = {
    home: [
      {
        title: "Smart Monitoring",
        description: "Real-time gas level tracking with instant alerts",
        icon: <Smartphone className="w-6 h-6" />,
      },
      {
        title: "Leak Detection",
        description: "Advanced sensors for immediate leak alerts",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Cost Savings",
        description: "Planned refills at regular prices",
        icon: <DollarSign className="w-6 h-6" />,
      },
    ],
    business: [
      {
        title: "Fleet Dashboard",
        description: "Centralized monitoring of all cylinders",
        icon: <BarChart3 className="w-6 h-6" />,
      },
      {
        title: "Automated Alerts",
        description: "Smart notifications for timely refills",
        icon: <Bell className="w-6 h-6" />,
      },
      {
        title: "Cost Control",
        description: "Predictable expenses and optimized refills",
        icon: <DollarSign className="w-6 h-6" />,
      },
    ],
  };

  return (
    <section className="py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Smart Solutions
            <br />
            <span className="text-emerald-600">For Every Need</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Whether you're cooking for family or running a business, we've got
            you covered
          </motion.p>
        </AnimatedSection>

        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-emerald-100">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "home"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Home Owners
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Businesses
            </button>
          </div>
        </div>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problems */}
            <motion.div
              variants={slideInLeft}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                Challenges
              </h3>
              <div className="space-y-6">
                {problems[activeTab].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              variants={slideInRight}
              className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_white_1px,_transparent_1px)] bg-[length:100px_100px]" />
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center relative z-10">
                <CheckCircle className="w-8 h-8 text-lime-400 mr-3" />
                Solutions
              </h3>
              <div className="space-y-6 relative z-10">
                {solutions[activeTab].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400 flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{solution.title}</h4>
                      <p className="text-emerald-100">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function InteractiveHowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Attach Device",
      description:
        "Magnetically attach AcuteMeter to your LPG cylinder base. No tools, no hassle.",
      icon: <Smartphone className="w-8 h-8" />,
      visual: "🔧",
      detail:
        "Our magnetic attachment system works with any standard LPG cylinder. Installation takes less than 30 seconds.",
    },
    {
      title: "Activate & Connect",
      description:
        "Send a simple USSD code to activate. Connects via GSM, WiFi, or Bluetooth.",
      icon: <Wifi className="w-8 h-8" />,
      visual: "📡",
      detail:
        "Multiple connectivity options ensure you're always connected, even in remote areas.",
    },
    {
      title: "Monitor in Real-Time",
      description:
        "Track gas levels continuously through our mobile app or SMS updates.",
      icon: <BarChart3 className="w-8 h-8" />,
      visual: "📱",
      detail:
        "Get precise readings updated every hour, with historical usage patterns and predictions.",
    },
    {
      title: "Receive Smart Alerts",
      description:
        "Get notified when it's time to refill or if a leak is detected.",
      icon: <Bell className="w-8 h-8" />,
      visual: "🔔",
      detail:
        "Customizable alerts via SMS, app notifications, or USSD. Never miss an important update.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Four simple steps to transform your gas management experience
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Steps */}
            <motion.div variants={slideInLeft} className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "bg-emerald-600 text-white shadow-xl scale-105"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        activeStep === index
                          ? "bg-white/20"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p
                        className={
                          activeStep === index
                            ? "text-emerald-100"
                            : "text-gray-600"
                        }
                      >
                        {step.description}
                      </p>
                      {activeStep === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-emerald-100 text-sm mt-3 border-t border-white/20 pt-3"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Demo */}
            <motion.div variants={slideInRight} className="relative">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white relative overflow-hidden">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-8xl mb-6">
                    {steps[activeStep].visual}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-emerald-100">{steps[activeStep].detail}</p>
                </motion.div>

                {/* Progress Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeStep === index ? "bg-white w-8" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_lime_1px,_transparent_1px)] bg-[length:100px_100px]" />
      </div>

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            For Every Lifestyle
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Whether you're cooking for family or managing a business, AcuteMeter
            adapts to your needs
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Households */}
            <motion.div variants={slideInLeft} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Home className="w-8 h-8 text-lime-400 mr-4" />
                  <h3 className="text-3xl font-bold">For Families</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Never Miss Dinner</h4>
                      <p className="text-emerald-100">
                        Get alerts before gas runs out during meal prep
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Family Safety</h4>
                      <p className="text-emerald-100">
                        Instant leak detection protects your loved ones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <DollarSign className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Save Money</h4>
                      <p className="text-emerald-100">
                        Plan refills to avoid emergency premium prices
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-lime-400/20 rounded-xl">
                  <p className="text-sm italic">
                    "Since using AcuteMeter, we've saved ₵200 monthly by
                    avoiding emergency refills and our family feels much safer."
                  </p>
                  <div className="text-xs text-lime-300 mt-2">
                    - Sarah, Mother of 3
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Businesses */}
            <motion.div variants={slideInRight} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-lime-400 mr-4" />
                  <h3 className="text-3xl font-bold">For Businesses</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <BarChart3 className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Fleet Management</h4>
                      <p className="text-emerald-100">
                        Monitor multiple cylinders from one dashboard
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Operational Efficiency
                      </h4>
                      <p className="text-emerald-100">
                        Automate supply chain and prevent downtime
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Customer Satisfaction
                      </h4>
                      <p className="text-emerald-100">
                        Never disappoint customers due to gas shortages
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-lime-400/20 rounded-xl">
                  <p className="text-sm italic">
                    "Our restaurant chain reduced gas-related downtime by 95%
                    and saved ₵2,000 monthly on emergency refills."
                  </p>
                  <div className="text-xs text-lime-300 mt-2">
                    - James, Restaurant Owner
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "James Okonjo",
      role: "Restaurant Owner",
      company: "Golden Spoon Restaurant",
      content:
        "AcuteMeter has revolutionized how we manage our gas supply. No more unexpected shortages during peak hours! Our customers are happier and our costs are down 30%.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      savings: "₵2,000/month",
    },
    {
      name: "Sarah Mensah",
      role: "Homeowner",
      company: "Family of 5",
      content:
        "The peace of mind knowing exactly when to refill and that there are no gas leaks is invaluable. My family feels so much safer now.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      savings: "₵200/month",
    },
    {
      name: "Daniel Kwesi",
      role: "Hotel Manager",
      company: "Accra Grand Hotel",
      content:
        "Managing multiple cylinders across our properties is now effortless. The ROI was immediate and our operational efficiency has improved dramatically.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      savings: "₵5,000/month",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real people, real savings, real peace of mind
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-xl border border-emerald-100"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="md:col-span-2">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-emerald-600 font-medium">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">
                        {testimonials[currentTestimonial].savings}
                      </div>
                      <div className="text-sm text-gray-500">Saved</div>
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full p-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index
                        ? "bg-emerald-600 w-8"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: "Francois Bonin",
      role: "CEO & Tech Lead",
      description:
        "Leads the tech and company vision with over 15 years of experience in IoT and software development.",
      image: "/images/team/francois.jpg",
      linkedin: "https://www.linkedin.com/in/fran%C3%A7ois-bonin-8942b/",
    },
    {
      name: "Dapo Bakare",
      role: "Business Development",
      description:
        "Drives the business strategy and partnerships, bringing extensive market expertise to the table.",
      image: "/images/team/dapo.jpg",
      linkedin: "https://www.linkedin.com/in/bakare/",
    },
    {
      name: "Arlene",
      role: "Operations Director",
      description:
        "Orchestrates operations with precision, ensuring seamless delivery of our services.",
      image: "/images/team/arlene.jpg",
      linkedin: "#",
    },
    {
      name: "Nathan Turkson",
      role: "Project Manager",
      description:
        "Manages projects with expertise, keeping our development on track and efficient.",
      image: "/images/team/nathan.jpg",
      linkedin: "https://www.linkedin.com/in/nathanturkson/",
    },
    {
      name: "Sarah",
      role: "Product Designer",
      description:
        "Designs the product with a focus on user experience and beautiful interfaces.",
      image: "/images/team/sarah.jpg",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="team"
      className="py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-emerald-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-emerald-400/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Meet The Team
            <br />
            <span className="text-emerald-600">Behind The Innovation</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A diverse team of experts passionate about transforming gas
            monitoring
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100/50 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-emerald-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-1 transform group-hover:rotate-3 transition-transform duration-500 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-user.jpg";
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-medium mb-4 text-center">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex justify-center space-x-4 relative z-20">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300 cursor-pointer relative z-20"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 relative z-20"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Company Summary */}
        <AnimatedSection className="mt-20">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_white_1px,_transparent_1px)] bg-[length:100px_100px]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-emerald-100 leading-relaxed">
                At AcuteMeter, we're not just building a product – we're
                crafting a revolution in gas management. Our diverse team
                combines global expertise with local insights to create
                solutions that truly understand and serve Africa's needs.
                Together, we're making gas monitoring smarter, safer, and more
                accessible for everyone.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-lime-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-lime-400/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Ready to Never
            <br />
            <span className="text-lime-400">Run Out Again?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-emerald-100"
          >
            Join thousands of satisfied customers who transformed their gas
            management experience
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link href="/preorder">
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-lime-400 hover:bg-lime-500 text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Pre-order Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-white text-green-800 hover:bg-white hover:text-emerald-700 rounded-full"
            >
              Schedule Demo
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">
                30-Day
              </div>
              <div className="text-emerald-100">Money-back guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">Free</div>
              <div className="text-emerald-100">Installation & setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">24/7</div>
              <div className="text-emerald-100">Customer support</div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              AcuteMeter
            </h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing gas monitoring for safer, smarter living across
              Africa.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pre-order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 AcuteMeter. All rights reserved. Made with ❤️ for safer
            cooking.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function AcuteMeterLanding() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AdvancedFeaturesSection />
        <ProblemSolutionSection />
        <InteractiveHowItWorksSection />
        <LifestyleSection />
        <TestimonialsCarousel />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
