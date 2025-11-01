import Link from "next/link";
import { UpArrow } from "../svg";

export default function ({label, label2,  url} : {label: String, url: String, label2: String}) {
    return <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
    <div className="tp-hover-btn-wrapper">
      <Link
        className="tp-btn-circle tp-hover-btn-item tp-hover-btn style-2"
        href={`/${url}`}
      >
        <span className="tp-btn-circle-text custom-text ">
         {label} <br /> {label2}
        </span>
        <span className="tp-btn-circle-icon custom-arrow">
          <UpArrow />
        </span>
        <i className="tp-btn-circle-dot custom-dot"></i>
      </Link>
    </div>
  </div>
}