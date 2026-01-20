import { Page } from '@/app/types';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { UserData } from './AuthDialog';
import UserMenu from './UserMenu';
import Footer from './Footer';

interface PricingPageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onOpenAuth: (mode: 'signin' | 'signup', plan?: string) => void;
  onSignOut: () => void;
}

const pricingTiers = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for individual property owners getting started',
    features: [
      'List up to 2 properties',
      'Basic property details',
      'Standard response time (24 hours)',
      'Email notifications',
      'Basic analytics',
    ],
    popular: false,
  },
  {
    name: 'Starter',
    price: 29,
    description: 'Great for brokers managing multiple listings',
    features: [
      'List up to 10 properties',
      'Enhanced property details with photos',
      'Priority response time (3 hours)',
      'Email & SMS notifications',
      'Advanced analytics',
      'Featured listing badge',
      'Direct messaging',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For serious professionals and small agencies',
    features: [
      'List up to 50 properties',
      'Premium property details with photo galleries',
      'Fast response time (2 hours)',
      'Multi-channel notifications',
      'Premium analytics & insights',
      'Featured & promoted listings',
      'Priority customer support',
      'Virtual tour integration',
      'Lead management tools',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large companies and property management firms',
    features: [
      'Unlimited property listings',
      'Full-featured property pages',
      'Instant response time (30 min)',
      'Advanced automation',
      'Enterprise analytics & reporting',
      'Top placement in search results',
      'Dedicated account manager',
      'Custom branding',
      'API access',
      'White-label options',
      'Team collaboration tools',
    ],
    popular: false,
  },
];

export default function PricingPage({ onNavigate, currentUser, onOpenAuth, onSignOut }: PricingPageProps) {
  const handleSubscribe = (tierName: string) => {
    if (currentUser) {
      // Navigate to onboarding with the selected plan
      onNavigate('onboarding');
    } else {
      onOpenAuth('signup', tierName);
    }
  };

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
            <button onClick={() => onNavigate('features')} className="text-[#110229] hover:text-[#7065f0] transition-colors">Features</button>
            <button onClick={() => onNavigate('pricing')} className="text-[#7065f0]">Pricing</button>
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
            Choose Your <span className="text-[#7065f0]">Perfect Plan</span>
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[18px] text-[#8f90a6] max-w-[600px] mx-auto">
            Whether you're listing your first property or managing hundreds, we have a plan that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-[16px] p-6 border-2 transition-all hover:shadow-lg ${
                tier.popular
                  ? 'border-[#7065f0] bg-[#7065f0]/5'
                  : 'border-[#f0effb] bg-white'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7065f0] text-white px-4 py-1 rounded-full text-[12px] font-['Plus_Jakarta_Sans:Bold',sans-serif]">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] text-[#110229] mb-2">
                  {tier.name}
                </h3>
                <p className="text-[14px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif] mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[48px] text-[#110229]">
                    ${tier.price}
                  </span>
                  <span className="text-[16px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                    /month
                  </span>
                </div>
              </div>

              <Button
                variant={tier.popular ? 'default' : 'outline'}
                className="w-full mb-6"
                onClick={() => handleSubscribe(tier.name)}
              >
                {tier.name === 'Free' ? 'Get Started' : 'Subscribe'}
              </Button>

              <div className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#7065f0]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#7065f0]" />
                    </div>
                    <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-[800px] mx-auto mt-20">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[36px] text-[#110229] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border border-[#f0effb] rounded-[12px] p-6">
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-[#110229] mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.
              </p>
            </div>
            <div className="border border-[#f0effb] rounded-[12px] p-6">
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-[#110229] mb-2">
                What payment methods do you accept?
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                We accept all major credit cards, debit cards, and digital payment methods. Enterprise customers can also arrange for invoicing.
              </p>
            </div>
            <div className="border border-[#f0effb] rounded-[12px] p-6">
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-[#110229] mb-2">
                Is there a long-term contract?
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                No! All plans are month-to-month with no long-term commitment. Cancel anytime with no penalties.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-[#7065f0] to-[#5a4fd9] rounded-[16px] p-12 text-center">
          <h2 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[40px] text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-white/90 mb-8">
            Our team is here to help you find the perfect fit for your business
          </p>
          <Button
            variant="outline"
            className="bg-white text-[#7065f0] hover:bg-white/90"
            onClick={() => onNavigate('contact')}
          >
            Contact Sales
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}