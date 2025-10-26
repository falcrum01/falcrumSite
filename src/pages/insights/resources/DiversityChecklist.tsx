import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (path: string) => void; }

export default function DiversityChecklist({ onNavigate }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Diversity Hiring Checklist</h1>
          <p className="text-lg text-purple-100 mb-6">Practical steps and considerations to improve diversity in sourcing, interviewing, and selection.</p>
          <button onClick={() => onNavigate('/insights/resources')} className="mt-4 inline-flex items-center px-4 py-2 bg-white text-purple-800 rounded-lg font-semibold">
            Back to Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Checklist highlights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Inclusive job descriptions and unbiased screening methods</li>
            <li>Structured interviews and diverse interview panels</li>
            <li>Metrics to track hiring fairness</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
