import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

export default function Openings() {
  const jobs = [
    {
      title: 'Senior Full Stack Engineer (React/Node.js)',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      salary: '$160,000 - $220,000',
      posted: '2 days ago'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AI Innovations',
      location: 'Remote (US)',
      type: 'Full-Time',
      salary: '$180,000 - $250,000',
      posted: '1 day ago'
    },
    {
      title: 'Cloud Solutions Architect (AWS)',
      company: 'CloudTech Systems',
      location: 'Seattle, WA',
      type: 'Full-Time',
      salary: '$170,000 - $230,000',
      posted: '3 days ago'
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Platform.io',
      location: 'Austin, TX',
      type: 'Full-Time',
      salary: '$150,000 - $200,000',
      posted: '2 days ago'
    },
    {
      title: 'Blockchain Developer (Solidity)',
      company: 'Web3 Ventures',
      location: 'Miami, FL',
      type: 'Full-Time',
      salary: '$160,000 - $240,000',
      posted: '1 day ago'
    },
    {
      title: 'Data Engineering Lead',
      company: 'DataScale AI',
      location: 'New York, NY',
      type: 'Full-Time',
      salary: '$180,000 - $250,000',
      posted: '4 days ago'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Tech Opportunities</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Discover cutting-edge tech roles at innovative companies. From startups to tech giants,
            find your next opportunity in software, data, cloud, and emerging technologies.
          </p>
        </div>
      </section>

      <section className="py-20 subsection-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 px-6 py-4 bg-gray-900 text-gray-100 border-2 border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 px-6 py-4 bg-gray-900 text-gray-100 border-2 border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-800 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{job.title}</h3>
                    <p className="text-lg text-gray-300 mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-800 transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Load More Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
