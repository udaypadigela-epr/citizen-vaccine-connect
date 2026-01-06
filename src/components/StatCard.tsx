import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-card border border-border',
    primary: 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground',
    success: 'bg-gradient-to-br from-success to-success/80 text-success-foreground',
    warning: 'bg-gradient-to-br from-warning to-warning/80 text-warning-foreground',
    danger: 'bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground',
  };

  const iconBgVariants = {
    default: 'bg-primary/10 text-primary',
    primary: 'bg-white/20 text-white',
    success: 'bg-white/20 text-white',
    warning: 'bg-white/20 text-white',
    danger: 'bg-white/20 text-white',
  };

  return (
    <div className={cn(
      'rounded-xl p-5 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1',
      variants[variant]
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className={cn(
            'text-sm font-medium',
            variant === 'default' ? 'text-muted-foreground' : 'text-white/80'
          )}>
            {title}
          </p>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && (
            <p className={cn(
              'text-xs',
              variant === 'default' ? 'text-muted-foreground' : 'text-white/70'
            )}>
              {subtitle}
            </p>
          )}
          {trend && trendValue && (
            <div className={cn(
              'flex items-center gap-1 text-xs font-medium',
              trend === 'up' && 'text-green-500',
              trend === 'down' && 'text-red-500',
              trend === 'neutral' && 'text-muted-foreground'
            )}>
              <span>{trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}</span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        <div className={cn(
          'rounded-lg p-3',
          iconBgVariants[variant]
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
