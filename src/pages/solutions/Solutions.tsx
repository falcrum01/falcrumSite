import { useState } from 'react';
import { UserCheck, Briefcase, Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const solutions = [
    {
      icon: UserCheck,
      title: 'Permanent Staffing',
      description:
        'Build your dream team with our end-to-end permanent placement solutions. We identify and deliver top talent aligned with your company culture and long-term vision.',
      path: '/solutions/permanent',
      color: 'blue',
      features: ['Cultural fit assessment', 'Skills verification', 'Background checks', '90-day guarantee'],
    },
    {
      icon: Briefcase,
      title: 'Contract Staffing',
      description:
        'Adapt quickly to market changes with our flexible contract staffing services. Ideal for project-based or short-term requirements.',
      path: '/solutions/contract',
      color: 'teal',
      features: ['Quick deployment', 'Flexible terms', 'Project specialists', 'Ongoing management'],
    },
    {
      icon: Users,
      title: 'Contingent Staffing',
      description:
        'Access scaleable talent through managed contingent programs and supplier networks to meet volume and timing needs.',
      path: '/solutions/contingent',
      color: 'slate',
      features: ['Volume hiring', 'Supplier networks', 'Rapid scaling', 'Program management'],
    },
    {
      icon: Target,
      title: 'Executive Search',
      description:
        'Confidential recruitment for senior leadership and executive roles. We identify transformative leaders who drive business growth.',
      path: '/solutions/executive',
      color: 'blue',
      features: ['Confidential search', 'Market mapping', 'Leadership assessment', 'Succession planning'],
    },
    {
      icon: Users,
      title: 'RPO Services',
      description:
        'End-to-end recruitment process outsourcing (RPO) that integrates seamlessly with your HR team for cost-efficient, scalable hiring.',
      path: '/solutions/rpo',
      color: 'teal',
      features: ['End-to-end recruitment', 'Scalable solutions', 'Cost optimization', 'Analytics & reporting'],
    },
  ];

const colorClasses = {
blue: {
bg: 'from-blue-50 to-white',
icon: 'bg-blue-100 text-blue-700',
buttonBg: 'bg-blue-700 hover:bg-blue-800',
border: 'border-blue-200',
check: 'text-gray-900',
},
teal: {
bg: 'from-teal-50 to-white',
icon: 'bg-teal-100 text-teal-700',
buttonBg: 'bg-teal-700 hover:bg-teal-800',
border: 'border-teal-200',
check: 'text-gray-900',
},
slate: {
bg: 'from-slate-50 to-white',
icon: 'bg-slate-100 text-slate-700',
buttonBg: 'bg-slate-700 hover:bg-slate-800',
border: 'border-slate-200',
check: 'text-gray-900',
},
gray: {
    bg: 'from-gray-50 to-white',
    icon: 'bg-gray-100 text-gray-700',
    buttonBg: 'bg-gray-700 hover:bg-gray-800',
    border: 'border-gray-200',
  check: 'text-gray-900',
},
};

return (
<div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 text-gray-900">
{/* Hero Section */}
<section className="py-20 border-b border-gray-200 bg-gradient-to-br from-white via-slate-50 to-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
Tailored Staffing Solutions
</h1>
<p className="text-lg leading-relaxed text-gray-600">
Empower your business with flexible and permanent staffing strategies designed to meet your growth goals.
From executive search to recruitment outsourcing, we deliver excellence at every level.
</p>
</div>
</div>
</section>

  {/* Solutions Section */}
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        const colors = colorClasses[solution.color as keyof typeof colorClasses];

        return (
          <div key={index}>
            <div
              className={`rounded-2xl p-10 lg:p-12 border ${colors.border} bg-gradient-to-br ${colors.bg} shadow-sm hover:shadow-lg transition-transform hover:scale-[1.01]`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div
                    className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 shadow`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-gray-900">{solution.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{solution.description}</p>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`${colors.buttonBg} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow`}
                  >
                    <span>{openIndex === index ? 'Hide' : 'Learn More'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Key Features</h3>
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-5 h-5 ${colors.check} flex-shrink-0`} />
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {openIndex === index && (
              <div className="mt-6 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{solution.title} — Details</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  {solution.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="flex items-center space-x-4">
                  <a href="/opportunities/submit" className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Request Consultation
                  </a>
                  <button type="button" onClick={() => setOpenIndex(null)} className="px-4 py-2 border rounded-lg">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>

  {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-white text-center">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        Ready to Transform Your Hiring?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
        Partner with us to create a recruitment strategy that drives performance and growth.
      </p>
      <a
        href="/opportunities/submit"
        className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow"
      >
        Get in Touch
      </a>
    </div>
  </section>
</div>


);
}