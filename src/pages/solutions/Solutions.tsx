import { UserCheck, Briefcase, Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsProps {
  onNavigate: (path: string) => void;
}

export default function Solutions({ onNavigate }: SolutionsProps) {
  const solutions = [
    {
      icon: UserCheck,
      title: 'Permanent Staffing',
      description: 'Build your dream team with our comprehensive permanent placement services. We identify, vet, and deliver top-tier talent that aligns with your company culture and long-term goals.',
      path: '/solutions/permanent',
      color: 'blue',
      features: ['Cultural fit assessment', 'Skills verification', 'Background checks', '90-day guarantee']
    },
    {
      icon: Briefcase,
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for temporary, contract, and project-based needs. Scale your team up or down based on business demands without long-term commitments.',
      path: '/solutions/contract',
      color: 'green',
      features: ['Quick deployment', 'Flexible terms', 'Project specialists', 'Ongoing management']
    },
    {
      icon: Target,
      title: 'Executive Search',
      description: 'Confidential, high-touch executive recruitment for C-suite and senior leadership positions. Our proven methodology identifies transformational leaders.',
      path: '/solutions/executive',
      color: 'orange',
      features: ['Confidential search', 'Market mapping', 'Leadership assessment', 'Succession planning']
    },
    {
      icon: Users,
      title: 'RPO Services',
      description: 'Outsource your entire recruitment function or specific hiring processes. We become an extension of your HR team, managing everything from sourcing to onboarding.',
      path: '/solutions/rpo',
      color: 'purple',
      features: ['End-to-end recruitment', 'Scalable solutions', 'Cost optimization', 'Analytics & reporting']
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-cyan-50',
      icon: 'bg-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      border: 'border-blue-100'
    },
    green: {
      bg: 'from-green-50 to-emerald-50',
      icon: 'bg-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      border: 'border-green-100'
    },
    orange: {
      bg: 'from-orange-50 to-amber-50',
      icon: 'bg-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      border: 'border-orange-100'
    },
    purple: {
      bg: 'from-purple-50 to-pink-50',
      icon: 'bg-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      border: 'border-purple-100'
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Tailored Staffing Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From permanent placements to flexible contract staffing, we provide comprehensive
              recruitment solutions designed to meet your unique business challenges and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const colors = colorClasses[solution.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 lg:p-12 border ${colors.border}`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      <button
                        onClick={() => onNavigate(solution.path)}
                        className={`${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <div className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can address your specific staffing needs
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
