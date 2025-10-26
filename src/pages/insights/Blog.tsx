import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: '10 Strategies for Attracting Top Tech Talent in 2025',
      excerpt: 'The tech hiring landscape is more competitive than ever. Discover proven strategies to stand out and attract the best candidates.',
      author: 'Sarah Chen',
      date: 'March 15, 2025',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      title: 'The Rise of Contract Workforce: Is It Right for Your Business?',
      excerpt: 'Contract staffing is growing rapidly. Learn when and how to leverage flexible workforce solutions for maximum benefit.',
      author: 'Michael Rodriguez',
      date: 'March 10, 2025',
      category: 'Trends',
      readTime: '7 min read'
    },
    {
      title: 'Building Diverse Teams: Beyond Checkbox Hiring',
      excerpt: 'True diversity goes beyond meeting quotas. Explore strategies for creating genuinely inclusive recruitment processes.',
      author: 'Jessica Williams',
      date: 'March 5, 2025',
      category: 'Best Practices',
      readTime: '6 min read'
    },
    {
      title: 'Interview Red Flags Every Hiring Manager Should Know',
      excerpt: 'Spotting problematic candidates early saves time and resources. Learn the warning signs to watch for during interviews.',
      author: 'David Park',
      date: 'February 28, 2025',
      category: 'Hiring Tips',
      readTime: '4 min read'
    },
    {
      title: 'The Art of Writing Job Descriptions That Attract Quality Candidates',
      excerpt: 'Your job description is often the first impression. Make it count with these proven writing techniques.',
      author: 'Emily Thompson',
      date: 'February 20, 2025',
      category: 'Best Practices',
      readTime: '5 min read'
    },
    {
      title: 'Remote Work Revolution: Hiring Across State Lines',
      excerpt: 'Remote hiring opens new talent pools but brings new challenges. Navigate the complexities with confidence.',
      author: 'Robert Kim',
      date: 'February 15, 2025',
      category: 'Remote Work',
      readTime: '8 min read'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Fulcrum Technology Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Expert insights, practical tips, and industry perspectives to help you hire smarter.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
              <span>Load More Articles</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for weekly insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
