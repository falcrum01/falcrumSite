import { Factory, Settings, PackageCheck, Truck } from 'lucide-react';

interface ManufacturingProps {
  onNavigate: (path: string) => void;
}

export default function Manufacturing({ onNavigate }: ManufacturingProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Factory className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Manufacturing Staffing</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
            Comprehensive staffing solutions for manufacturing operations. From production floor to
            supply chain management, we deliver qualified professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Manufacturing Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <Factory className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Production</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Production Managers</li>
                <li>• Plant Supervisors</li>
                <li>• Assembly Workers</li>
                <li>• Machine Operators</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <Settings className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Engineering</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Manufacturing Engineers</li>
                <li>• Process Engineers</li>
                <li>• Maintenance Technicians</li>
                <li>• Automation Engineers</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <PackageCheck className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Quality</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quality Managers</li>
                <li>• QA Inspectors</li>
                <li>• Six Sigma Specialists</li>
                <li>• Lean Experts</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <Truck className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Supply Chain</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Supply Chain Managers</li>
                <li>• Logistics Coordinators</li>
                <li>• Warehouse Supervisors</li>
                <li>• Procurement Specialists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimize Your Operations</h2>
          <p className="text-xl text-purple-100 mb-8">
            Find skilled manufacturing professionals for your facility
          </p>
          <button
            onClick={() => onNavigate('/opportunities/submit')}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
