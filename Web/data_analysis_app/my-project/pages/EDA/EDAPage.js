import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../../components/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
import EDAPageCard from "../share/EDAPageCard";
export default function EDAPage() {
  const EDAContent = [
    {
      imgPathOne: "/graph_1/label0wordcloud.png",
      imgPathTwo: "/graph_1/label1wordcloud.png",
      title: "Most Frequent Keywords in Tweets",
      description:
        "According to this figure, people who published conspiracy  relevant tweets are more likely to use the nouns referring to specific topics like “covid”, “vaccine” and “lab”, while on the contrast people who posted conspiracy irrelevant tweets preferred to use verbs including 'like', 'think' and 'know'.",
    },
    {
      imgPathOne: "/graph_1/label0bar.png",
      imgPathTwo: "/graph_1/label1bar.png",
      title: "Top 50 Most Frequent Tokens(Word) for Conspiracy data",
      description: "Our observation is also confirmed from this figure",
    },
  ];

  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <Navigation />

      <div className={TailwindStyles.EDAPageGrid}>
        {EDAContent.map((card) => {
          return (
            <div>
              {/* <div className="bg-blue-100 mt-4"> Hi </div> */}
              <EDAPageCard
                imgPathOne={card.imgPathOne}
                imgPathTwo={card.imgPathTwo}
                title={card.title}
                description={card.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
