import { Page } from '@/app/types';
import { Button } from './ui/button';
import { UserData } from './AuthDialog';
import UserMenu from './UserMenu';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

interface MessagesPageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSignOut: () => void;
}

export default function MessagesPage({ onNavigate, currentUser, onOpenAuth, onSignOut }: MessagesPageProps) {
  if (!currentUser) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[32px] text-[#110229] mb-4">
          Please sign in to view messages
        </h2>
        <Button onClick={() => onNavigate('signin')}>
          Sign In
        </Button>
      </div>
    );
  }

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
          {/* Page Header */}
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[48px] text-[#110229] mb-2 flex items-center gap-3">
            <MessageCircle className="w-12 h-12 text-[#7065f0]" />
            Messages
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6] mb-8">
            All your conversations with property owners
          </p>

          {/* Empty State / Redirect to Chat */}
          <div className="text-center py-16 border-2 border-dashed border-[#f0effb] rounded-[16px]">
            <MessageCircle className="w-16 h-16 text-[#8f90a6] mx-auto mb-4" />
            <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] text-[#110229] mb-2">
              Your messages are in the chat
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] text-[#8f90a6] mb-6">
              Start conversations with property owners through our AI chat
            </p>
            <Button onClick={() => onNavigate('conversation')} className="bg-[#7065f0] text-white hover:bg-[#5048c7]">
              Go to Chat
            </Button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}