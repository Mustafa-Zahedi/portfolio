import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        name: "Netflix",
        src: "./logo192.png",
        explain: ` Some quick example text to build on the card title `,
      },
      {
        name: "Google",
        src: "./logo192.png",
        explain: ` Some quick example text to build on the card title `,
      },
      {
        name: "Amazon",
        src: "./logo192.png",
        explain: ` Some quick example text to build on the card title `,
      },
    ]);
  }, []);

  return (
    <section className="container-fluid-lg container-fluid-md container-fluid-sm completePage portfolio my-5">
      <div className="my-5 px-3 text-center">
        <div>
          <h1>My portfolio</h1>
          <p className="my-4 text-secondary">
            Most recent projects I have completed
          </p>
        </div>
        <div className="row justify-content-center">
          <ul className="nav nav-pills nav-fill col-lg-4 col-md-7 col-sm-9 col-11">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Desktop app
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Moblie app
              </a>
            </li>
          </ul>
        </div>
        <div className="my-3">
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
