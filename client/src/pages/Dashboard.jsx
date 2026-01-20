import {
  BanknotesIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  SparklesIcon,
  FlagIcon,
} from '@heroicons/react/24/outline';
import StatsCard from '../components/dashboard/StatsCard';
import QuickActionButton from '../components/dashboard/QuickActionButton';
import MonthlySummaryChart from '../components/dashboard/MonthlySummaryChart';
import CategoryPieChart from '../components/dashboard/CategoryPieChart';

function Dashboard() {
  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's your financial overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Income"
          amount="$12,450"
          change="+12.5% from last month"
          changeType="positive"
          icon={BanknotesIcon}
          bgColor="bg-emerald-50 dark:bg-emerald-900/20"
          iconColor="text-emerald-600 dark:text-emerald-400"
        />
        <StatsCard
          title="Total Expense"
          amount="$8,320"
          change="-5.2% from last month"
          changeType="positive"
          icon={ArrowTrendingDownIcon}
          bgColor="bg-rose-50 dark:bg-rose-900/20"
          iconColor="text-rose-600 dark:text-rose-400"
        />
        <StatsCard
          title="Savings"
          amount="$4,130"
          change="+18.3% from last month"
          changeType="positive"
          icon={CurrencyDollarIcon}
          bgColor="bg-blue-50 dark:bg-blue-900/20"
          iconColor="text-blue-600 dark:text-blue-400"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton
            label="Add Income"
            icon={PlusCircleIcon}
            onClick={() => handleQuickAction('income')}
            bgColor="bg-emerald-100 dark:bg-emerald-900/30"
            textColor="text-emerald-700 dark:text-emerald-400"
          />
          <QuickActionButton
            label="Add Expense"
            icon={MinusCircleIcon}
            onClick={() => handleQuickAction('expense')}
            bgColor="bg-rose-100 dark:bg-rose-900/30"
            textColor="text-rose-700 dark:text-rose-400"
          />
          <QuickActionButton
            label="Ask Mini-CA"
            icon={SparklesIcon}
            onClick={() => handleQuickAction('ai')}
            bgColor="bg-blue-100 dark:bg-blue-900/30"
            textColor="text-blue-700 dark:text-blue-400"
          />
          <QuickActionButton
            label="Set Goals"
            icon={FlagIcon}
            onClick={() => handleQuickAction('goals')}
            bgColor="bg-amber-100 dark:bg-amber-900/30"
            textColor="text-amber-700 dark:text-amber-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlySummaryChart />
        <CategoryPieChart />
      </div>
    </div>
  );
}

export default Dashboard;
