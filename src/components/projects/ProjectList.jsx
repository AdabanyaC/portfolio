import React from "react";
import ProjectListCard from "./ProjectListCard";
import Project1 from "./../../assets/1.png";
import Project2 from "./../../assets/2.png";
import Project3 from "./../../assets/3.png";
import Project4 from "./../../assets/4.png";
import Project5 from "./../../assets/5.png";
import Project6 from "./../../assets/6.png";
import Project7 from "./../../assets/7.png";
import Project8 from "./../../assets/8.png";
import Project10 from "./../../assets/10.png";
import Project11 from "./../../assets/11.png";
import Project12 from "./../../assets/12.png";
import Project13 from "./../../assets/13.png";
import Project14 from "./../../assets/14.png";

const ProjectList = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <div className="projects-container">
        <ProjectListCard
          url={"https://lyriks-app.vercel.app"}
          imgSrc={Project14}
          altText="A spotify clone built with React, TailwindCSS and Redux."
        />
        <ProjectListCard
          url={"https://niministries.org"}
          imgSrc={Project11}
          altText="A web application built for Nelson Iheagwam Ministries."
        />
        <ProjectListCard
          url={"https://the360believer.vercel.app/"}
          imgSrc={Project12}
          altText="My personal podcast, blog and store website."
        />
        <ProjectListCard
          url={"https://starwars-app-clinton.vercel.app/"}
          imgSrc={Project13}
          altText="A landing page that demonstrates different functionalities on the Starwars API"
        />
        <ProjectListCard
          url={"https://earthquake-data.vercel.app/"}
          imgSrc={Project10}
          altText="A landing page that tells you the location of earthquakes in the last 24 hours from an API by the USGS"
        />
        <ProjectListCard
          url={"https://travel-website-opal.vercel.app/"}
          imgSrc={Project2}
          altText="Travel Website built as a capstone project for my academy"
        />
        <ProjectListCard
          url={"https://datawarehouse-chi.vercel.app/"}
          imgSrc={Project1}
          altText="Datawarehouse Project built as a capstone project for my academy."
        />
        <ProjectListCard
          url={"https://plotter-wait-list.vercel.app/"}
          imgSrc={Project3}
          altText="Plotter | Be your own accountant"
        />
        <ProjectListCard
          url={"https://gravelhomes.ng/"}
          imgSrc={Project4}
          altText="Gravel Homes Limited"
        />
        <ProjectListCard
          url={"https://www.getstarted.com.ng/"}
          imgSrc={Project5}
          altText="Getstarted in Tech - Frontend, Backend and Product Design."
        />
        <ProjectListCard
          url={"https://cuevangelismteam.herokuapp.com/"}
          imgSrc={Project6}
          altText="Covenant University Evangelism Team"
        />
        <ProjectListCard
          url={"http://healarheath.herokuapp.com/"}
          imgSrc={Project7}
          altText="Healar Health | My final year project landing page."
        />
        <ProjectListCard
          url={"https://pig-game-gamma.vercel.app/"}
          imgSrc={Project8}
          altText="Pig Game | An exercise by Jonas Schmedtmann in his JS course"
        />
      </div>
    </div>
  );
};

export default ProjectList;
