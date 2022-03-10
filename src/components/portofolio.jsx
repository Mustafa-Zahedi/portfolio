import React, { useState } from "react";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Netflix",
      src: "./logo192.png",
      explain: ` Some quick example text to build on the card title and make upthe bulk of the card's content.`,
    },
    {
      name: "Google",
      src: "./logo192.png",
      explain: ` Some quick example text to build on the card title and make upthe bulk of the card's content.`,
    },
    {
      name: "Amazon",
      src: "./logo192.png",
      explain: ` Some quick example text to build on the card title and make upthe bulk of the card's content.`,
    },
  ]);

  console.log(projects);
  return (
    <section className="container-fluid-lg container-fluid-md container-fluid-sm completePage portfolio my-5">
      <div className="my-5 px-2 text-center">
        <div>
          <h1>My portfolio</h1>
          <p className="my-4 text-secondary">
            Most recent projects I have completed
          </p>
        </div>
        <ul className="list-group list-group-horizontal justify-content-center">
          <a className="btn list-group-item active">All</a>
          <a className="btn list-group-item">Web Pages</a>
          <a className="btn list-group-item">Desktop Apps</a>
          <a className="btn list-group-item">Andriod Apps</a>
        </ul>
        <div className="my-5">
          <div className="row justify-content-center mx-sm-0 mx-2">
            {projects.map((e) => (
              <article
                key={e.name}
                className="card col-lg-3 col-md-5 col-sm-5  m-lg-3 m-md-3 m-sm-3 m-1 mb-sm-2 mb-3 "
              >
                <img src={e.src} className="card-img-top" alt={e.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.explain}</p>
                  <a href="#" className="btn btnS btnS3 btn-info">
                    Go to page
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <button className="btn btnS1 btn-info"> load more</button>
    </section>
  );
};

export default Portfolio;
