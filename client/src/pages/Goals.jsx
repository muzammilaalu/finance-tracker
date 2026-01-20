import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import GoalCard from '../components/goals/GoalCard';
import AddGoalModal from '../components/goals/AddGoalModal';

function Goals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: 'Emergency Fund',
      description: 'Build a safety net for unexpected expenses',
      target: 10000,
      current: 7500,
      deadline: '2025-12-31',
      completed: false,
    },
    {
      id: 2,
      name: 'New Car',
      description: 'Save for down payment on a new vehicle',
      target: 15000,
      current: 5200,
      deadline: '2026-06-30',
      completed: false,
    },
    {
      id: 3,
      name: 'Vacation Fund',
      description: 'Dream vacation to Europe',
      target: 5000,
      current: 5000,
      deadline: '2024-08-01',
      completed: true,
    },
    {
      id: 4,
      name: 'Home Down Payment',
      description: 'Save 20% down payment for first home',
      target: 50000,
      current: 12500,
      deadline: '2027-12-31',
      completed: false,
    },
  ]);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, { ...newGoal, id: goals.length + 1 }]);
  };

  const activeGoals = goals.filter((goal) => !goal.completed);
  const completedGoals = goals.filter((goal) => goal.completed);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Financial Goals</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and achieve your financial targets</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          Add Goal
        </button>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Goals</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{goals.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Goals</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{activeGoals.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completed</p>
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{completedGoals.length}</p>
          </div>
        </div>
      </div>

      {activeGoals.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Active Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
      )}

      {completedGoals.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Completed Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
      )}

      <AddGoalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddGoal={handleAddGoal} />
    </div>
  );
}

export default Goals;
