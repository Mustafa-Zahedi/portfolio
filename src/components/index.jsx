import React from "react";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <section className="container my-5 py-5">
      <div className="completePage d-flex align-items-center row">
        <div className="justify-content-center col-4">
          <h1>Hey, I'm Mustapha</h1>
          <h2 className="text-secondary">Programmer & Web Developer</h2>
          <button className="btn btn-outline-info mt-5 mx-3">
            <Icon icon="akar-icons:cloud-download" /> Download CV
          </button>
          <button className="btn btn-outline-info mt-5">portfolio</button>
        </div>
        <div className="col-7">
          <img
            className="img-fluid rounded"
            src="./Baunfire-ContentMag-06.jpg"
            alt="web developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
