import React from "react";
import { TailwindStyles } from "../../components/TailwindStyles";
import Image from "next/image";
function PageCard(props) {
  return (
    <div className={TailwindStyles.pageCard}>
      <Image
        className="w-full h-5/6"
        src={props.imgPath}
        alt="Graph Picture"
        width={700}
        height={400}
      />
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
export default PageCard;
