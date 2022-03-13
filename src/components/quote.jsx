import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

let index = 2;
let reIndex = 0;
let imgSrc = "./profile.png";
let qName = "Tomas";
function Quote(props) {
  const [quotes, setQuotes] = useState("");
  const q = [
    [
      " Loremnditiis eveniet expedita enim rerum quos cumque nece.",
      "./profile.png",
      "Tom Shelbi",
    ],
    [
      "amet conet consectetur adipisicing rerum quos necessitatibus minus.amet consectetur adipisicing elit",
    ],
    [
      "adip elit. Saepe provident",
      " fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.",
    ],
  ];

  useEffect(() => {
    let a = q[1];
    setQuotes({ a });
  }, []);

  const handleClick = (e) => {
    let temp = [...q];
    if (e === "next" && temp[index]) {
      let a = temp[index][0];
      imgSrc = temp[index][1];
      qName = temp[index][2];
      reIndex = index - 1;
      index++;
      setQuotes({ a });
    }
    if (e === "prev" && temp[reIndex]) {
      let a = temp[reIndex][0];
      imgSrc = temp[reIndex][1];
      qName = temp[reIndex][2];
      index = reIndex + 1;
      reIndex--;
      setQuotes({ a });
    } else if (!temp[reIndex]) {
      index = 0;
      reIndex = q.length - 1;
      e === "prev" ? handleClick("prev") : handleClick("next");
    }
  };

  return (
    <section className="quote min-vh-70">
      <div className="container-lg container-fluid-md py-4">
        <div className="row my-5 pt-5 justify-content-center">
          <div className="row col-md-6 col-sm-12 my-3 py-1 text-start">
            <div className="pQheight">
              <q className="quoteHeight text-muted text-start fs-6">
                <q className="quoteSign">{quotes["a"]}</q> <br />
                <br />
                <q>{q[0][0]}</q>
              </q>
              <footer className="footerHeight">
                <img
                  src={imgSrc}
                  style={{ width: "42px", borderRadius: "100px" }}
                  alt="profile.png"
                />
                <h6>{qName}</h6>
              </footer>
            </div>
            <div className="col-12 align-self-end text-end">
              <div className="">
                <a
                  className="btn btn-outline-info me-1 rounded-pill "
                  onClick={() => handleClick("prev")}
                >
                  <Icon icon="ooui:arrow-previous-ltr" />
                </a>
                <a
                  className="btn btn-outline-info rounded-pill"
                  onClick={() => handleClick("next")}
                >
                  <Icon icon="ooui:arrow-next-ltr" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-10">
            <div>
              <img
                className="img-fluid rounded"
                src="./be-a-Programmer.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
