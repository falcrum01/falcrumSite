import { BookOpen, TrendingUp, FileText, Library, ArrowRight } from 'lucide-react';

interface InsightsProps {
  onNavigate: (path: string) => void;
}

export default function Insights({ onNavigate }: InsightsProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Industry Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Stay informed with the latest trends, best practices, and expert perspectives on talent
            acquisition and workforce management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              onClick={() => onNavigate('/insights/blog')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Expert articles on recruitment strategies, hiring tips, and industry best practices.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Read Articles</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/insights/trends')}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <TrendingUp className="w-12 h-12 text-green-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Trends</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Current hiring trends, salary data, and workforce analytics across industries.
              </p>
              <button className="flex items-center space-x-2 text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>View Trends</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/insights/case-studies')}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <FileText className="w-12 h-12 text-orange-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Real success stories showcasing how we've helped organizations build exceptional teams.
              </p>
              <button className="flex items-center space-x-2 text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Read Stories</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={() => onNavigate('/insights/resources')}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 cursor-pointer hover:shadow-xl transition-all group"
            >
              <Library className="w-12 h-12 text-purple-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Downloadable guides, templates, and tools to optimize your hiring process.
              </p>
              <button className="flex items-center space-x-2 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Browse Resources</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
