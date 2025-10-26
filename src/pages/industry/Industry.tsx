import { Code, Heart, DollarSign, Factory, ArrowRight } from 'lucide-react';

interface IndustryProps {
  onNavigate: (path: string) => void;
}

export default function Industry({ onNavigate }: IndustryProps) {
  const industries = [
    {
      icon: Code,
      title: 'Technology',
      description: 'From startups to Fortune 500 tech giants, we place software engineers, data scientists, product managers, and IT professionals.',
      path: '/industry/technology',
      color: 'blue',
      stats: { placements: '5,000+', avgTime: '12 days', satisfaction: '97%' }
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical professionals, clinical staff, healthcare administrators, and specialized support roles across hospitals and medical facilities.',
      path: '/industry/healthcare',
      color: 'green',
      stats: { placements: '3,500+', avgTime: '14 days', satisfaction: '98%' }
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Banking professionals, financial analysts, accountants, compliance specialists, and fintech innovators.',
      path: '/industry/finance',
      color: 'orange',
      stats: { placements: '4,200+', avgTime: '13 days', satisfaction: '96%' }
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Operations managers, supply chain specialists, quality engineers, and production supervisors for manufacturing excellence.',
      path: '/industry/manufacturing',
      color: 'purple',
      stats: { placements: '2,800+', avgTime: '15 days', satisfaction: '95%' }
    }
  ];

  const colorClasses = {
    blue: 'from-blue-50 to-cyan-50 border-blue-100 hover:border-blue-300',
    green: 'from-green-50 to-emerald-50 border-green-100 hover:border-green-300',
    orange: 'from-orange-50 to-amber-50 border-orange-100 hover:border-orange-300',
    purple: 'from-purple-50 to-pink-50 border-purple-100 hover:border-purple-300'
  };

  const iconColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Industry Expertise</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Deep domain knowledge and specialized recruiting expertise across key sectors.
              Our industry-focused teams understand the unique challenges and requirements of your field.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} rounded-2xl p-8 border-2 transition-all cursor-pointer group`}
                  onClick={() => onNavigate(industry.path)}
                >
                  <div className={`w-16 h-16 ${iconColors[industry.color as keyof typeof iconColors]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-t border-gray-300">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{industry.stats.placements}</div>
                      <div className="text-sm text-gray-600">Placements</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{industry.stats.avgTime}</div>
                      <div className="text-sm text-gray-600">Avg. Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{industry.stats.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-900 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Explore {industry.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Top Talent?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Connect with our industry specialists to discuss your specific hiring needs
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-purple-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
