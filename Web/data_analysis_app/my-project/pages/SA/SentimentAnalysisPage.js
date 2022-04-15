import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../../components/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
export default function SAPage() {
  const SAContent = [
    {
      imgPath: "/graph_1/vader_flair_2.png",
      title: "Percentage Differences between Sentiment Labels: Vader vs Flair",
      description:
        "We found that Vader classified most of the data as 0, overall, the sentiment scores are more evenly distributed compared with Flair. ",
    },
    {
      imgPath: "/graph_1/vader_flair_1.png",
      title: "Distribution of Sentiment Scores: Vader vs Flair",
      description:
        "Flair not only computed more ‘negative’ labels but also more polarized scores. The lack of 0 rounded scores in Flair is because Flair was trained mainly on extreme reviews in order to avoid the middle reviews, having much variability in people’s sentiments, which contain too few useful contents for the learning of models.",
    },
    {
      imgPath: "/graph_1/negative_hashtags.png",
      title: "Top 10 Negative Sentiment Twitter Hashtags",
      description:
        "#fakevirtuesignalers, #covidvaccineispoison, #cdcfraud, #covideugenicgenocide, #trumpcovidgenocide, #beijingvirus, #chinavirus, #depopulationagenda, #depopulation, #pfizergate are ten hashtags that contain the most negative sentiment tweets. It is obvious that most of those hashtags are associated with the covid-19, which is inseparable from the inconvenience and losses caused by the pandemic.",
    },

    {
      imgPath: "/graph_1/average&std.png",
      title: "Daily Sentiment Scores Mean and Standard Deviation ",
      description:
        "It is obvious to see from this graph that basically all the sentiment scores’ average are minus numbers, but in the meantime the standard sentiment scores indicate that the variation of the mean scores is not apparent crossing timeline. We also can’t find a clear pattern of the average sentiment score over time.",
    },
    {
      imgPath: "/graph_1/calender.png",
      title: "Calendar heat map for Mean Sentiments Scores",
      description:
        "The dates with the darkest colorings presented in Fig7 are January 26th, 2022  and March 10th, 2022, which means that these days had the most negative tweets posted on average. Additionally, the negative sentiment tweets are less common on Saturday as the colors are  relatively lighter compared to other weekdays.",
    },
    {
      imgPath: "/graph_1/dependence.png",
      title: "Conspiracy Breakdown per Sentiment ",
      description:
        "We noticed that conspiracy related tweets are more likely to be posted with a negative attitude than those conspiracy irrelevant tweets, however, the dependence between the two variables may still not be directly eyeballed only based on this figure. While the result in the Chi-squared test fills the vacancy. The null hypothesis in our test is that sentiment and conspiracy theory are independent, however, the p-value of the test is equal to 0.00000000003 means that we do not reject the null hypothesis at 95% level of confidence  so that the sentiment and conspiracy theory are dependent.",
    },
  ];

  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <Navigation />
      <div className={TailwindStyles.pageGrid}>
        {SAContent.map((card) => {
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
