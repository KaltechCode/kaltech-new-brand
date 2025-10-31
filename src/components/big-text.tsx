import Link from "next/link";
import React from "react";
import  UpArrow  from "../../public/assets/img/svg/arrow-head.svg";
// import { MdArrowOutward } from "react-icons/md";
const {MdArrowOutward} = require("react-icons/md");

// type 
type IProps = {
  cls?: string;
};

export default function BigText({cls=""}: IProps) {
  return (
    <div className={`sv-big-text-area ${cls}`} >
      <div className="container">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>Want to turn your Digital dreams into reality?
            <br />
            <br />
              <p style={{textTransform: "capitalize"}}>We listen, we care, we deliver. We don&apos;t sell products, <br /> we provide solutions that consistently exceeds your expectation.</p>
          </span>
        
          <span>Kaltech Consultancy</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp-char-animation text-center" style={{letterSpacing: "2px"}}>
            <Link href="/contact" >Get in Touch</Link> 
          </h4>
        </div>
      </div>
    </div>
  );
}
