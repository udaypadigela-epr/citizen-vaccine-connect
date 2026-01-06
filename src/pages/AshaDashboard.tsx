import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, LogOut, Search, Calendar, Syringe, CheckCircle, 
  XCircle, Clock, Filter, ChevronDown, MapPin, Phone, 
  AlertTriangle, TrendingUp, UserCheck, UserX
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NationalEmblem from '@/components/NationalEmblem';
import StatCard from '@/components/StatCard';
import ProgressRing from '@/components/ProgressRing';
import PersonCard from '@/components/PersonCard';
import Footer from '@/components/Footer';

// Mock data
const mockAshaData = {
  name: 'Sunita Devi ',
  ashaId: 'ASHA-HYD-202-001',
  village: 'Ramachandrapuram Village',
  district: 'Hyderabad',
};

const mockStats = {
  totalMembers: 500,
  vaccinated: 369,
  notVaccinated: 89,
  partiallyVaccinated:42,
};

const mockPeople = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    age: 45,
    gender: 'Male',
    phone: '+91 98765 11111',
    address: 'House No. 23, Main Road, Rampur Village',
    vaccineStatus: 'vaccinated' as const,
    lastVaccine: 'COVID-19 (10 Dec 2024)',
    nextDue: '10 Mar 2025',
  },
  {
    id: 2,
    name: 'Priya Patel',
    age: 32,
    gender: 'Female',
    phone: '+91 98765 22222',
    address: 'House No. 45, Temple Road, Rampur Village',
    vaccineStatus: 'not_vaccinated' as const,
    missedVaccines: ['Hepatitis B', 'Typhoid'],
  },
  {
    id: 3,
    name: 'Amit Kumar',
    age: 28,
    gender: 'Male',
    phone: '+91 98765 33333',
    address: 'House No. 12, School Lane, Rampur Village',
    vaccineStatus: 'partially' as const,
    lastVaccine: 'COVID-19 Dose 1 (15 Nov 2024)',
    nextDue: '15 Jan 2025',
    missedVaccines: ['COVID-19 Dose 2'],
  },
  {
    id: 4,
    name: 'Meena Devi',
    age: 55,
    gender: 'Female',
    phone: '+91 98765 44444',
    address: 'House No. 78, Market Area, Rampur Village',
    vaccineStatus: 'not_vaccinated' as const,
    missedVaccines: ['Influenza', 'Pneumococcal'],
  },
  {
    id: 5,
    name: 'Suresh Yadav',
    age: 40,
    gender: 'Male',
    phone: '+91 98765 55555',
    address: 'House No. 56, Bus Stand Road, Rampur Village',
    vaccineStatus: 'vaccinated' as const,
    lastVaccine: 'Typhoid (05 Dec 2024)',
    nextDue: '05 Dec 2025',
  },
];

const mockVaccineSchedule = [
  { date: '10 Jan 2025', vaccine: 'Typhoid Camp', location: 'PHC Rampur', count: 25 },
  { date: '15 Jan 2025', vaccine: 'COVID-19 Booster', location: 'Community Hall', count: 40 },
  { date: '20 Jan 2025', vaccine: 'Hepatitis B', location: 'PHC Rampur', count: 15 },
  { date: '01 Feb 2025', vaccine: 'Influenza', location: 'School Ground', count: 60 },
];

const AshaDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'vaccinated' | 'not_vaccinated' | 'partially'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const vaccinationPercentage = Math.round((mockStats.vaccinated / mockStats.totalMembers) * 100);
  const notVaccinatedPercentage = Math.round((mockStats.notVaccinated / mockStats.totalMembers) * 100);

  const filteredPeople = mockPeople.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         person.phone.includes(searchQuery);
    const matchesFilter = filterStatus === 'all' || person.vaccineStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Banner */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <NationalEmblem className="h-10 w-auto invert" />
              <div className="hidden sm:block">
                <h1 className="font-bold"> Aarogya Care Scheme In India</h1>
                <p className="text-xs text-white/80">ASHA Worker Portal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>{mockAshaData.village}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="border-white/30 text-white hover:bg-white/10">
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
        <div className="bg-white rounded-2xl p-6 shadow-card mb-6 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Namaste, {mockAshaData.name}!
              </h1>
              <p className="text-muted-foreground mt-1">
                ASHA ID: {mockAshaData.ashaId} • Village: {mockAshaData.village}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg border border-orange-100">
              <Calendar className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-xs text-orange-600">Next Camp</p>
                <p className="font-semibold text-orange-700">10 Jan 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Members"
            value={mockStats.totalMembers}
            subtitle={mockAshaData.village}
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Vaccinated"
            value={mockStats.vaccinated}
            subtitle={`${vaccinationPercentage}% of total`}
            icon={UserCheck}
            variant="success"
            trend="up"
            trendValue="+12 this week"
          />
          <StatCard
            title="Not Vaccinated"
            value={mockStats.notVaccinated}
            subtitle="Needs attention"
            icon={UserX}
            variant="danger"
          />
          <StatCard
            title="Partially Vaccinated"
            value={mockStats.partiallyVaccinated}
            subtitle="Pending doses"
            icon={Clock}
            variant="warning"
          />
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-card flex flex-col items-center justify-center">
            <ProgressRing 
              percentage={vaccinationPercentage} 
              label="Vaccination Rate"
              sublabel={`${mockStats.vaccinated} of ${mockStats.totalMembers} people`}
              variant="success"
            />
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card flex flex-col items-center justify-center">
            <ProgressRing 
              percentage={notVaccinatedPercentage} 
              label="Unvaccinated"
              sublabel={`${mockStats.notVaccinated} people need vaccines`}
              variant="danger"
            />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Missed Vaccine Contacts
            </h3>
            <div className="space-y-3">
              {mockPeople
                .filter(p => p.vaccineStatus === 'not_vaccinated' || p.vaccineStatus === 'partially')
                .slice(0, 3)
                .map(person => (
                  <div key={person.id} className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm text-foreground">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.phone}</p>
                    </div>
                    <a href={`tel:${person.phone}`}>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-100">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Vaccine Schedule */}
        <section className="bg-white rounded-2xl p-6 shadow-card mb-8">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Vaccination Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Vaccine</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Expected</th>
                </tr>
              </thead>
              <tbody>
                {mockVaccineSchedule.map((schedule, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-medium text-foreground">{schedule.date}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Syringe className="h-4 w-4 text-primary" />
                        <span>{schedule.vaccine}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{schedule.location}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                        {schedule.count} people
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or phone number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="relative">
              <Button 
                variant="outline" 
                className="h-12 min-w-[180px] justify-between"
                onClick={() => setShowFilters(!showFilters)}
              >
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>
                    {filterStatus === 'all' && 'All Members'}
                    {filterStatus === 'vaccinated' && 'Vaccinated'}
                    {filterStatus === 'not_vaccinated' && 'Not Vaccinated'}
                    {filterStatus === 'partially' && 'Partially'}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
              {showFilters && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                  {[
                    { value: 'all', label: 'All Members' },
                    { value: 'vaccinated', label: 'Vaccinated' },
                    { value: 'not_vaccinated', label: 'Not Vaccinated' },
                    { value: 'partially', label: 'Partially Vaccinated' },
                  ].map(option => (
                    <button
                      key={option.value}
                      className="w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setFilterStatus(option.value as any);
                        setShowFilters(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPeople.length} of {mockPeople.length} members
            </p>
          </div>

          {/* People Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredPeople.map(person => (
              <PersonCard
                key={person.id}
                name={person.name}
                age={person.age}
                gender={person.gender}
                phone={person.phone}
                address={person.address}
                vaccineStatus={person.vaccineStatus}
                lastVaccine={person.lastVaccine}
                nextDue={person.nextDue}
                missedVaccines={person.missedVaccines}
              />
            ))}
          </div>

          {filteredPeople.length === 0 && (
            <div className="text-center py-12 bg-muted/30 rounded-xl">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">No members found</p>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          )}
        </section>

        {/* Higher Officials Helpline */}
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Phone className="h-5 w-5 text-primary" />
            Higher Officials Helpline
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Block Medical Officer', phone: '1800-111-2500' },
              { name: 'District Health Officer', phone: '1800-111-2501' },
              { name: 'Chief Medical Officer', phone: '1800-111-2502' },
              { name: 'State Health Dept.', phone: '1800-111-2503' },
            ].map((official, index) => (
              <a
                key={index}
                href={`tel:${official.phone}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{official.name}</p>
                  <p className="text-xs text-muted-foreground">{official.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer variant="asha" />
    </div>
  );
};

export default AshaDashboard;
