function CategoryPieChart() {
  const categories = [
    { name: 'Food & Dining', amount: '$450', percentage: 30, color: 'bg-blue-500' },
    { name: 'Transportation', amount: '$300', percentage: 20, color: 'bg-emerald-500' },
    { name: 'Shopping', amount: '$375', percentage: 25, color: 'bg-amber-500' },
    { name: 'Entertainment', amount: '$225', percentage: 15, color: 'bg-rose-500' },
    { name: 'Others', amount: '$150', percentage: 10, color: 'bg-purple-500' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-blue-100 dark:shadow-none p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Category Breakdown</h3>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="20"
              strokeDasharray="75.4 251.2"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10B981"
              strokeWidth="20"
              strokeDasharray="50.24 251.2"
              strokeDashoffset="-75.4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="20"
              strokeDasharray="62.8 251.2"
              strokeDashoffset="-125.64"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="20"
              strokeDasharray="37.68 251.2"
              strokeDashoffset="-188.44"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#A855F7"
              strokeWidth="20"
              strokeDasharray="25.12 251.2"
              strokeDashoffset="-226.12"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${category.color}`} />
              <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{category.amount}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{category.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPieChart;
