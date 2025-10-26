import { Target, Users, Award, TrendingUp, Heart, Shield } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Fulcrum Technology</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            For over two decades, we've been connecting exceptional talent with outstanding opportunities,
            building lasting partnerships that drive business success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2003, Fulcrum Technology started with a simple mission: to make the hiring
                  process more human, more effective, and more meaningful for everyone involved.
                </p>
                <p>
                  What began as a small team of passionate recruiters has grown into a nationwide
                  staffing powerhouse, but we've never lost sight of what matters most—people.
                </p>
                <p>
                  Today, we serve over 500 companies across multiple industries, having successfully
                  placed more than 15,000 professionals in roles where they can thrive and make an impact.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-700">Years in Business</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="text-4xl font-bold text-green-600 mb-2">15K+</div>
                <div className="text-gray-700">Placements Made</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-700">Partner Companies</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-700">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">People First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every placement is about real people with real careers and real lives. We treat
                  everyone with respect and dignity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Honesty and transparency guide everything we do. We build trust through consistent,
                  ethical behavior.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to delivering exceptional results and continuously improving our
                  services and processes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Companies Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized recruiters with deep knowledge in technology, healthcare, finance,
                    and manufacturing sectors.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous screening process and 90-day placement guarantee ensure you get the
                    right people every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Two decades of successful placements and long-term client relationships speak
                    to our reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Flexible engagement models from single placements to full RPO services that adapt
                    to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're hiring or seeking your next opportunity, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/solutions')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hire Talent
            </button>
            <button
              onClick={() => onNavigate('/opportunities/submit')}
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white/30"
            >
              Find Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
