import { Users, Target, Award, TrendingUp, CheckCircle2, ArrowRight, Briefcase, Building2, UserCheck } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Tomorrow's Workforce <span className="text-cyan-400">Today</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                TalentBridge connects exceptional talent with industry-leading companies.
                Our expertise spans across multiple sectors, delivering tailored staffing solutions
                that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('/opportunities/openings')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Our Solutions
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Users className="w-12 h-12 text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">15K+</h3>
                    <p className="text-gray-300 text-sm">Placements Made</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Building2 className="w-12 h-12 text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">500+</h3>
                    <p className="text-gray-300 text-sm">Partner Companies</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <Award className="w-12 h-12 text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">20+</h3>
                    <p className="text-gray-300 text-sm">Years Experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <TrendingUp className="w-12 h-12 text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">98%</h3>
                    <p className="text-gray-300 text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end recruitment services tailored to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              onClick={() => onNavigate('/solutions/permanent')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-xl transition-all cursor-pointer group border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Permanent Staffing</h3>
              <p className="text-gray-600 leading-relaxed">
                Find the perfect long-term talent to grow your team with our rigorous vetting process.
              </p>
            </div>

            <div
              onClick={() => onNavigate('/solutions/contract')}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-xl transition-all cursor-pointer group border border-green-100"
            >
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contract Staffing</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible workforce solutions for project-based needs and seasonal demands.
              </p>
            </div>

            <div
              onClick={() => onNavigate('/solutions/executive')}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 hover:shadow-xl transition-all cursor-pointer group border border-orange-100"
            >
              <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and attract top-tier leadership talent for critical C-suite positions.
              </p>
            </div>

            <div
              onClick={() => onNavigate('/solutions/rpo')}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-all cursor-pointer group border border-purple-100"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">RPO Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete recruitment process outsourcing to scale your hiring operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose TalentBridge?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience in the staffing industry, we've built a reputation
                for excellence and reliability. Our dedicated team understands that every placement is
                more than just filling a position—it's about creating lasting partnerships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Industry Expertise</h3>
                    <p className="text-gray-600">Specialized recruiters with deep domain knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rigorous Screening</h3>
                    <p className="text-gray-600">Multi-stage vetting ensures quality candidates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Turnaround</h3>
                    <p className="text-gray-600">Average time-to-hire of just 14 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">Post-placement assistance for seamless integration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Whether you're looking to hire top talent or seeking your next career opportunity,
                TalentBridge is here to help you succeed.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('/opportunities/submit')}
                  className="w-full px-6 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Submit Your Resume
                </button>
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="w-full px-6 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white/30"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Segments We Serve</h2>
            <p className="text-xl text-gray-600">
              Specialized recruitment across key sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate('/industry/technology')}
              className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all text-left group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Technology</h3>
              <p className="text-gray-600 text-sm">Software, IT, and emerging tech roles</p>
            </button>
            <button
              onClick={() => onNavigate('/industry/healthcare')}
              className="p-6 bg-gray-50 rounded-xl hover:bg-green-50 hover:border-green-200 border-2 border-transparent transition-all text-left group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Healthcare</h3>
              <p className="text-gray-600 text-sm">Medical professionals and support staff</p>
            </button>
            <button
              onClick={() => onNavigate('/industry/finance')}
              className="p-6 bg-gray-50 rounded-xl hover:bg-orange-50 hover:border-orange-200 border-2 border-transparent transition-all text-left group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600">Finance</h3>
              <p className="text-gray-600 text-sm">Banking, accounting, and fintech</p>
            </button>
            <button
              onClick={() => onNavigate('/industry/manufacturing')}
              className="p-6 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border-2 border-transparent transition-all text-left group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Operations and supply chain experts</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
