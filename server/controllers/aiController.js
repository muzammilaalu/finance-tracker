import Expense from "../models/expenseModel.js";
import Goal from "../models/goalModel.js";
import Income from "../models/incomeModel.js";
import Loan from "../models/loanModel.js";
import askGemini from "../utils/geminiAI.js"

 const miniCAChatbot = async (req, res) => {
  try {
    const userId = req.user;
    const { message } = req.body;

    if (!message)
      return res.status(400).json({ message: "User message required" });

    // Get user's financial data
    const incomes = await Income.find({ user: userId });
    const expenses = await Expense.find({ user: userId });
    const loans = await Loan.find({ user: userId });
    

    const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
    const savings = totalIncome - totalExpense;

    // Category summary
    const categorySummary = {};
    expenses.forEach((e) => {
      categorySummary[e.category] =
        (categorySummary[e.category] || 0) + e.amount;
    });

    // ---- AI PROMPT (MOST IMPORTANT) ----
    const aiPrompt = `
You are "Mini CA" — a friendly Indian finance mentor. Your tone is helpful, simple, like an elder brother.

User says: "${message}"

### USER FINANCIAL DATA:
- Total Income: ₹${totalIncome}
- Total Expense: ₹${totalExpense}
- Savings: ₹${savings}

### CATEGORY BREAKDOWN:
${JSON.stringify(categorySummary, null, 2)}

### LOANS:
${loans.length > 0 ? JSON.stringify(loans, null, 2) : "No loans"}

### YOUR TASK:
- Give advice in simple Hinglish.
- Be friendly.
- No judgement.
- Give smart, practical tips.
- If user asks about buying something, check affordability.
- If expenses high → suggest small daily savings.
- If EMI high → suggest extra payment trick.
- If income low → suggest budgeting.
- Keep answers short (5–8 lines).
- Never give guaranteed financial returns.
    `;

    const aiResponse = await askGemini(aiPrompt);

    res.status(200).json({
      message: "AI Response Generated",
      response: aiResponse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Mini CA AI failed",
      error: error.message,
    });
  }
};

const smartGoalAdvice = async (req, res) => {
  try {
    const { message } = req.body;

    // get user goals
    const goals = await Goal.find({ user: req.user });

    if (goals.length === 0) {
      return res.status(200).json({
        response: "Aapne koi goal add nahi kiya hai. Pehle goal create karo fir mai advice dunga 🙂"
      });
    }

    // Convert goals into AI-readable format
    const goalsInfo = goals.map((g) => {
      const monthlySaving = Math.ceil((g.targetAmount - g.savedAmount) / g.deadlineMonths);
      return `
Goal: ${g.title}
Target: ₹${g.targetAmount}
Saved: ₹${g.savedAmount}
Deadline: ${g.deadlineMonths} months
Required Monthly Saving: ₹${monthlySaving}
Status: ${g.status}
`;
    }).join("\n");

    // AI Prompt
    const aiPrompt = `
You are Mini-CA, an Indian financial advisor.
User asked: "${message}"

Here are the user's goals:

${goalsInfo}

Give smart, friendly, practical advice.
Simplify language like a big brother.
Suggest improvements if needed.
`;

    const aiResponse = await askGemini(aiPrompt);

    res.status(200).json({
      message: "Goal-based AI advice generated",
      response: aiResponse
    });

  } catch (error) {
    res.status(500).json({
      message: "AI goal advice failed",
      error: error.message
    });
  }
};

const aiController = { miniCAChatbot, smartGoalAdvice }

export default aiController
