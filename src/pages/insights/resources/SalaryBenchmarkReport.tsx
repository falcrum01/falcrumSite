import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (path: string) => void; }

export default function SalaryBenchmarkReport({ onNavigate }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Salary Benchmarking Report 2025</h1>
          <p className="text-lg text-purple-100 mb-6">Industry salary benchmarks across engineering, data, and product roles to help set competitive compensation.</p>
          <button onClick={() => onNavigate('/insights/resources')} className="mt-4 inline-flex items-center px-4 py-2 bg-white text-purple-800 rounded-lg font-semibold">
            Back to Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Key highlights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Median and 90th percentile compensations by role and region</li>
            <li>Comp trends year-over-year and market adjustments</li>
            <li>Guidance for total reward structuring</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
