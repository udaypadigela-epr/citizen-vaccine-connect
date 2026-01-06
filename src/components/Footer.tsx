import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import NationalEmblem from './NationalEmblem';

interface FooterProps {
  variant?: 'citizen' | 'asha';
}

const Footer: React.FC<FooterProps> = ({ variant = 'citizen' }) => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <NationalEmblem className="h-12 w-auto invert" />
              <div>
                <h3 className="font-bold text-lg">VacciTrack India</h3>
                <p className="text-sm opacity-80">National Immunization Portal</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Ensuring every citizen receives timely vaccinations for a healthier India.
            </p>
          </div>

          {/* Emergency Numbers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b border-white/20 pb-2">
              Emergency Helplines
            </h4>
            <div className="space-y-3">
              <a href="tel:102" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>Ambulance: 102</span>
              </a>
              <a href="tel:108" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>Emergency: 108</span>
              </a>
              <a href="tel:1800-11-2500" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>Health Helpline: 1800-11-2500</span>
              </a>
            </div>
          </div>

          {/* District Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b border-white/20 pb-2">
              District Health Office
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>District Health Office, Civil Lines, District HQ</span>
              </div>
              <a href="tel:1800-111-2500" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>1800-111-2500 (Toll Free)</span>
              </a>
              <a href="mailto:dho@health.gov.in" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>dho@health.gov.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg border-b border-white/20 pb-2">
              {variant === 'asha' ? 'ASHA Resources' : 'Quick Links'}
            </h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-accent transition-colors opacity-90 hover:opacity-100">
                → Vaccination Schedule
              </a>
              <a href="#" className="block hover:text-accent transition-colors opacity-90 hover:opacity-100">
                → Nearest Health Center
              </a>
              <a href="#" className="block hover:text-accent transition-colors opacity-90 hover:opacity-100">
                → Report an Issue
              </a>
              <a href="#" className="block hover:text-accent transition-colors opacity-90 hover:opacity-100">
                → FAQ & Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © 2025 Ministry of Health & Family Welfare, Government of India
          </p>
          <p className="flex items-center gap-1 text-sm opacity-80">
            Made with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> for a healthier India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
