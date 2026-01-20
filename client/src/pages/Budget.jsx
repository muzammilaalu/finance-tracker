import { useState } from 'react';
import {
  ShoppingBagIcon,
  HomeIcon,
  TruckIcon,
  FilmIcon,
  HeartIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import BudgetCard from '../components/budget/BudgetCard';

function Budget() {
  const [monthlyBudget] = useState(5000);
  const [budgets] = useState([
    {
      id: 1,
      category: 'Food & Dining',
      allocated: 800,
      spent: 720,
      icon: ShoppingBagIcon,
    },
    {
      id: 2,
      category: 'Housing',
      allocated: 1500,
      spent: 1500,
      icon: HomeIcon,
    },
    {
      id: 3,
      category: 'Transportation',
      allocated: 400,
      spent: 480,
      icon: TruckIcon,
    },
    {
      id: 4,
      category: 'Entertainment',
      allocated: 300,
      spent: 185,
      icon: FilmIcon,
    },
    {
      id: 5,
      category: 'Healthcare',
      allocated: 500,
      spent: 220,
      icon: HeartIcon,
    },
    {
      id: 6,
      category: 'Education',
      allocated: 600,
      spent: 550,
      icon: AcademicCapIcon,
    },
  ]);

  const totalAllocated = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const overallPercentage = (totalSpent / totalAllocated) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Budget Management</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your spending across different categories
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Overall Budget</h2>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${monthlyBudget.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monthly budget allocation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Allocated</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${totalAllocated.toLocaleString()}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">
              ${totalSpent.toLocaleString()}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Remaining</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              ${(totalAllocated - totalSpent).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full rounded-full transition-all ${
                overallPercentage > 100
                  ? 'bg-rose-500'
                  : overallPercentage > 80
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(overallPercentage, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {overallPercentage.toFixed(1)}% of total budget used
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Category Budgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              category={budget.category}
              allocated={budget.allocated}
              spent={budget.spent}
              icon={budget.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Budget;
