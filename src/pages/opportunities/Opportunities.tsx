import { Briefcase, Search, FileText, ArrowRight } from 'lucide-react';

interface OpportunitiesProps {
  onNavigate: (path: string) => void;
}

export default function Opportunities({ onNavigate }: OpportunitiesProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Find your next career move with TalentBridge. We connect talented professionals with
            exceptional opportunities at leading companies nationwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              onClick={() => onNavigate('/opportunities/job-seekers')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Job Seekers</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn how we can help advance your career and find the perfect role.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/opportunities/openings')}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <Search className="w-12 h-12 text-green-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Browse our latest job opportunities across multiple industries.
              </p>
              <button className="flex items-center space-x-2 text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>View Jobs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/opportunities/submit')}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <FileText className="w-12 h-12 text-orange-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit Resume</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Get started by submitting your resume to our talent network.
              </p>
              <button className="flex items-center space-x-2 text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Submit Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work With TalentBridge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Opportunities</h3>
              <p className="text-gray-600">Access to jobs not advertised publicly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Guidance</h3>
              <p className="text-gray-600">Expert advice on resume, interviews, and negotiations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Advocate</h3>
              <p className="text-gray-600">Dedicated recruiter representing your interests</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
