import { Users, Clock } from 'lucide-react';

interface ContingentProps {
  onNavigate: (path: string) => void;
}

export default function Contingent({ onNavigate }: ContingentProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-50 to-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-12 h-12 text-emerald-600" />
            <h1 className="text-4xl font-bold text-emerald-900">Contingent Staffing</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Contingent staffing provides scalable access to skilled talent through vetted suppliers and
            contingent workers. Perfect for flexible capacity needs and specialist short-term programs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">When to use contingent staffing</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>High-volume hiring programs where flexibility is critical</li>
              <li>Rapid up- or down-scaling for seasonal or cyclical demand</li>
              <li>Access to niche skills via partner networks and suppliers</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <h3 className="text-xl font-bold mb-4">Benefits</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold">Speed & Agility</p>
                  <p className="text-sm">Quickly deploy talent to fill short-term needs with minimal friction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold">Scalable Coverage</p>
                  <p className="text-sm">Scale teams up or down without long-term commitments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white text-emerald-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-emerald-900">Need contingent capacity?</h2>
          <p className="mb-6 text-emerald-700">Contact us to discuss a contingent program tailored to your volume and timing needs.</p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow"
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
