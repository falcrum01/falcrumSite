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
            Find your next career move with Falcrum Technology. We connect talented professionals with
            exceptional opportunities at leading companies nationwide.
          </p>
        </div>
      </section>

      <section className="py-20 subsection-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              onClick={() => onNavigate('/opportunities/job-seekers')}
              className="rounded-2xl p-8 border border-white/10 cursor-pointer hover:shadow-xl transition-all group bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <Briefcase className="w-12 h-12 text-white mb-6" />
              <h2 className="text-2xl font-bold mb-4 glow">For Job Seekers</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Learn how we can help advance your career and find the perfect role.
              </p>
              <button className="flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/opportunities/openings')}
              className="rounded-2xl p-8 border border-white/10 cursor-pointer hover:shadow-xl transition-all group bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <Search className="w-12 h-12 text-white mb-6" />
              <h2 className="text-2xl font-bold mb-4 glow">Current Openings</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Browse our latest job opportunities across multiple industries.
              </p>
              <button className="flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                <span>View Jobs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/opportunities/submit')}
              className="rounded-2xl p-8 border border-white/10 cursor-pointer hover:shadow-xl transition-all group bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <FileText className="w-12 h-12 text-white mb-6" />
              <h2 className="text-2xl font-bold mb-4 glow">Submit Resume</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Get started by submitting your resume to our talent network.
              </p>
              <button className="flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                <span>Submit Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 subsection-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center glow">Why Work With Falcrum Technology?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Exclusive Opportunities</h3>
              <p className="text-gray-300">Access to jobs not advertised publicly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Career Guidance</h3>
              <p className="text-gray-300">Expert advice on resume, interviews, and negotiations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Personal Advocate</h3>
              <p className="text-gray-300">Dedicated recruiter representing your interests</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
