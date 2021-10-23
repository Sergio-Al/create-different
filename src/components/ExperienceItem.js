import React from "react";
import { IconContext } from "react-icons";

const ExperienceItem = ({ items }) => {
  const IconToShow = items.icon;
  return (
    <div className="experience-item-card">
      <IconContext.Provider value={{ color: "white" }}>
        <IconToShow className="experience-item-card-icon" />
      </IconContext.Provider>
      <div>
        <h1 className="experience-item-card-years">{items.years || "2020"}</h1>
        <h1 className="experience-item-card-title">
          {items.title || "Default title"}
        </h1>
        <p className="experience-item-card-body">
          {items.body || "body title"}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
