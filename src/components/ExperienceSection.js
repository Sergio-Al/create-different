import React from "react";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "../utils/dataSource";

const ExperienceSection = () => {
  return (
    <section id="experience-section-page" className="experience-section">
      <div className="container experience-section-container-cards">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.title} items={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
