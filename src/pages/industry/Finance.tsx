import { DollarSign, TrendingUp, Calculator, Shield } from 'lucide-react';

interface FinanceProps {
  onNavigate: (path: string) => void;
}

export default function Finance({ onNavigate }: FinanceProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-orange-900 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <DollarSign className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Finance Staffing</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Specialized recruitment for banking, financial services, and fintech. We connect financial
            institutions with top-tier professionals across all levels.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Finance Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Investment Banking</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Investment Bankers</li>
                <li>• Financial Analysts</li>
                <li>• Portfolio Managers</li>
                <li>• Equity Research</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <Calculator className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Accounting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• CPAs</li>
                <li>• Controllers</li>
                <li>• Tax Specialists</li>
                <li>• Auditors</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Risk & Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Risk Managers</li>
                <li>• Compliance Officers</li>
                <li>• Credit Analysts</li>
                <li>• Fraud Investigators</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Fintech</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product Managers</li>
                <li>• Blockchain Developers</li>
                <li>• Quant Analysts</li>
                <li>• Payment Specialists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Build Your Finance Team</h2>
          <p className="text-xl text-orange-100 mb-8">
            Connect with our finance recruitment specialists
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
