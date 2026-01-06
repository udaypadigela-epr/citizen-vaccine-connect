import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, Phone, MapPin, Hash, ArrowRight, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import NationalEmblem from '@/components/NationalEmblem';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'citizen' | 'asha'>('citizen');
  
  // Citizen form state
  const [citizenUserId, setCitizenUserId] = useState('');
  const [citizenMobile, setCitizenMobile] = useState('');
  const [citizenDistrict, setCitizenDistrict] = useState('');

  // ASHA form state
  const [ashaId, setAshaId] = useState('');
  const [ashaPassword, setAshaPassword] = useState('');
  const [ashaVillage, setAshaVillage] = useState('');

  const handleCitizenLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials
    navigate('/citizen-dashboard');
  };

  const handleAshaLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials
    navigate('/asha-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <NationalEmblem className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Aarogya Care Scheme In India 
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            National Vaccination/Screening Tracking Portal
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="h-1 w-8 bg-orange-500 rounded-full" />
            <span className="h-1 w-8 bg-white rounded-full border" />
            <span className="h-1 w-8 bg-green-600 rounded-full" />
          </div>
        </header>

        {/* Login Cards Container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8 gap-4">
              <button
                onClick={() => setLoginType('citizen')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  loginType === 'citizen'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-400'
                }`}
              >
                <User className="h-5 w-5" />
                Citizen Login
              </button>
              <button
                onClick={() => setLoginType('asha')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  loginType === 'asha'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400'
                }`}
              >
                <Stethoscope className="h-5 w-5" />
                ASHA Worker Login
              </button>
            </div>

            {/* Login Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Citizen Login Card */}
              <div className={`transform transition-all duration-500 ${
                loginType === 'citizen' ? 'scale-100 opacity-100' : 'scale-95 opacity-50 pointer-events-none'
              }`}>
                <div className="bg-white rounded-2xl shadow-elevated p-8 border-t-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">Citizen Portal</h2>
                      <p className="text-sm text-muted-foreground">Access your vaccination records</p>
                    </div>
                  </div>

                  <form onSubmit={handleCitizenLogin} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="citizen-id" className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-blue-600" />
                        Citizen ID* 
                      </Label>
                      <Input
                        id="citizen-id"
                        type="text"
                        placeholder="Enter your User ID"
                        value={citizenUserId}
                        onChange={(e) => setCitizenUserId(e.target.value)}
                        className="h-12 border-2 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="citizen-mobile" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        Password*
                      </Label>
                      <Input
                        id="citizen-mobile"
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={citizenMobile}
                        onChange={(e) => setCitizenMobile(e.target.value)}
                        className="h-12 border-2 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="citizen-district" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        District/Mandal Code*
                      </Label>
                      <Input
                        id="citizen-district"
                        type="text"
                        placeholder="Enter district code (e.g., HYD-01-01)"
                        value={citizenDistrict}
                        onChange={(e) => setCitizenDistrict(e.target.value)}
                        className="h-12 border-2 focus:border-blue-500"
                        required
                      />
                    </div>

                    <Button type="submit" variant="citizen" size="lg" className="w-full mt-6">
                      Login as Citizen
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* ASHA Worker Login Card */}
              <div className={`transform transition-all duration-500 ${
                loginType === 'asha' ? 'scale-100 opacity-100' : 'scale-95 opacity-50 pointer-events-none'
              }`}>
                <div className="bg-white rounded-2xl shadow-elevated p-8 border-t-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">ASHA Worker Portal</h2>
                      <p className="text-sm text-muted-foreground">Manage your area vaccinations</p>
                    </div>
                  </div>

                  <form onSubmit={handleAshaLogin} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="asha-id" className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-600" />
                        ASHA Worker ID
                      </Label>
                      <Input
                        id="asha-id"
                        type="text"
                        placeholder="Enter your ASHA ID"
                        value={ashaId}
                        onChange={(e) => setAshaId(e.target.value)}
                        className="h-12 border-2 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asha-password" className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-600" />
                        Password*
                      </Label>
                      <Input
                        id="asha-password"
                        type="password"
                        placeholder="Enter your password"
                        value={ashaPassword}
                        onChange={(e) => setAshaPassword(e.target.value)}
                        className="h-12 border-2 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asha-village" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        District/Mandal Code*
                      </Label>
                      <Input
                        id="asha-village"
                        type="text"
                        placeholder="Enter your code ((e.g., HYD-01-01)"
                        value={ashaVillage}
                        onChange={(e) => setAshaVillage(e.target.value)}
                        className="h-12 border-2 focus:border-orange-500"
                        required
                      />
                    </div>

                    <Button type="submit" variant="asha" size="lg" className="w-full mt-6">
                      Login as ASHA Worker
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 py-4 text-sm text-muted-foreground">
          <p>© 2025 Aarogya Care Scheme In India, Government of India</p>
          <p className="mt-1">For technical support, call: 1800-11-2500</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
