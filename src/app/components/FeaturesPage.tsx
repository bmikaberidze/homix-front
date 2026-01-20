import { Page } from '@/app/types';
import { MessageSquare, Search, Calendar, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { UserData } from './AuthDialog';
import UserMenu from './UserMenu';
import Footer from './Footer';

interface FeaturesPageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSignOut: () => void;
}

const features = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Chat',
    description: 'Conversational AI helps you discover properties that match your preferences through natural dialogue.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Advanced algorithms understand your needs and provide personalized property recommendations instantly.',
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Schedule property visits directly through the platform with instant confirmation from owners.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Updates',
    description: 'Get instant notifications about new listings, price changes, and property availability.',
  },
  {
    icon: Shield,
    title: 'Verified Owners',
    description: 'All property owners are verified to ensure safe and secure transactions for everyone.',
  },
  {
    icon: Zap,
    title: 'Instant Messaging',
    description: 'Connect directly with property owners for fast responses and transparent communication.',
  },
];

export default function FeaturesPage({ onNavigate, currentUser, onOpenAuth, onSignOut }: FeaturesPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[#f0effb] py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[44px] text-[#110229] uppercase tracking-[-1.32px] cursor-pointer hover:text-[#7065f0] transition-colors"
          >
            HOMIX.AI
          </button>
          <nav className="flex gap-6 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[18px] tracking-[-0.54px] uppercase">
            <button onClick={() => onNavigate('products')} className="text-[#110229] hover:text-[#7065f0] transition-colors">Products</button>
            <button onClick={() => onNavigate('features')} className="text-[#7065f0]">Features</button>
            <button onClick={() => onNavigate('pricing')} className="text-[#110229] hover:text-[#7065f0] transition-colors">Pricing</button>
          </nav>
          {currentUser ? (
            <UserMenu user={currentUser} onSignOut={onSignOut} onNavigate={onNavigate} />
          ) : (
            <button
              onClick={() => onNavigate('signin')}
              className="bg-[#7065f0] text-white hover:bg-[#5048c7] rounded-[6px] px-6 py-2 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] uppercase transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[56px] text-[#110229] mb-4 tracking-[-2px]">
            Powerful Features for <span className="text-[#7065f0]">Modern Real Estate</span>
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[18px] text-[#8f90a6] max-w-[700px] mx-auto">
            Everything you need to find your dream property or connect with serious buyers. Built with cutting-edge AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-[#f0effb] rounded-[16px] p-8 hover:shadow-lg transition-all hover:border-[#7065f0]"
            >
              <div className="w-14 h-14 bg-[#7065f0]/10 rounded-[12px] flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[#7065f0]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] text-[#110229] mb-3">
                {feature.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-20 mb-20">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-[#110229] mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7065f0] rounded-full flex items-center justify-center text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mx-auto mb-4">
                1
              </div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] text-[#110229] mb-2">
                Start a Conversation
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Tell our AI what you're looking for in natural language
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7065f0] rounded-full flex items-center justify-center text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mx-auto mb-4">
                2
              </div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] text-[#110229] mb-2">
                Discover Properties
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Browse personalized recommendations and save your favorites
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7065f0] rounded-full flex items-center justify-center text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mx-auto mb-4">
                3
              </div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] text-[#110229] mb-2">
                Connect with Owners
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Message owners directly or schedule visits with one click
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#f0effb] rounded-[16px] p-12 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] text-[#110229] mb-6">
                For Property Seekers
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Find properties faster with AI-powered recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Connect directly with property owners for better deals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Schedule visits and get instant responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    No hidden fees or middleman charges
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] text-[#110229] mb-6">
                For Property Owners
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Reach motivated buyers and renters instantly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Manage all inquiries in one centralized platform
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Save on commission with direct connections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7065f0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                    Get detailed analytics on property performance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[48px] text-[#110229] mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8 max-w-[600px] mx-auto">
            Join thousands of property owners and seekers who are already using Homix.ai
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('conversation')}
            >
              Start Searching
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}