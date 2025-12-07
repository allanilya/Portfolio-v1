export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Codify AI",
    description: "AI-powered programming tutor leveraging AWS Bedrock (Claude 4.5 haiku), achieving 50% response time improvement through optimized prompt engineering, and LangChain-based agentic workflows.",
    techStack: ["React", "AWS Bedrock", "Flask", "DynamoDB", "Docker", "LangChain"],
    githubUrl: "https://github.com/allanilya/codify-ai",
    liveUrl: "https://codifyai.org"
  },
  {
    id: 2,
    title: "Time Series Forecasting for Financial Markets",
    description: "Built ARIMA, LSTM, and GRU models for stock prediction (AAPL, NVDA, LYFT), achieving 64-82% RMSE reduction. Implemented grid search across 36 ARIMA configurations and built 2-layer LSTM/GRU architectures with dropout regularization. Conducted stationarity analysis using ADF tests and automated data extraction for 1,458+ trading days via yfinance API.",
    techStack: ["Python", "TensorFlow", "Statsmodels", "LSTM", "GRU", "ARIMA", "yfinance"],
    githubUrl: "https://github.com/allanilya/Stock-analytics"
  },
  {
    id: 3,
    title: "Multimodal Video Analysis",
    description: "Built full-stack AI video analysis platform with Flask/Next.js featuring CLIP-based visual search, transcript search, and Gemini 2.5 Flash multimodal chat with conversational memory. Engineered async parallel processing pipeline achieving <3s response time via background frame extraction and normalized cosine similarity for instant semantic search.",
    techStack: ["Flask", "Next.js", "CLIP", "Gemini 2.5 Flash", "Python", "React", "Async Processing"],
    githubUrl: "https://github.com/allanilya/Multimodal-Video-Analysis"
  },
  {
    id: 4,
    title: "Diabetes Risk Prediction",
    description: "Tested whether lifestyle or demographic factors are greater predictors of diabetes using a dataset of 230K+ patient records. Employed advanced data wrangling (imputation, encoding, outlier detection) and addressed class imbalance with SMOTE. Developed ML algorithms (Random Forest, Logistic Regression, KNN) with 5-fold cross-validation to predict diabetes risk.",
    techStack: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "Logistic Regression", "KNN", "Pandas"],
    githubUrl: "https://github.com/allanilya/Diabetes-Prediction"
  },
  // Add your projects here following the same format
  // Example:
  // {
  //   id: 2,
  //   title: "Your Project Name",
  //   description: "Brief description of your project",
  //   techStack: ["Tech1", "Tech2", "Tech3"],
  //   githubUrl: "https://github.com/yourusername/project",
  //   liveUrl: "https://yourproject.com" // optional
  // },
];
