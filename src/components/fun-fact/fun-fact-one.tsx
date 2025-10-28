import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";

const counter_data = [
  {
    id: 1,
    title: "PROJECTS COMPLETED",
    count: 210,
    text: "+",
  },
  {
    id: 2,
    title: "YEARS OF BUILDING",
    count: 17,
    text: "+",
  },
  {
    id: 3,
    title: "TEAM MEMBERS",
    count: 15,
    text: "+",
  },
  {
    id: 4,
    title: "GROWING AGENCY",
    count: 200,
    text: "%",
  },
];
export default function FunFactOne() {
  return (
    <div className="ab-funfact-area pr-60 pl-60 pb-40  mb-80">
      <div className="container container-1480">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box text-center text-xl-start">
              <span className="ab-inner-subtitle mb-25 d-flex align-items-center justify-content-center justify-content-xl-start">
                <Leaf />
                Fun Facts
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                Agency <br /> Snapshots
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row g-4">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item">
                      <span className="counter-number">
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p className="counter-title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
