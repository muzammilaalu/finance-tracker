import { CheckCircleIcon } from '@heroicons/react/24/outline';

function GoalCard({ goal }) {
  const progressPercentage = (goal.current / goal.target) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-blue-100 dark:shadow-none p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{goal.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{goal.description}</p>
        </div>
        {goal.completed && (
          <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Progress</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
          </span>
        </div>

        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full rounded-full transition-all ${
              progressPercentage >= 100
                ? 'bg-emerald-500'
                : progressPercentage >= 75
                ? 'bg-blue-500'
                : progressPercentage >= 50
                ? 'bg-amber-500'
                : 'bg-rose-500'
            }`}
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">{progressPercentage.toFixed(1)}% Complete</span>
          <span className="text-gray-600 dark:text-gray-400">Target: {goal.deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
