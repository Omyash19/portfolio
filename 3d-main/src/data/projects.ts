/**
 * ─────────────────────────────────────────────────────────────────────────
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for the "My Work" section.
 * Work.tsx just reads this array — it never needs to change when you add,
 * remove, or edit a project.
 *
 * HOW TO ADD A NEW PROJECT
 * 1. Drop a preview image (ideally 1270x848, .webp) into `public/images/`.
 * 2. Copy one of the objects below and fill in your details.
 * 3. Pick an existing `domain` from PROJECT_DOMAINS (or add a new string to
 *    that array — it becomes a new filter chip automatically).
 * 4. Set `featured: true` on at most one project to spotlight it at the top.
 * 5. Save. The grid, filters, search, and counters all update on their own.
 *
 * NOTE ON LINKS: `link` is the exact repo/demo URL for that project. All 12
 * projects below now point to their real destination (GitHub repo, live
 * Streamlit/Render app, or Power BI report).
 * ─────────────────────────────────────────────────────────────────────────
 */

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
  /** One-line description of what the project does. */
  category: string;
  /** Filter bucket — must be one of PROJECT_DOMAINS. */
  domain: ProjectDomain;
  /** Comma-separated tech stack, shown on the card. */
  tools: string;
  /** Path under /public, e.g. "/images/my_project.webp". */
  image: string;
  /** Real destination: GitHub repo or live report/demo link. */
  link: string;
  /** Set true to spotlight this one project at the top of the section. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "hybrid-music-recommender",
    title: "Hybrid Music Recommender (ECHOES)",
    category: "Content-Based Recommendation Engine",
    domain: "Full-Stack Apps",
    tools: "FastAPI, Scikit-learn, Spotify API, Cosine Similarity",
    image: "/images/music_recommender.webp",
    link: "https://echoes-3egj.onrender.com",
  },
  {
    id: "marketsense",
    title: "MarketSense",
    category: "Global Tech Job Intelligence Terminal",
    domain: "Data Engineering",
    tools: "Python, Streamlit, SQLAlchemy, GitHub Actions ETL",
    image: "/images/marketsense.webp",
    link: "https://om-marketsense.streamlit.app/",
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
    id: "covid-19-trend-analysis",
    title: "COVID-19 Trend Analysis",
    category: "Infection & Recovery Velocity Modeling",
    domain: "Predictive ML",
    tools: "Logistic Regression, Log Scaling, Rolling Averages",
    image: "/images/covid_trend_analysis.webp",
    link: "https://github.com/Omyash19/COVID-19-Trend-Analysis-",
  },
  {
    id: "restaurant-revenue-prediction",
    title: "Restaurant Revenue Prediction",
    category: "Supervised Regression for Site Selection",
    domain: "Predictive ML",
    tools: "Random Forest, XGBoost, Multiple Linear Regression",
    image: "/images/restaurant_revenue_prediction.webp",
    link: "https://github.com/Omyash19/Restaurant-Revenue-Prediction",
  },
  {
    id: "song-lyrics-genre-classification",
    title: "Song Lyrics Genre Classification",
    category: "Linguistic Genre Categorization",
    domain: "NLP & Text",
    tools: "TF-IDF, Multinomial Naive Bayes, Linear SVM",
    image: "/images/song_lyrics_genre_classification.webp",
    link: "https://github.com/Omyash19/Song-Lyrics-Genre-Classification",
  },
  {
    id: "twitter-hate-speech-detection",
    title: "Twitter Hate Speech Detection",
    category: "Real-Time Toxic Content Flagging",
    domain: "NLP & Text",
    tools: "Logistic Regression (L2), Word2Vec/GloVe, N-grams",
    image: "/images/twitter_hate_speech_detection.webp",
    link: "https://github.com/Omyash19/Twitter-Hate-Speech-Detection",
  },
  {
    id: "fifa-player-statistics-analysis",
    title: "FIFA Player Statistics Analysis",
    category: "Scouting & Player Similarity Engine",
    domain: "Sports Analytics",
    tools: "K-Means Clustering, PCA, Pearson Correlation, Scikit-learn",
    image: "/images/fifa_player_statistics_analysis.webp",
    link: "https://github.com/Omyash19/FIFA-Player-Statistics-Analysis",
  },
  {
    id: "cryptocurrency-price-trend-analysis",
    title: "Cryptocurrency Price Trend Analysis",
    category: "Volatility & Momentum Signal Modeling",
    domain: "Predictive ML",
    tools: "ARIMA, Exponential Smoothing, RSI",
    image: "/images/cryptocurrency_price_trend_analysis.webp",
    link: "https://github.com/Omyash19/Cryptocurrency-Price-Trend-Analysis",
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Real-Time Transaction Anomaly Scoring",
    domain: "Predictive ML",
    tools: "SMOTE, Isolation Forests, Balanced Random Forests",
    image: "/images/credit_card_fraud_detection.webp",
    link: "https://github.com/Omyash19/Credit-Card-Fraud-Detection",
  },
  {
    id: "amazon-review-sentiment-analysis",
    title: "Amazon Review Sentiment Analysis",
    category: "Customer Feedback Opinion Mining",
    domain: "NLP & Text",
    tools: "VADER, Support Vector Classifier, Bag-of-Words",
    image: "/images/amazon_review_sentiment_analysis.webp",
    link: "https://github.com/Omyash19/Amazon-Review-Sentiment-Analysis",
  },
  {
    id: "air-quality-forecasting",
    title: "Air Quality Forecasting",
    category: "Urban Pollution Spike Prediction",
    domain: "Predictive ML",
    tools: "Vector Autoregression, Random Forest, MAPE",
    image: "/images/air_quality_forecasting.webp",
    link: "https://github.com/Omyash19/Air-Quality-Forecasting",
  },
];
