import PageMeta from "../share/PageMeta";
import { TailwindStyles } from "../share/TailwindStyles";
import Navigation from "../share/Navigation";
import react, { useState, useEffect } from "react";
import RechartsCard from "../share/RechartsCard";
import { BarChart, Bar } from "recharts";
// import data from "/ML/istm_train.json";
export default function MachineLearningPage() {
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
          title={"Bert Training Loss vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0, 0.02]}
          reverseArea={false}
        />
        <RechartsCard
          data={BertData}
          keyOne={"Testing Loss"}
          keyTwo={"Testing Accuracy"}
          title={"Bert Testing Loss vs Testing Accuracy"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0, 0.02]}
          reverseArea={false}
        />
        <RechartsCard
          data={BertData}
          keyOne={"Training F-1 Score"}
          keyTwo={"Testing F-1 Score"}
          title={"Bert Training F-1 Score vs Testing F-1 Score"}
          xAxisKey={"epoch"}
          description={"Debug Message"}
          yAxisDomain={[0.65, 1]}
          reverseArea={false}
        />
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
      </div>
    </div>
  );
}
