import React from "react";
import useAbout from "./../../hooks/useAbout";
import SingleDoctor from "./SingleDoctor/SingleDoctor";

const About = () => {
  const { about } = useAbout();
  return (
    <div className="container">
      <section className="team-section text-center" style={{ marginTop: "7%" }}>
        <h2 className="h1-responsive font-weight-bold my-5">About Us</h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <div className="row p-4 g-4">
          {about.map((abt) => (
            <SingleDoctor key={abt.id} doctor={abt}></SingleDoctor>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
