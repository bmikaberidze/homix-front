import { useState } from 'react';
import { Property, ScheduledVisit } from '@/app/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { CheckCircle2 } from 'lucide-react';

interface ScheduleVisitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: Property;
  ownerName: string;
  onConfirm: (visit: Omit<ScheduledVisit, 'id'>) => void;
}

export default function ScheduleVisitDialog({
  open,
  onOpenChange,
  property,
  ownerName,
  onConfirm,
}: ScheduleVisitDialogProps) {
  const [step, setStep] = useState<'details' | 'confirm' | 'success'>('details');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleConfirm = () => {
    if (!selectedDate) return;
    
    onConfirm({
      propertyName: property.title,
      date: selectedDate,
      time: selectedTime,
      address: property.address,
    });
    
    setStep('success');
    
    // Auto-close after showing success
    setTimeout(() => {
      onOpenChange(false);
      // Reset state
      setTimeout(() => {
        setStep('details');
        setSelectedDate(undefined);
        setSelectedTime('10:00 AM');
      }, 300);
    }, 1500);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep('details');
      setSelectedDate(undefined);
      setSelectedTime('10:00 AM');
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {step === 'details' && (
          <>
            <DialogHeader>
              <DialogTitle>Schedule Visit</DialogTitle>
              <DialogDescription>
                Choose a date and time to visit this property
              </DialogDescription>
            </DialogHeader>
            
            {/* Property Info Card */}
            <div className="bg-[#f0effb] rounded-[8px] p-4">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] text-[#110229]">
                {property.title}
              </p>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6] mt-1">
                {property.address}
              </p>
            </div>
            
            {/* Calendar */}
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                className="rounded-md border border-[#f0effb]"
              />
            </div>
            
            {/* Time Slots Grid */}
            <div>
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-[#110229] mb-3">
                Select Time
              </p>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-[6px] text-[12px] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold transition-colors ${
                      selectedTime === time
                        ? 'bg-[#7065f0] text-white'
                        : 'bg-[#f0effb] text-[#110229] hover:bg-[#7065f0] hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
              <Button 
                onClick={() => setStep('confirm')} 
                disabled={!selectedDate}
                className="flex-1"
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {step === 'confirm' && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Visit</DialogTitle>
              <DialogDescription>
                Review your visit details before confirming
              </DialogDescription>
            </DialogHeader>
            
            {/* Summary */}
            <div className="bg-[#f0effb] p-4 rounded-[8px] space-y-3">
              <div>
                <p className="text-[12px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                  Property
                </p>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] text-[#110229]">
                  {property.title}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                  Date & Time
                </p>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] text-[#110229]">
                  {selectedDate?.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} at {selectedTime}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#8f90a6] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                  Hosted by
                </p>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] text-[#110229]">
                  {ownerName}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button variant="outline" onClick={() => setStep('details')} className="flex-1">
                Back
              </Button>
              <Button onClick={handleConfirm} className="flex-1">
                Confirm Visit
              </Button>
            </div>
          </>
        )}

        {step === 'success' && (
          <div className="py-8 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#7065f0] mb-4" />
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] text-[#110229]">
              Visit Scheduled!
            </p>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-[#8f90a6] mt-2 text-center">
              {ownerName} will contact you shortly
            </p>
            <DialogDescription className="sr-only">
              Your visit has been successfully scheduled
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}