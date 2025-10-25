import { Award, Target, TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechVenture Inc.',
      industry: 'Technology',
      challenge: 'Needed to scale engineering team from 20 to 100 in 6 months',
      solution: 'Implemented RPO solution with dedicated recruiters and structured interview process',
      results: ['Hired 85 engineers in 5 months', 'Reduced time-to-hire by 40%', '95% retention after 1 year'],
      icon: Target
    },
    {
      company: 'Global Health Systems',
      industry: 'Healthcare',
      challenge: 'Critical shortage of specialized nurses across 12 facilities',
      solution: 'Contract staffing with fast deployment and quality screening',
      results: ['Filled 150 positions in 3 months', 'Zero compliance issues', '98% satisfaction rating'],
      icon: Award
    },
    {
      company: 'FinanceFirst Corp',
      industry: 'Finance',
      challenge: 'Executive search for new CFO during confidential transition',
      solution: 'Discrete executive search with market mapping and leadership assessment',
      results: ['Identified ideal candidate in 6 weeks', 'Seamless transition', 'Strong cultural fit'],
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
