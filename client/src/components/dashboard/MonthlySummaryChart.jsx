function MonthlySummaryChart({totalExpense}) {
  const monthlyData = [
    { month: 'Jan', income: 80, expense: 60 },
    { month: 'Feb', income: 65, expense: 75 },
    { month: 'Mar', income: 90, expense: 55 },
    { month: 'Apr', income: 75, expense: 70 },
    { month: 'May', income: 85, expense: 65 },
    { month: 'Jun', income: 95, expense: 60 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-blue-100 dark:shadow-none p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Monthly Summary</h3>

      <div className="flex items-end justify-between gap-4 h-64">
        {monthlyData.map((data) => (
          <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center gap-1">
              <div
                className="w-full bg-emerald-500 rounded-t-lg transition-all hover:bg-emerald-600"
                style={{ height: `${data.income}%` }}
              />
              <div
                className="w-full bg-rose-500 rounded-t-lg transition-all hover:bg-rose-600"
                style={{ height: `${data.expense}%` }}
              />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{data.month}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-rose-500 rounded-full" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Expense</span>
        </div>
      </div>
    </div>
  );
}

export default MonthlySummaryChart;
