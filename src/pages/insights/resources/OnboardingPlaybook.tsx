import { ArrowRight } from 'lucide-react';

interface Props { onNavigate: (path: string) => void; }

export default function OnboardingPlaybook({ onNavigate }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Onboarding Best Practices Playbook</h1>
          <p className="text-lg text-purple-100 mb-6">A playbook for ramping new hires quickly, including 30/60/90 day templates and manager checklists.</p>
          <button onClick={() => onNavigate('/insights/resources')} className="mt-4 inline-flex items-center px-4 py-2 bg-white text-purple-800 rounded-lg font-semibold">
            Back to Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Playbook contents</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>30/60/90 day onboarding templates</li>
            <li>Manager checklists and role-specific ramp plans</li>
            <li>Measurement and feedback loops</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
