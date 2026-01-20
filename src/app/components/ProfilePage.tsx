import { Page } from '@/app/types';
import { Button } from './ui/button';
import { UserData } from './AuthDialog';
import UserMenu from './UserMenu';
import Footer from './Footer';
import { User, Mail, Building2, Edit2, Save } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProfilePageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSignOut: () => void;
  onUpdateUser: (user: UserData) => void;
}

export default function ProfilePage({ onNavigate, currentUser, onOpenAuth, onSignOut, onUpdateUser }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');

  if (!currentUser) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[32px] text-[#110229] mb-4">
          Please sign in to view your profile
        </h2>
        <Button onClick={() => onNavigate('signin')}>
          Sign In
        </Button>
      </div>
    );
  }

  const handleSave = () => {
    const updatedUser = {
      ...currentUser,
      name,
      email,
    };
    
    // Update in localStorage
    const users = JSON.parse(localStorage.getItem('homix_users') || '[]');
    const updatedUsers = users.map((u: UserData) => 
      u.id === currentUser.id ? updatedUser : u
    );
    localStorage.setItem('homix_users', JSON.stringify(updatedUsers));
    localStorage.setItem('homix_current_user', JSON.stringify(updatedUser));
    
    onUpdateUser(updatedUser);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'buyer': return 'Buyer/Renter';
      case 'seller': return 'Property Owner';
      case 'broker': return 'Broker/Agent';
      default: return type;
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
            <button onClick={() => onNavigate('pricing')} className="text-[#110229] hover:text-[#7065f0] transition-colors">Pricing</button>
          </nav>
          <UserMenu user={currentUser} onSignOut={onSignOut} onNavigate={onNavigate} />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12 flex-grow w-full">
        <div className="max-w-[800px] mx-auto">
          {/* Page Title */}
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[48px] text-[#110229] mb-2">
            My Profile
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8">
            Manage your account information and preferences
          </p>

          {/* Profile Card */}
          <div className="bg-white border-2 border-[#f0effb] rounded-[16px] p-8 mb-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#f0effb]">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7065f0] to-[#5048c7] flex items-center justify-center">
                <span className="text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[40px]">
                  {currentUser.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[28px] text-[#110229] mb-1">
                  {currentUser.name}
                </h2>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] text-[#8f90a6]">
                  {getUserTypeLabel(currentUser.userType)}
                </p>
                {currentUser.plan && (
                  <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-[#f0effb] rounded-[6px]">
                    <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[12px] text-[#7065f0]">
                      {currentUser.plan} Plan
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
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
                    disabled={!isEditing}
                    className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors disabled:bg-[#f9fafb] disabled:cursor-not-allowed"
                  />
                </div>
              </div>

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
                    disabled={!isEditing}
                    className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors disabled:bg-[#f9fafb] disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] block mb-2">
                  Account Type
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f90a6]" />
                  <input
                    type="text"
                    value={getUserTypeLabel(currentUser.userType)}
                    disabled
                    className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] bg-[#f9fafb] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#7065f0] text-white hover:bg-[#5048c7]"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleSave}
                    className="bg-[#7065f0] text-white hover:bg-[#5048c7]"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => {
                      setIsEditing(false);
                      setName(currentUser.name);
                      setEmail(currentUser.email);
                    }}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('saved-properties')}
              className="p-6 border-2 border-[#f0effb] rounded-[12px] hover:border-[#7065f0] transition-all text-left"
            >
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] text-[#110229] mb-2">
                Saved Properties
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                View your favorite listings
              </p>
            </button>

            <button
              onClick={() => onNavigate('messages')}
              className="p-6 border-2 border-[#f0effb] rounded-[12px] hover:border-[#7065f0] transition-all text-left"
            >
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] text-[#110229] mb-2">
                Messages
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Chat with property owners
              </p>
            </button>

            <button
              onClick={() => onNavigate('settings')}
              className="p-6 border-2 border-[#f0effb] rounded-[12px] hover:border-[#7065f0] transition-all text-left"
            >
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] text-[#110229] mb-2">
                Settings
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6]">
                Manage your preferences
              </p>
            </button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}