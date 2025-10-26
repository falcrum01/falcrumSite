import { ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export default function UltimateGuide({ onNavigate }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Ultimate Guide to Technical Interviews</h1>
          <p className="text-lg text-purple-100 mb-6">A step-by-step handbook covering screening, live coding, and post-interview evaluation best practices.</p>
          <button onClick={() => onNavigate('/insights/resources')} className="mt-4 inline-flex items-center px-4 py-2 bg-white text-purple-800 rounded-lg font-semibold">
            Back to Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">What's inside</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Designing scorecards and evaluation rubrics</li>
            <li>Practical live-coding formats and tips</li>
            <li>Behavioral interview frameworks</li>
            <li>Post-interview calibration and hiring decisions</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
