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
    <section className="container completePage">
      <div className="my-5 text-center">
        <div>
          <h1>My portfolio</h1>
          <p className="my-4 text-secondary">
            Most recent projects I have completed
          </p>
        </div>
        <ul className="list-group list-group-horizontal justify-content-center">
          <li className="list-group-item active">All</li>
          <li className="list-group-item">web pages</li>
          <li className="list-group-item">desktop</li>
          <li className="list-group-item">mobile</li>
        </ul>
        <div className="juctify-content-center">
          <div className="my-5 text-center row">
            {projects.map((e) => (
              <article key={e.name} className="col-3 card m-4">
                <img src={e.src} className="card-img-top" alt={e.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.explain}</p>
                  <a href="#" className="btn btn-info">
                    Open website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <button className="btn btn-info"> load more</button>
    </section>
  );
};

export default Portfolio;
