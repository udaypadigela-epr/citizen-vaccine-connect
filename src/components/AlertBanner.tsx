import React from 'react';
import { AlertTriangle, Bell, CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlertBannerProps {
  type: 'warning' | 'danger' | 'success' | 'info';
  title: string;
  message: string;
  onClose?: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, title, message, onClose }) => {
  const styles = {
    warning: 'bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-400 text-orange-800',
    danger: 'bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 text-red-800',
    success: 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800',
    info: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 text-blue-800',
  };

  const icons = {
    warning: <AlertTriangle className="h-5 w-5 text-orange-500" />,
    danger: <AlertTriangle className="h-5 w-5 text-red-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    info: <Bell className="h-5 w-5 text-blue-500" />,
  };

  return (
    <div className={cn('p-4 rounded-lg shadow-sm animate-slide-up', styles[type])}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-sm mt-1 opacity-90">{message}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="flex-shrink-0 hover:opacity-70 transition-opacity">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
