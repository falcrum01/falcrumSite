import { UserCheck, MessageSquare, Award, TrendingUp } from 'lucide-react';

interface JobSeekersProps {
  onNavigate: (path: string) => void;
}

export default function JobSeekers({ onNavigate }: JobSeekersProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Advance Your Career</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Partner with TalentBridge to unlock opportunities, receive expert guidance, and find
            the perfect role that matches your skills and aspirations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Help You Succeed</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <UserCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                We take time to understand your career goals, skills, and preferences to match you
                with opportunities that truly fit.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 border border-green-100">
              <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Preparation</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive insider insights about companies, interview coaching, and tips to help you
                present your best self.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100">
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salary Negotiation</h3>
              <p className="text-gray-600 leading-relaxed">
                Get support during offer negotiations to ensure you receive competitive compensation
                that reflects your value.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Ongoing career advice and market insights to help you make informed decisions about
                your professional growth.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Submit your resume today and let our expert recruiters connect you with your next opportunity
            </p>
            <button
              onClick={() => onNavigate('/opportunities/submit')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
