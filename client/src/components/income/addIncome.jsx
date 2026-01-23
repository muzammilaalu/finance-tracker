import { useState } from 'react';

import FormInput from './FormInput';

import { DollarSign } from 'lucide-react';


export default function AddIncome({isIncome}) {
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted")
  
  };

  return (
    <div className={`${isIncome ? "min-h-screen z-2 w-[80%] absolute top-20 right-30 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12 px-4" : "hidden"} `}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add Income</h1>
              <p className="text-sm text-gray-500">Track your income sources</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Source"
              name="source"
              type="text"
              value={formData.source}
              onChange={handleChange}
              placeholder="e.g., Salary, Freelance, Investment"
              error={errors.source}
              required
            />

            <FormInput
              label="Amount"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              error={errors.amount}
              required
              isAmount
            />

            <FormInput
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
              required
            />

            <FormInput
              label="Note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Add a note (optional)"
              as="textarea"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
            Add 
            </button>
          </form>
        </div>
      </div>

    
    </div>
  );
}
