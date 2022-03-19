import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const allProject = [
    {
      name: "Youtube clone",
      src: "./youtube.jpg",
      type: "desktop",
      link: "https://youtube-clone-liart.vercel.app",
      explain: `A basic simple of a popular and most visited website`,
    },
    {
      name: "messenger clone",
      src: "./messenger.jpg",
      type: "web",
      link: "https://chat-messenger-psi.vercel.app/chats",
      explain:
        "it is also a basic simple of messenger you can send and recive messeges.",
    },
    {
      name: "Telegram clone",
      src: "./telegram.png",
      type: "web",

      explain: `Coming soon...`,
    },
    {
      name: "Lichess clone",
      src: "./lichess.png",
      type: "web",
      explain: `Under work...`,
    },
  ];

  useEffect(() => {
    setProjects(allProject);
  }, []);

  const onClickTab = (type) => {
    const temp = allProject;
    console.log(type, temp);
    let result = "";
    if (type === "") result = temp;
    else {
      result = temp.filter((e) => e.type == type);
    }
    if (result.length === 0) {
      console.log("result: ", result);
      setProjects(<div>there is no project</div>);
    }
    setProjects(result);
  };

  return (
    <section className="container-fluid portfolio py-5">
      <div className="my-5 text-center">
        <div>
          <h1>My portfolio</h1>
          <p className="my-4 text-secondary">
            Most recent projects I have completed
          </p>
        </div>
        <div className="row justify-content-center">
          <ul className="nav nav-pills nav-fill col-lg-4 col-md-7 col-sm-9 col-11">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                onClick={() => onClickTab("")}
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onClickTab("web")}>
                Web pages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                onClick={() => onClickTab("desktop")}
              >
                Desktop app
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                onClick={() => onClickTab("desktop")}
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Moblie app
              </a>
            </li>
          </ul>
        </div>
        <div className="py-3">
          <div className="row justify-content-center mx-sm-0 mx-2">
            {projects.map((e) => (
              <article
                key={e.name}
                className="card col-lg-3 col-md-5 col-sm-5  m-lg-3 mx-md-3 m-sm-3 m-1 mb-sm-2 mb-3 "
              >
                <div className="cardImg">
                  <img
                    src={e.src}
                    className="card-img-top rounded align-self-center "
                    alt={e.name}
                  ></img>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.explain}</p>
                  <a
                    href={e["link"]}
                    target="_blank"
                    className="btn btnS btnS3 btn-info"
                  >
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
