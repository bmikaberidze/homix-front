import { useState } from 'react';
import { X, Mail, Lock, User, Building2 } from 'lucide-react';
import { toast } from 'sonner';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
  onSuccess: (user: UserData) => void;
  preSelectedPlan?: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  userType: 'buyer' | 'seller' | 'broker';
  plan?: string;
}

export default function AuthDialog({
  open,
  onOpenChange,
  mode,
  onModeChange,
  onSuccess,
  preSelectedPlan,
}: AuthDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'seller' | 'broker'>('buyer');
  const [isLoading, setIsLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (mode === 'signup') {
        // Validate signup
        if (!email || !password || !name) {
          toast.error('Please fill in all fields');
          setIsLoading(false);
          return;
        }

        if (password.length < 6) {
          toast.error('Password must be at least 6 characters');
          setIsLoading(false);
          return;
        }

        // Check if user already exists
        const existingUsers = JSON.parse(localStorage.getItem('homix_users') || '[]');
        if (existingUsers.find((u: UserData) => u.email === email)) {
          toast.error('Email already registered. Please sign in.');
          setIsLoading(false);
          return;
        }

        // Create new user
        const newUser: UserData = {
          id: Date.now().toString(),
          email,
          name,
          userType,
          plan: preSelectedPlan,
        };

        // Save to localStorage
        existingUsers.push(newUser);
        localStorage.setItem('homix_users', JSON.stringify(existingUsers));
        localStorage.setItem('homix_current_user', JSON.stringify(newUser));

        toast.success(`Welcome ${name}! Your account has been created.`);
        onSuccess(newUser);
        onOpenChange(false);
        resetForm();
      } else {
        // Sign in
        if (!email || !password) {
          toast.error('Please enter email and password');
          setIsLoading(false);
          return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('homix_users') || '[]');
        const user = existingUsers.find((u: UserData) => u.email === email);

        if (!user) {
          toast.error('No account found with this email. Please sign up.');
          setIsLoading(false);
          return;
        }

        // In a real app, we'd verify password. For demo, just login
        localStorage.setItem('homix_current_user', JSON.stringify(user));
        toast.success(`Welcome back, ${user.name}!`);
        onSuccess(user);
        onOpenChange(false);
        resetForm();
      }

      setIsLoading(false);
    }, 1000);
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setUserType('buyer');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[16px] w-full max-w-[480px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#f0effb]">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] text-[#110229]">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={() => {
              onOpenChange(false);
              resetForm();
            }}
            className="w-8 h-8 rounded-full hover:bg-[#f0effb] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#8f90a6]" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'signup' && (
            <>
              {/* Name Field */}
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f90a6]" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* User Type */}
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                  I am a...
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'buyer', label: 'Buyer/Renter', icon: User },
                    { value: 'seller', label: 'Property Owner', icon: Building2 },
                    { value: 'broker', label: 'Broker/Agent', icon: Building2 },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value as 'buyer' | 'seller' | 'broker')}
                      className={`p-3 border-[1.5px] rounded-[8px] flex flex-col items-center gap-2 transition-all ${
                        userType === type.value
                          ? 'border-[#7065f0] bg-[#f0effb]'
                          : 'border-[#f0effb] hover:border-[#7065f0]'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 ${userType === type.value ? 'text-[#7065f0]' : 'text-[#8f90a6]'}`} />
                      <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[10px] text-center ${
                        userType === type.value ? 'text-[#7065f0]' : 'text-[#8f90a6]'
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Email Field */}
          <div>
            <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f90a6]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f90a6]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors"
                required
              />
            </div>
            {mode === 'signup' && (
              <p className="text-[11px] text-[#8f90a6] mt-1 font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                Must be at least 6 characters
              </p>
            )}
          </div>

          {preSelectedPlan && mode === 'signup' && (
            <div className="bg-[#f0effb] rounded-[8px] p-3">
              <p className="text-[12px] text-[#7065f0] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                ✨ You'll be subscribed to the <strong>{preSelectedPlan}</strong> plan
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-[48px] bg-[#7065f0] hover:bg-[#5048c7] text-white rounded-[8px] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Please wait...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>

          {/* Switch Mode */}
          <div className="text-center">
            <p className="text-[14px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => {
                  onModeChange(mode === 'signin' ? 'signup' : 'signin');
                  resetForm();
                }}
                className="text-[#7065f0] font-['Plus_Jakarta_Sans:Bold',sans-serif] hover:underline"
              >
                {mode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
