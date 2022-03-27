import React from "react";
import { Icon } from "@iconify/react";

const Index = () => {
  const goToPortfolio = () => {
    const portfolio = document.querySelector(".portfolio");
    portfolio.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container d-flex min-vh-100 align-items-center">
      <div className="my-5">
        <div className="d-flex row justify-content-center">
          <div className="col-lg-5 col-md-12 mb-5">
            <h1>Hey, I'm Mostapha</h1>
            <h2 className="text-secondary">Programmer & Web Developer</h2>
            <a
              className="btn btn-outline-info mt-5 mx-3"
              download
              href="/Profile.pdf"
            >
              <Icon icon="akar-icons:cloud-download" /> Download CV
            </a>
            <button
              className="btn btn-outline-info mt-5"
              onClick={goToPortfolio}
            >
              portfolio
            </button>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              className="img-fluid rounded"
              src="./Baunfire-ContentMag-06.jpg"
              alt="web developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
