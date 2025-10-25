import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

export default function Openings() {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      salary: '$150,000 - $180,000',
      posted: '2 days ago'
    },
    {
      title: 'Registered Nurse - ICU',
      company: 'City Hospital',
      location: 'New York, NY',
      type: 'Full-Time',
      salary: '$85,000 - $105,000',
      posted: '1 week ago'
    },
    {
      title: 'Financial Analyst',
      company: 'Global Finance',
      location: 'Chicago, IL',
      type: 'Full-Time',
      salary: '$75,000 - $95,000',
      posted: '3 days ago'
    },
    {
      title: 'Manufacturing Manager',
      company: 'Industrial Solutions',
      location: 'Detroit, MI',
      type: 'Full-Time',
      salary: '$95,000 - $120,000',
      posted: '5 days ago'
    },
    {
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Austin, TX',
      type: 'Full-Time',
      salary: '$120,000 - $145,000',
      posted: '1 day ago'
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Inc',
      location: 'Seattle, WA',
      type: 'Contract',
      salary: '$130,000 - $160,000',
      posted: '4 days ago'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-green-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Current Openings</h1>
          <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
            Explore our latest job opportunities and take the next step in your career.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
              />
              <button className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-green-300 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-lg text-gray-700 mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
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
