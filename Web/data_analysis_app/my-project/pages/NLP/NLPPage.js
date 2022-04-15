import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../../components/TailwindStyles";
import Navigation from "../share/Navigation";
import react, { useState, useEffect } from "react";
import RechartsCard from "../share/RechartsCard";
import { BarChart, Bar } from "recharts";
import PageCard from "../share/PageCard";
// import data from "/ML/istm_train.json";
export default function NLPPage() {
  const SAContent = [
    {
      imgPath: "/graph_1/truckers_prediction_count.png",
      title:
        "The Percentage of Conspiracy Theory among COVID-19 Tweets by Date",
      description:
        "There are obvious increases in the percentage of conspiracy related tweets on January 22nd, 2022, February 16th, 2022, February, 26th, 2022 and March 2nd, 2022. The probable events causing the increase are first, the U.S. Department of Homeland Security required all non-U.S. individuals to be fully vaccinated against covid-19 to enter the country on January 22nd, second a FDA Advisory Committee Meeting was held on February 15th to discuss the request for authorization of  covid-19 vaccine for children aged through  6 months to 4 years, third would be related to the Russia-Ukraine war, while the last might be the joint action of  the Russia-Ukraine war and the US truckers' protesting activities.",
    },
    {
      imgPath: "/graph_1/truckers_prediction_percentage.png",
      title:
        "The Percentage of Conspiracy Theory among Truckers Protests Tweets by Date",
      description:
        "As a whole, the percentage of conspiracy related tweets had a significant growth on January 30th, 2022 and March 3rd, 2022. Compared with the scale of the protests in the previous days, the tensions rose a lot on January 30th, 2022 as the convoy of protesters even disrupted the traffic and services of one of the US-Canada border's busiest ports. Also, the US truckers' protesting activities attracted more attention on March 3rd, 2022 when they were about to arrive in Washington. However, the public concerns decreased dramatically after the protesting U.S. truckers said that they would not cause inconveniences to the society like what the Canadian truckers did, so the percentage of conspiracy related tweets also decreased  correspondingly.  ",
    },
  ];
  function reassembleLstm(LstmData) {
    let modified = [];
    let temp = Object.values(LstmData);
    for (let index = 0; index < temp[0].length; index++) {
      let loss = temp[0][index].toFixed(3);
      let trainingAccuracy = temp[1][index].toFixed(3);
      let validationLoss = temp[2][index].toFixed(3);
      let validationAccuracy = temp[3][index].toFixed(3);
      let singleModified = {
        "Training Loss": loss,
        "Training Accuracy": trainingAccuracy,
        "Validation Loss": validationLoss,
        "Validation Accuracy": validationAccuracy,
        epoch: "Epoch " + (index + 1),
      };
      modified.push(singleModified);
    }
    return modified;
  }
  function reassembleBert(BertData) {
    let modified = [];
    let temp = Object.values(BertData);
    for (let index = 0; index < temp[0].length; index++) {
      let loss = temp[1][index].toFixed(3);
      let accuracy = temp[2][index].toFixed(3);
      let precision = temp[3][index].toFixed(3);
      let recall = temp[4][index].toFixed(3);
      let fOneScore = temp[5][index].toFixed(3);
      let testLoss = temp[6][index].toFixed(3);
      let testAccuracy = temp[7][index].toFixed(3);
      let testPrecision = temp[8][index].toFixed(3);
      let testRecall = temp[9][index].toFixed(3);
      let testFOneScore = temp[10][index].toFixed(3);
      let singleModified = {
        "Training Loss": loss,
        "Training Accuracy": accuracy,
        "Training Precision": precision,
        "Training Recall": recall,
        "Training F-1 Score": fOneScore,
        "Testing Loss": testLoss,
        "Testing Accuracy": testAccuracy,
        "Testing Precision": testPrecision,
        "Testing Recall": testRecall,
        "Testing F-1 Score": testFOneScore,
        epoch: "Epoch " + (index + 1),
      };
      modified.push(singleModified);
    }
    return modified;
  }
  // function mergeBert(train, test) {
  //   let result = [];
  //   console.log(typeof train);
  // }
  const [LstmData, setLstmData] = useState([]);
  const [BertData, setBertData] = useState([]);
  const getLstmData = () => {
    fetch("/ML/istm_train.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setLstmData(reassembleLstm(data));
      });
  };

  const getBertData = () => {
    fetch("/ML/bert.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setBertData(reassembleBert(data));
      });
  };
  useEffect(() => {
    getLstmData();
    getBertData();
  }, []);

  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <Navigation />
      <div className={TailwindStyles.pageGrid}>
        <RechartsCard
          data={BertData}
          keyOne={"Training Loss"}
          keyTwo={"Testing Loss"}
          title={"Bert Training Loss vs Testing Loss"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0, 0.02]}
          reverseArea={false}
        />
        <RechartsCard
          data={BertData}
          keyOne={"Training Accuracy"}
          keyTwo={"Testing Accuracy"}
          title={"Bert Training Accuracy vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0.7, 1]}
          reverseArea={false}
        />
        <RechartsCard
          data={LstmData}
          keyOne={"Validation Accuracy"}
          keyTwo={"Training Accuracy"}
          title={"LSTM Training Accuracy vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0.5, 1]}
          reverseArea={true}
        />
        <RechartsCard
          data={LstmData}
          keyOne={"Training Loss"}
          keyTwo={"Validation Loss"}
          title={"LSTM Training Loss vs Testing Loss"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0.25, 0.75]}
          reverseArea={true}
        />
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
