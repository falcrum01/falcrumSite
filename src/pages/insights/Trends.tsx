import { TrendingUp, BarChart3, Users, DollarSign } from 'lucide-react';

export default function Trends() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-green-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Market Trends 2025</h1>
          <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
            Data-driven insights into hiring trends, salary benchmarks, and workforce dynamics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">42%</div>
              <div className="text-gray-600">Growth in Contract Hiring</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">68%</div>
              <div className="text-gray-600">Remote Work Adoption</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">3.2M</div>
              <div className="text-gray-600">Tech Jobs Available</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center">
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">8.5%</div>
              <div className="text-gray-600">Average Salary Increase</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Hiring Trends</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skills-Based Hiring on the Rise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Companies are increasingly prioritizing skills and competencies over traditional
                  credentials like degrees. This trend is opening opportunities for diverse candidate pools.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI in Recruitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Artificial intelligence tools are transforming candidate screening and matching,
                  reducing time-to-hire while improving candidate quality.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emphasis on Employee Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Candidates are evaluating companies as much as companies evaluate them. Employer
                  branding and candidate experience are critical differentiators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
