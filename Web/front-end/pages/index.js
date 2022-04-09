import PageMeta from "./share/PageMeta";
import styles from "../styles/Home.module.css";
import HomePageCard from "./share/HomePageCard";
import { TailwindStyles } from "./share/TailwindStyles";

export default function Home() {
  const homeCardContent = [
    {
      comp_href: "/EDA/EDAPage",
      title: "EDA",
      description: "Exploratory analysis of our project data",
    },
    {
      comp_href: "/SA/SentimentAnalysisPage",
      title: "Sentiment Analysis",
      description: "Sentiment insights about our data",
    },
    {
      comp_href: "/MachineLearning/MachineLearningPage",
      title: "Model",
      description: "Learn more about the models we used",
    },
  ];
  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <main className={styles.main}>
        <h1 className="text-blue-600 text-6xl">Welcome to our project!</h1>
        <p className="text-slate-600 hover:text-sky-400">
          Here is the structure of our project
        </p>
        <div className={styles.grid}>
          {homeCardContent.map((card) => {
            // Return the element. Also pass key
            return (
              <HomePageCard
                comp_href={card.comp_href}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </main>
      <hr></hr>
      <footer className={styles.footer}>
        <a
          href="https://github.com/xdyhayden/cmpt733_project"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400"
        >
          Website created by 733 Data Sister Group, Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
