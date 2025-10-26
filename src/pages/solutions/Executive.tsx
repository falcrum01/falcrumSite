import { Target, Crown, TrendingUp, Lock, CheckCircle2 } from 'lucide-react';

interface ExecutiveProps {
  onNavigate: (path: string) => void;
}

export default function Executive({ onNavigate }: ExecutiveProps) {
  return (
    <div className="min-h-screen pt-20">
  <section className="bg-gradient-to-br from-[#0b0b0d] via-[#111113] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Executive Search</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Identify and attract transformational leaders who will drive your organization forward.
            Our executive search practice specializes in C-suite and senior leadership placements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Leadership Placement</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Executive searches require a unique approach. We combine deep market intelligence,
                rigorous assessment methodologies, and complete confidentiality to identify leaders
                who can transform your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Confidential Search</h3>
                    <p className="text-gray-600">Discrete recruitment protecting both organization and candidate privacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Market Mapping</h3>
                    <p className="text-gray-600">Comprehensive analysis of executive talent across your industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Leadership Assessment</h3>
                    <p className="text-gray-600">In-depth evaluation of strategic thinking, cultural fit, and track record</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Succession Planning</h3>
                    <p className="text-gray-600">Long-term strategy development for critical leadership roles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Executive Roles We Fill</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">C-Suite Executives</h4>
                    <p className="text-gray-600 text-sm">CEO, COO, CFO, CTO, CMO, CHRO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Senior Leadership</h4>
                    <p className="text-gray-600 text-sm">VPs, Senior Directors, Division Presidents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Board Members</h4>
                    <p className="text-gray-600 text-sm">Independent directors, advisors, board chairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Executive Search Process</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Discovery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep dive into your organization's strategic objectives, culture, and leadership requirements.
                    We meet with key stakeholders to understand the critical success factors for this role.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Market Research & Mapping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive analysis of potential candidates including passive talent not actively seeking
                    opportunities. We identify leaders who match your strategic needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Evaluation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous evaluation process including competency-based interviews, reference checks,
                    and leadership assessments. We present only the most qualified candidates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Facilitation & Onboarding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Support through negotiations, offer acceptance, and executive onboarding. We ensure
                    a smooth transition and successful integration into your leadership team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0b0b0d] to-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Next Leader</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your executive search needs in complete confidence
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
