import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, LogOut, Calendar, Syringe, AlertTriangle, CheckCircle, 
  Clock, Phone, ChevronRight, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import NationalEmblem from '@/components/NationalEmblem';
import AlertBanner from '@/components/AlertBanner';
import VaccineCard from '@/components/VaccineCard';
import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';

// Mock data for demonstration
const mockUserData = {
  name: 'BHANU PRASAD',
  userId: 'CITIZEN-2024-001',
  district: 'TELANGANA',
  age: 21,
  mobile: '+91 98765 43210',
};

const mockVaccineHistory = [
  { 
    vaccineName: 'COVID-19 (Covishield)', 
    date: '15 Jan 2024', 
    status: 'completed' as const,
    dose: 'Dose 1 of 2',
    hospital: 'District Hospital, Hyderabad'
  },
  { 
    vaccineName: 'COVID-19 (Covishield)', 
    date: '15 Mar 2024', 
    status: 'completed' as const,
    dose: 'Dose 2 of 2',
    hospital: 'District Hospital, Hyderabad'
  },
  { 
    vaccineName: 'Hepatitis B', 
    date: '20 Jun 2024', 
    status: 'missed' as const,
    dose: 'Booster Dose',
    hospital: 'PHC Center, Andheri'
  },
  { 
    vaccineName: 'Typhoid', 
    date: '10 Jan 2025', 
    status: 'due' as const,
    dose: 'Annual Dose',
    hospital: 'Community Health Center'
  },
  { 
    vaccineName: 'Influenza', 
    date: '15 Feb 2025', 
    status: 'upcoming' as const,
    dose: 'Seasonal Vaccine',
    hospital: 'To be scheduled'
  },
];

const mockContacts = {
  asha: { name: ' Naga sai', role: 'ASHA Worker - Ward 12', phone: '+91 98765 12345' },
  district: { name: 'District Health Office', role: 'Hyderabad District', phone: '1800-111-2500' },
  ambulance: { name: 'Emergency Ambulance', role: '24x7 Emergency', phone: '102' },
};

const CitizenDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showAlerts, setShowAlerts] = useState(true);

  const missedVaccines = mockVaccineHistory.filter(v => v.status === 'missed');
  const dueVaccines = mockVaccineHistory.filter(v => v.status === 'due');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Banner */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <NationalEmblem className="h-10 w-auto" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-primary">Aarogya Care Scheme In India</h1>
                <p className="text-xs text-muted-foreground">Citizen Portal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-primary" />
                <span className="font-medium">{mockUserData.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground mb-6 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {mockUserData.name}!</h1>
              <p className="text-primary-foreground/80 mt-1">
                User ID: {mockUserData.userId} • District: {mockUserData.district}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <p className="text-xs opacity-80">Next Vaccine</p>
                <p className="font-semibold">10 Jan 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alert Banners */}
        {showAlerts && (missedVaccines.length > 0 || dueVaccines.length > 0) && (
          <div className="space-y-3 mb-6">
            {missedVaccines.length > 0 && (
              <AlertBanner
                type="danger"
                title="Missed Vaccination Alert!"
                message={`You have missed ${missedVaccines.length} vaccine(s). Please contact your ASHA worker immediately to reschedule.`}
                onClose={() => setShowAlerts(false)}
              />
            )}
            {dueVaccines.length > 0 && (
              <AlertBanner
                type="warning"
                title="Vaccination Due Soon!"
                message={`You have ${dueVaccines.length} vaccine(s) due. Please visit your nearest health center.`}
              />
            )}
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <p className="text-2xl font-bold text-green-700">
              {mockVaccineHistory.filter(v => v.status === 'completed').length}
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-medium">Missed</span>
            </div>
            <p className="text-2xl font-bold text-red-700">
              {mockVaccineHistory.filter(v => v.status === 'missed').length}
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
            <div className="flex items-center gap-2 text-orange-600 mb-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Due</span>
            </div>
            <p className="text-2xl font-bold text-orange-700">
              {mockVaccineHistory.filter(v => v.status === 'due').length}
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Upcoming</span>
            </div>
            <p className="text-2xl font-bold text-blue-700">
              {mockVaccineHistory.filter(v => v.status === 'upcoming').length}
            </p>
          </div>
        </div>

        {/* Vaccination History */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Syringe className="h-5 w-5 text-primary" />
              Vaccination History
            </h2>
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid gap-4">
            {mockVaccineHistory.map((vaccine, index) => (
              <VaccineCard
                key={index}
                vaccineName={vaccine.vaccineName}
                date={vaccine.date}
                status={vaccine.status}
                dose={vaccine.dose}
                hospital={vaccine.hospital}
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Phone className="h-5 w-5 text-primary" />
            Contact Information
          </h2>
          <div className="grid gap-4">
            <ContactCard
              name={mockContacts.asha.name}
              role={mockContacts.asha.role}
              phone={mockContacts.asha.phone}
              type="asha"
            />
            <ContactCard
              name={mockContacts.district.name}
              role={mockContacts.district.role}
              phone={mockContacts.district.phone}
              type="district"
            />
            <ContactCard
              name={mockContacts.ambulance.name}
              role={mockContacts.ambulance.role}
              phone={mockContacts.ambulance.phone}
              type="emergency"
            />
          </div>
        </section>
      </main>

      <Footer variant="citizen" />
    </div>
  );
};

export default CitizenDashboard;
