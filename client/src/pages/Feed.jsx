import { useState } from 'react';
import FeedList from '../components/feed/FeedList';

function Feed() {
  const [feedItems] = useState([
    {
      id: 1,
      category: 'tip',
      title: 'Smart Saving Tip',
      description:
        'Consider setting up automatic transfers to your savings account. Even small amounts add up over time!',
      time: '2 hours ago',
      action: 'Learn More',
    },
    {
      id: 2,
      category: 'alert',
      title: 'Budget Alert',
      description:
        'You have exceeded your dining budget by 15% this month. Consider reducing eating out expenses.',
      time: '5 hours ago',
      action: 'View Budget',
    },
    {
      id: 3,
      category: 'sip',
      title: 'SIP Recommendation',
      description:
        'Based on your savings pattern, you could start a SIP of $500/month in a balanced mutual fund.',
      time: '1 day ago',
      action: 'Explore',
    },
    {
      id: 4,
      category: 'investment',
      title: 'Investment Opportunity',
      description:
        'Your emergency fund is well established. Consider diversifying into index funds for long-term growth.',
      time: '2 days ago',
      action: 'View Options',
    },
    {
      id: 5,
      category: 'tip',
      title: 'Tax Saving Reminder',
      description:
        'The tax filing deadline is approaching. Make sure to review your deductions and credits.',
      time: '3 days ago',
      action: 'Check Status',
    },
    {
      id: 6,
      category: 'alert',
      title: 'Subscription Alert',
      description:
        'You have 3 recurring subscriptions totaling $45/month that you haven\'t used in 90 days.',
      time: '4 days ago',
      action: 'Review',
    },
    {
      id: 7,
      category: 'tip',
      title: 'Cashback Opportunity',
      description:
        'Your credit card offers 5% cashback on groceries this quarter. Make sure to use it!',
      time: '5 days ago',
      action: null,
    },
    {
      id: 8,
      category: 'investment',
      title: 'Portfolio Rebalancing',
      description:
        'Your portfolio has drifted from your target allocation. Consider rebalancing to maintain your risk profile.',
      time: '1 week ago',
      action: 'View Portfolio',
    },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all' ? feedItems : feedItems.filter((item) => item.category === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Finance Feed</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Personalized insights and recommendations for your financial journey
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            filter === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('tip')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            filter === 'tip'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Tips
        </button>
        <button
          onClick={() => setFilter('alert')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            filter === 'alert'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Alerts
        </button>
        <button
          onClick={() => setFilter('sip')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            filter === 'sip'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          SIP
        </button>
        <button
          onClick={() => setFilter('investment')}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            filter === 'investment'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Investment
        </button>
      </div>

      <FeedList items={filteredItems} />
    </div>
  );
}

export default Feed;
