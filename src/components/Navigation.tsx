import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types/navigation';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  {
    name: 'Solutions',
    path: '/solutions',
    subPages: [
      { name: 'Permanent Staffing', path: '/solutions/permanent' },
      { name: 'Contract Staffing', path: '/solutions/contract' },
      { name: 'Executive Search', path: '/solutions/executive' },
      { name: 'RPO Services', path: '/solutions/rpo' }
    ]
  },
  {
    name: 'Industry Segments',
    path: '/industry',
    subPages: [
      { name: 'Technology', path: '/industry/technology' },
      { name: 'Healthcare', path: '/industry/healthcare' },
      { name: 'Finance', path: '/industry/finance' },
      { name: 'Manufacturing', path: '/industry/manufacturing' }
    ]
  },
  {
    name: 'Insights',
    path: '/insights',
    subPages: [
      { name: 'Blog', path: '/insights/blog' },
      { name: 'Market Trends', path: '/insights/trends' },
      { name: 'Case Studies', path: '/insights/case-studies' },
      { name: 'Resources', path: '/insights/resources' }
    ]
  },
  {
    name: 'Opportunities',
    path: '/opportunities',
    subPages: [
      { name: 'Job Seekers', path: '/opportunities/job-seekers' },
      { name: 'Current Openings', path: '/opportunities/openings' },
      { name: 'Submit Resume', path: '/opportunities/submit' }
    ]
  },
  {
    name: 'About',
    path: '/about'
  }
];

export default function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">TalentBridge</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                    currentPath === item.path || currentPath.startsWith(item.path + '/')
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.subPages && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.subPages && openDropdown === item.path && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {item.subPages.map((subPage) => (
                      <button
                        key={subPage.path}
                        onClick={() => {
                          onNavigate(subPage.path);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                          currentPath === subPage.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {subPage.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => onNavigate('/opportunities/submit')}
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <button
                  onClick={() => {
                    onNavigate(item.path);
                    if (!item.subPages) setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                    currentPath === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
                {item.subPages && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subPages.map((subPage) => (
                      <button
                        key={subPage.path}
                        onClick={() => {
                          onNavigate(subPage.path);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                          currentPath === subPage.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {subPage.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                onNavigate('/opportunities/submit');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
