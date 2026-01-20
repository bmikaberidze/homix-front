import { Page, Property } from '@/app/types';
import { Button } from './ui/button';
import { UserData } from './AuthDialog';
import UserMenu from './UserMenu';
import Footer from './Footer';
import { Heart, Search } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { useState, useEffect } from 'react';

interface SavedPropertiesPageProps {
  onNavigate: (page: Page) => void;
  currentUser: UserData | null;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSignOut: () => void;
  onViewProperty: (propertyId: string) => void;
  savedProperties: Property[];
  onUnsaveProperty: (propertyId: string) => void;
}

export default function SavedPropertiesPage({
  onNavigate,
  currentUser,
  onOpenAuth,
  onSignOut,
  onViewProperty,
  savedProperties,
  onUnsaveProperty,
}: SavedPropertiesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(savedProperties);

  useEffect(() => {
    if (searchQuery) {
      const filtered = savedProperties.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(savedProperties);
    }
  }, [searchQuery, savedProperties]);

  if (!currentUser) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[32px] text-[#110229] mb-4">
          Please sign in to view saved properties
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
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[48px] text-[#110229] mb-2 flex items-center gap-3">
              <Heart className="w-12 h-12 text-[#7065f0] fill-[#7065f0]" />
              Saved Properties
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[18px] text-[#8f90a6]">
              {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} saved
            </p>
          </div>

          {/* Search */}
          {savedProperties.length > 0 && (
            <div className="relative w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f90a6]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved properties..."
                className="w-full h-[48px] pl-10 pr-4 border-[1.5px] border-[#f0effb] rounded-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#110229] placeholder:text-[#8f90a6] focus:border-[#7065f0] focus:outline-none transition-colors"
              />
            </div>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => onViewProperty(property.id)}
                showOwnerInfo={true}
                isSaved={true}
                onSaveToggle={() => onUnsaveProperty(property.id)}
              />
            ))}
          </div>
        ) : savedProperties.length > 0 ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-[#8f90a6] mx-auto mb-4" />
            <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] text-[#110229] mb-2">
              No properties match your search
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] text-[#8f90a6] mb-6">
              Try adjusting your search terms
            </p>
            <Button onClick={() => setSearchQuery('')} variant="outline">
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-[#8f90a6] mx-auto mb-4" />
            <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] text-[#110229] mb-2">
              No saved properties yet
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] text-[#8f90a6] mb-6">
              Start browsing properties and save your favorites here
            </p>
            <Button onClick={() => onNavigate('conversation')} className="bg-[#7065f0] text-white hover:bg-[#5048c7]">
              Browse Properties
            </Button>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}