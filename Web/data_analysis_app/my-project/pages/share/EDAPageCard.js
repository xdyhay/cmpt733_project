import React from "react";
import { TailwindStyles } from "../../components/TailwindStyles";
import Image from "next/image";
function EDAPageCard(props) {
  return (
    <div className={TailwindStyles.EDApageCard}>
      <div className="flex pb-4">
        <Image
          className="w-1/2 h-5/6"
          src={props.imgPathOne}
          alt="Graph Picture"
          width={700}
          height={400}
        />
        <Image
          className="w-1/2 h-5/6"
          src={props.imgPathTwo}
          alt="Graph Picture"
          width={700}
          height={400}
        />
      </div>
      {/* <img className="w-full h-5/6" src={props.imgPath} alt="Graph Picture" /> */}
      <div className="px-6 py-4">
        <div className={TailwindStyles.pageCardTitle}>{props.title}</div>
        <p className={TailwindStyles.pageCardDescription}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default EDAPageCard;
