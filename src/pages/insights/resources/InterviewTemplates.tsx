import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (path: string) => void; }

export default function InterviewTemplates({ onNavigate }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Interview Question Templates</h1>
          <p className="text-lg text-purple-100 mb-6">Reusable question sets organized by seniority and skill area to standardize candidate evaluation.</p>
          <button onClick={() => onNavigate('/insights/resources')} className="mt-4 inline-flex items-center px-4 py-2 bg-white text-purple-800 rounded-lg font-semibold">
            Back to Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Included packs</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Junior, Mid, and Senior engineering templates</li>
            <li>Behavioral prompts and scoring guidelines</li>
            <li>Role-specific technical assessments</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
