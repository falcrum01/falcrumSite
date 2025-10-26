import { FileText } from 'lucide-react';

interface ResourcesProps {
  onNavigate: (path: string) => void;
}

export default function Resources({ onNavigate }: ResourcesProps) {
  const resources = [
    {
      title: 'Ultimate Guide to Technical Interviews',
      type: 'PDF Guide',
      description: 'A step-by-step handbook covering screening, live coding, and post-interview evaluation best practices.'
    },
    {
      title: 'Salary Benchmarking Report 2025',
      type: 'Report',
      description: 'Industry salary benchmarks across engineering, data, and product roles to help set competitive compensation.'
    },
    {
      title: 'Interview Question Templates',
      type: 'Template Pack',
      description: 'Reusable question sets organized by seniority and skill area to standardize candidate evaluation.'
    },
    {
      title: 'Diversity Hiring Checklist',
      type: 'Checklist',
      description: 'Practical steps and considerations to improve diversity in sourcing, interviewing, and selection.'
    },
    {
      title: 'Onboarding Best Practices Playbook',
      type: 'Playbook',
      description: 'A playbook for ramping new hires quickly, including 30/60/90 day templates and manager checklists.'
    },
    {
      title: 'Remote Work Policy Template',
      type: 'Template',
      description: 'A customizable remote work policy covering expectations, equipment, and communication protocols.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Resources Library</h1>
          <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
            Guides, templates, and tools to help you optimize your hiring process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const slug = resource.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => onNavigate(`/insights/resources/${slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onNavigate(`/insights/resources/${slug}`);
                  }}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all p-6 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <FileText className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Available on request</span>
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
