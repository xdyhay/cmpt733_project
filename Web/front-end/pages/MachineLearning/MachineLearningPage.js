import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../share/TailwindStyles";
import Navigation from "../share/Navigation";
import react, { useState, useEffect } from "react";
import RechartsCard from "../share/RechartsCard";
// import data from "/ML/istm_train.json";
export default function MachineLearningPage() {
  // const MLContent = [
  //   {
  //     imgPath: "/SA/conspiracy_calendar.png",
  //     title: "Conspiracy Data Calendar View",
  //     description: "this is descrpition",
  //   },
  // ];
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
  const [LstmData, setLstmData] = useState([]);
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
  useEffect(() => {
    getLstmData();
  }, []);

  return (
    <div className={TailwindStyles.backgroundDiv}>
      <PageMeta />
      <Navigation />
      <div className={TailwindStyles.pageGrid}>
        <RechartsCard
          data={LstmData}
          keyOne={"Validation Accuracy"}
          keyTwo={"Training Loss"}
          title={"LSTM Training Loss vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0, 1]}
          reverseArea={false}
        />
        <RechartsCard
          data={LstmData}
          keyOne={"Validation Accuracy"}
          keyTwo={"Training Accuracy"}
          title={"LSTM Training Loss vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0.5, 1]}
          reverseArea={true}
        />
      </div>
    </div>
  );
}
