import { Briefcase, Search, FileText, ArrowRight } from 'lucide-react';

interface OpportunitiesProps {
onNavigate: (path: string) => void;
}

export default function Opportunities({ onNavigate }: OpportunitiesProps) {
return (
<div className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900">
{/* Hero Section */}
<section className="bg-gradient-to-br py-20">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-5xl font-extrabold mb-6 text-slate-900">Career Opportunities</h1>
<p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
Discover your next big career move with Fulcrum Technology. We connect ambitious professionals
with exceptional opportunities across top organizations nationwide.
</p>
</div>
</section>

  {/* Cards Section */}
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10">
        <div
          onClick={() => onNavigate('/opportunities/job-seekers')}
          className="rounded-2xl p-8 border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl cursor-pointer transition-all group"
        >
          <Briefcase className="w-12 h-12 text-blue-700 mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">For Job Seekers</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Learn how we can help accelerate your career and find your ideal position.
          </p>
          <button className="flex items-center space-x-2 text-blue-700 font-semibold group-hover:translate-x-2 transition-transform">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div
          onClick={() => onNavigate('/opportunities/openings')}
          className="rounded-2xl p-8 border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl cursor-pointer transition-all group"
        >
          <Search className="w-12 h-12 text-indigo-700 mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Current Openings</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Explore our latest job openings across various industries and skill levels.
          </p>
          <button className="flex items-center space-x-2 text-indigo-700 font-semibold group-hover:translate-x-2 transition-transform">
            <span>View Jobs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div
          onClick={() => onNavigate('/opportunities/submit')}
          className="rounded-2xl p-8 border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl cursor-pointer transition-all group"
        >
          <FileText className="w-12 h-12 text-slate-800 mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Submit Resume</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Join our talent network by submitting your resume and let us find your perfect match.
          </p>
          <button className="flex items-center space-x-2 text-slate-800 font-semibold group-hover:translate-x-2 transition-transform">
            <span>Submit Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Why Work With Us */}
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold mb-12 text-center text-slate-900">
        Why Work With Fulcrum Technology?
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            1
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Exclusive Opportunities</h3>
          <p className="text-gray-700">Access to premium roles not available publicly.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            2
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Career Guidance</h3>
          <p className="text-gray-700">Expert advice for resumes, interviews, and negotiations.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            3
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Personal Advocate</h3>
          <p className="text-gray-700">A dedicated recruiter focused on your success.</p>
        </div>
      </div>
    </div>
  </section>
</div>


);
}