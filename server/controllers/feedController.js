import Expense from "../models/expenseModel.js";
import Goal from "../models/goalModel.js";
import Income from "../models/incomeModel.js";
import askGemini from "../utils/geminiAI.js";

const personalizedFeed = async (req, res) => {
  try {
    const userId = req.user;

    const income = await Income.find({ user: userId });
    const expense = await Expense.find({ user: userId });
    const goals = await Goal.find({ user: userId });

    const totalIncome = income.reduce((s, i) => s + i.amount, 0);
    const totalExpense = expense.reduce((s, e) => s + e.amount, 0);
    const saving = totalIncome - totalExpense;

    const prompt = `
You are a financial advisor for an Indian user.
Generate EXACTLY 5 personalized financial feed posts.

User Data:
- Monthly Income: ₹${totalIncome}
- Monthly Expense: ₹${totalExpense}
- Monthly Saving: ₹${saving}
- Goals: ${goals.map(g => g.title + " (Target ₹" + g.targetAmount + ")").join(", ")}

Feed Rules:
1. Give SIP suggestion based on income.
2. Suggest investment platforms (Groww, Zerodha).
3. Give saving tips (₹20/day, envelope method, etc.).
4. If expenses > income → give alert.
5. If saving low → improve saving tips.
6. If goals exist → goal-based advice.
7. Use very simple Hinglish.
8. Tone: big-brother style, short & practical.

STRICT OUTPUT RULE:
- Output ONLY a valid JSON array with 5 objects.
- NO extra text, NO notes, NO explanation.
- NO markdown.
- NO phrases like "Here is your result".
- PURE JSON ONLY.

Correct JSON Format:
[
  {
    "title": "",
    "description": "",
    "category": "tip | sip | investment | alert | goal"
  }
]
    `;

    // AI RESPONSE
    const aiFeed = await askGemini(prompt);

    // SAFE JSON PARSING
    let parsedFeed;

    try {
      parsedFeed = JSON.parse(aiFeed);
    } catch (err) {
      console.log("❌ AI RAW RESPONSE:", aiFeed);

      return res.status(500).json({
        message: "AI returned invalid JSON",
        raw: aiFeed,
      });
    }

    // SUCCESS RESPONSE
    return res.status(200).json({
      message: "Personalized feed created",
      feed: parsedFeed,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Personalized feed failed",
      error: error.message,
    });
  }
};

export default { personalizedFeed };
