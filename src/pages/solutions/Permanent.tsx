import { UserCheck, Clock, Shield, Award, CheckCircle2 } from 'lucide-react';

interface PermanentProps {
  onNavigate: (path: string) => void;
}

export default function Permanent({ onNavigate }: PermanentProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Permanent Staffing</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Build lasting success with permanent employees who become integral members of your team.
            Our comprehensive vetting process ensures every candidate meets your exact requirements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Finding the right permanent employee is about more than matching skills to a job description.
                We take a holistic approach that considers cultural fit, career aspirations, and long-term potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">In-Depth Needs Analysis</h3>
                    <p className="text-gray-600">We partner with you to understand role requirements, team dynamics, and company culture</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Stage Screening</h3>
                    <p className="text-gray-600">Rigorous evaluation including technical assessments and behavioral interviews</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Background Verification</h3>
                    <p className="text-gray-600">Comprehensive checks including references, credentials, and employment history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Post-Placement Support</h3>
                    <p className="text-gray-600">Ongoing support during onboarding and 90-day performance guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Permanent Staffing</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Faster Time-to-Hire</h4>
                    <p className="text-gray-600 text-sm">Average placement in just 14 days vs. industry standard of 42 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">90-day replacement guarantee if the candidate doesn't meet expectations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Top-Tier Talent</h4>
                    <p className="text-gray-600 text-sm">Access to passive candidates not actively searching but open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">Understand your needs, culture, and ideal candidate profile</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sourcing</h3>
                <p className="text-gray-600 text-sm">Leverage our network and tools to identify qualified candidates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Screening</h3>
                <p className="text-gray-600 text-sm">Conduct thorough interviews and assessments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Placement</h3>
                <p className="text-gray-600 text-sm">Present qualified candidates and support through hiring and onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your permanent staffing needs and how we can help you find the perfect candidates
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
