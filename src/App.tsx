import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/solutions/Solutions';
import Permanent from './pages/solutions/Permanent';
import Contract from './pages/solutions/Contract';
import Executive from './pages/solutions/Executive';
import RPO from './pages/solutions/RPO';
import Industry from './pages/industry/Industry';
import Technology from './pages/industry/Technology';
import Healthcare from './pages/industry/Healthcare';
import Finance from './pages/industry/Finance';
import Manufacturing from './pages/industry/Manufacturing';
import Insights from './pages/insights/Insights';
import Blog from './pages/insights/Blog';
import Trends from './pages/insights/Trends';
import CaseStudies from './pages/insights/CaseStudies';
import Resources from './pages/insights/Resources';
import UltimateGuide from './pages/insights/resources/UltimateGuide';
import SalaryBenchmarkReport from './pages/insights/resources/SalaryBenchmarkReport';
import InterviewTemplates from './pages/insights/resources/InterviewTemplates';
import DiversityChecklist from './pages/insights/resources/DiversityChecklist';
import OnboardingPlaybook from './pages/insights/resources/OnboardingPlaybook';
import RemoteWorkPolicy from './pages/insights/resources/RemoteWorkPolicy';
import Opportunities from './pages/opportunities/Opportunities';
import JobSeekers from './pages/opportunities/JobSeekers';
import Openings from './pages/opportunities/Openings';
import Submit from './pages/opportunities/Submit';
import About from './pages/About';
import AnimatedPage from './components/AnimatedPage';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/solutions':
        return <Solutions onNavigate={handleNavigate} />;
      case '/solutions/permanent':
        return <Permanent onNavigate={handleNavigate} />;
      case '/solutions/contract':
        return <Contract onNavigate={handleNavigate} />;
      case '/solutions/executive':
        return <Executive onNavigate={handleNavigate} />;
      case '/solutions/rpo':
        return <RPO onNavigate={handleNavigate} />;
      case '/industry':
        return <Industry onNavigate={handleNavigate} />;
      case '/industry/technology':
        return <Technology onNavigate={handleNavigate} />;
      case '/industry/healthcare':
        return <Healthcare onNavigate={handleNavigate} />;
      case '/industry/finance':
        return <Finance onNavigate={handleNavigate} />;
      case '/industry/manufacturing':
        return <Manufacturing onNavigate={handleNavigate} />;
      case '/insights':
        return <Insights onNavigate={handleNavigate} />;
      case '/insights/blog':
        return <Blog />;
      case '/insights/trends':
        return <Trends />;
      case '/insights/case-studies':
        return <CaseStudies />;
      case '/insights/resources':
        return <Resources onNavigate={handleNavigate} />;
      case '/insights/resources/ultimate-guide-to-technical-interviews':
        return <UltimateGuide onNavigate={handleNavigate} />;
      case '/insights/resources/salary-benchmarking-report-2025':
        return <SalaryBenchmarkReport onNavigate={handleNavigate} />;
      case '/insights/resources/interview-question-templates':
        return <InterviewTemplates onNavigate={handleNavigate} />;
      case '/insights/resources/diversity-hiring-checklist':
        return <DiversityChecklist onNavigate={handleNavigate} />;
      case '/insights/resources/onboarding-best-practices-playbook':
        return <OnboardingPlaybook onNavigate={handleNavigate} />;
      case '/insights/resources/remote-work-policy-template':
        return <RemoteWorkPolicy onNavigate={handleNavigate} />;
      case '/opportunities':
        return <Opportunities onNavigate={handleNavigate} />;
      case '/opportunities/job-seekers':
        return <JobSeekers onNavigate={handleNavigate} />;
      case '/opportunities/openings':
        return <Openings />;
      case '/opportunities/submit':
        return <Submit />;
      case '/about':
        return <About onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPath={currentPath} onNavigate={handleNavigate} />
      <main>
        <AnimatedPage key={currentPath} className="vibrant" palette={
          currentPath.startsWith('/solutions') ? 'sunset' :
          currentPath.startsWith('/industry') ? 'edge' :
          currentPath.startsWith('/insights') ? 'quantum' :
          currentPath.startsWith('/opportunities') ? 'sunset' :
          currentPath === '/' ? 'ai' : 'default'
        }>
          {renderPage()}
        </AnimatedPage>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
