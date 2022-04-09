import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../share/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
export default function EDAPage() {
  const EDAContent = [
    {
      imgPath: "/EDA/top_50_most_frequent_tokens.png",
      title: "Top 50 Most Frequent Tokens(Word)",
      description: "this is descrpition",
    },
    {
      imgPath: "/EDA/top10.png",
      title: "Top 10 Negative Sentiment Twitter Hashtags",
      description: "this is descrpition",
    },
    {
      imgPath: "/EDA/wordcloud.png",
      title: "Word Cloud",
      description: "this is descrpition",
    },
  ];

  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <Navigation />
      <div className={TailwindStyles.pageGrid}>
        {EDAContent.map((card) => {
          return (
            <PageCard
              imgPath={card.imgPath}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
}
