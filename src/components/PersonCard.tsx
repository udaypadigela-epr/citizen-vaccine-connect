import React from 'react';
import { Phone, Calendar, MapPin, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface PersonCardProps {
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  vaccineStatus: 'vaccinated' | 'not_vaccinated' | 'partially';
  lastVaccine?: string;
  nextDue?: string;
  missedVaccines?: string[];
  onViewDetails?: () => void;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  age,
  gender,
  phone,
  address,
  vaccineStatus,
  lastVaccine,
  nextDue,
  missedVaccines,
  onViewDetails,
}) => {
  const statusStyles = {
    vaccinated: {
      badge: 'bg-green-100 text-green-700 border-green-200',
      label: 'Fully Vaccinated',
    },
    not_vaccinated: {
      badge: 'bg-red-100 text-red-700 border-red-200',
      label: 'Not Vaccinated',
    },
    partially: {
      badge: 'bg-amber-100 text-amber-700 border-amber-200',
      label: 'Partially Vaccinated',
    },
  };

  const config = statusStyles[vaccineStatus];

  return (
    <div className="bg-card rounded-xl border shadow-card p-5 transition-all duration-200 hover:shadow-elevated">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {age} years • {gender}
            </p>
          </div>
        </div>
        <span className={cn(
          'px-3 py-1 rounded-full text-xs font-medium border',
          config.badge
        )}>
          {config.label}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
            {phone}
          </a>
        </div>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-2">{address}</span>
        </div>
      </div>

      {(lastVaccine || nextDue) && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {lastVaccine && (
              <div>
                <p className="text-muted-foreground text-xs">Last Vaccine</p>
                <p className="font-medium text-foreground">{lastVaccine}</p>
              </div>
            )}
            {nextDue && (
              <div>
                <p className="text-muted-foreground text-xs">Next Due</p>
                <p className="font-medium text-warning">{nextDue}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {missedVaccines && missedVaccines.length > 0 && (
        <div className="mt-3 p-3 bg-red-50 rounded-lg">
          <p className="text-xs font-medium text-red-700 mb-1">Missed Vaccines:</p>
          <p className="text-xs text-red-600">{missedVaccines.join(', ')}</p>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <a 
          href={`tel:${phone}`} 
          className="flex-1"
        >
          <Button variant="outline" size="sm" className="w-full">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </Button>
        </a>
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PersonCard;
