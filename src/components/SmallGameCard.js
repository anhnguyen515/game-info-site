import React from "react";
import { Link } from "react-router-dom";
import { gotoTop } from "../common/utils";
import placeholderImg from "../images/RAWGR-logo-white.png";

export default function SmallGameCard({ ...props }) {
  return (
    <Link to={`games/${props.slug}`} onClick={gotoTop}>
      <div className="card--small">
        <div
          className="card--small-img"
          style={{
            backgroundImage: `url(${props.img ? props.img : placeholderImg})`,
          }}
        />
        <h5>{props.name}</h5>
      </div>
    </Link>
  );
}
