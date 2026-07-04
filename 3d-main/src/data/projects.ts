/**
 * ─────────────────────────────────────────────────────────────────────────
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────────────────
 * This is the single source of truth for the "My Work" section.
 * The Work.tsx component just reads this array — it doesn't need to change
 * when you add, remove, or edit a project.
 *
 * HOW TO ADD A NEW PROJECT
 * 1. Drop a preview image (ideally 1270x848, .webp) into `public/images/`.
 * 2. Copy one of the objects below and fill in your details.
 * 3. Pick an existing `domain` from PROJECT_DOMAINS (or add a new one there —
 *    it will automatically show up as a new filter chip in the UI).
 * 4. Save. That's it — the carousel, the filter chips, the counters, and the
 *    "Browse all" grid all update automatically.
 * ─────────────────────────────────────────────────────────────────────────
 */

// The full list of domains a project can belong to. Add a new string here
// to introduce a brand new filter chip — every project tagged with it will
// automatically appear under that filter.
export const PROJECT_DOMAINS = [
  "Sports Analytics",
  "Predictive ML",
  "Data Engineering",
  "NLP & Text",
  "Full-Stack Apps",
] as const;

export type ProjectDomain = (typeof PROJECT_DOMAINS)[number];

export interface Project {
  /** Unique, stable, url-safe id (kebab-case). Used as the React key. */
  id: string;
  /** Project name shown as the card title. */
  title: string;
  /** One-line description of what the project does, shown as the badge. */
  category: string;
  /** Filter bucket — must be one of PROJECT_DOMAINS. */
  domain: ProjectDomain;
  /** Comma-separated tech stack, shown on the card. */
  tools: string;
  /** Path under /public, e.g. "/images/my_project.webp". */
  image: string;
  /** External link (GitHub repo, live demo, etc.). */
  link: string;
  /** Optional: pin to the front of the list / highlight as "Latest". */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fifa-worldcup-2026-predictor",
    title: "FIFA World Cup 2026 Predictor",
    category: "Real-Time Match Prediction & Analytics System",
    domain: "Sports Analytics",
    tools: "Elo Engine, Poisson GLM, XGBoost, SQLite, Streamlit, Power BI",
    image: "/images/fifa_worldcup_2026_predictor.webp",
    link: "https://github.com/Omyash19",
    featured: true,
  },
  {
    id: "meet-ai",
    title: "MEET.AI",
    category: "Intelligent Video Communication Platform",
    domain: "Full-Stack Apps",
    tools: "Python, ML, NLP, Real-Time Processing",
    image: "/images/meetai.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "european-football-club-analytics",
    title: "European Football Club Analytics",
    category: "BI Dashboard for Transfer Market Valuation",
    domain: "Sports Analytics",
    tools: "Python, PostgreSQL (Neon.tech), Power BI",
    image: "/images/football_bi.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "fifa-player-statistics-analysis",
    title: "FIFA Player Statistics Analysis",
    category: "Scouting & Player Similarity Engine",
    domain: "Sports Analytics",
    tools: "K-Means Clustering, PCA, Pearson Correlation, Scikit-learn",
    image: "/images/fifa_player_statistics_analysis.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "marketsense",
    title: "MarketSense",
    category: "Global Tech Job Intelligence Terminal",
    domain: "Data Engineering",
    tools: "Python, Streamlit, SQLAlchemy, GitHub Actions ETL",
    image: "/images/marketsense.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "hybrid-music-recommender",
    title: "Hybrid Music Recommender (ECHOES)",
    category: "Content-Based Recommendation Engine",
    domain: "Full-Stack Apps",
    tools: "FastAPI, Scikit-learn, Spotify API, Cosine Similarity",
    image: "/images/music_recommender.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "job-market-intelligence-pipeline",
    title: "Job Market Intelligence Pipeline",
    category: "Cloud-Native ETL Automation",
    domain: "Data Engineering",
    tools: "Apache Airflow, AWS (S3, RDS), Streamlit",
    image: "/images/job_market_pipeline.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "data-quality-anomaly-monitor",
    title: "Data Quality & Anomaly Monitor",
    category: "Automated Pipeline Validation",
    domain: "Data Engineering",
    tools: "Great Expectations, Snowflake, Slack Webhooks, Airflow",
    image: "/images/data_quality_monitor.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "supply-chain-disruption-predictor",
    title: "Supply Chain Disruption Predictor",
    category: "Maritime Delay Forecasting",
    domain: "Predictive ML",
    tools: "Python, XGBoost, GCP BigQuery, Tableau",
    image: "/images/supply_chain_predictor.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "customer-churn-ltv-engine",
    title: "Customer Churn & LTV Engine",
    category: "Retention Analytics Pipeline",
    domain: "Predictive ML",
    tools: "Python (Lifetimes, RFM), Airflow, Power BI",
    image: "/images/churn_ltv_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "smart-grid-demand-forecaster",
    title: "Smart Grid Demand Forecaster",
    category: "48-Hour Energy Load Forecasting",
    domain: "Predictive ML",
    tools: "Prophet/ARIMA, AWS Lambda, Streamlit",
    image: "/images/smart_grid_forecaster.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "marketing-mix-modeling-optimizer",
    title: "Marketing Mix Modeling Optimizer",
    category: "Incremental ROAS Attribution",
    domain: "Data Engineering",
    tools: "Robyn/LightweightMMM, dbt Core, Looker Studio",
    image: "/images/mmm_optimizer.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "algorithmic-pricing-engine",
    title: "Algorithmic Pricing Engine",
    category: "Dynamic Listing Price Monitor",
    domain: "Full-Stack Apps",
    tools: "BeautifulSoup, MongoDB Atlas, Plotly Dash",
    image: "/images/pricing_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "employee-attrition-analyzer",
    title: "Employee Attrition Analyzer",
    category: "HR Flight-Risk Prediction",
    domain: "Predictive ML",
    tools: "Random Forest, SHAP, Tableau Public",
    image: "/images/attrition_analyzer.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "ab-testing-evaluation-engine",
    title: "A/B Testing Evaluation Engine",
    category: "Self-Serve Statistical Significance Tool",
    domain: "Full-Stack Apps",
    tools: "SciPy, Statsmodels, Streamlit, PostgreSQL",
    image: "/images/ab_testing_engine.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "crop-yield-forecaster",
    title: "Crop Yield Forecaster",
    category: "Precision Agriculture Spatial Analytics",
    domain: "Predictive ML",
    tools: "GeoPandas, TensorFlow, PostGIS, Kepler.gl",
    image: "/images/crop_yield_forecaster.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "india-post-pincode-verification",
    title: "India Post Pincode Verification",
    category: "Fuzzy-Matching Mail Sorting System",
    domain: "NLP & Text",
    tools: "Python, Machine Learning, NLP, Fuzzy Matching",
    image: "/images/pincode_verification.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "hospital-readmission-risk-modeler",
    title: "Hospital Readmission Risk Modeler",
    category: "Clinical ML Classification System",
    domain: "Predictive ML",
    tools: "Scikit-learn, SHAP, FastAPI, MIMIC-III Dataset",
    image: "/images/hospital_readmission.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "covid-19-trend-analysis",
    title: "COVID-19 Trend Analysis",
    category: "Infection & Recovery Velocity Modeling",
    domain: "Predictive ML",
    tools: "Logistic Regression, Log Scaling, Rolling Averages",
    image: "/images/covid_trend_analysis.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "restaurant-revenue-prediction",
    title: "Restaurant Revenue Prediction",
    category: "Supervised Regression for Site Selection",
    domain: "Predictive ML",
    tools: "Random Forest, XGBoost, Multiple Linear Regression",
    image: "/images/restaurant_revenue_prediction.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "song-lyrics-genre-classification",
    title: "Song Lyrics Genre Classification",
    category: "Linguistic Genre Categorization",
    domain: "NLP & Text",
    tools: "TF-IDF, Multinomial Naive Bayes, Linear SVM",
    image: "/images/song_lyrics_genre_classification.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "twitter-hate-speech-detection",
    title: "Twitter Hate Speech Detection",
    category: "Real-Time Toxic Content Flagging",
    domain: "NLP & Text",
    tools: "Logistic Regression (L2), Word2Vec/GloVe, N-grams",
    image: "/images/twitter_hate_speech_detection.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "cryptocurrency-price-trend-analysis",
    title: "Cryptocurrency Price Trend Analysis",
    category: "Volatility & Momentum Signal Modeling",
    domain: "Predictive ML",
    tools: "ARIMA, Exponential Smoothing, RSI",
    image: "/images/cryptocurrency_price_trend_analysis.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Real-Time Transaction Anomaly Scoring",
    domain: "Predictive ML",
    tools: "SMOTE, Isolation Forests, Balanced Random Forests",
    image: "/images/credit_card_fraud_detection.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "amazon-review-sentiment-analysis",
    title: "Amazon Review Sentiment Analysis",
    category: "Customer Feedback Opinion Mining",
    domain: "NLP & Text",
    tools: "VADER, Support Vector Classifier, Bag-of-Words",
    image: "/images/amazon_review_sentiment_analysis.webp",
    link: "https://github.com/Omyash19",
  },
  {
    id: "uber-ride-analytics-dashboard",
    title: "Uber Ride Analytics Dashboard",
    category: "End-to-End BI for Bookings, Revenue & Fleet Ops",
    domain: "Data Engineering",
    tools: "Power BI, DAX, Data Modeling, Power Query",
    image: "/images/uber_ride_analytics_dashboard.webp",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMWM3NDhiOWItNWZhNi00ODc2LTg1MjQtYmM2Y2Y5ODM1MTJkIiwidCI6ImY5YTQzODQwLWY3OGUtNDE3Yy05ZDgwLTg5NTJhMmJhN2Y0YiJ9",
  },
  {
    id: "air-quality-forecasting",
    title: "Air Quality Forecasting",
    category: "Urban Pollution Spike Prediction",
    domain: "Predictive ML",
    tools: "Vector Autoregression, Random Forest, MAPE",
    image: "/images/air_quality_forecasting.webp",
    link: "https://github.com/Omyash19",
  },
];
