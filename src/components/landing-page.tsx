"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Calendar,
  Clock,
  CreditCard,
  Home,
  MessageSquare,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GradientBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
    }, 1000 / 60);

    return () => clearInterval(moveInterval);
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div className="h-full w-full relative overflow-hidden bg-[linear-gradient(40deg,#0A3D6A,#006D77)]">
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={`gradients-container h-full w-full blur-lg ${isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"}`}
      >
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(10,61,106,0.8)_0,_rgba(10,61,106,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:center_center] animate-first opacity-100" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(179,184,182,0.8)_0,_rgba(179,184,182,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-400px)] animate-second opacity-100" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(52,211,153,0.8)_0,_rgba(52,211,153,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%+400px)] animate-third opacity-100" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(123,75,153,0.8)_0,_rgba(123,75,153,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70" />
        <div className="absolute [background:radial-gradient(circle_at_center,_rgba(10,61,106,0.8)_0,_rgba(10,61,106,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100" />

        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className="absolute [background:radial-gradient(circle_at_center,_rgba(52,211,153,0.8)_0,_rgba(52,211,153,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-full h-full -top-1/2 -left-1/2 opacity-70"
        />
      </div>
    </div>
  );
};

const ChatbotPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-auto">
      <div className="bg-[#0A3D6A] p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <span className="font-medium">RealEstateBot</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>Online</span>
          <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
        </div>
      </div>
      <div className="p-4 bg-gray-50 h-64 overflow-y-auto flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="bg-[#0A3D6A]/10 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
            <p className="text-sm">
              Hi there! I'm your AI real estate assistant. How can I help you
              today?
            </p>
          </div>
          <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
            <p className="text-sm">
              I'm looking for a 3-bedroom house in Austin under $500k
            </p>
          </div>
          <div className="bg-[#0A3D6A]/10 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
            <p className="text-sm">
              Great! I found 12 properties matching your criteria. Here are the
              top 3:
            </p>
            <div className="mt-2 space-y-2">
              <div className="bg-white p-2 rounded border border-gray-200 text-xs">
                <p className="font-medium">Modern Home in South Austin</p>
                <p>3 bed, 2 bath • $475,000</p>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 text-xs">
                <p className="font-medium">Renovated Ranch in North Austin</p>
                <p>3 bed, 2.5 bath • $489,000</p>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 text-xs">
                <p className="font-medium">New Build in East Austin</p>
                <p>3 bed, 3 bath • $499,000</p>
              </div>
            </div>
            <p className="text-sm mt-2">
              Would you like to schedule a viewing for any of these properties?
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D6A]"
        />
        <Button size="sm" className="bg-[#34D399] hover:bg-[#34D399]/90">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  description,
  price,
  features,
  isPopular = false,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col p-6 ${isPopular ? "bg-white border-[#34D399]" : "bg-white border-[#B3B8B6]/20"} rounded-lg border-2 shadow-sm hover:shadow-md transition-shadow h-full`}
    >
      {isPopular && (
        <div className="px-3 py-1 text-xs font-medium bg-[#34D399] text-white self-start rounded-full mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-[#0A3D6A]">{title}</h3>
      <p className="text-[#B3B8B6] mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-[#0A3D6A]">{price}</span>
        {price !== "Custom" && (
          <span className="text-[#B3B8B6] ml-1">/month</span>
        )}
      </div>
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-[#0A3D6A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
            </div>
            <span className="text-[#0A3D6A] text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={isPopular ? "default" : "outline"}
        className={
          isPopular
            ? "mt-auto bg-[#34D399] hover:bg-[#34D399]/90 text-white border-none"
            : "mt-auto border-[#B3B8B6] text-[#0A3D6A] hover:bg-[#B3B8B6]/10"
        }
      >
        {price === "Custom" ? "Contact Us" : "Get Started"}
      </Button>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-[#B3B8B6]/20 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="p-3 rounded-full bg-[#0A3D6A]/10 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#0A3D6A]">{title}</h3>
      <p className="text-[#B3B8B6]">{description}</p>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  role,
  avatarSeed,
}: {
  quote: string;
  name: string;
  role: string;
  avatarSeed: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-5 w-5 fill-[#34D399] text-[#34D399]" />
        ))}
      </div>
      <p className="italic mb-6 text-[#B3B8B6]">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`}
            alt="Client Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-[#0A3D6A]">{name}</h4>
          <p className="text-sm text-[#B3B8B6]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#0A3D6A]">
      {/* Navbar */}
      <nav className="bg-white py-4 border-b border-[#B3B8B6]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-[#0A3D6A]">Tap</span>
              <span className="text-white bg-[#0A3D6A] px-1 rounded-sm">
                Black
              </span>
              <span className="text-[#34D399]"> Consulting</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-[#0A3D6A] hover:text-[#34D399] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#0A3D6A] hover:text-[#34D399] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#use-cases"
              className="text-[#0A3D6A] hover:text-[#34D399] transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#contact"
              className="text-[#0A3D6A] hover:text-[#34D399] transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-[#0A3D6A] hover:text-[#34D399]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32 min-h-[700px] flex justify-center items-center">
        {/* Gradient background */}
        <div className="absolute inset-0 z-0">
          <GradientBackground />
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Transform Your Real Estate Business with{" "}
                <span className="text-[#34D399]">
                  Smart AI Chatbots & Automations
                </span>
              </h1>
              <p className="text-xl text-white/80 md:text-2xl">
                Our AI chatbots help your clients find the perfect home,
                schedule appointments, and get mortgage estimates—while you
                focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="font-medium bg-[#34D399] hover:bg-[#34D399]/90 text-white border-none"
                >
                  Schedule a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-medium border-white text-[#0A3D6A] hover:bg-white/10"
                  onClick={() => (window.location.hash = "#use-cases")}
                >
                  View Use Cases
                </Button>
              </div>
            </div>
            <div className="relative">
              <ChatbotPreview />
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#34D399]/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#0A3D6A]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </header>
      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-[#F9F9F9]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#0A3D6A]">
              Real Estate Professionals Face These Challenges Every Day
            </h2>
            <p className="text-xl text-[#B3B8B6] max-w-3xl">
              Our AI chatbots streamline these tasks by engaging clients 24/7,
              automating property recommendations, and simplifying the
              home-buying process with mortgage estimates and appointments.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg border border-[#B3B8B6]/20 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#0A3D6A]/10 mb-4 w-12 h-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#34D399]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A3D6A]">
                Slow Response Times
              </h3>
              <p className="text-[#B3B8B6]">
                Delayed responses lead to missed opportunities and lost clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#0A3D6A]/10 mb-4 w-12 h-12 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-[#34D399]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A3D6A]">
                Manual Booking
              </h3>
              <p className="text-[#B3B8B6]">
                Time-consuming appointment scheduling and client follow-ups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#0A3D6A]/10 mb-4 w-12 h-12 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-[#34D399]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A3D6A]">
                Limited Availability
              </h3>
              <p className="text-[#B3B8B6]">
                Unable to respond to client inquiries during off-hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-[#0A3D6A]/10 mb-4 w-12 h-12 flex items-center justify-center">
                <Home className="h-6 w-6 text-[#34D399]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A3D6A]">
                Complex Recommendations
              </h3>
              <p className="text-[#B3B8B6]">
                Difficulty matching properties to client needs and providing
                accurate estimates.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-[#0A3D6A]/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#0A3D6A]">
              AI Chatbots Designed for Real Estate Efficiency
            </h2>
            <p className="text-xl text-[#B3B8B6] max-w-3xl">
              Our intelligent solutions automate tasks and enhance client
              experiences.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Home className="h-8 w-8 text-[#34D399]" />}
              title="Instant Property Assistance"
              description="Chatbots help clients find available homes based on their preferences (location, budget, features)."
            />
            <FeatureCard
              icon={<CreditCard className="h-8 w-8 text-[#34D399]" />}
              title="Mortgage Estimations"
              description="Automatically generate mortgage estimates, empowering clients to make informed decisions."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-[#34D399]" />}
              title="24/7 Client Engagement"
              description="AI chatbots provide round-the-clock responses, ensuring no lead is missed."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-[#34D399]" />}
              title="Appointment Scheduling"
              description="Schedule property showings and meetings, sync with your calendar, and send reminders."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-[#34D399]" />}
              title="Automated Follow-ups"
              description="Send personalized follow-up messages to clients after viewings, inquiries, or interest."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-[#34D399]" />}
              title="Data Security"
              description="Enterprise-grade security ensures client information remains protected and private."
            />
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-[#F9F9F9]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#0A3D6A]">
              Flexible Plans to Fit Your Business Needs
            </h2>
            <p className="text-xl text-[#B3B8B6] max-w-3xl">
              Choose the perfect plan for your real estate business size and
              requirements.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Basic Plan"
              description="Perfect for individual agents."
              price="$49"
              features={[
                "AI chatbot for property search",
                "Mortgage estimation tool",
                "Basic appointment scheduling",
                "Email notifications",
                "Up to 100 client interactions/month",
              ]}
            />
            <PricingCard
              title="Pro Plan"
              description="For growing real estate businesses."
              price="$99"
              features={[
                "All Basic Plan features",
                "Automated follow-ups",
                "Lead qualification",
                "Analytics dashboard",
                "Calendar integration",
                "Unlimited client interactions",
              ]}
              isPopular={true}
            />
            <PricingCard
              title="Enterprise Plan"
              description="For large agencies or property managers."
              price="Custom"
              features={[
                "All Pro Plan features",
                "White-labeled chatbot",
                "Custom AI training",
                "Multiple agent accounts",
                "API integrations",
                "Dedicated support",
                "Custom reporting",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#0A3D6A]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">
              Benefits of Chatbots for Real Estate Businesses
            </h2>
            <p className="text-xl text-[#B3B8B6] max-w-3xl">
              Our AI solutions deliver measurable results that transform how you
              engage with clients and manage your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-16 h-16 bg-[#0A3D6A]/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-[#34D399]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0A3D6A]">
                Faster Response Times
              </h3>
              <p className="text-[#B3B8B6] mb-4">
                Never miss a lead with instant responses to client inquiries.
              </p>
              <div className="bg-[#0A3D6A]/5 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#34D399]">80%</p>
                <p className="text-[#0A3D6A]">
                  Reduction in routine question response times
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-16 h-16 bg-[#0A3D6A]/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-[#34D399]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0A3D6A]">
                Improved Customer Support
              </h3>
              <p className="text-[#B3B8B6] mb-4">
                Provide 24/7 assistance that delights clients and builds
                loyalty.
              </p>
              <div className="bg-[#0A3D6A]/5 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#34D399]">60%</p>
                <p className="text-[#0A3D6A]">
                  Of top companies use chatbots to improve customer service
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#B3B8B6]/20 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-16 h-16 bg-[#0A3D6A]/10 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8 text-[#34D399]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0A3D6A]">
                Cost Savings
              </h3>
              <p className="text-[#B3B8B6] mb-4">
                Reduce operational costs while scaling your client interactions.
              </p>
              <div className="bg-[#0A3D6A]/5 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#34D399]">30%</p>
                <p className="text-[#0A3D6A]">
                  Average reduction in customer support costs
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="font-medium bg-[#34D399] hover:bg-[#34D399]/90 text-white border-none"
              onClick={() => (window.location.hash = "#pricing")}
            >
              See Our Pricing Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 bg-[#F9F9F9]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#0A3D6A]">
              Real-World Applications
            </h2>
            <p className="text-xl text-[#B3B8B6] max-w-3xl">
              See how our AI chatbots are transforming real estate businesses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0A3D6A]">
                Residential Real Estate
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      24/7 Property Inquiries
                    </p>
                    <p className="text-[#B3B8B6]">
                      Answer questions about listings, neighborhoods, and
                      pricing any time of day.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      Automated Showings
                    </p>
                    <p className="text-[#B3B8B6]">
                      Schedule and manage property viewings without manual
                      intervention.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      Lead Qualification
                    </p>
                    <p className="text-[#B3B8B6]">
                      Identify serious buyers through conversation and
                      pre-qualify them for mortgages.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#B3B8B6]/20 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0A3D6A]">
                Commercial Real Estate
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      Investment Analysis
                    </p>
                    <p className="text-[#B3B8B6]">
                      Provide ROI calculations and investment comparisons for
                      commercial properties.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      Market Insights
                    </p>
                    <p className="text-[#B3B8B6]">
                      Deliver up-to-date information on market trends, vacancy
                      rates, and pricing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A3D6A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#34D399]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-[#0A3D6A]">
                      Document Management
                    </p>
                    <p className="text-[#B3B8B6]">
                      Assist with lease agreements, contracts, and other
                      documentation requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#0A3D6A]/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-[#0A3D6A]">
                Ready to Transform Your Real Estate Business?
              </h2>
              <p className="text-xl text-[#B3B8B6] mb-6">
                Schedule a free consultation to see how our AI chatbots can help
                you generate more leads, save time, and close more deals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#0A3D6A]/10">
                    <MessageSquare className="h-5 w-5 text-[#34D399]" />
                  </div>
                  <span className="text-[#0A3D6A]">
                    info@tapblackconsulting.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#0A3D6A]/10">
                    <Home className="h-5 w-5 text-[#34D399]" />
                  </div>
                  <span className="text-[#0A3D6A]">
                    123 Tech Plaza, Austin, TX 78701
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#B3B8B6]/20 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#0A3D6A]">
                Request a Demo
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0A3D6A] mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-[#B3B8B6]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3D6A]"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0A3D6A] mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-[#B3B8B6]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3D6A]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#0A3D6A] mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-2 border border-[#B3B8B6]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3D6A]"
                    placeholder="Your Real Estate Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0A3D6A] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-[#B3B8B6]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3D6A]"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#34D399] hover:bg-[#34D399]/90 text-white border-none">
                  Schedule My Free Demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-[#0A3D6A] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-white">Tap</span>
                <span className="text-white bg-[#0A3D6A] border border-white px-1 rounded-sm">
                  Black
                </span>
                <span className="text-[#34D399]"> Consulting</span>
              </h3>
              <p className="text-white/80 mb-4">
                Transforming real estate with intelligent AI solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#34D399]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#34D399]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#34D399]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Appointment Scheduling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Lead Generation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Analytics Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-[#34D399]">
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>© 2023 TapBlack Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
