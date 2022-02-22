import React from "react";

const Portfolio = () => {
  const state = [{ Netfle: { src: "" } }, { Google: { src: "./logo192" } }];

  console.log(state);
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

        <article className="card m-2">
          <img src="./logo192.png" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Netflix</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Open website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
