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
            Elite tech recruitment for the digital era. We specialize in placing top-tier developers,
            architects, and tech leaders across cloud, AI/ML, blockchain, and emerging technologies.
            From Series A startups to Fortune 500 enterprises, we power innovation through talent.
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
                <li>• Full-Stack (React, Node.js, Python)</li>
                <li>• Cloud Native Development</li>
                <li>• Microservices Architecture</li>
                <li>• DevOps/Platform Engineering</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Data & AI</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• ML/AI Engineers (TensorFlow, PyTorch)</li>
                <li>• Data Scientists & MLOps</li>
                <li>• Big Data Engineers</li>
                <li>• Computer Vision & NLP Specialists</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Emerging Tech</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Blockchain Developers</li>
                <li>• IoT Solutions Architects</li>
                <li>• AR/VR Engineers</li>
                <li>• Quantum Computing Researchers</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Cloud & Security</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cloud Architects (AWS/Azure/GCP)</li>
                <li>• Security Engineers (AppSec/InfoSec)</li>
                <li>• Site Reliability Engineers</li>
                <li>• Kubernetes/Container Specialists</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us for Tech Hiring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Tech Expertise</h3>
                  <p className="text-gray-600">Our recruiters are former developers and tech leaders who understand your stack and requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Elite Talent Network</h3>
                  <p className="text-gray-600">Access to top 5% of tech talent through our AI-powered matching and referral network</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced Screening</h3>
                  <p className="text-gray-600">System design interviews, pair programming, and architecture reviews by domain experts</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rapid Placement</h3>
                  <p className="text-gray-600">Average time-to-hire of just 10 days for senior tech roles with 95% offer acceptance</p>
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
