import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../../components/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
export default function EDAPage() {
  const EDAContent = [
    {
      imgPath: "/EDA/Top50_tokens.png",
      title: "Top 50 Most Frequent Tokens(Word) for All Data",
      description:
        "The top 50 most frequent tokens from tweet text suggest that COVID and Donald Trump are two important themes in the dataset, given the presence of 'covid', 'trump', 'mask', and 'vaccine'. ",
    },
    {
      imgPath: "/EDA/Top50_tokens_label1.png",
      title: "Top 50 Most Frequent Tokens(Word) for Conspiracy data",
      description:
        "The top 50 most common words in the tweets containing conspiracy theories are highly related to the COVID-19. The words 'covid', 'vaccine', 'lab' and 'virus' take more percentage in those tweets.",
    },
    {
      imgPath: "/EDA/wordcloud.png",
      title: "Word Cloud for All data",
      description:
        "Although containing many common nouns and verbs, the Word Cloud graph also suggests that COVID and Donald Trump are two important themes in the dataset, with the occurrnece of 'covid', 'trump', 'mask', and 'vaccine'. ",
    },
    {
      imgPath: "/EDA/wordcloud_label1.png",
      title: "Word Cloud for Conspiracy data",
      description:
        "The words 'people', 'covid', 'world', 'vaccine' are larger and bolder. Those words are the most popular in conspiracy theories tweets.",
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
