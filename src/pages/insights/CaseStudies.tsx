import { Award, Target, TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'AI Scale-Up',
      industry: 'Artificial Intelligence',
      challenge: 'Needed to build an elite ML team for a new computer vision product launch',
      solution: 'Implemented specialized ML talent acquisition strategy with technical screening by AI experts',
      results: ['Hired 12 ML specialists in 8 weeks', 'First product launch ahead of schedule', '100% retention rate after 1 year'],
      icon: Target
    },
    {
      company: 'Cloud Platform Corp',
      industry: 'Cloud Infrastructure',
      challenge: 'Required complete DevOps transformation team with rare Kubernetes expertise',
      solution: 'Targeted recruitment campaign in the cloud-native community with hands-on technical assessments',
      results: ['Built 15-person SRE team in 3 months', 'Platform reliability improved to 99.99%', 'Deployment time reduced by 80%'],
      icon: Award
    },
    {
      company: 'Blockchain Innovators',
      industry: 'Web3/Blockchain',
      challenge: 'Urgent need for Solidity developers for DeFi protocol launch',
      solution: 'Specialized Web3 talent sourcing with smart contract expertise validation',
      results: ['Secured 8 senior blockchain developers', 'Protocol launched on schedule', '$50M+ in TVL within first month'],
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-orange-900 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Real results from real clients. See how we've helped organizations build exceptional teams.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{study.company}</h2>
                      <p className="text-lg text-gray-600">{study.industry}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
