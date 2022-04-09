import React from "react";
import { TailwindStyles } from "./TailwindStyles";
function PageCard(props) {
  return (
    <div className={TailwindStyles.pageCard}>
      <img className="w-full h-4/6" src={props.imgPath} alt="Graph Picture" />
      <div className="px-6 py-4">
        <div className={TailwindStyles.pageCardTitle}>{props.title}</div>
        <p className={TailwindStyles.pageCardDescription}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default PageCard;
