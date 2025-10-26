import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/solutions/Solutions';
import Permanent from './pages/solutions/Permanent';
import Executive from './pages/solutions/Executive';
import Contingent from './pages/solutions/Contingent';
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
// AnimatedPage removed — render pages directly

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' && window.location && window.location.pathname
      ? window.location.pathname
      : '/'
  );

  const handleNavigate = (path: string) => {
    // push the new URL so direct linking and browser history work
    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      try {
        window.history.pushState({}, '', path);
      } catch {
        // fallback: ignore pushState errors
      }
    }

    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // listen for browser navigation (back/forward)
  useEffect(() => {
    const onPop = () => {
      if (typeof window !== 'undefined') setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/solutions':
        return <Solutions />;
      case '/solutions/permanent':
        return <Permanent onNavigate={handleNavigate} />;
      case '/solutions/contingent':
        return <Contingent onNavigate={handleNavigate} />;
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
        {/* Render pages directly (AnimatedPage removed) */}
        <div className="page-container">
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
