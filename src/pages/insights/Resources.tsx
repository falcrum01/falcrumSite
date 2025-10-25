import { FileText, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    { title: 'Ultimate Guide to Technical Interviews', type: 'PDF Guide', size: '2.4 MB' },
    { title: 'Salary Benchmarking Report 2025', type: 'Report', size: '1.8 MB' },
    { title: 'Interview Question Templates', type: 'Template Pack', size: '850 KB' },
    { title: 'Diversity Hiring Checklist', type: 'Checklist', size: '420 KB' },
    { title: 'Onboarding Best Practices Playbook', type: 'Playbook', size: '3.1 MB' },
    { title: 'Remote Work Policy Template', type: 'Template', size: '680 KB' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Resources Library</h1>
          <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
            Free downloadable guides, templates, and tools to optimize your hiring process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all p-6 cursor-pointer group"
              >
                <FileText className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
