import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../share/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
export default function SAPage() {
  const SAContent = [
    {
      imgPath: "/SA/percent.png",
      title: "Percentage Distribution of Flair Score and Vader Score",
      description:
        "Vader uses rule-based models, while Flair uses word-embedding-based models. In this graph we can observe that Flair labeled more ‘negative’ sentiment compared with Vader. ",
    },
    {
      imgPath: "/SA/distribution.png",
      title: "Distribution of Flair Score and Vader Score",
      description:
        "We found that Vader classified most of the data as 0 sentiment score, while Flair generated more extreme scores: most of the data were classified as nearly -1 sentiment score with no data was classified as 0.",
    },
    {
      imgPath: "/SA/conspiracy_calendar.png",
      title: "Conspiracy Data Calendar View",
      description:
        "The darkest colorings around January  24th  and February 7th  that these days had more negative sentiment tweets posited across the respective month. The pattern in cell colors across weekdays also shows that negative sentiment tweets are less common on Saturday.",
    },
    {
      imgPath: "/SA/conspiracy_mean&std.png",
      title:
        "Mean and Standard Deviation of Sentiment Score for Conspiracy Data",
      description:
        "However, from the study of mean and standard deviation of all the conspiracy data we cannot find a clear data pattern of the average sentiment score over time with no obvious outliers.",
    },
    {
      imgPath: "/SA/covid_calendar.png",
      title: "Covid Data Calendar View",
      description:
        "The negative tweets are being less commonly observed during March. Notably, when the time comes to Saturday, we can oberserve the mean sentiment scores are also being observed with a lighter color compared to other weekdays in general.",
    },
    {
      imgPath: "/SA/covid_mean&std.png",
      title: "Covid Data's Mean and Standard Deviation of Sentiment Score",
      description:
        "Besides, the average sentiment score of most days is still negative, except some specific dates like February 27th and February 20th has positive mean score. ",
    },
    {
      imgPath: "/SA/covid_result.png",
      title: "Predicted Label for Covid Tweets",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/covid_senti_pred.png",
      title: "Sentiment Analysis for Covid Tweets",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/truckers_calendar.png",
      title: "Trucker Data Calendar View",
      description:
        "During the beginning and ending stage of the event, the contents of tweets tend to be more rational, which means the number of negative and positive tweets is roughly the same. However, in the middle stage of the event, the sentiment tends to be aggressive: obviously more people are commenting with negative attitudes.",
    },
    {
      imgPath: "/SA/truckers_mean&std.png",
      title: "Trucker Data's Mean and Standard Deviation of Sentiment Score",
      description:
        "There is a clearly strong fluctuation of mean sentiment score for truckers’ freedom related hashtags, where February 15th had the worst score of sentiment and March 7th got the highest positive score by contrary. The integral situation of mean sentiment score distribution is approximately identical under different  weekdays besides Wednesday and Sunday, which likely had more negative sentiment tweets.",
    },
    {
      imgPath: "/SA/truckers_result.png",
      title: "Predicted Label for Truckers Movement Tweets",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/truckers_senti_pred.png",
      title: "Sentiment Analysis for Truckers Movement Tweets",
      description: "this is descrpition",
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
