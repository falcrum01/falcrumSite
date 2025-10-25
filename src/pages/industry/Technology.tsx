import { Code, Cpu, Database, Globe, CheckCircle2 } from 'lucide-react';

interface TechnologyProps {
  onNavigate: (path: string) => void;
}

export default function Technology({ onNavigate }: TechnologyProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Code className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Technology Staffing</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Connecting innovative companies with exceptional tech talent. From emerging startups to
            enterprise giants, we understand the rapidly evolving technology landscape.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Roles We Fill</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Cpu className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Software Engineering</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full-Stack Developers</li>
                <li>• Frontend/Backend Engineers</li>
                <li>• Mobile App Developers</li>
                <li>• DevOps Engineers</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Data & AI</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Data Scientists</li>
                <li>• ML Engineers</li>
                <li>• Data Analysts</li>
                <li>• AI Specialists</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Product & Design</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product Managers</li>
                <li>• UX/UI Designers</li>
                <li>• Product Owners</li>
                <li>• Scrum Masters</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">IT Infrastructure</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• System Administrators</li>
                <li>• Network Engineers</li>
                <li>• Security Specialists</li>
                <li>• Cloud Architects</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us for Tech Hiring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Expertise</h3>
                  <p className="text-gray-600">Our recruiters have technical backgrounds and understand the skills you need</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vast Network</h3>
                  <p className="text-gray-600">Access to passive candidates and tech communities nationwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Skills Assessment</h3>
                  <p className="text-gray-600">Technical screening and coding challenges to verify capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Placement</h3>
                  <p className="text-gray-600">Average time-to-hire of just 12 days for tech roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Build Your Tech Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your technology staffing needs
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
