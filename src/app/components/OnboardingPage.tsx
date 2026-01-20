import { useState } from 'react';
import { Page } from '@/app/types';
import { Button } from './ui/button';
import { UserData } from './AuthDialog';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface OnboardingPageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onUpdateUser: (user: UserData) => void;
}

export default function OnboardingPage({ onNavigate, currentUser, onUpdateUser }: OnboardingPageProps) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    propertyTypes: [] as string[],
    budgetRange: '',
    location: '',
    bedrooms: '',
    notifications: true,
  });

  const totalSteps = 3;

  const handlePropertyTypeToggle = (type: string) => {
    setPreferences(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        onboarded: true,
        preferences,
      };
      
      // Update localStorage
      const users = JSON.parse(localStorage.getItem('homix_users') || '[]');
      const updatedUsers = users.map((u: UserData) => 
        u.id === currentUser.id ? updatedUser : u
      );
      localStorage.setItem('homix_users', JSON.stringify(updatedUsers));
      localStorage.setItem('homix_current_user', JSON.stringify(updatedUser));
      
      onUpdateUser(updatedUser);
      toast.success('Welcome to Homix.ai! Your account is all set up.');
      onNavigate('conversation');
    }
  };

  const handleSkip = () => {
    toast.info('You can set preferences later in settings');
    onNavigate('home');
  };

  if (!currentUser) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p>Please sign in to continue</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[#f0effb] py-6 px-8">
        <div className="max-w-[1200px] mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[36px] text-[#110229] uppercase tracking-[-1.08px] cursor-pointer hover:text-[#7065f0] transition-colors"
          >
            HOMIX.AI
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-8 py-12">
        <div className="max-w-[700px] w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Step {step} of {totalSteps}
              </span>
              <button
                onClick={handleSkip}
                className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#7065f0] hover:underline"
              >
                Skip for now
              </button>
            </div>
            <div className="w-full h-2 bg-[#f0effb] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7065f0] transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Property Types */}
          {step === 1 && (
            <div className="text-center">
              <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-[#110229] mb-4">
                What are you looking for?
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8">
                Select all that apply
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: 'residential-buy', label: 'Buy Residential', emoji: '🏠' },
                  { value: 'residential-rent', label: 'Rent Residential', emoji: '🔑' },
                  { value: 'commercial', label: 'Commercial Property', emoji: '🏢' },
                  { value: 'land', label: 'Land/Plot', emoji: '🌳' },
                  { value: 'luxury', label: 'Luxury Properties', emoji: '💎' },
                  { value: 'vacation', label: 'Vacation Homes', emoji: '🏖️' },
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handlePropertyTypeToggle(type.value)}
                    className={`p-6 border-2 rounded-[12px] transition-all text-left ${
                      preferences.propertyTypes.includes(type.value)
                        ? 'border-[#7065f0] bg-[#f0effb]'
                        : 'border-[#f0effb] hover:border-[#7065f0]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[32px]">{type.emoji}</span>
                      {preferences.propertyTypes.includes(type.value) && (
                        <CheckCircle className="w-6 h-6 text-[#7065f0]" />
                      )}
                    </div>
                    <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] ${
                      preferences.propertyTypes.includes(type.value) ? 'text-[#7065f0]' : 'text-[#110229]'
                    }`}>
                      {type.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget & Location */}
          {step === 2 && (
            <div className="text-center">
              <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-[#110229] mb-4">
                Tell us your preferences
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8">
                This helps us show you relevant properties
              </p>

              <div className="space-y-6 text-left">
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                    Budget Range
                  </label>
                  <select
                    value={preferences.budgetRange}
                    onChange={(e) => setPreferences({ ...preferences, budgetRange: e.target.value })}
                    className="w-full h-[48px] px-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] focus:border-[#7065f0] focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="0-100k">Under $100,000</option>
                    <option value="100k-300k">$100,000 - $300,000</option>
                    <option value="300k-500k">$300,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m+">$1,000,000+</option>
                    <option value="rent-1k">Rent: Under $1,000/mo</option>
                    <option value="rent-2k">Rent: $1,000 - $2,000/mo</option>
                    <option value="rent-3k">Rent: $2,000 - $3,000/mo</option>
                    <option value="rent-5k">Rent: $3,000 - $5,000/mo</option>
                    <option value="rent-5k+">Rent: $5,000+/mo</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    value={preferences.location}
                    onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
                    placeholder="City, State, or ZIP code"
                    className="w-full h-[48px] px-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={preferences.bedrooms}
                    onChange={(e) => setPreferences({ ...preferences, bedrooms: e.target.value })}
                    className="w-full h-[48px] px-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] focus:border-[#7065f0] focus:outline-none transition-colors"
                  >
                    <option value="">Any</option>
                    <option value="1">1+ Bedroom</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Notifications */}
          {step === 3 && (
            <div className="text-center">
              <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-[#110229] mb-4">
                Stay updated
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8">
                Get notified about new listings and price drops
              </p>

              <div className="bg-[#f0effb] rounded-[16px] p-8 mb-8">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] text-[#110229] mb-1">
                      Enable Notifications
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                      We'll send you email alerts for properties matching your preferences
                    </p>
                  </div>
                  <label className="relative inline-block w-14 h-7 ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.notifications}
                      onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7065f0]"></div>
                  </label>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#7065f0] to-[#5048c7] rounded-[16px] p-8 text-white">
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] mb-4">
                  🎉 You're all set!
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] opacity-90">
                  Start exploring properties with our AI assistant
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={handleBack}
              variant="outline"
              disabled={step === 1}
              className="h-[48px]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              className="bg-[#7065f0] hover:bg-[#5048c7] text-white h-[48px]"
            >
              {step === totalSteps ? 'Get Started' : 'Next'}
              {step < totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
