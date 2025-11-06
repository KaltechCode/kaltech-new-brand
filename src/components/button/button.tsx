"use client";
import Link from "next/link";
import { UpArrow } from "../svg";

const PrimaryBtn = ({
  label,
  label2,
  url,
  justifyContent,
  style,
}: {
  label: String;
  label2: String;
  url: String;
  justifyContent: String;
  style?: boolean;
}) => {
  return (
    <div
      className={`tp-projct-5-2-btn-box d-flex justify-content-${justifyContent}`}
      // style={{ background: "red" }}
    >
      <div className="tp-hover-btn-wrapper p-relative">
        <Link
          className={`tp-btn-circle tp-hover-btn-item tp-hover-btn ${
            style ? "style-2 custom-text" : ""
          }`}
          href={`${url}`}
        >
          <span className="tp-btn-circle-text">
            {label} <br /> {label2}
          </span>
          <span className="tp-btn-circle-icon">
            <UpArrow />
          </span>
          <i className="tp-btn-circle-dot"></i>
        </Link>
      </div>
    </div>
  );
};

export const SecondaryBtn = ({
  label,
  handler,
}: {
  label: String;
  handler: () => void;
}) => {
  return (
    <button
      className="tp-btn-secondary-btn tp-hover-btn-item tp-hover-btn"
      onClick={handler}
    >
      <span className="">
        {label} <br />
      </span>
      <i className="tp-btn-circle-dot"></i>
    </button>
  );
};

export const SecondaryCircleBtn = ({
  label,
  label2,
  url,
  style,
  justifyContent,
}: {
  label: String;
  label2: String;
  url: String;
  justifyContent: String;
  style?: boolean;
}) => {
  return (
    <div className="" style={{ width: "100%" }}>
      <div
        className={`tp-btn-secondary-container justify-content-${justifyContent}`}
      >
        <Link
          className={`tp-btn-secondary-circle 
 tp-hover-btn-item tp-hover-btn ${style ? "style-2 custom-text" : ""}`}
          href={`${url}`}
        >
          <span className="tp-btn-circle-text">
            {label} <br /> {label2}
          </span>
          <span className="tp-btn-circle-icon">
            <UpArrow />
          </span>
          <i className="tp-btn-circle-dot"></i>
        </Link>
      </div>
    </div>
  );
};

export default PrimaryBtn;
