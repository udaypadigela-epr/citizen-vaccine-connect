import React from 'react';
import { Phone, User, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  type?: 'asha' | 'district' | 'emergency';
}

const ContactCard: React.FC<ContactCardProps> = ({ name, role, phone, type = 'asha' }) => {
  const typeStyles = {
    asha: 'border-orange-200 bg-orange-50/50',
    district: 'border-blue-200 bg-blue-50/50',
    emergency: 'border-red-200 bg-red-50/50',
  };

  const iconStyles = {
    asha: 'bg-orange-100 text-orange-600',
    district: 'bg-blue-100 text-blue-600',
    emergency: 'bg-red-100 text-red-600',
  };

  const Icon = type === 'emergency' ? Phone : type === 'district' ? Building2 : User;

  return (
    <div className={cn(
      'rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md',
      typeStyles[type]
    )}>
      <div className="flex items-center gap-4">
        <div className={cn('rounded-full p-3', iconStyles[type])}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <a
          href={`tel:${phone}`}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all hover:scale-105',
            type === 'emergency' 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          )}
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{phone}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
