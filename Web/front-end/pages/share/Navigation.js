import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { TailwindStyles } from "./TailwindStyles";
export default function Navigation() {
  const router = useRouter();
  const navigationContents = [
    { position: "start", href: "/", navigationName: "Home Page" },
    { position: "middle", href: "/EDA/EDAPage", navigationName: "EDA" },
    {
      position: "middle",
      href: "/SA/SentimentAnalysisPage",
      navigationName: "Sentiment Analysis",
    },
    {
      position: "end",
      href: "/MachineLearning/MachineLearningPage",
      navigationName: "Machine Learning",
    },
  ];
  function determineNavigationPositionClass(element) {
    switch (element.position) {
      case "start":
        return TailwindStyles.navStart;
      case "middle":
        return TailwindStyles.navMiddle;
      case "end":
        return TailwindStyles.navEnd;
    }
  }
  return (
    <ul className="flex bg-blue-600 py-4">
      {navigationContents.map((element) => {
        return (
          <li
            className={determineNavigationPositionClass(element)}
            key={element.navigationName}
          >
            <a
              className={
                router.pathname === element.href
                  ? TailwindStyles.selectedClass
                  : TailwindStyles.noneSelectedClass
              }
              href={element.href}
            >
              {element.navigationName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
