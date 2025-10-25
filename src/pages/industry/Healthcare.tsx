import { Heart, Stethoscope, Users, ClipboardList } from 'lucide-react';

interface HealthcareProps {
  onNavigate: (path: string) => void;
}

export default function Healthcare({ onNavigate }: HealthcareProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-green-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Healthcare Staffing</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
            Dedicated healthcare recruitment connecting medical facilities with qualified professionals
            who provide exceptional patient care.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Healthcare Professionals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Stethoscope className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Medical Staff</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Physicians</li>
                <li>• Registered Nurses</li>
                <li>• Nurse Practitioners</li>
                <li>• Physician Assistants</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Heart className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Specialized Care</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Surgeons</li>
                <li>• Anesthesiologists</li>
                <li>• Radiologists</li>
                <li>• Specialists</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Users className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Allied Health</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Physical Therapists</li>
                <li>• Occupational Therapists</li>
                <li>• Medical Technologists</li>
                <li>• Respiratory Therapists</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <ClipboardList className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Administration</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Healthcare Administrators</li>
                <li>• Medical Billing</li>
                <li>• Health Information Managers</li>
                <li>• Practice Managers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Staff Your Healthcare Facility</h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with us to find qualified healthcare professionals
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
