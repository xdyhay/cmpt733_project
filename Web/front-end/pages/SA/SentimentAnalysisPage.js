import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../share/TailwindStyles";
import Navigation from "../share/Navigation";
import PageCard from "../share/PageCard";
export default function SAPage() {
  const SAContent = [
    {
      imgPath: "/SA/conspiracy_calendar.png",
      title: "Conspiracy Data Calendar View",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/conspiracy_mean&std.png",
      title: "Mean and Standard Deviation of Sentiment Score",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/covid_calendar.png",
      title: "Covid Data Calendar View",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/covid_mean&std.png",
      title: "Covid Data's Mean and Standard Deviation of Sentiment Score",
      description: "this is descrpition",
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
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/truckers_mean&std.png",
      title: "Trucker Data's Mean and Standard Deviation of Sentiment Score",
      description: "this is descrpition",
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
    {
      imgPath: "/SA/distribution.png",
      title: "Distribution of Flair Score and Vader Score",
      description: "this is descrpition",
    },
    {
      imgPath: "/SA/percent.png",
      title: "Percentage Distribution of Flair Score and Vader Score",
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
