import React from "react";
import { Icon } from "@iconify/react";

const Abilities = () => {
  return (
    <section className="mt-md-5 mt-5 mb-5 pb-5 min-vh-100 abilitiesFront">
      <div className="container">
        <div className="d-flex align-items-center p-md-4 p-sm-3 p-2 pe-0 row">
          <div className="col-lg-5 col-md-9 col-sm-12 py-sm-5">
            <h2 className="display-4 mb-3 text-start">What I do best</h2>
            <div className="text-start row">
              <div className="col-2 m-md-0 me-3">
                <Icon
                  icon="emojione-v1:page-with-curl"
                  color="green"
                  width="50"
                  height="50"
                />
              </div>
              <div className="col">
                <h5>Creative pages</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eos, veniam voluptas impedit velit aliquid
                  doloribus pariatur error animi sed.
                </p>
              </div>
            </div>
            <div className="text-start row">
              <div className="col-2 m-md-0 me-3">
                <Icon
                  icon="arcticons:fast"
                  width="50"
                  height="50"
                  color="blue"
                />
              </div>
              <div className="col">
                <h5>Dynamic and fast loading pages</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  vel maiores vero quaerat, error atque!
                </p>
              </div>
            </div>
            <div className="text-start row">
              <div className="col-2 m-md-0 me-3">
                <Icon
                  icon="arcticons:secure-box"
                  width="50"
                  height="50"
                  color="red"
                />
              </div>
              <div className="col">
                <h5 className="">Secure and safe system</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit harum ducimus doloribus animi? Voluptatibus voluptate
                  praesentium perferendis ea, harum ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
