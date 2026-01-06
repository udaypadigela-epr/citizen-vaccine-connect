import React from 'react';
import { CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VaccineCardProps {
  vaccineName: string;
  date: string;
  status: 'completed' | 'missed' | 'due' | 'upcoming';
  dose?: string;
  hospital?: string;
}

const VaccineCard: React.FC<VaccineCardProps> = ({
  vaccineName,
  date,
  status,
  dose,
  hospital,
}) => {
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      bg: 'bg-gradient-to-r from-green-50 to-emerald-50',
      border: 'border-l-4 border-green-500',
      iconColor: 'text-green-500',
      badge: 'bg-green-100 text-green-700',
      label: 'Completed',
    },
    missed: {
      icon: AlertTriangle,
      bg: 'bg-gradient-to-r from-red-50 to-rose-50',
      border: 'border-l-4 border-red-500',
      iconColor: 'text-red-500',
      badge: 'bg-red-100 text-red-700',
      label: 'Missed',
    },
    due: {
      icon: Clock,
      bg: 'bg-gradient-to-r from-amber-50 to-orange-50',
      border: 'border-l-4 border-orange-500',
      iconColor: 'text-orange-500',
      badge: 'bg-orange-100 text-orange-700',
      label: 'Due',
    },
    upcoming: {
      icon: Calendar,
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      border: 'border-l-4 border-blue-500',
      iconColor: 'text-blue-500',
      badge: 'bg-blue-100 text-blue-700',
      label: 'Upcoming',
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn(
      'rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md',
      config.bg,
      config.border
    )}>
      <div className="flex items-start gap-4">
        <div className={cn('mt-1', config.iconColor)}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-semibold text-foreground">{vaccineName}</h3>
            <span className={cn(
              'px-2.5 py-0.5 rounded-full text-xs font-medium',
              config.badge
            )}>
              {config.label}
            </span>
          </div>
          {dose && (
            <p className="text-sm text-muted-foreground mt-1">{dose}</p>
          )}
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            {hospital && (
              <span className="truncate">{hospital}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineCard;
